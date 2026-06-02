alter table public.crm_state enable row level security;

grant usage on schema public to anon;
grant select, insert, update on table public.crm_state to anon;

drop policy if exists crm_state_public_read on public.crm_state;
create policy crm_state_public_read
on public.crm_state
for select
to anon
using (true);

drop policy if exists crm_state_public_write on public.crm_state;
create policy crm_state_public_write
on public.crm_state
for insert
to anon
with check (id = 'main');

drop policy if exists crm_state_public_update on public.crm_state;
create policy crm_state_public_update
on public.crm_state
for update
to anon
using (id = 'main')
with check (id = 'main');
