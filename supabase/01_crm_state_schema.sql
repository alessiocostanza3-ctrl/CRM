create table if not exists public.crm_state (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create or replace function public.crm_state_touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_crm_state_updated_at on public.crm_state;
create trigger trg_crm_state_updated_at
before update on public.crm_state
for each row execute procedure public.crm_state_touch_updated_at();

insert into public.crm_state (id, payload)
values ('main', '{}'::jsonb)
on conflict (id) do nothing;
