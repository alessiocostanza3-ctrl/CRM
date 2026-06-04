# Supabase + GitHub Pages (solo strumenti richiesti)

Questa configurazione usa **solo GitHub Pages + Supabase**.
Il frontend salva e legge direttamente da Supabase (nessun server Node richiesto in produzione).

## 1) SQL schema
Esegui nel SQL editor:
- `supabase/01_crm_state_schema.sql`

## 2) SQL policy demo
Esegui nel SQL editor:
- `supabase/02_crm_state_policies_for_demo.sql`

Queste policy abilitano lettura/scrittura anonima limitata alla riga `id='main'` (adatto a demo, non per produzione pubblica).

## 3) Inserisci credenziali in `index.html`
Nel blocco `window.CRM_REMOTE` imposta:
- `supabaseUrl`
- `supabaseAnonKey`

Path file:
- `index.html`

## 4) Commit + push su GitHub
Pubblica le modifiche. GitHub Pages aggiornerà il sito.

## 5) Seed dati iniziale
Se vuoi ripristinare esattamente i dati attuali del repository:
- apri il CRM online
- premi `Ctrl+F5`
- vai in Impostazioni -> usa "Reset Database Demo" (carica il seed locale)
- attendi 3-5 secondi: il sync frontend invia tutto su Supabase.

## 6) Verifica persistenza
- modifica una quantità in Magazzino
- ricarica pagina
- verifica che il valore resti salvato.
