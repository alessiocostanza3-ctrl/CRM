// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 1. DATI E DATABASE INTEGRATO (MOCK DATA) ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
const prodotti = [
    {
        id: "prod_aura_xs",
        codice: "AURA-XS",
        ean: "8012345678901",
        nome: "Faretto LED Esterno 10W IP67",
        prezzoVendita: 85.00,
        prezzoAcquisto: 22.00,
        categoria: "Prodotti Finiti",
        produttore: "PROD S.r.l.",
        peso: 1.2,
        volume: 0.003,
        descrizioneTecnica: "Faretto LED ad alta efficienza per esterni, corpo in alluminio pressofuso, impermeabilità IP67, finitura standard grigio antracite."
    },
    {
        id: "prod_aura_xl",
        codice: "AURA-XL",
        ean: "8012345678902",
        nome: "Proiettore LED Industriale 50W IP65",
        prezzoVendita: 180.00,
        prezzoAcquisto: 48.00,
        categoria: "Prodotti Finiti",
        produttore: "PROD S.r.l.",
        peso: 3.5,
        volume: 0.012,
        descrizioneTecnica: "Proiettore LED per grandi aree ed illuminazione industriale. Dissipatore passivo avanzato, staffa orientabile inclusa."
    },
    {
        id: "prod_lux_ind",
        codice: "LUX-IND",
        ean: "8012345678903",
        nome: "Lampada Industriale Sospensione 100W",
        prezzoVendita: 250.00,
        prezzoAcquisto: 75.00,
        categoria: "Prodotti Finiti",
        produttore: "PROD S.r.l.",
        peso: 4.8,
        volume: 0.025,
        descrizioneTecnica: "Riflettore industriale a sospensione (High Bay) da 100W per installazione ad altezze elevate (magazzini, reparti produttivi)."
    },
    {
        id: "prod_linea_glow",
        codice: "LINEA-GLOW",
        ean: "8012345678904",
        nome: "Barra LED Lineare Interno 1.5m",
        prezzoVendita: 65.00,
        prezzoAcquisto: 18.00,
        categoria: "Prodotti Finiti",
        produttore: "PROD S.r.l.",
        peso: 0.9,
        volume: 0.002,
        descrizioneTecnica: "Profilo in alluminio con diffusore opale e strip LED integrata da 24W/m per illuminazione d'ufficio o residenziale."
    },
    {
        id: "comp_led_10w",
        codice: "LED-10W",
        ean: "8012345678911",
        nome: "Chip LED High-Power 10W",
        prezzoVendita: 5.00,
        prezzoAcquisto: 1.50,
        categoria: "Componenti",
        produttore: "LumiTech Semiconduttori SpA",
        peso: 0.01,
        volume: 0.0001,
        descrizioneTecnica: "Chip LED COB da 10W ad alta luminosità, temperatura colore 4000K, efficienza 130 lm/W."
    },
    {
        id: "comp_led_50w",
        codice: "LED-50W",
        ean: "8012345678912",
        nome: "Chip LED COB 50W",
        prezzoVendita: 15.00,
        prezzoAcquisto: 4.50,
        categoria: "Componenti",
        produttore: "LumiTech Semiconduttori SpA",
        peso: 0.03,
        volume: 0.0002,
        descrizioneTecnica: "Chip LED COB da 50W per proiettori di potenza, temperatura colore 4000K, efficienza 140 lm/W."
    },
    {
        id: "comp_drv_10w",
        codice: "DRV-10W",
        ean: "8012345678921",
        nome: "Driver LED 10W 350mA IP67",
        prezzoVendita: 8.00,
        prezzoAcquisto: 2.80,
        categoria: "Componenti",
        produttore: "MeanWell",
        peso: 0.15,
        volume: 0.0005,
        descrizioneTecnica: "Alimentatore stagno IP67 corrente costante 350mA, ingresso universale 90-264VAC, protezione da cortocircuito."
    },
    {
        id: "comp_drv_50w",
        codice: "DRV-50W",
        ean: "8012345678922",
        nome: "Driver LED 50W IP65 MeanWell",
        prezzoVendita: 25.00,
        prezzoAcquisto: 9.00,
        categoria: "Componenti",
        produttore: "MeanWell",
        peso: 0.45,
        volume: 0.001,
        descrizioneTecnica: "Alimentatore IP65 corrente costante 1050mA, ingresso universale, PFC attivo, alta affidabilità."
    },
    {
        id: "comp_body_aura",
        codice: "BODY-AURA",
        ean: "8012345678931",
        nome: "Guscio Alluminio Faretto Aura",
        prezzoVendita: 12.00,
        prezzoAcquisto: 4.00,
        categoria: "Componenti",
        produttore: "Alluminio Estruso Italia",
        peso: 0.6,
        volume: 0.0015,
        descrizioneTecnica: "Involucro in alluminio estruso grezzo anodizzabile, predisposto per alloggiamento driver e scheda LED."
    },
    {
        id: "comp_cab_neo",
        codice: "CAB-NEO",
        ean: "8012345678941",
        nome: "Cavo Neoprene H05RN-F 3G1 (metro)",
        prezzoVendita: 2.00,
        prezzoAcquisto: 0.60,
        categoria: "Componenti",
        produttore: "Cavi & Cablaggi Piemonte",
        peso: 0.1,
        volume: 0.0002,
        descrizioneTecnica: "Cavo flessibile sotto guaina di neoprene per posa mobile all'esterno, resistente ad acqua e raggi UV."
    }
];

const THEME_STORAGE_KEY = 'crm_ui_theme';
const DEFAULT_THEME = 'light';
const DATASETS_STORAGE_KEY = 'crm_datasets_v3';
const LEGACY_DATASET_STORAGE_KEYS = ['crm_datasets_v1'];
const NAV_PAGE_STORAGE_KEY = 'crm_current_page_state_v1';
const DEFAULT_PAGE = 'dashboard_operativa';
let lastSyncedDatasetsSignature = '';
let staticSeedDatasetsCache = null;
const REMOTE_CONFIG = (typeof window !== 'undefined' && window.CRM_REMOTE) ? window.CRM_REMOTE : {};
const SUPABASE_URL = String(REMOTE_CONFIG.supabaseUrl || '').trim();
const SUPABASE_ANON_KEY = String(REMOTE_CONFIG.supabaseAnonKey || '').trim();
const SUPABASE_TABLE = String(REMOTE_CONFIG.supabaseTable || 'crm_state').trim();
const SUPABASE_ROW_ID = String(REMOTE_CONFIG.supabaseRowId || 'main').trim();

function hasSupabaseFrontendConfig() {
    return !!SUPABASE_URL && !!SUPABASE_ANON_KEY;
}

function getSavedTheme() {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'premium' || saved === 'warm' || saved === 'sharp') return 'light';
    return ['light', 'dark'].includes(saved) ? saved : DEFAULT_THEME;
}

function applyTheme(theme) {
    const normalized = ['light', 'dark'].includes(theme) ? theme : DEFAULT_THEME;
    document.body.setAttribute('data-theme', normalized);
    localStorage.setItem(THEME_STORAGE_KEY, normalized);
    document.querySelectorAll('[data-theme-choice]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-theme-choice') === normalized);
    });
}

const clienti = [
    {
        id: "cli_1",
        azienda: "ElettroToscana S.r.l.",
        piva: "01234567890",
        cf: "01234567890",
        nome: "Mario Rossi",
        email: "m.rossi@elettrotoscana.it",
        telefono: "+39 333 123456",
        pec: "elettrotoscana@legalmail.it",
        sdi: "SUBM70N",
        sedeLegale: "Via Roma 12, Firenze (FI)",
        iban: "IT60P0123456789012345678901",
        valore: 15000,
        stato: "vinto",
        terminiPagamento: "riba_30_60",
        creato: "2026-05-01",
        timeline: [
            { type: "nota", text: "Cliente ha confermato il preventivo PRV-2026-001. Creato ordine di vendita ORDV-2026-101.", date: "18 Mag 2026, 11:00" },
            { type: "email", text: "Inviato preventivo ufficiale PRV-2026-001 per fornitura 40 fari AURA-XS.", date: "15 Mag 2026, 10:15" },
            { type: "incontro", text: "Incontro conoscitivo presso la loro sede di Firenze. Presentati cataloghi prodotti finiti. Molto interessati a AURA-XS.", date: "12 Mag 2026, 14:30" },
            { type: "nota", text: "Contatto iniziale qualificato via fiera Key Energy Rimini.", date: "01 Mag 2026, 09:30" }
        ]
    },
    {
        id: "cli_2",
        azienda: "Luce & Design Milano",
        piva: "09876543210",
        cf: "09876543210",
        nome: "Laura Bianchi",
        email: "l.bianchi@lucedesign.it",
        telefono: "+39 02 889977",
        pec: "lucedesign@legalmail.it",
        sdi: "M5UXCR1",
        sedeLegale: "Corso Buenos Aires 45, Milano (MI)",
        iban: "IT74F9876543210987654321098",
        valore: 8500,
        stato: "trattativa",
        terminiPagamento: "bonifico_30",
        creato: "2026-05-10",
        timeline: [
            { type: "chiamata", text: "Laura Bianchi richiede quotazione speciale per fornitura fari esterni per progetto villa Porto Cervo (circa 35 fari).", date: "20 Mag 2026, 16:00" },
            { type: "nota", text: "Inserita opportunità commerciale in dashboard per villa Porto Cervo.", date: "20 Mag 2026, 16:15" }
        ]
    },
    {
        id: "cli_3",
        azienda: "Roma Illuminazione Group",
        piva: "04561237890",
        cf: "04561237890",
        nome: "Stefano Neri",
        email: "s.neri@romailuminazione.it",
        telefono: "+39 06 554433",
        pec: "romailuminazione@pec.it",
        sdi: "K9WJQ12",
        sedeLegale: "Via Tuscolana 512, Roma (RM)",
        iban: "IT12X0456123789012345678901",
        valore: 22000,
        stato: "offerta",
        terminiPagamento: "vista_fattura",
        creato: "2026-05-15",
        timeline: [
            { type: "incontro", text: "Incontro tecnico per illuminazione capannone logistico Bologna. Richiesto l'uso di AURA-XL per esterno e LUX-IND per interno.", date: "25 Mag 2026, 11:30" },
            { type: "nota", text: "Creata segnalazione per capannone Bologna.", date: "25 Mag 2026, 12:00" }
        ]
    },
    {
        id: "cli_4",
        azienda: "TechLed Solutions Bari",
        piva: "07891234560",
        cf: "07891234560",
        nome: "Giuseppe Russo",
        email: "g.russo@techled.it",
        telefono: "+39 080 123456",
        pec: "techled@pec-legal.it",
        sdi: "X4Y7Z90",
        sedeLegale: "Via Amendola 88, Bari (BA)",
        iban: "IT45Y0789123456012345678901",
        valore: 5000,
        stato: "lead",
        terminiPagamento: "bonifico_30",
        creato: "2026-05-28",
        timeline: [
            { type: "nota", text: "Lead importato da form contatti del sito web. Interessato a campionatura fari LED.", date: "28 Mag 2026, 17:00" }
        ]
    }
];

const fornitori = [
    {
        id: "forn_1",
        nome: "LumiTech Semiconduttori SpA",
        piva: "01122334455",
        cf: "01122334455",
        referente: "Ing. Andrea Verdi",
        email: "ordini@lumitech.it",
        telefono: "02 887766",
        pec: "lumitech@legalmail.it",
        sdi: "LUMI78A",
        indirizzo: "Via del Silicio 24, Agrate Brianza (MB)",
        sedeLegale: "Via del Silicio 24, Agrate Brianza (MB)",
        iban: "IT99P0112233445501234567890",
        terminiPagamento: "bonifico_60"
    },
    {
        id: "forn_2",
        nome: "Alluminio Estruso Italia S.r.l.",
        piva: "02233445566",
        cf: "02233445566",
        referente: "Valerio Gialli",
        email: "commerciale@alluminioestruso.it",
        telefono: "030 998877",
        pec: "alluminioestruso@legalmail.it",
        sdi: "ALUM12B",
        indirizzo: "Via dei Metalli 8, Brescia (BS)",
        sedeLegale: "Via dei Metalli 8, Brescia (BS)",
        iban: "IT88O0223344556601234567890",
        terminiPagamento: "riba_30_60"
    },
    {
        id: "forn_3",
        nome: "Cavi & Cablaggi Piemonte",
        piva: "03344556677",
        cf: "03344556677",
        referente: "Roberto Viola",
        email: "viola@cavicablaggi.it",
        telefono: "011 445566",
        pec: "cavicablaggi@legalmail.it",
        sdi: "CAVI34C",
        indirizzo: "Corso Francia 112, Torino (TO)",
        sedeLegale: "Corso Francia 112, Torino (TO)",
        iban: "IT77I0334455667701234567890",
        terminiPagamento: "vista_fattura"
    }
];

const segnalazioni = [
    {
        id: "seg_1",
        titolo: "Fornitura fari per villa privata Porto Cervo",
        cliente: "cli_2",
        prodottoInteresse: "prod_aura_xs",
        zona: "Sardegna",
        priorita: "alta",
        stato: "inlavorazione",
        descrizione: "Richiesta quotazione per 35 fari da esterno con finitura corten custom. Laura Bianchi attende offerta formale."
    },
    {
        id: "seg_2",
        titolo: "Illuminazione capannone logistica Bologna",
        cliente: "cli_3",
        prodottoInteresse: "prod_aura_xl",
        zona: "Emilia-Romagna",
        priorita: "alta",
        stato: "aperto",
        descrizione: "Richiesto sopralluogo e preventivazione di massima per circa 80 proiettori industriali AURA-XL."
    },
    {
        id: "seg_3",
        titolo: "Restyling uffici showroom Firenze",
        cliente: "cli_1",
        prodottoInteresse: "prod_linea_glow",
        zona: "Toscana",
        priorita: "media",
        stato: "risolto",
        descrizione: "Opportunità chiusa positivamente e convertita in preventivo PRV-2026-001."
    }
];

const preventivi = [
    {
        id: "prv_1",
        numero: "PRV-2026-001",
        cliente: "cli_1",
        data: "2026-05-15",
        dataScadenza: "2026-06-15",
        terminiPagamento: "riba_30_60",
        porto: "franco",
        stato: "accettato",
        totale: 3400,
        righe: [
            { prodotto: "prod_aura_xs", quantita: 40 }
        ]
    },
    {
        id: "prv_2",
        numero: "PRV-2026-002",
        cliente: "cli_2",
        data: "2026-05-20",
        dataScadenza: "2026-06-20",
        terminiPagamento: "bonifico_30",
        porto: "assegnato",
        stato: "inviato",
        totale: 1800,
        righe: [
            { prodotto: "prod_aura_xl", quantita: 10 }
        ]
    },
    {
        id: "prv_3",
        numero: "PRV-2026-003",
        cliente: "cli_3",
        data: "2026-05-28",
        dataScadenza: "2026-06-28",
        terminiPagamento: "vista_fattura",
        porto: "franco",
        stato: "bozza",
        totale: 9000,
        righe: [
            { prodotto: "prod_lux_ind", quantita: 36 }
        ]
    }
];

const ordiniVendita = [
    {
        id: "ov_1",
        numero: "ORDV-2026-101",
        cliente: "cli_1",
        data: "2026-05-18",
        dataConsegna: "2026-06-10",
        statoPagamento: "nonpagato",
        stato: "inlavorazione",
        totale: 3400,
        righe: [
            { prodotto: "prod_aura_xs", quantita: 40 }
        ]
    },
    {
        id: "ov_2",
        numero: "ORDV-2026-102",
        cliente: "cli_1",
        data: "2026-05-02",
        dataConsegna: "2026-05-25",
        statoPagamento: "pagato",
        stato: "consegnato",
        totale: 1300,
        righe: [
            { prodotto: "prod_linea_glow", quantita: 20 }
        ]
    }
];

const ddtVendita = [
    {
        id: "ddtv_1",
        numero: "DDTV-2026-401",
        cliente: "cli_1",
        data: "2026-05-25",
        ordineRif: "ORDV-2026-102",
        vettore: "DHL Express",
        colli: 2,
        aspettoBeni: "Scatole",
        pesoLordo: 24,
        volumeMc: 0.2,
        porto: "franco"
    }
];

const ordiniAcquisto = [
    {
        id: "orda_1",
        numero: "ORDA-2026-501",
        fornitore: "forn_1",
        data: "2026-05-10",
        dataConsegna: "2026-05-15",
        terminiPagamento: "bonifico_60",
        stato: "ricevuto",
        totale: 1500,
        righe: [
            { prodotto: "comp_led_10w", quantita: 1000 }
        ]
    },
    {
        id: "orda_2",
        numero: "ORDA-2026-502",
        fornitore: "forn_2",
        data: "2026-05-28",
        dataConsegna: "2026-06-05",
        terminiPagamento: "riba_30_60",
        stato: "inviato",
        totale: 800,
        righe: [
            { prodotto: "comp_body_aura", quantita: 200 }
        ]
    }
];

const ddtAcquisto = [
    {
        id: "ddta_1",
        numero: "DDTA-2026-301",
        fornitore: "forn_1",
        data: "2026-05-15",
        ordineRif: "ORDA-2026-501",
        vettore: "Artoni Trasporti",
        colli: 1,
        aspettoBeni: "Pallet",
        pesoLordo: 8.5,
        volumeMc: 0.1
    }
];

const preventiviAcquisto = [];

const distintaBase = [
    {
        id: "bom_1",
        prodotto: "prod_aura_xs",
        componentiCsv: "LED-10W:1, DRV-10W:1, BODY-AURA:1, CAB-NEO:1"
    },
    {
        id: "bom_2",
        prodotto: "prod_aura_xl",
        componentiCsv: "LED-50W:1, DRV-50W:1, BODY-AURA:2, CAB-NEO:1.5"
    }
];

const magazzino = [
    {
        id: "mag_1",
        prodotto: "prod_aura_xs",
        quantita: 45,
        quantitaMinima: 10,
        valoreFIFO: 3825,
        ubicazione: "Scaffale A-01"
    },
    {
        id: "mag_2",
        prodotto: "prod_aura_xl",
        quantita: 5,
        quantitaMinima: 10,
        valoreFIFO: 900,
        ubicazione: "Scaffale A-02"
    },
    {
        id: "mag_3",
        prodotto: "comp_led_10w",
        quantita: 300,
        quantitaMinima: 50,
        valoreFIFO: 450,
        ubicazione: "Cassetto B-05"
    },
    {
        id: "mag_4",
        prodotto: "comp_drv_10w",
        quantita: 12,
        quantitaMinima: 20,
        valoreFIFO: 96,
        ubicazione: "Cassetto B-12"
    },
    {
        id: "mag_5",
        prodotto: "comp_body_aura",
        quantita: 150,
        quantitaMinima: 30,
        valoreFIFO: 1800,
        ubicazione: "Pallet C-01"
    },
    {
        id: "mag_6",
        prodotto: "comp_cab_neo",
        quantita: 500,
        quantitaMinima: 100,
        valoreFIFO: 1000,
        ubicazione: "Rocchetto D-03"
    }
];

[
    prodotti,
    clienti,
    segnalazioni,
    preventivi,
    ordiniVendita,
    ddtVendita,
    fornitori,
    preventiviAcquisto,
    ordiniAcquisto,
    ddtAcquisto,
    distintaBase,
    magazzino
].forEach(dataset => dataset.splice(0, dataset.length));

const DATASETS = {
    segnalazioni: segnalazioni,
    clienti: clienti,
    preventivi: preventivi,
    ordiniVendita: ordiniVendita,
    ddtVendita: ddtVendita,
    fornitori: fornitori,
    preventiviAcquisto: preventiviAcquisto,
    ordiniAcquisto: ordiniAcquisto,
    ddtAcquisto: ddtAcquisto,
    prodotti: prodotti,
    distintaBase: distintaBase,
    magazzino: magazzino
};

function wireDatasetAutoPersist() {
    const methods = ['push', 'unshift', 'splice', 'pop', 'shift', 'sort', 'reverse'];
    Object.values(DATASETS).forEach(arr => {
        if (!Array.isArray(arr) || arr.__persistWrapped) return;
        methods.forEach(methodName => {
            const original = arr[methodName];
            if (typeof original !== 'function') return;
            Object.defineProperty(arr, methodName, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: function(...args) {
                    const result = original.apply(this, args);
                    saveDatasetsToLocal();
                    return result;
                }
            });
        });
        Object.defineProperty(arr, '__persistWrapped', {
            value: true,
            enumerable: false,
            writable: false
        });
    });
}

async function loadStaticSeedDatasets() {
    if (typeof window !== 'undefined' && window.CRM_SEED_DATA) {
        return JSON.parse(JSON.stringify(window.CRM_SEED_DATA));
    }
    if (staticSeedDatasetsCache) return JSON.parse(JSON.stringify(staticSeedDatasetsCache));
    try {
        const res = await fetch(`data.js?v=${Date.now()}`, { cache: 'no-store' });
        if (!res.ok) throw new Error(`Static seed fetch failed: ${res.status}`);
        const raw = await res.text();
        const match = raw.match(/module\.exports\s*=\s*([\s\S]*);?\s*$/);
        if (!match) throw new Error('Static seed parse failed');
        const parsed = Function(`return (${match[1]});`)();
        staticSeedDatasetsCache = parsed;
        return JSON.parse(JSON.stringify(parsed));
    } catch (err) {
        console.warn('Caricamento seed statico fallito:', err);
        return null;
    }
}

function getDatasetsSignature() {
    try {
        return JSON.stringify(DATASETS);
    } catch (err) {
        return '';
    }
}

function isDatasetsEffectivelyEmpty(payload) {
    if (!payload || typeof payload !== 'object') return true;
    const criticalKeys = ['prodotti', 'distintaBase', 'magazzino'];
    if (criticalKeys.some(key => !Array.isArray(payload[key]) || payload[key].length === 0)) return true;
    const productIds = new Set(payload.prodotti.map(item => item && item.id).filter(Boolean));
    const hasSideisProducts = productIds.has('prod_sideis_one_cc') && productIds.has('prod_sideis_one_cv');
    return !hasSideisProducts || payload.magazzino.length < 20;
}

function toFiniteNumber(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
}

function parseIsoDateSafe(value) {
    if (!value) return null;
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function daysFromToday(value) {
    const date = parseIsoDateSafe(value);
    if (!date) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(date);
    target.setHours(0, 0, 0, 0);
    return Math.round((target.getTime() - today.getTime()) / 86400000);
}

function formatRelativeDays(days) {
    if (days === null || days === undefined) return 'Data non disponibile';
    if (days === 0) return 'Oggi';
    if (days === 1) return 'Domani';
    if (days === -1) return 'Ieri';
    if (days > 1) return `Tra ${days} giorni`;
    return `${Math.abs(days)} giorni fa`;
}

async function loadDatasetsFromApi() {
    try {
        let remote;
        if (hasSupabaseFrontendConfig()) {
            const url = `${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?id=eq.${encodeURIComponent(SUPABASE_ROW_ID)}&select=payload`;
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    apikey: SUPABASE_ANON_KEY,
                    Authorization: `Bearer ${SUPABASE_ANON_KEY}`
                },
                cache: 'no-store'
            });
            if (!res.ok) throw new Error(`Supabase data failed: ${res.status}`);
            const rows = await res.json();
            remote = Array.isArray(rows) && rows.length && rows[0].payload ? rows[0].payload : null;
            if (!remote || isDatasetsEffectivelyEmpty(remote)) return false;
        } else {
            const res = await fetch('/api/data', { cache: 'no-store' });
            if (!res.ok) throw new Error(`API data failed: ${res.status}`);
            remote = await res.json();
            if (isDatasetsEffectivelyEmpty(remote)) return false;
        }
        Object.keys(DATASETS).forEach(key => delete DATASETS[key]);
        Object.assign(DATASETS, remote);
        if (remote.segnalazioni) segnalazioni.splice(0, segnalazioni.length, ...remote.segnalazioni);
        if (remote.clienti) clienti.splice(0, clienti.length, ...remote.clienti);
        if (remote.preventivi) preventivi.splice(0, preventivi.length, ...remote.preventivi);
        if (remote.ordiniVendita) ordiniVendita.splice(0, ordiniVendita.length, ...remote.ordiniVendita);
        if (remote.ddtVendita) ddtVendita.splice(0, ddtVendita.length, ...remote.ddtVendita);
        if (remote.fornitori) fornitori.splice(0, fornitori.length, ...remote.fornitori);
        if (remote.preventiviAcquisto) preventiviAcquisto.splice(0, preventiviAcquisto.length, ...remote.preventiviAcquisto);
        if (remote.ordiniAcquisto) ordiniAcquisto.splice(0, ordiniAcquisto.length, ...remote.ordiniAcquisto);
        if (remote.ddtAcquisto) ddtAcquisto.splice(0, ddtAcquisto.length, ...remote.ddtAcquisto);
        if (remote.prodotti) prodotti.splice(0, prodotti.length, ...remote.prodotti);
        if (remote.distintaBase) distintaBase.splice(0, distintaBase.length, ...remote.distintaBase);
        if (remote.magazzino) magazzino.splice(0, magazzino.length, ...remote.magazzino);
        lastSyncedDatasetsSignature = getDatasetsSignature();
        return true;
    } catch (err) {
        console.warn('Uso dataset locali di fallback:', err);
        return false;
    }
}

async function saveDatasetsToApiIfChanged() {
    try {
        const currentSignature = getDatasetsSignature();
        if (!currentSignature || currentSignature === lastSyncedDatasetsSignature) return;
        if (hasSupabaseFrontendConfig()) {
            const url = `${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?on_conflict=id`;
            const body = JSON.stringify([{ id: SUPABASE_ROW_ID, payload: JSON.parse(currentSignature) }]);
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    apikey: SUPABASE_ANON_KEY,
                    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
                    Prefer: 'resolution=merge-duplicates,return=minimal'
                },
                body
            });
            if (!res.ok) throw new Error(`Supabase save failed: ${res.status}`);
        } else {
            const res = await fetch('/api/data', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: currentSignature
            });
            if (!res.ok) throw new Error(`API save failed: ${res.status}`);
        }
        lastSyncedDatasetsSignature = currentSignature;
        return { ok: true };
    } catch (err) {
        console.warn('Sync dataset verso API fallito:', err);
        return { ok: false, error: String(err.message || err) };
    }
}

function saveDatasetsToLocal() {
    try {
        localStorage.setItem(DATASETS_STORAGE_KEY, JSON.stringify(DATASETS));
    } catch (err) {
        console.warn('Salvataggio locale dataset fallito:', err);
    }
}

function clearLegacyDatasetsFromLocal() {
    try {
        LEGACY_DATASET_STORAGE_KEYS.forEach(key => localStorage.removeItem(key));
    } catch (err) {
        console.warn('Pulizia dataset legacy fallita:', err);
    }
}

function restoreDatasetsFromLocal() {
    try {
        const raw = localStorage.getItem(DATASETS_STORAGE_KEY);
        if (!raw) return false;
        const parsed = JSON.parse(raw);
        if (isDatasetsEffectivelyEmpty(parsed)) {
            localStorage.removeItem(DATASETS_STORAGE_KEY);
            return false;
        }
        let restoredAny = false;
        Object.keys(DATASETS).forEach(key => {
            if (Array.isArray(parsed[key])) {
                DATASETS[key].splice(0, DATASETS[key].length, ...parsed[key]);
                restoredAny = true;
            }
        });
        return restoredAny;
    } catch (err) {
        console.warn('Ripristino locale dataset fallito:', err);
        return false;
    }
}

async function ripristinaSeedSuCloud() {
    const ok = confirm("Questa azione ripristina tutti i dati demo (magazzino incluso) e sovrascrive lo stato corrente. Continuare?");
    if (!ok) return;
    const seed = await loadStaticSeedDatasets();
    if (!seed) {
        mostraNotifica("Seed statico non disponibile", "error");
        return;
    }
    Object.keys(DATASETS).forEach(key => {
        const source = Array.isArray(seed[key]) ? seed[key] : [];
        if (!Array.isArray(DATASETS[key])) DATASETS[key] = [];
        DATASETS[key].splice(0, DATASETS[key].length, ...JSON.parse(JSON.stringify(source)));
    });
    saveDatasetsToLocal();
    lastSyncedDatasetsSignature = '';
    const syncResult = await saveDatasetsToApiIfChanged();
    if (!syncResult?.ok) {
        mostraNotifica(`Scrittura Supabase fallita: ${syncResult?.error || 'errore sconosciuto'}`, "error");
        return;
    }
    aggiornaTuttiBadgeSidebar();
    cambiaPagina(paginaAttuale || DEFAULT_PAGE);
    mostraNotifica("Seed demo ripristinato e sincronizzato su Supabase", "success");
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 2. CONFIGURAZIONI DELLE TABELLE & CAMPI DEI FORM ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
const TABLE_CONFIGS = {
    segnalazioni: {
        title: "Segnalazioni (Pre-preventivi)",
        eyebrow: "Opportunità Commerciali",
        headers: ["Opportunità / Prodotto", "Cliente Segnalante", "Zona", "Priorità", "Stato", "Workflow", "Azioni"],
        fields: [
            { key: "titolo", label: "Titolo Opportunità", type: "text", required: true, fullWidth: true, placeholder: "Fornitura fari per villa" },
            { key: "cliente", label: "Cliente di Riferimento", type: "select", required: true, dynamicOptions: "clienti" },
            { key: "prodottoInteresse", label: "Prodotto d'Interesse", type: "select", required: true, dynamicOptions: "prodotti" },
            { key: "zona", label: "Zona / Area Geografica", type: "text", required: true, placeholder: "Roma Nord" },
            { key: "priorita", label: "Priorità Opportunità", type: "select", required: true, options: [
                { value: "bassa", label: "Bassa" },
                { value: "media", label: "Media" },
                { value: "alta", label: "Alta" }
            ]},
            { key: "stato", label: "Stato Lavorazione", type: "select", required: true, options: [
                { value: "aperto", label: "Aperto" },
                { value: "inlavorazione", label: "In Lavorazione" },
                { value: "risolto", label: "Risolto / Convertito" }
            ]},
            { key: "descrizione", label: "Note e Descrizione", type: "textarea", fullWidth: true }
        ],
        csvTemplate: "titolo,cliente,prodottoInteresse,zona,priorita,stato,descrizione"
    },
    clienti: {
        title: "Clienti & Leads",
        eyebrow: "Anagrafica Commerciale",
        headers: ["Azienda / P.IVA", "Referente / Contatti", "Valore Offerta", "Cod. SDI / PEC", "Stato", "Azioni"],
        fields: [
            { key: "codice", label: "Codice Anagrafica", type: "text", placeholder: "CLI-0001" },
            { key: "azienda", label: "Azienda / Ragione Sociale", type: "text", required: true, fullWidth: true, placeholder: "ElettroToscana S.r.l." },
            { key: "tipo", label: "Tipo", type: "select", required: true, options: [
                { value: "azienda", label: "Azienda" },
                { value: "privato", label: "Privato" },
                { value: "lead", label: "Lead" }
            ]},
            { key: "stato", label: "Stato Pipeline", type: "select", required: true, options: [
                { value: "lead", label: "Lead" },
                { value: "contattato", label: "Contattato" },
                { value: "offerta", label: "Offerta Inviata" },
                { value: "trattativa", label: "In Negoziazione" },
                { value: "vinto", label: "Chiuso Vinto" },
                { value: "perso", label: "Chiuso Perso" }
            ]},
            { key: "categoria", label: "Categoria", type: "text", placeholder: "Rivenditore / Installatore" },
            { key: "area", label: "Area", type: "text", placeholder: "Toscana / Centro Italia" },
            { key: "sottocategoria", label: "Sottocategoria", type: "text", placeholder: "Illuminazione tecnica" },
            { key: "sottosettore", label: "Sottosettore", type: "text", placeholder: "Outdoor / Indoor" },
            { key: "agente", label: "Agente", type: "text", placeholder: "Giacomo" },
            { key: "listino", label: "Listino", type: "text", placeholder: "Listino standard" },
            { key: "fonte", label: "Fonte", type: "text", placeholder: "Fiera / Passaparola / Web" },
            { key: "dataNascita", label: "Data di Nascita / Costituzione", type: "date" },
            { key: "piva", label: "Partita IVA", type: "text", required: true, placeholder: "01234567890" },
            { key: "cf", label: "Codice Fiscale", type: "text", placeholder: "IT01234567890" },
            { key: "nome", label: "Nome Contatto Referente", type: "text", required: true, placeholder: "Mario Rossi" },
            { key: "email", label: "Email Aziendale", type: "email", placeholder: "m.rossi@elettrotoscana.it" },
            { key: "telefono", label: "Telefono", type: "text", placeholder: "+39 333 123456" },
            { key: "website", label: "Website", type: "text", placeholder: "www.elettrotoscana.it" },
            { key: "pec", label: "PEC Aziendale", type: "email", placeholder: "elettrotoscana@legalmail.it" },
            { key: "sdi", label: "Codice Destinatario (SDI)", type: "text", placeholder: "SUBM70N (7 caratteri)" },
            { key: "sedeLegale", label: "Sede Legale (Fatturazione)", type: "text", fullWidth: true, placeholder: "Via Roma 12, Firenze (FI)" },
            { key: "indirizzo", label: "Indirizzo Operativo", type: "text", fullWidth: true, placeholder: "Via Roma 12, Firenze (FI)" },
            { key: "paese", label: "Nazione", type: "text", placeholder: "Italia" },
            { key: "provincia", label: "Provincia", type: "text", placeholder: "FI" },
            { key: "iban", label: "IBAN per accrediti", type: "text", fullWidth: true, placeholder: "IT60P0123456789012345678901" },
            { key: "valore", label: "Valore Stimato Pipeline (€)", type: "number", placeholder: "10000" },
            { key: "sconto1", label: "Sconto 1 %", type: "number", placeholder: "0" },
            { key: "sconto2", label: "Sconto 2 %", type: "number", placeholder: "0" },
            { key: "sconto3", label: "Sconto 3 %", type: "number", placeholder: "0" },
            { key: "terminiPagamento", label: "Condizioni di pagamento", type: "select", required: true, options: [
                { value: "vista_fattura", label: "Vista Fattura" },
                { value: "bonifico_30", label: "Bonifico 30 gg DF" },
                { value: "bonifico_60", label: "Bonifico 60 gg DF" },
                { value: "riba_30_60", label: "Ri.Ba. 30/60 gg DF" }
            ]},
            { key: "note", label: "Note", type: "textarea", fullWidth: true, placeholder: "Informazioni utili, preferenze, storico o osservazioni" }
        ],
        csvTemplate: "codice,azienda,tipo,stato,categoria,area,sottocategoria,sottosettore,agente,listino,fonte,dataNascita,piva,cf,nome,email,telefono,website,pec,sdi,sedeLegale,indirizzo,paese,provincia,iban,valore,sconto1,sconto2,sconto3,terminiPagamento,note"
    },
    preventivi: {
        title: "Preventivi",
        eyebrow: "Offerte e Quotazioni",
        isDocument: true,
        headers: ["Cod. Preventivo", "Cliente", "Data / Scadenza", "Articoli Offerti", "Totale Lordo", "Stato", "Workflow", "Azioni"],
        fields: [
            { key: "numero", label: "Numero Preventivo", type: "text", required: true, placeholder: "PRV-2026-004" },
            { key: "cliente", label: "Cliente di Riferimento", type: "select", required: true, dynamicOptions: "clienti" },
            { key: "data", label: "Data Offerta", type: "date", required: true },
            { key: "dataScadenza", label: "Valido Fino Al (Scadenza)", type: "date", required: true },
            { key: "terminiPagamento", label: "Condizioni di Pagamento", type: "select", required: true, options: [
                { value: "vista_fattura", label: "Vista Fattura" },
                { value: "bonifico_30", label: "Bonifico 30 gg DF" },
                { value: "bonifico_60", label: "Bonifico 60 gg DF" },
                { value: "riba_30_60", label: "Ri.Ba. 30/60 gg DF" }
            ]},
            { key: "porto", label: "Resa Porto", type: "select", required: true, options: [
                { value: "franco", label: "Porto Franco (A carico mittente)" },
                { value: "assegnato", label: "Porto Assegnato (A carico destinatario)" }
            ]},
            { key: "stato", label: "Stato Preventivo", type: "select", required: true, options: [
                { value: "bozza", label: "Bozza" },
                { value: "inviato", label: "Inviato" },
                { value: "accettato", label: "Accettato / Confermato" },
                { value: "rifiutato", label: "Rifiutato" }
            ]}
        ],
        csvTemplate: "numero,cliente,data,dataScadenza,terminiPagamento,porto,stato"
    },
    preventiviAcquisto: {
        title: "Preventivi di Acquisto",
        eyebrow: "Richieste Offerta Fornitori",
        isDocument: true,
        headers: ["Cod. RFQ", "Fornitore", "Data / Scadenza", "Articoli Richiesti", "Totale Stimato", "Stato", "Azioni"],
        fields: [
            { key: "numero", label: "Numero richiesta", type: "text", required: true, placeholder: "RFQ-2026-001" },
            { key: "fornitore", label: "Fornitore", type: "select", required: true, dynamicOptions: "fornitori" },
            { key: "data", label: "Data richiesta", type: "date", required: true },
            { key: "dataScadenza", label: "Scadenza risposta", type: "date", required: true },
            { key: "terminiPagamento", label: "Termini pagamento", type: "select", required: true, options: [
                { value: "vista_fattura", label: "Vista Fattura" },
                { value: "bonifico_30", label: "Bonifico 30 gg DF" },
                { value: "bonifico_60", label: "Bonifico 60 gg DF" },
                { value: "riba_30_60", label: "Ri.Ba. 30/60 gg DF" }
            ]},
            { key: "stato", label: "Stato", type: "select", required: true, options: [
                { value: "bozza", label: "Bozza" },
                { value: "inviato", label: "Inviato" },
                { value: "accettato", label: "Accettato" },
                { value: "rifiutato", label: "Rifiutato" }
            ]},
            { key: "note", label: "Note", type: "textarea", fullWidth: true, placeholder: "Vincoli, lead time, materiali o richieste speciali" }
        ],
        csvTemplate: "numero,fornitore,data,dataScadenza,terminiPagamento,stato,note"
    },
    ordiniVendita: {
        title: "Ordini di Vendita",
        eyebrow: "Portafoglio Commesse",
        isDocument: true,
        headers: ["Cod. Ordine", "Cliente", "Consegna Richiesta", "Righe Ordine", "Pagamento", "Totale Lordo", "Stato", "Workflow", "Azioni"],
        fields: [
            { key: "numero", label: "Numero Ordine", type: "text", required: true, placeholder: "ORDV-2026-103" },
            { key: "cliente", label: "Cliente", type: "select", required: true, dynamicOptions: "clienti" },
            { key: "rifCliente", label: "Rif. ordine cliente", type: "text", placeholder: "PO-4521 / email del 30-05" },
            { key: "data", label: "Data Ordine", type: "date", required: true },
            { key: "dataConsegna", label: "Data Consegna Richiesta", type: "date", required: true },
            { key: "terminiPagamento", label: "Condizioni di Pagamento", type: "select", required: true, options: [
                { value: "vista_fattura", label: "Vista Fattura" },
                { value: "bonifico_30", label: "Bonifico 30 gg DF" },
                { value: "bonifico_60", label: "Bonifico 60 gg DF" },
                { value: "riba_30_60", label: "Ri.Ba. 30/60 gg DF" }
            ]},
            { key: "statoPagamento", label: "Stato Pagamento", type: "select", required: true, options: [
                { value: "nonpagato", label: "Non Pagato" },
                { value: "parziale", label: "Pagamento Parziale" },
                { value: "pagato", label: "Pagato / Saldato" }
            ]},
            { key: "note", label: "Note operative", type: "textarea", fullWidth: true, placeholder: "Imballo, consegna, vincoli cliente o istruzioni interne" }
        ],
        optionalFields: [
            { key: "contatto", label: "Contatto cliente", type: "text", placeholder: "Mario Rossi / ufficio acquisti" },
            { key: "referente", label: "Referente ordine", type: "text", placeholder: "Ufficio acquisti / Sig. Rossi" },
            { key: "agente", label: "Agente", type: "text", placeholder: "Giacomo" },
            { key: "listaPrezzi", label: "Listino", type: "text", placeholder: "Listino standard" },
            { key: "canale", label: "Canale", type: "text", placeholder: "Email / telefono / visita" },
            { key: "priorita", label: "Priorita", type: "select", required: true, options: [
                { value: "bassa", label: "Bassa" },
                { value: "media", label: "Media" },
                { value: "alta", label: "Alta" },
                { value: "urgente", label: "Urgente" }
            ]},
            { key: "porto", label: "Resa porto", type: "select", options: [
                { value: "franco", label: "Porto Franco" },
                { value: "assegnato", label: "Porto Assegnato" }
            ]},
            { key: "vettore", label: "Vettore", type: "text", placeholder: "DHL Express" },
            { key: "dataPrevistaFattura", label: "Data prevista fatturazione", type: "date" },
        ],
        csvTemplate: "numero,cliente,rifCliente,data,dataConsegna,terminiPagamento,statoPagamento,stato,note,contatto,referente,agente,listaPrezzi,canale,priorita,porto,vettore,dataPrevistaFattura"
    },
    ddtVendita: {
        title: "DDT di Vendita",
        eyebrow: "Documenti di Trasporto Clienti",
        isDocument: true,
        isDeliveryOnly: true,
        headers: ["Cod. Spedizione", "Cliente", "Data DDT", "Riferimento Ordine", "Articoli", "Vettore / Colli", "Dati Spedizione", "Azioni"],
        fields: [
            { key: "numero", label: "Numero DDT", type: "text", required: true, placeholder: "DDTV-2026-402" },
            { key: "cliente", label: "Destinatario", type: "select", required: true, dynamicOptions: "clienti" },
            { key: "data", label: "Data Spedizione", type: "date", required: true },
            { key: "ordineRif", label: "Ordine di Riferimento", type: "text", placeholder: "ORDV-2026-101" },
            { key: "vettore", label: "Vettore / Corriere", type: "text", required: true, placeholder: "DHL Express" },
            { key: "colli", label: "Quantità Colli", type: "number", required: true, placeholder: "2" },
            { key: "aspettoBeni", label: "Aspetto dei Beni", type: "text", placeholder: "Scatole di cartone / Bancale" },
            { key: "pesoLordo", label: "Peso Lordo (kg)", type: "number", placeholder: "25.5" },
            { key: "volumeMc", label: "Volume (mc)", type: "number", placeholder: "0.5" },
            { key: "porto", label: "Resa Porto", type: "select", required: true, options: [
                { value: "franco", label: "Porto Franco" },
                { value: "assegnato", label: "Porto Assegnato" }
            ]}
        ],
        csvTemplate: "numero,cliente,data,ordineRif,vettore,colli,aspettoBeni,pesoLordo,volumeMc,porto"
    },
    fornitori: {
        title: "Fornitori",
        eyebrow: "Rubrica Approvvigionamento",
        headers: ["Ragione Sociale / P.IVA", "Referente / Contatti", "PEC / Cod. SDI", "Termini Pagamento", "Azioni"],
        fields: [
            { key: "nome", label: "Ragione Sociale Fornitore", type: "text", required: true, fullWidth: true, placeholder: "LumiTech Semiconduttori SpA" },
            { key: "piva", label: "Partita IVA Fornitore", type: "text", required: true, placeholder: "01234567890" },
            { key: "cf", label: "Codice Fiscale Fornitore", type: "text", placeholder: "01234567890" },
            { key: "categoria", label: "Categoria Fornitura", type: "select", required: true, options: [
                { value: "componenti", label: "Componenti / Materie prime" },
                { value: "prodotti_finiti", label: "Prodotti finiti" },
                { value: "servizi", label: "Servizi" },
                { value: "logistica", label: "Logistica" }
            ]},
            { key: "statoQualifica", label: "Qualifica", type: "select", required: true, options: [
                { value: "da_validare", label: "Da validare" },
                { value: "approvato", label: "Approvato" },
                { value: "preferito", label: "Preferito" },
                { value: "sospeso", label: "Sospeso" }
            ]},
            { key: "referente", label: "Referente Interno", type: "text", placeholder: "Ing. Rossi" },
            { key: "email", label: "Email Commerciale", type: "email", placeholder: "info@lumitech.it" },
            { key: "telefono", label: "Telefono Sede", type: "text", placeholder: "02 887766" },
            { key: "pec", label: "PEC Fornitore", type: "email", placeholder: "fornitore@legalmail.it" },
            { key: "sdi", label: "Codice SDI Fornitore", type: "text", placeholder: "SUBM70N (7 caratteri)" },
            { key: "indirizzo", label: "Indirizzo Sede Operativa", type: "text", fullWidth: true, placeholder: "Via del Silicio 24, Agrate Brianza (MB)" },
            { key: "sedeLegale", label: "Sede Legale (Fatturazione)", type: "text", fullWidth: true, placeholder: "Via del Silicio 24, Agrate Brianza (MB)" },
            { key: "iban", label: "IBAN Fornitore (per pagamenti)", type: "text", fullWidth: true, placeholder: "IT99P0123456789012345678901" },
            { key: "leadTime", label: "Lead time medio (giorni)", type: "number", placeholder: "7" },
            { key: "minimoOrdine", label: "Minimo ordine (EUR)", type: "number", placeholder: "250" },
            { key: "terminiPagamento", label: "Termini Pagamento default", type: "select", required: true, options: [
                { value: "vista_fattura", label: "Vista Fattura" },
                { value: "bonifico_30", label: "Bonifico 30 gg DF" },
                { value: "bonifico_60", label: "Bonifico 60 gg DF" },
                { value: "riba_30_60", label: "Ri.Ba. 30/60 gg DF" }
            ]},
            { key: "note", label: "Note fornitore", type: "textarea", fullWidth: true, placeholder: "Listini, certificazioni, accordi, vincoli o preferenze operative" }
        ],
        csvTemplate: "nome,piva,cf,categoria,statoQualifica,referente,email,telefono,pec,sdi,indirizzo,sedeLegale,iban,leadTime,minimoOrdine,terminiPagamento,note"
    },
    ordiniAcquisto: {
        title: "Ordini di Acquisto",
        eyebrow: "Approvvigionamento Fornitori",
        isDocument: true,
        headers: ["Cod. Ordine", "Fornitore", "Data Inviato", "Articoli Ordinati", "Totale Acquisto", "Stato", "Azioni"],
        fields: [
            { key: "numero", label: "Numero Ordine Acquisto", type: "text", required: true, placeholder: "ORDA-2026-503" },
            { key: "fornitore", label: "Fornitore", type: "select", required: true, dynamicOptions: "fornitori" },
            { key: "rifFornitore", label: "Rif. offerta fornitore", type: "text", placeholder: "OFF-889 / preventivo PDF" },
            { key: "richiedente", label: "Richiedente interno", type: "text", placeholder: "Produzione / Magazzino" },
            { key: "data", label: "Data Ordine", type: "date", required: true },
            { key: "dataConsegna", label: "Data Consegna Prevista", type: "date", required: true },
            { key: "terminiPagamento", label: "Termini di Pagamento concordati", type: "select", required: true, options: [
                { value: "vista_fattura", label: "Vista Fattura" },
                { value: "bonifico_30", label: "Bonifico 30 gg DF" },
                { value: "bonifico_60", label: "Bonifico 60 gg DF" },
                { value: "riba_30_60", label: "Ri.Ba. 30/60 gg DF" }
            ]},
            { key: "stato", label: "Stato Consegna", type: "select", required: true, options: [
                { value: "inviato", label: "Inviato" },
                { value: "parziale", label: "Ricevuto Parziale" },
                { value: "ricevuto", label: "Ricevuto Completo" }
            ]},
            { key: "note", label: "Note acquisto", type: "textarea", fullWidth: true, placeholder: "Consegna, certificati, imballi, urgenze o condizioni particolari" }
        ],
        csvTemplate: "numero,fornitore,rifFornitore,richiedente,data,dataConsegna,terminiPagamento,stato,note"
    },
    ddtAcquisto: {
        title: "DDT di Acquisto",
        eyebrow: "Documenti di Trasporto Fornitori",
        isDocument: true,
        isDeliveryOnly: true,
        headers: ["Cod. Carico", "Fornitore", "Data Ricezione", "Riferimento Ordine", "Articoli", "Vettore / Colli", "Dati Logistica", "Azioni"],
        fields: [
            { key: "numero", label: "Numero DDT Fornitore", type: "text", required: true, placeholder: "DDTA-2026-302" },
            { key: "fornitore", label: "Fornitore Mittente", type: "select", required: true, dynamicOptions: "fornitori" },
            { key: "data", label: "Data Ricezione", type: "date", required: true },
            { key: "ordineRif", label: "Ordine di Acquisto Rif.", type: "text", placeholder: "ORDA-2026-501" },
            { key: "vettore", label: "Vettore / Corriere", type: "text", placeholder: "Artoni Trasporti" },
            { key: "colli", label: "Quantità Colli", type: "number", placeholder: "2" },
            { key: "aspettoBeni", label: "Aspetto dei Beni", type: "text", placeholder: "Scatole di cartone / Bancale" },
            { key: "pesoLordo", label: "Peso Lordo (kg)", type: "number", placeholder: "18.5" },
            { key: "volumeMc", label: "Volume (mc)", type: "number", placeholder: "0.2" }
        ],
        csvTemplate: "numero,fornitore,data,ordineRif,vettore,colli,aspettoBeni,pesoLordo,volumeMc"
    },
    prodotti: {
        title: "Prodotti (Articoli)",
        eyebrow: "Listino Articoli e Componenti",
        headers: ["Cod. SKU / Barcode", "Nome Prodotto", "Prezzo Vendita", "Prezzo Acquisto", "Categoria / Produttore", "Azioni"],
        fields: [
            { key: "codice", label: "Codice Articolo (SKU)", type: "text", required: true, placeholder: "AURA-XS" },
            { key: "alias", label: "Alias", type: "text", placeholder: "Faretto esterno XS" },
            { key: "nome", label: "Nome Articolo", type: "text", required: true, placeholder: "Faretto LED Esterno 10W IP67" },
            { key: "tipo", label: "Tipo", type: "select", required: true, options: [
                { value: "semplice", label: "Semplice" },
                { value: "variante", label: "Variante" },
                { value: "kit", label: "Kit" }
            ]},
            { key: "categoria", label: "Categoria", type: "text", required: true, placeholder: "Prodotti Finiti" },
            { key: "sottocategoria", label: "Sottocategoria", type: "text", placeholder: "Faretti" },
            { key: "gruppo", label: "Gruppo", type: "text", placeholder: "Outdoor" },
            { key: "iva", label: "IVA", type: "select", required: true, options: [
                { value: "22", label: "22%" },
                { value: "10", label: "10%" },
                { value: "4", label: "4%" },
                { value: "0", label: "0%" }
            ]},
            { key: "prezzoAcquisto", label: "Prezzo di Costo Acquisto (€)", type: "number", required: true, placeholder: "22.00" },
            { key: "prezzoVendita", label: "Prezzo di Vendita (€)", type: "number", required: true, placeholder: "85.00" },
            { key: "sku", label: "SKU", type: "text", placeholder: "AURA-XS" },
            { key: "unitaMisura", label: "Unità di misura", type: "select", required: true, options: [
                { value: "pz", label: "Pezzi" },
                { value: "m", label: "Metri" },
                { value: "kg", label: "Kg" },
                { value: "scatola", label: "Scatola" }
            ]},
            { key: "quantitaConfezione", label: "Quantità per confezione", type: "number", placeholder: "1" },
            { key: "quantitaEsistente", label: "Giacenza", type: "number", placeholder: "0" },
            { key: "brand", label: "Brand", type: "text", placeholder: "PROD" },
            { key: "provvigione", label: "Provvigione %", type: "number", placeholder: "0" },
            { key: "barcode", label: "Barcode", type: "text", placeholder: "8012345678901" },
            { key: "metel", label: "METEL", type: "text", placeholder: "METEL" },
            { key: "magazzino", label: "Magazzino", type: "select", required: true, options: [
                { value: "si", label: "Sì" },
                { value: "no", label: "No" }
            ]},
            { key: "codDocumento", label: "Cod. Documento", type: "text", placeholder: "DOC-0001" },
            { key: "peso", label: "Peso Netto (kg)", type: "number", placeholder: "1.2" },
            { key: "volume", label: "Volume unitario (mc)", type: "number", placeholder: "0.003" },
            { key: "produttore", label: "Fabbricante / Produttore", type: "text", placeholder: "PROD S.r.l." },
            { key: "descrizioneTecnica", label: "Scheda Tecnica / Descrizione", type: "textarea", fullWidth: true }
        ],
        csvTemplate: "codice,alias,nome,tipo,categoria,sottocategoria,gruppo,iva,prezzoAcquisto,prezzoVendita,sku,unitaMisura,quantitaConfezione,quantitaEsistente,brand,provvigione,barcode,metel,magazzino,codDocumento,peso,volume,produttore,descrizioneTecnica"
    },
    distintaBase: {
        title: "Distinta Base (BOM)",
        eyebrow: "Distinte ed Assemblaggi",
        headers: ["Prodotto Finito", "Componenti Richiesti", "Costo Tot. Componenti", "Prezzo Vendita Listino", "Azioni"],
        fields: [
            { key: "prodotto", label: "Seleziona Prodotto Finito", type: "select", required: true, dynamicOptions: "prodotti" },
            { key: "componentiCsv", label: "Elenco Componenti (Formato SKU:Quantità, separati da virgola)", type: "textarea", required: true, fullWidth: true, placeholder: "LED-10W:1, DRV-10W:1, BODY-AURA:1, CAB-NEO:1" }
        ],
        csvTemplate: "prodotto,componentiCsv"
    },
    magazzino: {
        title: "Magazzino",
        eyebrow: "Giacenze e Scorte",
        headers: ["Codice / Articolo", "Quantità Disponibile", "Scorta Minima", "Stato Scorta", "Valore Scorta FIFO", "Ubicazione", "Azioni"],
        fields: [
            { key: "prodotto", label: "Articolo Prodotto", type: "select", required: true, dynamicOptions: "prodotti" },
            { key: "quantita", label: "Giacenza Attuale", type: "number", required: true, placeholder: "100" },
            { key: "quantitaMinima", label: "Livello Sotto-scorta Minimo", type: "number", placeholder: "10" },
            { key: "valoreFIFO", label: "Valore di Inventario FIFO (€)", type: "number", placeholder: "5000" },
            { key: "ubicazione", label: "Ubicazione Magazzino", type: "text", placeholder: "Scaffale B-18" }
        ],
        csvTemplate: "prodotto,quantita,quantitaMinima,valoreFIFO,ubicazione"
    }
};

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 3. STATE DI NAVIGAZIONE ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
let paginaAttuale = DEFAULT_PAGE;
let editingRecordId = null;
let radialExpandedGroup = 'vendite';
let ricercaQuery = '';
const tableSortByPage = {};
let timelineClienteSelezionatoId = null;
let tipoInterazioneSelezionato = 'nota';
const PAGE_UI_STATE_STORAGE_KEY = 'crm_page_ui_state_v1';
let recordDetailContext = null;
const DEFAULT_ORDER_SALES_OPTIONAL_FIELDS = {
    contatto: false,
    referente: false,
    agente: false,
    listaPrezzi: false,
    canale: false,
    priorita: false,
    stato: true,
    porto: false,
    vettore: false,
    dataPrevistaFattura: false
};
let topNavOpenGroup = null;
let topNavEventsBound = false;
let topNavActiveSection = 'commerciale';
let topNavSectionsCollapsed = false;
const CUSTOM_PAGE_TITLES = {
    dashboard_operativa: 'Dashboard Operativa',
    record_dettaglio: 'Scheda Record',
    scrematura_prodotti: 'Scrematura Prodotti',
    timeline_dettagli: 'Timeline Cliente',
    impostazioni: 'Impostazioni / CSV',
    analisiDati: 'Analisi Dati'
};

function isCustomPage(page) {
    return ['dashboard_operativa', 'record_dettaglio', 'scrematura_prodotti', 'timeline_dettagli', 'impostazioni', 'analisiDati'].includes(page);
}

function isKnownPage(page) {
    return !!TABLE_CONFIGS[page] || isCustomPage(page);
}

function persistCurrentPageState(page) {
    const state = {
        page,
        detailClientId: page === 'timeline_dettagli' ? String(window.dettagliClienteIdAttivo || '') : '',
        detailPage: page === 'record_dettaglio' ? String(recordDetailContext?.page || '') : '',
        detailRecordId: page === 'record_dettaglio' ? String(recordDetailContext?.id || '') : ''
    };
    localStorage.setItem(NAV_PAGE_STORAGE_KEY, JSON.stringify(state));
    const nextHash = `#${page}`;
    if (window.location.hash !== nextHash) {
        history.replaceState(null, '', nextHash);
    }
}

function restoreCurrentPageState() {
    let stored = {};
    try {
        stored = JSON.parse(localStorage.getItem(NAV_PAGE_STORAGE_KEY) || '{}');
    } catch {
        stored = {};
    }
    const hashPage = String(window.location.hash || '').replace(/^#/, '').trim();
    const page = isKnownPage(hashPage)
        ? hashPage
        : (isKnownPage(stored.page) ? stored.page : DEFAULT_PAGE);
    if (page === 'timeline_dettagli' && stored.detailClientId) {
        window.dettagliClienteIdAttivo = stored.detailClientId;
    }
    if (page === 'record_dettaglio' && stored.detailPage && stored.detailRecordId) {
        recordDetailContext = { page: stored.detailPage, id: stored.detailRecordId };
    }
    return page;
}

function readPageUiState() {
    try {
        return JSON.parse(localStorage.getItem(PAGE_UI_STATE_STORAGE_KEY) || '{}');
    } catch {
        return {};
    }
}

function writePageUiState(nextState) {
    localStorage.setItem(PAGE_UI_STATE_STORAGE_KEY, JSON.stringify(nextState));
}

function getPageUiState(pageName) {
    const state = readPageUiState();
    return state[pageName] || {};
}

function updatePageUiState(pageName, partial) {
    const state = readPageUiState();
    state[pageName] = { ...(state[pageName] || {}), ...partial };
    writePageUiState(state);
}

function cleanUiText(value) {
    const text = String(value ?? '');
    return text
        .replaceAll('â‚¬', '€')
        .replaceAll('ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬', '€')
        .replaceAll('Ã ', 'à')
        .replaceAll('Ã¨', 'è')
        .replaceAll('Ã©', 'é')
        .replaceAll('Ã¬', 'ì')
        .replaceAll('Ã²', 'ò')
        .replaceAll('Ã¹', 'ù')
        .replaceAll('Ã', 'à');
}

function getOrdiniVenditaFieldOptions() {
    try {
        const saved = JSON.parse(localStorage.getItem('crm_ordini_vendita_optional_fields') || '{}');
        return { ...DEFAULT_ORDER_SALES_OPTIONAL_FIELDS, ...saved };
    } catch {
        return { ...DEFAULT_ORDER_SALES_OPTIONAL_FIELDS };
    }
}

function saveOrdiniVenditaFieldOptions(options) {
    localStorage.setItem('crm_ordini_vendita_optional_fields', JSON.stringify(options));
}

function getRadialSectorLabel(page) {
    if (['segnalazioni', 'clienti', 'preventivi', 'ordiniVendita', 'ddtVendita'].includes(page)) {
        return 'Vendite';
    }
    if (['fornitori', 'ordiniAcquisto', 'ddtAcquisto'].includes(page)) {
        return 'Acquisti';
    }
    if (['prodotti', 'distintaBase', 'magazzino'].includes(page)) {
        return 'Prodotti';
    }
    if (['impostazioni', 'analisiDati'].includes(page)) {
        return 'Sistema';
    }
    return 'Sistema';
}

function getRadialCenterTitle(page) {
    if (CUSTOM_PAGE_TITLES[page]) {
        return CUSTOM_PAGE_TITLES[page];
    }
    const activeItem = document.querySelector(`.radial-item[data-page="${page}"]`);
    if (activeItem) {
        return activeItem.getAttribute('title') || page;
    }
    const config = TABLE_CONFIGS[page];
    return config ? config.title : page;
}

function getSidebarAnchorPage(page) {
    if (page === 'dashboard_operativa') return 'dashboard_operativa';
    if (page === 'analisiDati') return 'analisiDati';
    if (['preventivi', 'preventiviAcquisto'].includes(page)) return 'preventivi';
    if (['ordiniVendita', 'ordiniAcquisto'].includes(page)) return 'ordini';
    if (['ddtVendita', 'ddtAcquisto'].includes(page)) return 'ddt';
    if (['prodotti', 'distintaBase', 'magazzino', 'fornitori'].includes(page)) return 'catalogo';
    if (page === 'impostazioni') return 'impostazioni';
    return DEFAULT_PAGE;
}

const SIDEBAR_SUBNAV = {
    preventivi: {
        title: 'Preventivi',
        items: [
            { page: 'preventivi', label: 'Vendita' },
            { page: 'preventiviAcquisto', label: 'Acquisto' }
        ]
    },
    ordini: {
        title: 'Ordini',
        items: [
            { page: 'ordiniVendita', label: 'Vendita' },
            { page: 'ordiniAcquisto', label: 'Acquisto' }
        ]
    },
    ddt: {
        title: 'DDT',
        items: [
            { page: 'ddtVendita', label: 'Vendita' },
            { page: 'ddtAcquisto', label: 'Acquisto' }
        ]
    },
    catalogo: {
        title: 'Catalogo',
        items: [
            { page: 'prodotti', label: 'Prodotti' },
            { page: 'distintaBase', label: 'Distinte' },
            { page: 'magazzino', label: 'Magazzino' }
        ]
    },
    anagrafiche: {
        title: 'Anagrafiche',
        items: [
            { page: 'clienti', label: 'Clienti' },
            { page: 'fornitori', label: 'Fornitori' }
        ]
    }
};

let activeSidebarGroup = null;
let activeSidebarTrigger = null;

function positionSidebarSubmenu(triggerEl) {
    const sidebar = document.getElementById('app-sidebar');
    const container = document.getElementById('app-sidebar-submenu');
    if (!sidebar || !container || !triggerEl) {
        console.error('positionSidebarSubmenu missing elements:', { sidebar, container, triggerEl });
        return;
    }

    const sidebarRect = sidebar.getBoundingClientRect();
    const triggerRect = triggerEl.getBoundingClientRect();
    const rawTop = (triggerRect.top - sidebarRect.top) + (triggerRect.height / 2) - (container.offsetHeight / 2);
    const maxTop = Math.max(12, sidebar.clientHeight - container.offsetHeight - 12);
    const clampedTop = Math.min(Math.max(12, rawTop), maxTop);

    container.style.top = `${Math.round(clampedTop)}px`;
    container.style.left = '';
    console.log('Submenu positioned at top:', container.style.top, 'sidebar.offsetWidth:', sidebar.offsetWidth);
}

function renderSidebarSubmenu(groupKey, triggerEl = activeSidebarTrigger) {
    console.log('renderSidebarSubmenu called for groupKey:', groupKey);
    const container = document.getElementById('app-sidebar-submenu');
    if (!container) {
        console.error('Submenu container #app-sidebar-submenu not found!');
        return;
    }
    const group = SIDEBAR_SUBNAV[groupKey];
    if (!group) {
        console.log('No group - hiding submenu');
        container.classList.remove('active');
        container.innerHTML = '';
        container.style.top = '';
        container.style.left = '';
        activeSidebarGroup = null;
        activeSidebarTrigger = null;
        return;
    }
    const getCount = (page) => getSidebarOperationalCount(page);
    const stats = getSidebarGroupStats(groupKey);
    const buttons = group.items.map(item => {
        const isActive = item.page === paginaAttuale;
        return `
            <button type="button" class="app-subtab-btn ${isActive ? 'active' : ''}" onclick="selezionaSidebarSubtab('${item.page}')">
                <span>${item.label}</span>
                <small>${getCount(item.page)}</small>
            </button>
        `;
    }).join('');
    container.innerHTML = `
        <div class="app-subtab-title">${group.title}</div>
        ${stats ? `
            <div class="app-subtab-summary">
                <div class="app-subtab-stat">
                    <span>Operativi</span>
                    <strong>${stats.operational}</strong>
                </div>
                <div class="app-subtab-stat">
                    <span>Totale</span>
                    <strong>${stats.total}</strong>
                </div>
                <div class="app-subtab-stat">
                    <span>Focus</span>
                    <strong>${stats.focusCount}</strong>
                </div>
            </div>
            <div class="app-subtab-actions">
                <button type="button" class="app-subtab-action" onclick="openSidebarFocus('${groupKey}')">
                    <i class="fas fa-bolt"></i>
                    <span>Apri focus</span>
                </button>
                <button type="button" class="app-subtab-action" onclick="cambiaPagina('${group.items[0].page}')">
                    <i class="fas fa-list"></i>
                    <span>Apri lista</span>
                </button>
            </div>
        ` : ''}
        <div class="app-subtab-row">${buttons}</div>
    `;
    container.classList.add('active');
    activeSidebarGroup = groupKey;
    activeSidebarTrigger = triggerEl || activeSidebarTrigger;
    positionSidebarSubmenu(activeSidebarTrigger);
}

function getSidebarOperationalCount(page) {
    if (page === 'preventivi') return (DATASETS.preventivi || []).filter(item => !['accettato', 'rifiutato'].includes(item.stato)).length;
    if (page === 'preventiviAcquisto') return (DATASETS.preventiviAcquisto || []).filter(item => item.stato !== 'accettato').length;
    if (page === 'ordiniVendita') return (DATASETS.ordiniVendita || []).filter(item => !['spedito', 'consegnato'].includes(item.stato)).length;
    if (page === 'ordiniAcquisto') return (DATASETS.ordiniAcquisto || []).filter(item => item.stato !== 'ricevuto').length;
    if (page === 'magazzino') return (DATASETS.magazzino || []).filter(item => toFiniteNumber(item.quantita) <= toFiniteNumber(item.quantitaMinima || 0)).length;
    if (page === 'clienti') return (DATASETS.clienti || []).filter(item => !['vinto', 'perso'].includes(item.stato)).length;
    return (DATASETS[page] || []).length;
}

function getSidebarGroupStats(groupKey) {
    const group = SIDEBAR_SUBNAV[groupKey];
    if (!group) return null;
    const pages = group.items.map(item => item.page);
    const total = pages.reduce((sum, page) => sum + (DATASETS[page]?.length || 0), 0);
    const operational = pages.reduce((sum, page) => sum + getSidebarOperationalCount(page), 0);
    const focusPage = pages
        .map(page => ({ page, count: getSidebarOperationalCount(page) }))
        .sort((a, b) => b.count - a.count)[0];
    return {
        total,
        operational,
        focusPage: focusPage?.page || group.items[0]?.page || '',
        focusCount: focusPage?.count || 0
    };
}

function openSidebarFocus(groupKey) {
    const group = SIDEBAR_SUBNAV[groupKey];
    const stats = getSidebarGroupStats(groupKey);
    const page = stats?.focusPage || group?.items?.[0]?.page;
    if (!page) return;
    const filterMap = {
        preventivi: 'scadenza',
        preventiviAcquisto: 'aperti',
        ordiniVendita: 'urgenti',
        ordiniAcquisto: 'all',
        magazzino: 'critico',
        clienti: 'caldi',
        fornitori: 'all',
        ddtVendita: 'all',
        ddtAcquisto: 'all',
        prodotti: 'all',
        distintaBase: 'all',
        segnalazioni: 'prioritarie'
    };
    const filter = filterMap[page] || 'all';
    if (filter !== 'all') {
        openModuleAndApplyFilter(page, filter);
        return;
    }
    cambiaPagina(page);
}

function toggleSidebarGroup(groupKey, triggerEl = null) {
    const group = SIDEBAR_SUBNAV[groupKey];
    if (!group) return;
    if (activeSidebarGroup === groupKey) {
        renderSidebarSubmenu(null);
        return;
    }
    renderSidebarSubmenu(groupKey, triggerEl);
    syncSidebarActiveState(paginaAttuale);
}

function apriSezioneSidebar(groupKey, triggerEl = null) {
    console.log('apriSezioneSidebar called for groupKey:', groupKey);
    const group = SIDEBAR_SUBNAV[groupKey];
    if (!group || !group.items?.length) {
        console.log('Group not found or empty:', groupKey);
        return;
    }
    if (activeSidebarGroup === groupKey) {
        console.log('Closing group:', groupKey);
        renderSidebarSubmenu(null);
        return;
    }
    console.log('Opening group:', groupKey);
    renderSidebarSubmenu(groupKey, triggerEl);
    
    const selector = `[data-sidebar-group="${groupKey}"]`;
    dismissSidebarBadge(selector);
}

function selezionaSidebarSubtab(page) {
    cambiaPagina(page);
    renderSidebarSubmenu(null);
}

function syncSidebarActiveState(page) {
    const anchor = getSidebarAnchorPage(page);
    document.querySelectorAll('.app-sidebar-item').forEach(btn => {
        const btnPage = btn.getAttribute('data-sidebar-page');
        const btnGroup = btn.getAttribute('data-sidebar-group');
        const isActive = (btnPage && btnPage === anchor) || (btnGroup && btnGroup === anchor);
        btn.classList.toggle('active', !!isActive);
    });
    if (activeSidebarGroup && SIDEBAR_SUBNAV[activeSidebarGroup]) {
        if (!activeSidebarTrigger || !document.body.contains(activeSidebarTrigger)) {
            activeSidebarTrigger = document.querySelector(`.app-sidebar-item[data-sidebar-group="${activeSidebarGroup}"]`);
        }
        renderSidebarSubmenu(activeSidebarGroup, activeSidebarTrigger);
    }
}

function updateRadialCenter(page) {
    const centerCat = document.getElementById('radial-center-cat');
    const centerName = document.getElementById('radial-center-name');
    if (centerName) centerName.innerText = getRadialCenterTitle(page);
    if (centerCat) centerCat.innerText = getRadialSectorLabel(page);
}

const RADIAL_MENU_GROUPS = [
    {
        key: 'vendite',
        label: 'Vendite',
        subtitle: 'Pipeline e clienti',
        icon: 'fa-chart-line',
        accent: '#2563EB',
        startAngle: 306,
        endAngle: 66,
        items: [
            { page: 'dashboard_operativa', title: 'Dashboard', chip: 'DB', icon: 'fa-house' },
            { page: 'segnalazioni', title: 'Segnalazioni', chip: 'SG', icon: 'fa-bullseye' },
            { page: 'clienti', title: 'Clienti e Lead', chip: 'CL', icon: 'fa-user-group' },
            { page: 'preventivi', title: 'Preventivi', chip: 'PV', icon: 'fa-file-signature' },
            { page: 'ordiniVendita', title: 'Ordini di Vendita', chip: 'OV', icon: 'fa-box-open' },
            { page: 'ddtVendita', title: 'DDT di Vendita', chip: 'DV', icon: 'fa-truck-fast' }
        ]
    },
    {
        key: 'acquisti',
        label: 'Acquisti',
        subtitle: 'Supply e forniture',
        icon: 'fa-handshake',
        accent: '#0F766E',
        startAngle: 66,
        endAngle: 186,
        items: [
            { page: 'fornitori', title: 'Fornitori', chip: 'FO', icon: 'fa-industry' },
            { page: 'ordiniAcquisto', title: 'Ordini di Acquisto', chip: 'OA', icon: 'fa-receipt' },
            { page: 'ddtAcquisto', title: 'DDT di Acquisto', chip: 'DA', icon: 'fa-truck-ramp-box' }
        ]
    },
    {
        key: 'prodotti',
        label: 'Prodotti',
        subtitle: 'Catalogo e stock',
        icon: 'fa-layer-group',
        accent: '#D97706',
        startAngle: 186,
        endAngle: 306,
        items: [
            { page: 'prodotti', title: 'Prodotti', chip: 'PR', icon: 'fa-lightbulb' },
            { page: 'distintaBase', title: 'Distinta Base', chip: 'DB', icon: 'fa-diagram-project' },
            { page: 'magazzino', title: 'Magazzino', chip: 'MG', icon: 'fa-warehouse' }
        ]
    }
];

const TOP_NAV_SECTION_CONFIG = [
    { key: 'commerciale', label: 'Commerciale', groups: ['vendite', 'acquisti'] },
    { key: 'operations', label: 'Operations', groups: ['prodotti'] }
];

function getTopNavSections() {
    const sections = TOP_NAV_SECTION_CONFIG.map(section => ({
        ...section,
        groups: section.groups.filter(groupKey => getRadialGroupByKey(groupKey))
    })).filter(section => section.groups.length > 0);

    const mappedGroupKeys = new Set(sections.flatMap(section => section.groups));
    const overflowGroups = RADIAL_MENU_GROUPS
        .filter(group => !mappedGroupKeys.has(group.key))
        .map(group => group.key);

    if (overflowGroups.length) {
        sections.push({ key: 'altro', label: 'Altre sezioni', groups: overflowGroups });
    }

    if (!sections.length) {
        sections.push({
            key: 'all',
            label: 'Tutte',
            groups: RADIAL_MENU_GROUPS.map(group => group.key)
        });
    }

    return sections;
}

function getTopNavSectionByGroup(groupKey) {
    return getTopNavSections().find(section => section.groups.includes(groupKey)) || null;
}

function syncTopNavSectionWithPage(page) {
    const activeGroupKey = getRadialGroupConfigByPage(page)?.key;
    const pageSection = getTopNavSectionByGroup(activeGroupKey);
    if (pageSection) {
        topNavActiveSection = pageSection.key;
    }
}

const RADIAL_MENU_GEOMETRY = {
    viewBox: 520,
    center: 260,
    groupInnerRadius: 132,
    groupOuterRadius: 198,
    groupLabelRadius: 164,
    itemInnerRadius: 197,
    itemOuterRadius: 242,
    itemLabelRadius: 221,
    itemMarkRadius: 210,
    itemGapAngle: 0,
    labelMarginAngle: 14
};

function normalizeAngle(angle) {
    return ((angle % 360) + 360) % 360;
}

function getClockwiseEndAngle(startAngle, endAngle) {
    let finalAngle = endAngle;
    while (finalAngle <= startAngle) {
        finalAngle += 360;
    }
    return finalAngle;
}

function getClockwiseSpan(startAngle, endAngle) {
    return getClockwiseEndAngle(startAngle, endAngle) - startAngle;
}

function getMidAngle(startAngle, endAngle) {
    return startAngle + (getClockwiseSpan(startAngle, endAngle) / 2);
}

function getRadialGroupConfigByPage(page) {
    return RADIAL_MENU_GROUPS.find(group => group.items.some(item => item.page === page)) || null;
}

function getRadialGroupByKey(groupKey) {
    return RADIAL_MENU_GROUPS.find(group => group.key === groupKey) || null;
}

function polarToCartesian(cx, cy, radius, angleDeg) {
    const radians = (angleDeg - 90) * Math.PI / 180;
    return {
        x: cx + (radius * Math.cos(radians)),
        y: cy + (radius * Math.sin(radians))
    };
}

function describeArc(cx, cy, radius, startAngle, endAngle) {
    const finalEndAngle = getClockwiseEndAngle(startAngle, endAngle);
    const start = polarToCartesian(cx, cy, radius, startAngle);
    const end = polarToCartesian(cx, cy, radius, finalEndAngle);
    const sweep = finalEndAngle - startAngle;
    const largeArcFlag = sweep > 180 ? 1 : 0;
    return [
        'M', start.x.toFixed(3), start.y.toFixed(3),
        'A', radius, radius, 0, largeArcFlag, 1, end.x.toFixed(3), end.y.toFixed(3)
    ].join(' ');
}

function describeDonutSegment(cx, cy, innerRadius, outerRadius, startAngle, endAngle) {
    const finalEndAngle = getClockwiseEndAngle(startAngle, endAngle);
    const sweep = finalEndAngle - startAngle;
    const largeArcFlag = sweep > 180 ? 1 : 0;
    const outerStart = polarToCartesian(cx, cy, outerRadius, startAngle);
    const outerEnd = polarToCartesian(cx, cy, outerRadius, finalEndAngle);
    const innerEnd = polarToCartesian(cx, cy, innerRadius, finalEndAngle);
    const innerStart = polarToCartesian(cx, cy, innerRadius, startAngle);
    return [
        `M ${outerStart.x.toFixed(3)} ${outerStart.y.toFixed(3)}`,
        `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEnd.x.toFixed(3)} ${outerEnd.y.toFixed(3)}`,
        `L ${innerEnd.x.toFixed(3)} ${innerEnd.y.toFixed(3)}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x.toFixed(3)} ${innerStart.y.toFixed(3)}`,
        'Z'
    ].join(' ');
}

function buildRadialItemText(item, x, y) {
    return `<text class="radial-item-label" x="${x.toFixed(3)}" y="${y.toFixed(3)}" dy="0.36em">${item.chip || ''}</text>`;
}

function buildRadialItemChip(item, x, y) {
    return [
        `<g class="radial-item-chip" transform="translate(${x.toFixed(3)} ${y.toFixed(3)})">`,
        '<circle class="radial-item-chip-shell" r="18"></circle>',
        `<text class="radial-item-chip-text" dy="0.36em">${item.chip || ''}</text>`,
        '</g>'
    ].join('');
}

function buildCommandMenuMarkup() {
    const activePage = paginaAttuale || DEFAULT_PAGE;
    const activeGroupKey = getRadialGroupConfigByPage(activePage)?.key || RADIAL_MENU_GROUPS[0].key;
    const expandedGroupKey = radialExpandedGroup || activeGroupKey;

    const tabsMarkup = RADIAL_MENU_GROUPS.map(group => {
        const isSelected = group.key === expandedGroupKey;
        const hasActivePage = group.key === activeGroupKey;
        return [
            `<button type="button" class="radial-group radial-group-tab${isSelected ? ' is-expanded' : ''}${hasActivePage ? ' has-active-page' : ''}" data-group="${group.key}" data-label="${group.label}" role="tab" aria-selected="${isSelected ? 'true' : 'false'}" style="--group-accent:${group.accent};">`,
                `<span class="radial-group-icon"><i class="fas ${group.icon}" aria-hidden="true"></i></span>`,
                `<span class="radial-group-copy"><span>${group.label}</span><small>${group.subtitle}</small></span>`,
            '</button>'
        ].join('');
    }).join('');

    const itemsMarkup = RADIAL_MENU_GROUPS.map(group => {
        const isGroupVisible = group.key === expandedGroupKey;
        return [
            `<div class="radial-item-group${isGroupVisible ? ' is-visible' : ''}" data-group-panel="${group.key}" aria-hidden="${isGroupVisible ? 'false' : 'true'}">`,
                `<div class="radial-submenu-caption"><span>Sotto-menu</span><strong>${group.label}</strong></div>`,
                group.items.map((item, index) => {
                    const isActive = item.page === activePage;
                    return [
                        `<button type="button" class="radial-item radial-item-card radial-item-${group.key}${isGroupVisible ? ' is-visible' : ''}${isActive ? ' active' : ''}" data-page="${item.page}" data-group="${group.key}" title="${item.title}" aria-label="${item.title}" style="--group-accent:${group.accent}; --radial-delay:${index * 36}ms;">`,
                            `<span class="radial-item-icon"><i class="fas ${item.icon}" aria-hidden="true"></i></span>`,
                            '<span class="radial-item-copy">',
                                `<span class="radial-item-title">${item.title}</span>`,
                                `<span class="radial-item-meta">${group.label}</span>`,
                            '</span>',
                            `<span class="radial-item-chip">${item.chip}</span>`,
                        '</button>'
                    ].join('');
                }).join(''),
            '</div>'
        ].join('');
    }).join('');

    return [
        '<div class="radial-menu-panel-inner">',
            '<div class="radial-menu-header">',
                '<div class="radial-menu-heading">',
                    '<span class="radial-menu-eyebrow">Navigazione rapida</span>',
                    '<strong id="radial-center-name">Menu CRM</strong>',
                    '<small id="radial-center-cat">Sezioni operative</small>',
                '</div>',
                '<button type="button" class="radial-center-action" onclick="cambiaPagina(\'impostazioni\')" title="Impostazioni CRM" aria-label="Apri impostazioni">',
                    '<i class="fas fa-gear" aria-hidden="true"></i>',
                '</button>',
            '</div>',
            `<div class="radial-group-tabs" role="tablist" aria-label="Categorie menu CRM">${tabsMarkup}</div>`,
            `<div class="radial-items-shell">${itemsMarkup}</div>`,
        '</div>'
    ].join('');
}

function renderTopNavMenu() {
    const host = document.getElementById('top-nav-menu');
    if (!host) return;
    const sections = getTopNavSections();
    if (!sections.some(section => section.key === topNavActiveSection)) {
        topNavActiveSection = sections[0].key;
    }
    const activeSection = sections.find(section => section.key === topNavActiveSection) || sections[0];
    const groupsToRender = activeSection.groups
        .map(groupKey => getRadialGroupByKey(groupKey))
        .filter(Boolean);
    const activePage = paginaAttuale || DEFAULT_PAGE;
    const activeGroup = getRadialGroupConfigByPage(activePage)?.key || RADIAL_MENU_GROUPS[0].key;
    host.innerHTML = `
        <div class="top-nav-shell ${topNavSectionsCollapsed ? 'is-sections-collapsed' : ''}">
            <div class="top-nav-sections" role="tablist" aria-label="Sezioni principali CRM">
                ${sections.map(section => `
                    <button type="button" class="top-nav-section-btn ${section.key === activeSection.key ? 'is-active' : ''}" data-nav-section="${section.key}" role="tab" aria-selected="${section.key === activeSection.key ? 'true' : 'false'}">
                        ${section.label}
                    </button>
                `).join('')}
            </div>
            <div class="top-nav-macros">
            ${groupsToRender.map(group => `
                <div class="top-nav-group ${group.key === topNavOpenGroup ? 'is-open' : ''}">
                    <button type="button" class="top-nav-macro ${group.key === activeGroup ? 'is-active' : ''}" data-nav-group="${group.key}" aria-expanded="${group.key === topNavOpenGroup ? 'true' : 'false'}" aria-controls="top-nav-dropdown-${group.key}">
                        <span class="top-nav-macro-leading">
                            <i class="fas ${group.icon}" aria-hidden="true"></i>
                            <span class="top-nav-macro-label">${group.label}</span>
                        </span>
                        <i class="fas fa-chevron-down top-nav-chevron" aria-hidden="true"></i>
                    </button>
                    <div class="top-nav-dropdown" id="top-nav-dropdown-${group.key}">
                        ${group.items.map(item => `
                            <button type="button" class="top-nav-sub ${item.page === activePage ? 'is-active' : ''}" data-nav-page="${item.page}">
                                <i class="fas ${item.icon}" aria-hidden="true"></i>
                                <span>${item.title}</span>
                                <small>${group.subtitle}</small>
                            </button>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
            </div>
        </div>
    `;
}

function toggleTopNavGroup(groupKey) {
    topNavOpenGroup = topNavOpenGroup === groupKey ? null : groupKey;
    renderTopNavMenu();
}

function handleTopNavDetailsToggle(groupKey, isOpen) {
    topNavOpenGroup = isOpen ? groupKey : null;
    if (!isOpen) return;
    document.querySelectorAll('.top-nav-group').forEach(el => {
        if (el.getAttribute('ontoggle')?.includes(`'${groupKey}'`)) return;
        el.open = false;
    });
}

function buildRadialMenuMarkup() {
    const activePage = paginaAttuale || DEFAULT_PAGE;
    const activeGroupKey = getRadialGroupConfigByPage(activePage)?.key || null;
    const expandedGroupKey = radialExpandedGroup || activeGroupKey || RADIAL_MENU_GROUPS[0].key;
    const geometry = RADIAL_MENU_GEOMETRY;
    const cx = geometry.center;
    const cy = geometry.center;
    const defs = [
        '<defs>',
        '<linearGradient id="radial-shell-fill-vendite" x1="10%" y1="8%" x2="100%" y2="100%">',
        '<stop offset="0%" stop-color="#17191d" />',
        '<stop offset="100%" stop-color="#0c0d10" />',
        '</linearGradient>',
        '<linearGradient id="radial-shell-fill-acquisti" x1="12%" y1="10%" x2="100%" y2="100%">',
        '<stop offset="0%" stop-color="#17191d" />',
        '<stop offset="100%" stop-color="#0c0d10" />',
        '</linearGradient>',
        '<linearGradient id="radial-shell-fill-prodotti" x1="8%" y1="8%" x2="100%" y2="100%">',
        '<stop offset="0%" stop-color="#17191d" />',
        '<stop offset="100%" stop-color="#0c0d10" />',
        '</linearGradient>',
        '<linearGradient id="radial-item-fill" x1="12%" y1="10%" x2="100%" y2="100%">',
        '<stop offset="0%" stop-color="#111316" />',
        '<stop offset="100%" stop-color="#0b0c0f" />',
        '</linearGradient>',
        '<linearGradient id="radial-item-hover-fill" x1="12%" y1="10%" x2="100%" y2="100%">',
        '<stop offset="0%" stop-color="#171a1f" />',
        '<stop offset="100%" stop-color="#0d1014" />',
        '</linearGradient>',
        '<linearGradient id="radial-active-fill" x1="0%" y1="0%" x2="100%" y2="100%">',
        '<stop offset="0%" stop-color="#1c1f23" />',
        '<stop offset="100%" stop-color="#131519" />',
        '</linearGradient>',
        '<radialGradient id="radial-center-fill" cx="50%" cy="38%" r="72%">',
        '<stop offset="0%" stop-color="#17191d" />',
        '<stop offset="100%" stop-color="#0d0f12" />',
        '</radialGradient>'
    ];
    const outerMarkup = [];
    const itemMarkup = [];

    RADIAL_MENU_GROUPS.forEach(group => {
        const shouldFlip = group.key === 'acquisti' || group.key === 'prodotti';
        const labelStart = shouldFlip
            ? normalizeAngle(group.endAngle - RADIAL_MENU_GEOMETRY.labelMarginAngle)
            : normalizeAngle(group.startAngle + RADIAL_MENU_GEOMETRY.labelMarginAngle);
        const labelEnd = shouldFlip
            ? normalizeAngle(group.startAngle + RADIAL_MENU_GEOMETRY.labelMarginAngle)
            : normalizeAngle(group.endAngle - RADIAL_MENU_GEOMETRY.labelMarginAngle);
        defs.push(`<path id="radial-group-path-${group.key}" d="${describeArc(cx, cy, geometry.groupLabelRadius, labelStart, labelEnd)}" />`);

        const groupHasActivePage = activeGroupKey === group.key;
        const groupIsExpanded = expandedGroupKey === group.key;
        outerMarkup.push(
            `<g class="radial-group${groupHasActivePage ? ' has-active-page' : ''}${groupIsExpanded ? ' is-expanded' : ''}" data-group="${group.key}" data-label="${group.label}" tabindex="0" role="button" title="${group.label}" aria-label="Apri ${group.label}">` +
                `<path class="radial-group-shell radial-group-shell-${group.key}" d="${describeDonutSegment(cx, cy, geometry.groupInnerRadius, geometry.groupOuterRadius, group.startAngle, group.endAngle)}"></path>` +
                `<text class="radial-group-label"><textPath href="#radial-group-path-${group.key}" startOffset="50%" text-anchor="middle">${group.label.toUpperCase()}</textPath></text>` +
            `</g>`
        );

        const totalSpan = getClockwiseSpan(group.startAngle, group.endAngle);
        const totalGap = (group.items.length - 1) * geometry.itemGapAngle;
        const itemSpan = (totalSpan - totalGap) / group.items.length;
        let cursorAngle = group.startAngle;

        group.items.forEach(item => {
            const segmentStart = cursorAngle;
            const segmentEnd = cursorAngle + itemSpan;
            const midAngle = getMidAngle(segmentStart, segmentEnd);
            const labelPoint = polarToCartesian(cx, cy, geometry.itemLabelRadius, midAngle);
            const markPoint = polarToCartesian(cx, cy, geometry.itemMarkRadius, midAngle);
            const enterVector = polarToCartesian(0, 0, 12, midAngle);
            const itemIsActive = activePage === item.page;
            const itemIsVisible = expandedGroupKey === group.key;
            const itemDelay = `${group.items.indexOf(item) * 34}ms`;

            itemMarkup.push(
                `<g class="radial-item radial-item-${group.key}${itemIsVisible ? ' is-visible' : ''}${itemIsActive ? ' active' : ''}" data-page="${item.page}" data-group="${group.key}" tabindex="0" role="button" title="${item.title}" aria-label="${item.title}" style="--radial-enter-x:${(-enterVector.x).toFixed(2)}px; --radial-enter-y:${(-enterVector.y).toFixed(2)}px; --radial-delay:${itemDelay};">` +
                    `<path class="radial-item-surface" d="${describeDonutSegment(cx, cy, geometry.itemInnerRadius, geometry.itemOuterRadius, segmentStart, segmentEnd)}"></path>` +
                    buildRadialItemChip(item, markPoint.x, markPoint.y) +
                    buildRadialItemText(item, labelPoint.x, labelPoint.y) +
                '</g>'
            );

            cursorAngle = segmentEnd + geometry.itemGapAngle;
        });
    });

    defs.push('</defs>');

    return [
        defs.join(''),
        `<circle class="radial-center-backdrop" cx="${cx}" cy="${cy}" r="${geometry.groupInnerRadius + 1}"></circle>`,
        `<circle class="radial-item-ring-backdrop" cx="${cx}" cy="${cy}" r="${((geometry.itemInnerRadius + geometry.itemOuterRadius) / 2).toFixed(3)}"></circle>`,
        `<circle class="radial-inner-ring-outline" cx="${cx}" cy="${cy}" r="${geometry.groupOuterRadius - 1}"></circle>`,
        `<circle class="radial-outer-ring-outline" cx="${cx}" cy="${cy}" r="${geometry.itemOuterRadius - 2}"></circle>`,
        outerMarkup.join(''),
        itemMarkup.join('')
    ].join('');
}

function syncRadialMenuState(page, options = {}) {
    const activeGroup = getRadialGroupConfigByPage(page)?.key || null;
    if (!radialExpandedGroup && !options.forceCollapsed) {
        radialExpandedGroup = activeGroup || RADIAL_MENU_GROUPS[0].key;
    }
    if (activeGroup && !options.keepExpandedSelection && !options.forceCollapsed) {
        radialExpandedGroup = activeGroup;
    }
    const expandedGroup = options.forceCollapsed ? null : (radialExpandedGroup || activeGroup || RADIAL_MENU_GROUPS[0].key);

    document.querySelectorAll('.radial-item').forEach(item => {
        const isVisible = expandedGroup && item.getAttribute('data-group') === expandedGroup;
        item.classList.toggle('is-visible', isVisible);
        item.classList.toggle('active', item.getAttribute('data-page') === page);
        item.setAttribute('tabindex', isVisible ? '0' : '-1');
        item.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
    });

    document.querySelectorAll('.radial-group').forEach(group => {
        const groupKey = group.getAttribute('data-group');
        group.classList.toggle('is-expanded', groupKey === expandedGroup);
        group.classList.toggle('has-active-page', groupKey === activeGroup);
        group.setAttribute('aria-selected', groupKey === expandedGroup ? 'true' : 'false');
    });

    document.querySelectorAll('.radial-item-group').forEach(groupPanel => {
        const groupKey = groupPanel.getAttribute('data-group-panel');
        const isVisible = expandedGroup && groupKey === expandedGroup;
        groupPanel.classList.toggle('is-visible', isVisible);
        groupPanel.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
    });
}

function setRadialExpandedGroup(groupKey) {
    const groupConfig = getRadialGroupByKey(groupKey);
    if (!groupConfig) return;
    animateRadialGroupSelection(groupKey);
    radialExpandedGroup = groupKey;
    syncRadialMenuState(paginaAttuale, { keepExpandedSelection: true });

    const centerCat = document.getElementById('radial-center-cat');
    const centerName = document.getElementById('radial-center-name');
    if (centerName) centerName.innerText = groupConfig.label;
    if (centerCat) centerCat.innerText = groupConfig.subtitle || 'Sezioni operative';
}

function animateRadialGroupSelection(groupKey) {
    const targetGroup = document.querySelector(`.radial-group[data-group="${groupKey}"]`);
    if (!targetGroup) return;
    targetGroup.classList.remove('is-clicked');
    void targetGroup.getBoundingClientRect();
    targetGroup.classList.add('is-clicked');
    window.clearTimeout(targetGroup._radialClickTimer);
    targetGroup._radialClickTimer = window.setTimeout(() => {
        targetGroup.classList.remove('is-clicked');
    }, 420);
}

function layoutRadialMenu() {
    const panel = document.getElementById('radial-menu-panel');
    const svg = document.getElementById('radial-wheel-svg');
    if (!panel && !svg) return;

    if (panel) {
        panel.innerHTML = buildCommandMenuMarkup();
        panel.dataset.rendered = 'true';
        initRadialHoverEffects();
        aggiornaTuttiBadgeSidebar();
        syncRadialMenuState(paginaAttuale || DEFAULT_PAGE);
        return;
    }

    if (svg.dataset.rendered !== 'true') {
        svg.innerHTML = buildRadialMenuMarkup();
        svg.dataset.rendered = 'true';
        initRadialHoverEffects();
        aggiornaTuttiBadgeSidebar();
    }

    syncRadialMenuState(paginaAttuale || DEFAULT_PAGE);
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 4. LIFECYCLE ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
document.addEventListener('DOMContentLoaded', async () => {
    applyTheme(getSavedTheme());
    clearLegacyDatasetsFromLocal();
    const loadedFromApi = await loadDatasetsFromApi();
    wireDatasetAutoPersist();
    const restoredFromLocal = loadedFromApi ? false : restoreDatasetsFromLocal();
    if (!loadedFromApi && !restoredFromLocal) {
        const seed = await loadStaticSeedDatasets();
        if (seed) {
            Object.keys(DATASETS).forEach(key => {
                const source = Array.isArray(seed[key]) ? seed[key] : [];
                DATASETS[key].splice(0, DATASETS[key].length, ...JSON.parse(JSON.stringify(source)));
            });
            lastSyncedDatasetsSignature = '';
            await saveDatasetsToApiIfChanged();
        }
        saveDatasetsToLocal();
    }
    initSidebarState();
    aggiornaTuttiBadgeSidebar();
    layoutRadialMenu();
    renderTopNavMenu();
    bindTopNavEvents();
    initRadialHoverEffects(); // Inizializza gli effetti hover sul menu radiale
    cambiaPagina(restoreCurrentPageState());
    setInterval(() => {
        saveDatasetsToLocal();
        saveDatasetsToApiIfChanged();
    }, 2500);
    window.addEventListener('beforeunload', saveDatasetsToLocal);
    document.addEventListener('pointerdown', (event) => {
        const clickedSidebar = event.target.closest('.app-sidebar');
        const clickedSubmenu = event.target.closest('#app-sidebar-submenu');
        if (!clickedSidebar && !clickedSubmenu) {
            renderSidebarSubmenu(null);
        }
        if (!event.target.closest('.kpi-mini-item')) {
            document.querySelectorAll('.kpi-mini-item.open').forEach(el => el.classList.remove('open'));
        }
    });
    
    // Gestione ESC e Scorciatoie da Tastiera
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            chiudiSidebarMobile();
            chiudiMobileSearch();
            chiudiModalGeneric();
            chiudiModalCsv();
            chiudiModalInterazione();
            chiudiCrmDrawer(); // Chiude il drawer laterale su ESC

            const hub = document.getElementById('command-hub');
            const trigger = hub?.querySelector('.hub-trigger');
            const ring = document.getElementById('radial-nav-ring');
            if (hub?.classList.contains('active')) {
                hub.classList.remove('active');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
                if (ring) ring.setAttribute('aria-hidden', 'true');
                syncRadialMenuState(paginaAttuale || DEFAULT_PAGE, { forceCollapsed: true });
            }
        }

        // Shortcut Ctrl+K / Cmd+K per attivare la Ricerca Universale
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('universal-search');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
    });

    document.addEventListener('click', (e) => {
        const menuHost = document.getElementById('top-nav-menu');
        if (!menuHost) return;
        if (!menuHost.contains(e.target)) {
            topNavOpenGroup = null;
            renderTopNavMenu();
        }
    });
});

function bindTopNavEvents() {
    if (topNavEventsBound) return;
    topNavEventsBound = true;
    document.addEventListener('click', (e) => {
        const sectionBtn = e.target.closest('.top-nav-section-btn');
        if (sectionBtn) {
            e.stopImmediatePropagation();
            const sectionKey = sectionBtn.getAttribute('data-nav-section');
            if (sectionKey) {
                topNavActiveSection = sectionKey;
                topNavOpenGroup = null;
                renderTopNavMenu();
                return;
            }
        }
        const macroBtn = e.target.closest('.top-nav-macro');
        if (macroBtn) {
            e.stopImmediatePropagation();
            const groupKey = macroBtn.getAttribute('data-nav-group');
            if (groupKey) {
                toggleTopNavGroup(groupKey);
                return;
            }
        }
        const subBtn = e.target.closest('.top-nav-sub');
        if (subBtn) {
            e.stopImmediatePropagation();
            const page = subBtn.getAttribute('data-nav-page');
            if (page) {
                cambiaPagina(page);
                return;
            }
        }
    });
}

function handleTopHeaderMenuAction() {
    if (isMobileViewport()) {
        toggleSidebar();
        return;
    }
    topNavSectionsCollapsed = !topNavSectionsCollapsed;
    topNavOpenGroup = null;
    renderTopNavMenu();
}

// Router SPA
function cambiaPagina(page) {
    if (!isKnownPage(page)) page = DEFAULT_PAGE;
    paginaAttuale = page;
    editingRecordId = null;
    timelineClienteSelezionatoId = null;
    if (page !== 'timeline_dettagli') {
        window.dettagliClienteIdAttivo = null;
    }
    persistCurrentPageState(page);
    
    // Resetta ricerca
    document.getElementById('universal-search').value = '';
    const mobSearch = document.getElementById('mobile-search');
    if (mobSearch) mobSearch.value = '';
    ricercaQuery = '';
    chiudiMobileSearch();
    
    const selector = `[data-sidebar-page="${page}"]`;
    dismissSidebarBadge(selector);

    // Sincronizzazione active class sul menu radiale e rotazione ruota
    const radialCenterAction = document.querySelector('.radial-center-action');
    syncRadialMenuState(page);

    if (radialCenterAction) {
        radialCenterAction.classList.toggle('active', page === 'impostazioni');
    }

    updateRadialCenter(page);
    syncSidebarActiveState(page);
    topNavOpenGroup = null;
    syncTopNavSectionWithPage(page);
    renderTopNavMenu();

    // Richiude l'hub radiale dopo la selezione
    const hub = document.getElementById('command-hub');
    if (hub) {
        hub.classList.remove('active');
        const trigger = hub.querySelector('.hub-trigger');
        const ring = document.getElementById('radial-nav-ring');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
        if (ring) ring.setAttribute('aria-hidden', 'true');
        syncRadialMenuState(page, { forceCollapsed: true });
    }

    const titleElMobile = document.getElementById('titolo-pagina');
    const contentEl = document.getElementById('contenitore-dati');
    
    contentEl.innerHTML = '';
    contentEl.className = '';
    void contentEl.offsetWidth;
    contentEl.className = 'fade-in';

    chiudiSidebarMobile();

    if (TABLE_CONFIGS[page]) {
        if (titleElMobile) titleElMobile.innerText = cleanUiText(TABLE_CONFIGS[page].title);
        renderDatabaseTable(contentEl, page);
    } else if (page === 'dashboard_operativa') {
        if (titleElMobile) titleElMobile.innerText = "Dashboard Operativa";
        renderDashboardOperativa(contentEl);
    } else if (page === 'record_dettaglio' && recordDetailContext?.page && recordDetailContext?.id) {
        if (titleElMobile) titleElMobile.innerText = "Scheda Record";
        renderRecordDettaglio(contentEl, recordDetailContext.page, recordDetailContext.id);
    } else if (page === 'scrematura_prodotti') {
        if (titleElMobile) titleElMobile.innerText = "Scrematura Prodotti";
        renderScrematuraProdottiPage(contentEl);
    } else if (page === 'timeline_dettagli' && window.dettagliClienteIdAttivo) {
        const cliente = DATASETS.clienti.find(c => c.id === window.dettagliClienteIdAttivo);
        if (cliente) {
            if (titleElMobile) titleElMobile.innerText = cliente.azienda;
            renderTimelineDettaglio(contentEl, cliente);
        } else {
            cambiaPagina('clienti');
        }
    } else if (page === 'impostazioni') {
        if (titleElMobile) titleElMobile.innerText = "Impostazioni / CSV";
        renderImpostazioni(contentEl);
    } else if (page === 'analisiDati') {
        if (titleElMobile) titleElMobile.innerText = "Analisi Dati";
        renderAnalisiDati(contentEl);
    }
}

function apriRecordDettaglio(pageName, recordId) {
    apriCrmDrawer(pageName, recordId);
}

function getRecordByPage(pageName, recordId) {
    const rows = DATASETS[pageName] || [];
    return rows.find(item => item.id === recordId) || null;
}

function getClientRelatedRecords(clientId) {
    return {
        segnalazioni: DATASETS.segnalazioni.filter(item => item.cliente === clientId),
        preventivi: DATASETS.preventivi.filter(item => item.cliente === clientId),
        ordiniVendita: DATASETS.ordiniVendita.filter(item => item.cliente === clientId),
        ddtVendita: DATASETS.ddtVendita.filter(item => item.cliente === clientId)
    };
}

function renderCompactRelationList(items, options = {}) {
    const { emptyLabel = 'Nessun record collegato', pageName = '' } = options;
    if (!items?.length) return `<div class="dashboard-empty">${emptyLabel}</div>`;
    return `
        <div class="relation-list">
            ${items.map(item => `
                <button type="button" class="relation-row" onclick="${pageName === 'clienti' ? `apriVisualizzazioneTimeline('${item.id}')` : `apriRecordDettaglio('${pageName}', '${item.id}')`}">
                    <div>
                        <strong>${cleanUiText(item.numero || item.titolo || item.nome || item.azienda || item.id)}</strong>
                        <small>${cleanUiText(mappaNomeStato(item.stato || item.statoPagamento || ''))}</small>
                    </div>
                    <span>${formatCrmMoney(item.totale || item.valore || 0)}</span>
                </button>
            `).join('')}
        </div>
    `;
}

function renderClientSummaryCards(cliente) {
    const related = getClientRelatedRecords(cliente.id);
    const timelineCount = Array.isArray(cliente.timeline) ? cliente.timeline.length : 0;
    const items = [
        { label: 'Interazioni', value: formatCompactNumber(timelineCount), detail: 'Touchpoint registrati' },
        { label: 'Preventivi', value: formatCompactNumber(related.preventivi.length), detail: 'Offerte emesse' },
        { label: 'Ordini', value: formatCompactNumber(related.ordiniVendita.length), detail: 'Ordini di vendita' },
        { label: 'DDT', value: formatCompactNumber(related.ddtVendita.length), detail: 'Spedizioni collegate' }
    ];
    return `
        <div class="dashboard-metric-grid dashboard-metric-grid--compact">
            ${items.map(item => `
                <article class="dashboard-metric-card">
                    <div class="dashboard-metric-copy">
                        <span class="dashboard-metric-label">${item.label}</span>
                        <strong class="dashboard-metric-value">${item.value}</strong>
                        <span class="dashboard-metric-subtext">${item.detail}</span>
                    </div>
                </article>
            `).join('')}
        </div>
    `;
}

function getRecordContextPanels(pageName, record) {
    if (pageName === 'preventivi') {
        const cliente = DATASETS.clienti.find(item => item.id === record.cliente);
        return {
            leftTitle: 'Cliente collegato',
            leftBody: cliente
                ? `<div class="relation-card"><strong>${cliente.azienda}</strong><small>${cliente.nome || ''}</small><button type="button" class="btn-dark dashboard-mini-btn" onclick="apriVisualizzazioneTimeline('${cliente.id}')">Apri scheda</button></div>`
                : '<div class="dashboard-empty">Cliente non disponibile.</div>',
            rightTitle: 'Controlli operativi',
            rightBody: `
                <div class="record-checklist">
                    <div class="record-checklist__item ${record.stato === 'inviato' || record.stato === 'accettato' ? 'is-done' : ''}">Preventivo inviato al cliente</div>
                    <div class="record-checklist__item ${daysFromToday(record.dataScadenza) !== null && daysFromToday(record.dataScadenza) >= 0 ? 'is-done' : 'is-danger'}">Scadenza ancora valida</div>
                    <div class="record-checklist__item ${Array.isArray(record.righe) && record.righe.length ? 'is-done' : 'is-danger'}">Righe documento valorizzate</div>
                </div>
            `
        };
    }
    if (pageName === 'ordiniVendita') {
        const cliente = DATASETS.clienti.find(item => item.id === record.cliente);
        const linkedDdt = DATASETS.ddtVendita.filter(item => item.ordineRif === record.numero);
        return {
            leftTitle: 'Cliente e spedizioni',
            leftBody: `
                ${cliente ? `<div class="relation-card"><strong>${cliente.azienda}</strong><small>${cliente.nome || ''}</small><button type="button" class="btn-dark dashboard-mini-btn" onclick="apriVisualizzazioneTimeline('${cliente.id}')">Apri cliente</button></div>` : '<div class="dashboard-empty">Cliente non disponibile.</div>'}
                ${renderCompactRelationList(linkedDdt, { emptyLabel: 'Nessun DDT collegato', pageName: 'ddtVendita' })}
            `,
            rightTitle: 'Controlli operativi',
            rightBody: `
                <div class="record-checklist">
                    <div class="record-checklist__item ${record.statoPagamento === 'pagato' ? 'is-done' : record.statoPagamento === 'parziale' ? 'is-warning' : 'is-danger'}">Stato pagamento: ${record.statoPagamento || 'non definito'}</div>
                    <div class="record-checklist__item ${daysFromToday(record.dataConsegna) !== null && daysFromToday(record.dataConsegna) >= 0 ? 'is-done' : 'is-danger'}">Data consegna monitorata</div>
                    <div class="record-checklist__item ${linkedDdt.length ? 'is-done' : 'is-warning'}">Presenza documenti di trasporto</div>
                </div>
            `
        };
    }
    if (pageName === 'prodotti') {
        const stock = DATASETS.magazzino.find(item => item.prodotto === record.id);
        const bom = DATASETS.distintaBase.find(item => item.prodotto === record.id);
        return {
            leftTitle: 'Contesto articolo',
            leftBody: `
                <div class="relation-card"><strong>Magazzino</strong><small>${stock ? `${stock.quantita} unita disponibili` : 'Nessuna giacenza collegata'}</small></div>
                <div class="relation-card"><strong>Distinta base</strong><small>${bom ? 'Presente e configurata' : 'Nessuna BOM collegata'}</small></div>
            `,
            rightTitle: 'Controlli operativi',
            rightBody: `
                <div class="record-checklist">
                    <div class="record-checklist__item ${toFiniteNumber(record.prezzoVendita) > 0 ? 'is-done' : 'is-danger'}">Prezzo vendita valorizzato</div>
                    <div class="record-checklist__item ${toFiniteNumber(record.prezzoAcquisto) > 0 ? 'is-done' : 'is-danger'}">Prezzo acquisto valorizzato</div>
                    <div class="record-checklist__item ${stock ? 'is-done' : 'is-warning'}">Record magazzino presente</div>
                </div>
            `
        };
    }
    return null;
}

function renderRecordDettaglio(container, pageName, recordId) {
    const record = getRecordByPage(pageName, recordId);
    if (!record) {
        container.innerHTML = `
            <div class="crm-page-header">
                <div class="crm-header-card">
                    <div class="crm-header-info">
                        <span class="crm-header-eyebrow">Record</span>
                        <h2 class="crm-header-title">Scheda non disponibile</h2>
                    </div>
                    <div class="crm-header-actions">
                        <button class="btn-primary" onclick="cambiaPagina('${pageName}')">Torna al modulo</button>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    const title = record.numero || record.nome || record.azienda || record.titolo || record.codice || record.id;
    const rows = Array.isArray(record.righe) ? record.righe : [];
    const linkedName = record.cliente
        ? (DATASETS.clienti.find(item => item.id === record.cliente)?.azienda || 'Cliente')
        : record.fornitore
            ? (DATASETS.fornitori.find(item => item.id === record.fornitore)?.nome || 'Fornitore')
            : '';

    const detailStats = [
        { label: 'Stato', value: mappaNomeStato(record.stato || record.statoQualifica || record.statoPagamento || 'attivo') },
        { label: 'Valore', value: formatCrmMoney(record.totale || record.valore || record.valoreFIFO || record.prezzoVendita || 0) },
        { label: 'Righe', value: formatCompactNumber(rows.length) },
        { label: 'Prossima scadenza', value: formatRelativeDays(daysFromToday(record.dataScadenza || record.dataConsegna || record.data || '')) }
    ];
    const contextPanels = getRecordContextPanels(pageName, record);

    container.innerHTML = `
        <section class="crm-workbench">
            <div class="crm-page-header">
                <div class="crm-header-card">
                    <div class="crm-header-info">
                        <span class="crm-header-eyebrow">Scheda record</span>
                        <h2 class="crm-header-title">${cleanUiText(title)}</h2>
                        <p class="crm-header-subtitle">${cleanUiText(TABLE_CONFIGS[pageName]?.title || pageName)}${linkedName ? ` · ${linkedName}` : ''}</p>
                    </div>
                    <div class="crm-header-actions">
                        <button class="btn-secondary" onclick="stampaDocumento('${pageName}', '${record.id}')"><i class="fas fa-print"></i> Stampa</button>
                        <button class="btn-secondary" onclick="cambiaPagina('${pageName}')"><i class="fas fa-chevron-left"></i> Torna al modulo</button>
                        <button class="btn-primary" onclick="apriModalGenericModifica('${record.id}')"><i class="fas fa-pen"></i> Modifica</button>
                    </div>
                </div>
            </div>
            <div class="dashboard-metric-grid">
                ${detailStats.map(item => `
                    <article class="dashboard-metric-card">
                        <div class="dashboard-metric-copy">
                            <span class="dashboard-metric-label">${item.label}</span>
                            <strong class="dashboard-metric-value">${item.value}</strong>
                        </div>
                    </article>
                `).join('')}
            </div>
            <div class="dashboard-grid">
                <section class="dashboard-panel">
                    <div class="dashboard-panel-head">
                        <div>
                            <span class="dashboard-panel-eyebrow">Contesto</span>
                            <h3>Dati principali</h3>
                        </div>
                    </div>
                    <div class="record-detail-grid">
                        ${Object.entries(record)
                            .filter(([key, value]) => !['id', 'righe', 'timeline'].includes(key) && value !== undefined && value !== null && value !== '')
                            .slice(0, 14)
                            .map(([key, value]) => `
                                <div class="record-detail-item">
                                    <span>${cleanUiText(key)}</span>
                                    <strong>${Array.isArray(value) ? value.length : value}</strong>
                                </div>
                            `).join('')}
                    </div>
                </section>
                <section class="dashboard-panel">
                    <div class="dashboard-panel-head">
                        <div>
                            <span class="dashboard-panel-eyebrow">Azioni consigliate</span>
                            <h3>Next actions</h3>
                        </div>
                    </div>
                    <div class="dashboard-task-list">
                        ${renderRecordActionSuggestions(pageName, record)}
                    </div>
                </section>
            </div>
            ${contextPanels ? `
                <div class="dashboard-grid">
                    <section class="dashboard-panel">
                        <div class="dashboard-panel-head">
                            <div>
                                <span class="dashboard-panel-eyebrow">Relazioni</span>
                                <h3>${contextPanels.leftTitle}</h3>
                            </div>
                        </div>
                        ${contextPanels.leftBody}
                    </section>
                    <section class="dashboard-panel">
                        <div class="dashboard-panel-head">
                            <div>
                                <span class="dashboard-panel-eyebrow">Verifica</span>
                                <h3>${contextPanels.rightTitle}</h3>
                            </div>
                        </div>
                        ${contextPanels.rightBody}
                    </section>
                </div>
            ` : ''}
            ${rows.length ? `
                <section class="dashboard-panel">
                    <div class="dashboard-panel-head">
                        <div>
                            <span class="dashboard-panel-eyebrow">Contenuto</span>
                            <h3>Righe documento</h3>
                        </div>
                    </div>
                    <div class="record-lines-table">
                        <table class="crm-table">
                            <thead>
                                <tr><th>Prodotto</th><th>Quantita</th><th>Prezzo</th><th>IVA</th></tr>
                            </thead>
                            <tbody>
                                ${rows.map(line => {
                                    const prodotto = DATASETS.prodotti.find(item => item.id === line.prodotto);
                                    return `
                                        <tr>
                                            <td>${prodotto?.codice || line.prodotto}<div class="client-company-sub">${prodotto?.nome || line.descrizione || ''}</div></td>
                                            <td>${line.quantita || 0}</td>
                                            <td>${formatCrmMoney(line.prezzo || 0)}</td>
                                            <td>${line.iva || 0}%</td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </section>
            ` : ''}
        </section>
    `;
}

function renderRecordActionSuggestions(pageName, record) {
    const items = [];
    if (pageName === 'preventivi' && record.stato !== 'accettato') {
        items.push(`<div class="dashboard-task-row"><div><strong>Converti il preventivo</strong><span>Se il cliente conferma, genera subito l'ordine di vendita.</span></div><button type="button" class="btn-dark dashboard-mini-btn" onclick="convertiPreventivoInOrdine('${record.id}')">Crea ordine</button></div>`);
    }
    if (pageName === 'ordiniVendita' && !['spedito', 'consegnato'].includes(record.stato)) {
        items.push(`<div class="dashboard-task-row"><div><strong>Prepara evasione</strong><span>Controlla disponibilita, consegna e pagamento prima di creare il DDT.</span></div><button type="button" class="btn-dark dashboard-mini-btn" onclick="convertiOrdineInDDT('${record.id}')">Genera DDT</button></div>`);
    }
    if (pageName === 'prodotti') {
        items.push(`<div class="dashboard-task-row"><div><strong>Verifica copertura stock</strong><span>Controlla distinta base, prezzo e disponibilita di magazzino collegata.</span></div><button type="button" class="btn-dark dashboard-mini-btn" onclick="cambiaPagina('magazzino')">Apri magazzino</button></div>`);
    }
    if (!items.length) {
        items.push('<div class="dashboard-empty">Nessuna azione guidata disponibile per questo record.</div>');
    }
    return items.join('');
}

function getDashboardSummaryMetrics() {
    const openLeads = DATASETS.clienti.filter(item => !['vinto', 'perso'].includes(item.stato)).length;
    const openQuotes = DATASETS.preventivi.filter(item => !['accettato', 'rifiutato'].includes(item.stato)).length;
    const activeOrders = DATASETS.ordiniVendita.filter(item => !['spedito', 'consegnato'].includes(item.stato)).length;
    const criticalStock = DATASETS.magazzino.filter(item => toFiniteNumber(item.quantita) <= toFiniteNumber(item.quantitaMinima || 0)).length;
    const forecastValue = DATASETS.preventivi
        .filter(item => !['rifiutato'].includes(item.stato))
        .reduce((sum, item) => sum + toFiniteNumber(item.totale), 0);
    const portfolioValue = DATASETS.ordiniVendita
        .filter(item => !['consegnato'].includes(item.stato))
        .reduce((sum, item) => sum + toFiniteNumber(item.totale), 0);

    return [
        { label: 'Lead aperti', value: formatCompactNumber(openLeads), subtext: 'Clienti ancora in pipeline', icon: 'fa-user-plus' },
        { label: 'Preventivi attivi', value: formatCompactNumber(openQuotes), subtext: 'Offerte da seguire', icon: 'fa-file-signature' },
        { label: 'Portafoglio ordini', value: formatCrmMoney(portfolioValue), subtext: `${activeOrders} ordini non chiusi`, icon: 'fa-box-open' },
        { label: 'Forecast commerciale', value: formatCrmMoney(forecastValue), subtext: `${criticalStock} scorte critiche`, icon: 'fa-chart-line' }
    ];
}

function getDashboardAlerts() {
    const alerts = [];

    DATASETS.preventivi.forEach(item => {
        if (['accettato', 'rifiutato'].includes(item.stato)) return;
        const days = daysFromToday(item.dataScadenza);
        if (days !== null && days <= 3) {
            const cliente = DATASETS.clienti.find(c => c.id === item.cliente);
            alerts.push({
                tone: days < 0 ? 'critical' : 'warning',
                title: `Preventivo ${item.numero} in scadenza`,
                detail: `${cliente?.azienda || 'Cliente'} · ${formatRelativeDays(days)}`,
                cta: 'Apri preventivi',
                page: 'preventivi'
            });
        }
    });

    DATASETS.ordiniVendita.forEach(item => {
        if (['spedito', 'consegnato'].includes(item.stato)) return;
        const days = daysFromToday(item.dataConsegna);
        if (days !== null && days <= 2) {
            const cliente = DATASETS.clienti.find(c => c.id === item.cliente);
            alerts.push({
                tone: days < 0 ? 'critical' : 'info',
                title: `Ordine ${item.numero} vicino consegna`,
                detail: `${cliente?.azienda || 'Cliente'} · ${formatRelativeDays(days)}`,
                cta: 'Apri ordini',
                page: 'ordiniVendita'
            });
        }
    });

    DATASETS.magazzino.forEach(item => {
        if (toFiniteNumber(item.quantita) > toFiniteNumber(item.quantitaMinima || 0)) return;
        const prodotto = DATASETS.prodotti.find(p => p.id === item.prodotto);
        alerts.push({
            tone: 'critical',
            title: `Scorta critica ${prodotto?.codice || 'Articolo'}`,
            detail: `${prodotto?.nome || 'Prodotto'} · ${toFiniteNumber(item.quantita)} disponibili`,
            cta: 'Apri magazzino',
            page: 'magazzino'
        });
    });

    return alerts.slice(0, 6);
}

function getDashboardFocusActions() {
    const actions = [];

    DATASETS.clienti
        .filter(item => ['lead', 'contattato', 'offerta', 'trattativa'].includes(item.stato))
        .sort((a, b) => toFiniteNumber(b.valore) - toFiniteNumber(a.valore))
        .slice(0, 4)
        .forEach(item => {
            actions.push({
                title: item.azienda,
                meta: `${mappaNomeStato(item.stato)} · ${formatCrmMoney(item.valore || 0)}`,
                action: 'Apri scheda cliente',
                handler: `apriVisualizzazioneTimeline('${item.id}')`
            });
        });

    DATASETS.ordiniVendita
        .filter(item => item.statoPagamento === 'nonpagato' || item.statoPagamento === 'parziale')
        .slice(0, 4)
        .forEach(item => {
            const cliente = DATASETS.clienti.find(c => c.id === item.cliente);
            actions.push({
                title: `${item.numero} da presidiare`,
                meta: `${cliente?.azienda || 'Cliente'} · ${item.statoPagamento === 'parziale' ? 'Pagamento parziale' : 'Non pagato'}`,
                action: 'Apri ordini',
                handler: `cambiaPagina('ordiniVendita')`
            });
        });

    return actions.slice(0, 8);
}

function getDashboardPipelineCards() {
    return [
        {
            title: 'Commerciale',
            value: formatCompactNumber(DATASETS.clienti.filter(item => !['vinto', 'perso'].includes(item.stato)).length),
            detail: 'Lead e trattative aperte',
            page: 'clienti',
            icon: 'fa-user-group'
        },
        {
            title: 'Offerte',
            value: formatCompactNumber(DATASETS.preventivi.filter(item => !['accettato', 'rifiutato'].includes(item.stato)).length),
            detail: 'Preventivi da convertire',
            page: 'preventivi',
            icon: 'fa-file-signature'
        },
        {
            title: 'Consegne',
            value: formatCompactNumber(DATASETS.ordiniVendita.filter(item => !['spedito', 'consegnato'].includes(item.stato)).length),
            detail: 'Ordini da preparare',
            page: 'ordiniVendita',
            icon: 'fa-truck-fast'
        },
        {
            title: 'Supply',
            value: formatCompactNumber(DATASETS.ordiniAcquisto.filter(item => item.stato !== 'ricevuto').length),
            detail: 'Acquisti da seguire',
            page: 'ordiniAcquisto',
            icon: 'fa-receipt'
        }
    ];
}

function renderDashboardModuleHighlights() {
    const modules = [
        {
            title: 'Commerciale',
            subtitle: 'Lead aperti e trattative',
            stats: `${DATASETS.clienti.filter(item => !['vinto', 'perso'].includes(item.stato)).length} account`,
            page: 'clienti'
        },
        {
            title: 'Preventivi',
            subtitle: 'Offerte da chiudere',
            stats: `${DATASETS.preventivi.filter(item => !['accettato', 'rifiutato'].includes(item.stato)).length} in corso`,
            page: 'preventivi'
        },
        {
            title: 'Operations',
            subtitle: 'Ordini da evadere',
            stats: `${DATASETS.ordiniVendita.filter(item => !['spedito', 'consegnato'].includes(item.stato)).length} ordini`,
            page: 'ordiniVendita'
        },
        {
            title: 'Supply',
            subtitle: 'Scorte e acquisti',
            stats: `${DATASETS.magazzino.filter(item => toFiniteNumber(item.quantita) <= toFiniteNumber(item.quantitaMinima || 0)).length} criticita`,
            page: 'magazzino'
        }
    ];
    return `
        <div class="dashboard-module-grid">
            ${modules.map(item => `
                <button type="button" class="dashboard-module-card" onclick="cambiaPagina('${item.page}')">
                    <span>${item.title}</span>
                    <strong>${item.subtitle}</strong>
                    <small>${item.stats}</small>
                </button>
            `).join('')}
        </div>
    `;
}

function renderDashboardOperativa(container) {
    const metrics = getDashboardSummaryMetrics();
    const alerts = getDashboardAlerts();
    const focusActions = getDashboardFocusActions();
    const pipelines = getDashboardPipelineCards();

    container.innerHTML = `
        <section class="crm-workbench dashboard-operativa">
            <div class="crm-page-header">
                <div class="crm-header-card">
                    <div class="crm-header-info">
                        <span class="crm-header-eyebrow">Workspace CRM</span>
                        <h2 class="crm-header-title">Dashboard Operativa</h2>
                        <p class="crm-header-subtitle">Una home unica per capire priorita, eccezioni, pipeline e prossime azioni prima di entrare nei moduli.</p>
                    </div>
                    <div class="crm-header-actions">
                        <button class="btn-secondary" onclick="cambiaPagina('analisiDati')">
                            <i class="fas fa-chart-column"></i> Apri Analisi
                        </button>
                        <button class="btn-primary" onclick="cambiaPagina('clienti')">
                            <i class="fas fa-arrow-right"></i> Vai al CRM
                        </button>
                    </div>
                </div>
            </div>

            <div class="dashboard-metric-grid">
                ${metrics.map(metric => `
                    <article class="dashboard-metric-card">
                        <div class="dashboard-metric-icon"><i class="fas ${metric.icon}" aria-hidden="true"></i></div>
                        <div class="dashboard-metric-copy">
                            <span class="dashboard-metric-label">${metric.label}</span>
                            <strong class="dashboard-metric-value">${metric.value}</strong>
                            <span class="dashboard-metric-subtext">${metric.subtext}</span>
                        </div>
                    </article>
                `).join('')}
            </div>

            ${renderDashboardModuleHighlights()}

            <div class="dashboard-grid">
                <section class="dashboard-panel">
                    <div class="dashboard-panel-head">
                        <div>
                            <span class="dashboard-panel-eyebrow">Priorita</span>
                            <h3>Eccezioni da presidiare</h3>
                        </div>
                        <button type="button" class="dashboard-inline-link" onclick="cambiaPagina('ordiniVendita')">Apri operativita</button>
                    </div>
                    <div class="dashboard-alert-list">
                        ${alerts.length ? alerts.map(alert => `
                            <button type="button" class="dashboard-alert-card tone-${alert.tone}" onclick="cambiaPagina('${alert.page}')">
                                <span class="dashboard-alert-title">${alert.title}</span>
                                <span class="dashboard-alert-detail">${alert.detail}</span>
                                <span class="dashboard-alert-cta">${alert.cta}</span>
                            </button>
                        `).join('') : '<div class="dashboard-empty">Nessuna eccezione critica sui dati correnti.</div>'}
                    </div>
                </section>

                <section class="dashboard-panel">
                    <div class="dashboard-panel-head">
                        <div>
                            <span class="dashboard-panel-eyebrow">Focus del giorno</span>
                            <h3>Work queue commerciale</h3>
                        </div>
                        <button type="button" class="dashboard-inline-link" onclick="cambiaPagina('clienti')">Apri clienti</button>
                    </div>
                    <div class="dashboard-task-list">
                        ${focusActions.length ? focusActions.map(item => `
                            <div class="dashboard-task-row">
                                <div>
                                    <strong>${item.title}</strong>
                                    <span>${item.meta}</span>
                                </div>
                                <button type="button" class="btn-dark dashboard-mini-btn" onclick="${item.handler}">
                                    ${item.action}
                                </button>
                            </div>
                        `).join('') : '<div class="dashboard-empty">Nessuna attivita suggerita con i dati attuali.</div>'}
                    </div>
                </section>
            </div>

            <div class="dashboard-grid">
                <section class="dashboard-panel">
                    <div class="dashboard-panel-head">
                        <div>
                            <span class="dashboard-panel-eyebrow">Pipeline</span>
                            <h3>Flussi principali</h3>
                        </div>
                    </div>
                    <div class="dashboard-pipeline-grid">
                        ${pipelines.map(item => `
                            <button type="button" class="dashboard-pipeline-card" onclick="cambiaPagina('${item.page}')">
                                <i class="fas ${item.icon}" aria-hidden="true"></i>
                                <strong>${item.title}</strong>
                                <span>${item.value}</span>
                                <small>${item.detail}</small>
                            </button>
                        `).join('')}
                    </div>
                </section>

                <section class="dashboard-panel">
                    <div class="dashboard-panel-head">
                        <div>
                            <span class="dashboard-panel-eyebrow">Azioni rapide</span>
                            <h3>Entrate operative</h3>
                        </div>
                    </div>
                    <div class="dashboard-quick-actions">
                        <button type="button" class="dashboard-quick-action" onclick="cambiaPagina('segnalazioni')"><i class="fas fa-bullseye"></i><span>Nuove opportunita</span></button>
                        <button type="button" class="dashboard-quick-action" onclick="cambiaPagina('preventivi')"><i class="fas fa-file-signature"></i><span>Preventivi</span></button>
                        <button type="button" class="dashboard-quick-action" onclick="cambiaPagina('ordiniVendita')"><i class="fas fa-box-open"></i><span>Ordini vendita</span></button>
                        <button type="button" class="dashboard-quick-action" onclick="cambiaPagina('magazzino')"><i class="fas fa-warehouse"></i><span>Scorte</span></button>
                        <button type="button" class="dashboard-quick-action" onclick="cambiaPagina('fornitori')"><i class="fas fa-industry"></i><span>Fornitori</span></button>
                        <button type="button" class="dashboard-quick-action" onclick="cambiaPagina('analisiDati')"><i class="fas fa-chart-line"></i><span>Report</span></button>
                    </div>
                </section>
            </div>
        </section>
    `;
}

function renderScrematuraProdottiPage(container) {
    if (!productScreeningState) {
        container.innerHTML = `
            <div class="crm-page-header">
                <div class="crm-header-card">
                    <div class="crm-header-info">
                        <span class="crm-header-eyebrow">Prodotti / Import CSV</span>
                        <h2 class="crm-header-title">Scrematura prodotti</h2>
                    </div>
                    <div class="crm-header-actions">
                        <button class="btn-primary" onclick="cambiaPagina('prodotti')"><i class="fas fa-arrow-left"></i> Torna ai prodotti</button>
                    </div>
                </div>
            </div>
            <div class="crm-table-container" style="padding:20px; text-align:center; color:var(--text-muted);">Nessuna sessione di scrematura attiva.</div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="crm-page-header">
            <div class="crm-header-card">
                <div class="crm-header-info">
                    <span class="crm-header-eyebrow">Prodotti / Import CSV</span>
                    <h2 class="crm-header-title">Scrematura prodotti</h2>
                </div>
                <div class="crm-header-actions">
                    <button class="btn-secondary" onclick="apriImportatoreCSV('prodotti')"><i class="fas fa-file-import"></i> Nuovo CSV</button>
                    <button class="btn-primary" onclick="confermaImportScrematoProdotti()"><i class="fas fa-filter"></i> Importa selezionati</button>
                </div>
            </div>
        </div>
        <div id="page-csv-product-cleaner" class="crm-table-container" style="padding:16px;">
            <p style="font-size:13px; color: var(--text-muted); margin-bottom: 12px;">Spunta gli articoli e spostali tra le liste per scremare in modo progressivo.</p>
            <div style="border:1px solid var(--border-color); border-radius:12px; padding:12px; margin-bottom:12px; background:#f8fafc;">
                <div style="display:grid; grid-template-columns: 1fr 1fr auto auto; gap:8px; align-items:end;">
                    <div>
                        <div class="modal-label">CSV Venduto (ultimi anni)</div>
                        <button type="button" class="btn-dark" style="width:100%; min-height:36px;" onclick="selezionaFileAnalisiProdotti('sales')"><i class="fas fa-upload"></i> Carica vendite</button>
                        <div id="usage-sales-status" style="font-size:11px; color:var(--text-muted); margin-top:4px;">Nessun file</div>
                    </div>
                    <div>
                        <div class="modal-label">CSV Acquistato (ultimi anni)</div>
                        <button type="button" class="btn-dark" style="width:100%; min-height:36px;" onclick="selezionaFileAnalisiProdotti('purchase')"><i class="fas fa-upload"></i> Carica acquisti</button>
                        <div id="usage-purchase-status" style="font-size:11px; color:var(--text-muted); margin-top:4px;">Nessun file</div>
                    </div>
                    <div>
                        <div class="modal-label">Periodo (mesi)</div>
                        <select id="usage-period-months" class="input-field-modern" style="min-width:120px;" onchange="aggiornaPeriodoUsoProdotti(this.value)">
                            <option value="24">24</option>
                            <option value="36" selected>36</option>
                            <option value="48">48</option>
                        </select>
                    </div>
                    <button type="button" class="btn-primary" style="min-height:36px;" onclick="analizzaCsvUsoProdotti()"><i class="fas fa-chart-line"></i> Analizza uso</button>
                </div>
                <input type="file" id="usage-sales-file" accept=".csv,.txt" style="display:none;" onchange="leggiFileAnalisiProdotti(event,'sales')">
                <input type="file" id="usage-purchase-file" accept=".csv,.txt" style="display:none;" onchange="leggiFileAnalisiProdotti(event,'purchase')">
            </div>
            <div id="page-csv-cleaner-stats" style="display:grid; grid-template-columns: repeat(5, minmax(0,1fr)); gap:8px; margin-bottom: 12px;"></div>
            <div style="display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:8px; margin-bottom: 12px;">
                <label style="display:flex; gap:8px; align-items:flex-start; font-size:12px;"><input type="checkbox" id="page-rule-remove-dismissed" checked onchange="ricalcolaScrematuraProdotti()"> Escludi dismessi/obsoleti</label>
                <label style="display:flex; gap:8px; align-items:flex-start; font-size:12px;"><input type="checkbox" id="page-rule-merge-exact" checked onchange="ricalcolaScrematuraProdotti()"> Mantieni solo una riga per duplicati esatti</label>
                <label style="display:flex; gap:8px; align-items:flex-start; font-size:12px;"><input type="checkbox" id="page-rule-skip-existing" checked onchange="ricalcolaScrematuraProdotti()"> Scarta codici giÃ  presenti nel CRM</label>
                <label style="display:flex; gap:8px; align-items:flex-start; font-size:12px;"><input type="checkbox" id="page-rule-mark-similar" checked onchange="ricalcolaScrematuraProdotti()"> Metti in revisione i prodotti molto simili</label>
            </div>
            <div class="csv-cleaner-select-row">
                <button type="button" class="csv-cleaner-select-btn" onclick="toggleSelezioneScrematuraVisibili(true)">Seleziona tutti</button>
                <button type="button" class="csv-cleaner-select-btn" onclick="toggleSelezioneScrematuraVisibili(false)">Deseleziona tutti</button>
            </div>
            <div class="csv-cleaner-actions">
                <button type="button" class="csv-cleaner-action-btn is-keep" onclick="impostaDecisioneSelezionatiScrematura('keep')"><i class="fas fa-check-circle"></i> Da importare</button>
                <button type="button" class="csv-cleaner-action-btn is-drop" onclick="impostaDecisioneSelezionatiScrematura('drop')"><i class="fas fa-times-circle"></i> Scarta</button>
                <button type="button" class="csv-cleaner-action-btn is-review" onclick="impostaDecisioneSelezionatiScrematura('review')"><i class="fas fa-clock"></i> In sospeso</button>
            </div>
            <div class="csv-cleaner-view-row">
                <button type="button" id="page-csv-view-main" class="csv-cleaner-view-btn is-active" onclick="setViewScrematura('main')">Da scremare</button>
                <button type="button" id="page-csv-view-keep" class="csv-cleaner-view-btn" onclick="setViewScrematura('keep')">Da importare</button>
                <button type="button" id="page-csv-view-review" class="csv-cleaner-view-btn" onclick="setViewScrematura('review')">In sospeso</button>
                <button type="button" id="page-csv-view-drop" class="csv-cleaner-view-btn" onclick="setViewScrematura('drop')">Scarta</button>
            </div>
            <div style="margin-bottom:10px;">
                <input type="text" id="page-csv-cleaner-search" class="input-field-modern" placeholder="Cerca codice, nome, sku, barcode..." oninput="aggiornaRicercaScrematura(this.value)">
            </div>
            <div style="max-height: 60vh; overflow:auto; border:1px solid var(--border-color); border-radius:10px;">
                <table style="width:100%; border-collapse: collapse; font-size:14px;">
                    <thead style="position:sticky; top:0; background:#f8fafc;">
                        <tr>
                            <th style="text-align:left; padding:10px;">Sel.</th>
                            <th style="text-align:left; padding:10px;">Stato</th>
                            <th style="text-align:left; padding:10px;">Codice</th>
                            <th style="text-align:left; padding:10px;">Nome</th>
                            <th style="text-align:left; padding:10px;">Brand</th>
                            <th style="text-align:left; padding:10px;">Motivo</th>
                        </tr>
                    </thead>
                    <tbody id="page-csv-cleaner-rows"></tbody>
                </table>
            </div>
        </div>
    `;
    const periodEl = document.getElementById('usage-period-months');
    if (periodEl) periodEl.value = String(productScreeningState.usage.months || 36);
    aggiornaStatiFileUsoProdotti();
    renderProductScreening();
}

const ANALISI_DATE_FIELDS = {
    segnalazioni: ['data', 'creato'],
    clienti: ['creato', 'data'],
    preventivi: ['data', 'dataScadenza'],
    preventiviAcquisto: ['data', 'dataScadenza'],
    ordiniVendita: ['data', 'dataConsegna', 'dataPrevistaFattura'],
    ordiniAcquisto: ['data', 'dataConsegna'],
    ddtVendita: ['data'],
    ddtAcquisto: ['data'],
    fornitori: ['data', 'creato'],
    prodotti: ['dataNascita', 'data'],
    distintaBase: ['data', 'creato'],
    magazzino: ['data', 'creato']
};

function getAnalisiDocumentOptions() {
    return Object.keys(TABLE_CONFIGS).map(page => ({
        page,
        label: TABLE_CONFIGS[page].title
    }));
}

function getRecordPrimaryDate(page, record) {
    const candidateFields = ANALISI_DATE_FIELDS[page] || ['data', 'creato'];
    for (const field of candidateFields) {
        const parsed = parseFlexibleDate(record?.[field]);
        if (parsed) return parsed;
    }
    return null;
}

function formatAnalysisDateInput(date) {
    return date.toISOString().slice(0, 10);
}

function getAnalisiDateRange() {
    const end = new Date();
    const start = new Date();
    start.setMonth(start.getMonth() - 3);
    return {
        start: formatAnalysisDateInput(start),
        end: formatAnalysisDateInput(end)
    };
}

function getAnalysisCurrentValue(fieldId, fallback = '') {
    const el = document.getElementById(fieldId);
    return el ? String(el.value || '').trim() : fallback;
}

function getFilteredAnalysisRows(page, startDateRaw, endDateRaw) {
    const dataset = getVisibleDataset(page);
    const startDate = parseFlexibleDate(startDateRaw);
    const endDate = parseFlexibleDate(endDateRaw);
    if (endDate) endDate.setHours(23, 59, 59, 999);

    return dataset
        .map(record => ({
            record,
            date: getRecordPrimaryDate(page, record)
        }))
        .filter(item => item.date)
        .filter(item => (!startDate || item.date >= startDate) && (!endDate || item.date <= endDate))
        .sort((a, b) => b.date - a.date);
}

function getAnalysisRecordLabel(record) {
    return record.numero || record.codice || record.titolo || record.azienda || record.nome || record.id || '-';
}

function getAnalysisCounterparty(record) {
    return record.cliente || record.fornitore || record.azienda || record.nome || record.referente || record.produttore || '-';
}

function getAnalysisStatus(record) {
    const status = record.stato || record.statoPagamento || record.statoQualifica || '';
    return status ? mappaNomeStato(status) : '-';
}

function getAnalysisValue(record) {
    return Number(record.totale ?? record.valore ?? record.valoreFIFO ?? record.prezzoVendita ?? record.prezzoAcquisto ?? 0);
}

function renderAnalisiMovimentiMensili(rows) {
    if (!rows.length) {
        return '<div class="crm-table-container" style="padding:16px; color:var(--text-muted);">Nessun movimento nel periodo selezionato.</div>';
    }
    const monthly = rows.reduce((acc, item) => {
        const key = item.date.toISOString().slice(0, 7);
        if (!acc[key]) acc[key] = { count: 0, total: 0 };
        acc[key].count += 1;
        acc[key].total += getAnalysisValue(item.record);
        return acc;
    }, {});
    const monthRows = Object.entries(monthly)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([month, values]) => `
            <tr>
                <td style="padding:10px;">${month}</td>
                <td style="padding:10px;">${values.count}</td>
                <td style="padding:10px;">${formatCrmMoney(values.total)}</td>
            </tr>
        `).join('');
    return `
        <div class="crm-table-container" style="padding:16px;">
            <div class="crm-table-toolbar">
                <div>
                    <span class="crm-table-eyebrow">Serie temporale</span>
                    <strong>Movimenti per mese</strong>
                </div>
            </div>
            <table class="crm-table">
                <thead>
                    <tr>
                        <th>Mese</th>
                        <th>Movimenti</th>
                        <th>Valore</th>
                    </tr>
                </thead>
                <tbody>${monthRows}</tbody>
            </table>
        </div>
    `;
}

function renderAnalisiStatoBreakdown(rows) {
    if (!rows.length) return '';
    const grouped = rows.reduce((acc, item) => {
        const key = getAnalysisStatus(item.record);
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
    return `
        <div class="analysis-snapshot-card">
            <div class="crm-table-toolbar">
                <div>
                    <span class="crm-table-eyebrow">Distribuzione</span>
                    <strong>Stati nel periodo</strong>
                </div>
            </div>
            <div class="analysis-state-list">
                ${Object.entries(grouped).sort((a, b) => b[1] - a[1]).map(([label, count]) => `
                    <div class="analysis-state-row">
                        <span>${cleanUiText(label)}</span>
                        <strong>${count}</strong>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderAnalisiTopRecords(rows) {
    if (!rows.length) return '';
    const top = [...rows]
        .sort((a, b) => getAnalysisValue(b.record) - getAnalysisValue(a.record))
        .slice(0, 5);
    return `
        <div class="analysis-snapshot-card">
            <div class="crm-table-toolbar">
                <div>
                    <span class="crm-table-eyebrow">Top list</span>
                    <strong>Record a maggior valore</strong>
                </div>
            </div>
            <div class="analysis-state-list">
                ${top.map(item => `
                    <div class="analysis-top-row">
                        <div>
                            <span>${cleanUiText(getAnalysisRecordLabel(item.record))}</span>
                            <small>${cleanUiText(getAnalysisCounterparty(item.record))}</small>
                        </div>
                        <strong>${formatCrmMoney(getAnalysisValue(item.record))}</strong>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderAnalisiHealthCards(page, rows) {
    const datedRows = rows.map(item => item.date).filter(Boolean);
    const latest = datedRows.length ? new Date(Math.max(...datedRows.map(item => item.getTime()))) : null;
    const avgValue = rows.length ? getAnalysisValueSummary(rows) / rows.length : 0;
    const statusCount = new Set(rows.map(item => getAnalysisStatus(item.record))).size;
    const metrics = [
        { label: 'Ultimo movimento', value: latest ? formatAnalysisDateInput(latest) : '-', detail: cleanUiText(TABLE_CONFIGS[page].title) },
        { label: 'Valore medio', value: formatCrmMoney(avgValue), detail: 'Per record nel periodo' },
        { label: 'Stati attivi', value: formatCompactNumber(statusCount), detail: 'Varieta di avanzamento' }
    ];
    return `
        <div class="analysis-health-grid">
            ${metrics.map(item => `
                <div class="analysis-health-card">
                    <span>${item.label}</span>
                    <strong>${item.value}</strong>
                    <small>${item.detail}</small>
                </div>
            `).join('')}
        </div>
    `;
}

function getAnalysisValueSummary(rows) {
    return rows.reduce((sum, item) => sum + getAnalysisValue(item.record), 0);
}

function aggiornaAnalisiDati() {
    const page = getAnalysisCurrentValue('analysis-document-type', DEFAULT_PAGE);
    const startDate = getAnalysisCurrentValue('analysis-date-start');
    const endDate = getAnalysisCurrentValue('analysis-date-end');
    const target = document.getElementById('analysis-results');
    if (!target) return;

    const rows = getFilteredAnalysisRows(page, startDate, endDate);
    const config = TABLE_CONFIGS[page];
    const totalValue = getAnalysisValueSummary(rows);
    const stats = [
        { label: 'Movimenti', value: formatCompactNumber(rows.length), detail: 'Record nel periodo' },
        { label: 'Valore', value: formatCrmMoney(totalValue), detail: 'Somma valori disponibili' },
        { label: 'Da', value: startDate || '-', detail: 'Inizio intervallo' },
        { label: 'A', value: endDate || '-', detail: 'Fine intervallo' }
    ];

    const previewRows = rows.slice(0, 100).map(item => `
        <tr>
            <td>${formatAnalysisDateInput(item.date)}</td>
            <td>${cleanUiText(getAnalysisRecordLabel(item.record))}</td>
            <td>${cleanUiText(getAnalysisCounterparty(item.record))}</td>
            <td>${cleanUiText(getAnalysisStatus(item.record))}</td>
            <td>${formatCrmMoney(getAnalysisValue(item.record))}</td>
        </tr>
    `).join('');

    target.innerHTML = `
        ${renderCrmMetricStrip(page, rows.map(item => ({ ...item.record, valore: getAnalysisValue(item.record) })))}
        ${renderAnalisiHealthCards(page, rows)}
        <div class="analysis-snapshot-grid">
            ${renderAnalisiStatoBreakdown(rows)}
            ${renderAnalisiTopRecords(rows)}
        </div>
        <div class="crm-table-container" style="padding:16px; margin-top:16px;">
            <div style="display:grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap:12px; margin-bottom:16px;">
                ${stats.map(item => `
                    <div style="border:1px solid var(--border-color); border-radius:16px; padding:14px; background:rgba(255,255,255,0.82);">
                        <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted);">${item.label}</div>
                        <div style="font-size:20px; font-weight:800; margin-top:4px;">${item.value}</div>
                        <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">${item.detail}</div>
                    </div>
                `).join('')}
            </div>
            <div class="crm-table-toolbar">
                <div>
                    <span class="crm-table-eyebrow">Risultati filtrati</span>
                    <strong>${cleanUiText(config.title)}</strong>
                </div>
                <span class="crm-table-count">${rows.length} righe</span>
            </div>
            <table class="crm-table">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Documento</th>
                        <th>Controparte</th>
                        <th>Stato</th>
                        <th>Valore</th>
                    </tr>
                </thead>
                <tbody>
                    ${previewRows || `<tr><td colspan="5" class="crm-empty-state"><i class="fas fa-chart-line"></i><strong>Nessun movimento</strong><span>Modifica filtri o cambia tipologia documento.</span></td></tr>`}
                </tbody>
            </table>
        </div>
        ${renderAnalisiMovimentiMensili(rows)}
    `;
}

function scaricaCsvAnalisiDati() {
    const page = getAnalysisCurrentValue('analysis-document-type', DEFAULT_PAGE);
    const startDate = getAnalysisCurrentValue('analysis-date-start');
    const endDate = getAnalysisCurrentValue('analysis-date-end');
    const config = TABLE_CONFIGS[page];
    const rows = getFilteredAnalysisRows(page, startDate, endDate).map(item => item.record);
    const headers = config.csvTemplate.split(',');
    const csv = [
        headers.join(','),
        ...rows.map(record => headers.map(field => {
            const value = record[field] ?? '';
            const safe = String(value).replace(/\"/g, '""');
            return `"${safe}"`;
        }).join(','))
    ].join('\n');
    const link = document.createElement('a');
    link.href = `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`;
    link.download = `analisi_${page}_${startDate || 'inizio'}_${endDate || 'fine'}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    mostraNotifica('CSV analisi scaricato', 'success');
}

function apriImportatoreAnalisiDati() {
    apriImportatoreCSV(getAnalysisCurrentValue('analysis-document-type', DEFAULT_PAGE));
}

function renderAnalisiDati(container) {
    const defaultRange = getAnalisiDateRange();
    const options = getAnalisiDocumentOptions().map(item => `
        <option value="${item.page}" ${item.page === DEFAULT_PAGE ? 'selected' : ''}>${cleanUiText(item.label)}</option>
    `).join('');

    container.innerHTML = `
        <section class="crm-workbench">
            <div class="crm-page-header">
                <div class="crm-header-card">
                    <div class="crm-header-info">
                        <span class="crm-header-eyebrow">CSV e Reporting</span>
                        <h2 class="crm-header-title">Analisi Dati</h2>
                        <p class="crm-header-subtitle">Workspace manageriale per trend, distribuzione stati, record di maggior valore ed export nel periodo.</p>
                    </div>
                    <div class="crm-header-actions">
                        <button class="btn-secondary" onclick="apriImportatoreAnalisiDati()">
                            <i class="fas fa-file-import"></i> Importa CSV
                        </button>
                        <button class="btn-primary" onclick="scaricaCsvAnalisiDati()">
                            <i class="fas fa-download"></i> Scarica CSV
                        </button>
                    </div>
                </div>
            </div>
            <div class="crm-table-container" style="padding:16px;">
                <div style="display:grid; grid-template-columns: 1.4fr 1fr 1fr auto; gap:12px; align-items:end;">
                    <label style="display:block;">
                        <span class="modal-label">Tipologia documento</span>
                        <select id="analysis-document-type" class="input-field-modern select-custom">${options}</select>
                    </label>
                    <label style="display:block;">
                        <span class="modal-label">Data iniziale</span>
                        <input id="analysis-date-start" type="date" class="input-field-modern" value="${defaultRange.start}">
                    </label>
                    <label style="display:block;">
                        <span class="modal-label">Data finale</span>
                        <input id="analysis-date-end" type="date" class="input-field-modern" value="${defaultRange.end}">
                    </label>
                    <button class="btn-dark" style="min-height:42px;" onclick="aggiornaAnalisiDati()">
                        <i class="fas fa-magnifying-glass-chart"></i> Analizza
                    </button>
                </div>
            </div>
            <div id="analysis-results"></div>
        </section>
    `;

    ['analysis-document-type', 'analysis-date-start', 'analysis-date-end'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', aggiornaAnalisiDati);
    });
    aggiornaAnalisiDati();
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 5. DISPATCH DI RENDERING TABELLE DINAMICHE ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function formatCompactNumber(value) {
    return Number(value || 0).toLocaleString('it-IT');
}

function formatCrmMoney(value) {
    return `EUR ${Number(value || 0).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function getDominantStateLabel(dataset) {
    if (!dataset || !dataset.length) return 'Nessuno';
    const counts = dataset.reduce((acc, item) => {
        const state = item.stato || item.statoPagamento || item.statoQualifica || 'non definito';
        acc[state] = (acc[state] || 0) + 1;
        return acc;
    }, {});
    const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
    return dominant ? `${mappaNomeStato(dominant[0])} (${dominant[1]})` : 'Nessuno';
}

function buildCrmMetricCards(pageName, dataset) {
    const rows = Array.isArray(dataset) ? dataset : [];
    const totalValue = rows.reduce((sum, item) => {
        const value = item.totale ?? item.valore ?? item.valoreFIFO ?? item.prezzoVendita ?? 0;
        return sum + Number(value || 0);
    }, 0);
    const activeCount = rows.filter(item => !['perso', 'rifiutato', 'risolto'].includes(item.stato)).length;
    const dataSource = pageName === 'clienti' ? 'Pipeline' : pageName === 'prodotti' ? 'Catalogo' : pageName === 'magazzino' ? 'Stock' : 'Operativo';

    return [
        { label: 'Record', value: formatCompactNumber(rows.length), detail: dataSource, icon: 'fa-table-list' },
        { label: 'Valore', value: formatCrmMoney(totalValue), detail: 'Totale visibile', icon: 'fa-chart-simple' },
        { label: 'Stato guida', value: getDominantStateLabel(rows), detail: 'Distribuzione corrente', icon: 'fa-signal' },
        { label: 'Attivi', value: formatCompactNumber(activeCount), detail: 'Azioni aperte', icon: 'fa-bolt' }
    ];
}

function showKpiDetail(encodedMessage) {
    try {
        const message = decodeURIComponent(encodedMessage || '');
        if (message) mostraNotifica(message, 'info');
    } catch (error) {
        mostraNotifica('Dettaglio metrica non disponibile', 'warning');
    }
}

function toggleKpiMini(event) {
    event.preventDefault();
    event.stopPropagation();
    const item = event.currentTarget.closest('.kpi-mini-item');
    if (!item) return;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.kpi-mini-item.open').forEach(el => el.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
}

function renderKpiMiniDock(pageName, dataset) {
    const cards = buildCrmMetricCards(pageName, dataset);
    return `
        <div class="kpi-mini-dock" aria-label="Indicatori rapidi">
            ${cards.map((metric, idx) => `
                <div class="kpi-mini-item kpi-mini-item-${idx + 1}">
                    <button type="button" class="kpi-mini-btn" onclick="toggleKpiMini(event)" title="${metric.label}">
                        <i class="fas ${metric.icon}" aria-hidden="true"></i>
                    </button>
                    <div class="kpi-mini-pop">
                        <span class="kpi-mini-pop-label">${metric.label}</span>
                        <strong class="kpi-mini-pop-value">${metric.value}</strong>
                        <span class="kpi-mini-pop-sub">${metric.detail}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function getKpiSparkline(label) {
    let points = [];
    if (label === 'Record') {
        points = [5, 12, 8, 15, 10, 18, 22];
    } else if (label === 'Valore') {
        points = [10, 8, 15, 12, 20, 14, 25];
    } else if (label === 'Attivi') {
        points = [2, 10, 5, 12, 8, 14, 18];
    } else {
        points = [12, 10, 14, 11, 15, 13, 16];
    }
    
    const maxVal = Math.max(...points);
    const minVal = Math.min(...points);
    const range = maxVal - minVal || 1;
    
    const width = 70;
    const height = 26;
    const padding = 2;
    const mapped = points.map((p, idx) => {
        const x = padding + (idx / (points.length - 1)) * (width - padding * 2);
        const y = height - padding - ((p - minVal) / range) * (height - padding * 2);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    
    const pathD = `M ${mapped.join(' L ')}`;
    const areaD = `${pathD} L ${width - padding},${height} L ${padding},${height} Z`;
    
    return `
        <svg class="kpi-sparkline" viewBox="0 0 ${width} ${height}" aria-hidden="true" style="width:70px; height:26px; margin-left:12px; flex-shrink:0;">
            <defs>
                <linearGradient id="sparkline-grad-${label.replace(/\s+/g, '')}" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="var(--brand-primary)" stop-opacity="0.25"></stop>
                    <stop offset="100%" stop-color="var(--brand-primary)" stop-opacity="0"></stop>
                </linearGradient>
            </defs>
            <path d="${areaD}" fill="url(#sparkline-grad-${label.replace(/\s+/g, '')})"></path>
            <path d="${pathD}" fill="none" stroke="var(--brand-primary)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    `;
}

function getKpiTrendBadge(label) {
    if (label === 'Record') {
        return `<span class="kpi-trend up" style="margin-top:2px; display:inline-flex; align-items:center; gap:2px; font-size:10px; font-weight:700; color:#10b981; background:rgba(16,185,129,0.1); padding:1px 5px; border-radius:4px;"><i class="fas fa-arrow-trend-up"></i> +4.2%</span>`;
    }
    if (label === 'Valore') {
        return `<span class="kpi-trend up" style="margin-top:2px; display:inline-flex; align-items:center; gap:2px; font-size:10px; font-weight:700; color:#10b981; background:rgba(16,185,129,0.1); padding:1px 5px; border-radius:4px;"><i class="fas fa-arrow-trend-up"></i> +12.8%</span>`;
    }
    if (label === 'Attivi') {
        return `<span class="kpi-trend up" style="margin-top:2px; display:inline-flex; align-items:center; gap:2px; font-size:10px; font-weight:700; color:#10b981; background:rgba(16,185,129,0.1); padding:1px 5px; border-radius:4px;"><i class="fas fa-arrow-trend-up"></i> +8.5%</span>`;
    }
    return `<span class="kpi-trend up" style="margin-top:2px; display:inline-flex; align-items:center; gap:2px; font-size:10px; font-weight:700; color:var(--brand-primary); background:var(--brand-primary-soft); padding:1px 5px; border-radius:4px;"><i class="fas fa-arrows-left-right"></i> Stabile</span>`;
}

function renderCrmMetricStrip(pageName, dataset) {
    const rowClass = 'crm-kpi-row crm-kpi-row--compact';
    return `
        <div class="${rowClass}">
            ${buildCrmMetricCards(pageName, dataset).map(metric => `
                <button type="button" class="crm-kpi-card crm-kpi-card--compact crm-kpi-card--button" style="display:flex; justify-content:space-between; align-items:center; flex-direction:row !important; text-align:left;" title="${metric.label}: ${metric.value}" onclick="showKpiDetail('${encodeURIComponent(`${metric.label}: ${metric.value} (${metric.detail})`)}')">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div class="crm-kpi-icon crm-kpi-icon--compact"><i class="fas ${metric.icon}" aria-hidden="true"></i></div>
                        <div class="crm-kpi-copy crm-kpi-copy--compact" style="display:flex; flex-direction:column;">
                            <span class="crm-kpi-label crm-kpi-label--compact">${metric.label}</span>
                            <strong class="crm-kpi-value crm-kpi-value--compact">${metric.value}</strong>
                            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                <span class="crm-kpi-subtext crm-kpi-subtext--compact" style="margin-top:0;">${metric.detail}</span>
                                ${getKpiTrendBadge(metric.label)}
                            </div>
                        </div>
                    </div>
                    ${getKpiSparkline(metric.label)}
                </button>
            `).join('')}
        </div>
    `;
}

function isFinishedProduct(product) {
    if (!product) return false;
    return String(product.categoria || '').toLowerCase() === 'prodotti finiti';
}

function isComponentProduct(product) {
    return !!product && !isFinishedProduct(product);
}

function getVisibleDataset(pageName) {
    const dataset = DATASETS[pageName] || [];
    if (pageName === 'prodotti') {
        return dataset.filter(isFinishedProduct);
    }
    return dataset;
}

function getPageViewMode(pageName) {
    const state = getPageUiState(pageName);
    return state.viewMode || 'table';
}

function setPageViewMode(pageName, viewMode) {
    updatePageUiState(pageName, { viewMode });
    if (paginaAttuale === pageName) cambiaPagina(pageName);
}

function getPageQuickFilter(pageName) {
    const state = getPageUiState(pageName);
    return state.quickFilter || 'all';
}

function setPageQuickFilter(pageName, quickFilter) {
    updatePageUiState(pageName, { quickFilter });
    if (paginaAttuale === pageName) cambiaPagina(pageName);
}

function getQuickFiltersForPage(pageName) {
    const filters = {
        segnalazioni: [
            { key: 'all', label: 'Tutte' },
            { key: 'aperte', label: 'Aperte' },
            { key: 'prioritarie', label: 'Alta priorita' },
            { key: 'convertite', label: 'Convertite' }
        ],
        clienti: [
            { key: 'all', label: 'Tutti' },
            { key: 'pipeline', label: 'In pipeline' },
            { key: 'caldi', label: 'Top valore' },
            { key: 'vinti', label: 'Clienti vinti' }
        ],
        preventivi: [
            { key: 'all', label: 'Tutti' },
            { key: 'aperti', label: 'Da seguire' },
            { key: 'scadenza', label: 'In scadenza' },
            { key: 'accettati', label: 'Accettati' }
        ],
        ordiniVendita: [
            { key: 'all', label: 'Tutti' },
            { key: 'urgenti', label: 'Urgenti' },
            { key: 'nonpagati', label: 'Non pagati' },
            { key: 'evasione', label: 'Da evadere' }
        ],
        magazzino: [
            { key: 'all', label: 'Tutto' },
            { key: 'critico', label: 'Scorte critiche' },
            { key: 'valore', label: 'Top valore' }
        ]
    };
    return filters[pageName] || [{ key: 'all', label: 'Tutti' }];
}

function applyQuickFilter(pageName, rows, overrideFilter = null) {
    const filter = overrideFilter || getPageQuickFilter(pageName);
    if (filter === 'all') return rows;

    if (pageName === 'segnalazioni') {
        if (filter === 'aperte') return rows.filter(item => item.stato !== 'risolto');
        if (filter === 'prioritarie') return rows.filter(item => item.priorita === 'alta');
        if (filter === 'convertite') return rows.filter(item => item.stato === 'risolto');
    }

    if (pageName === 'clienti') {
        if (filter === 'pipeline') return rows.filter(item => !['vinto', 'perso'].includes(item.stato));
        if (filter === 'caldi') return [...rows].sort((a, b) => toFiniteNumber(b.valore) - toFiniteNumber(a.valore)).slice(0, 12);
        if (filter === 'vinti') return rows.filter(item => item.stato === 'vinto');
    }

    if (pageName === 'preventivi') {
        if (filter === 'aperti') return rows.filter(item => !['accettato', 'rifiutato'].includes(item.stato));
        if (filter === 'scadenza') return rows.filter(item => {
            const days = daysFromToday(item.dataScadenza);
            return days !== null && days <= 7 && item.stato !== 'accettato';
        });
        if (filter === 'accettati') return rows.filter(item => item.stato === 'accettato');
    }

    if (pageName === 'ordiniVendita') {
        if (filter === 'urgenti') return rows.filter(item => {
            const days = daysFromToday(item.dataConsegna);
            return days !== null && days <= 3 && !['spedito', 'consegnato'].includes(item.stato);
        });
        if (filter === 'nonpagati') return rows.filter(item => item.statoPagamento === 'nonpagato' || item.statoPagamento === 'parziale');
        if (filter === 'evasione') return rows.filter(item => !['spedito', 'consegnato'].includes(item.stato));
    }

    if (pageName === 'magazzino') {
        if (filter === 'critico') return rows.filter(item => toFiniteNumber(item.quantita) <= toFiniteNumber(item.quantitaMinima || 0));
        if (filter === 'valore') return [...rows].sort((a, b) => toFiniteNumber(b.valoreFIFO) - toFiniteNumber(a.valoreFIFO)).slice(0, 12);
    }

    return rows;
}

function getRowsByFilter(pageName, rows, filterKey = 'all') {
    return applyQuickFilter(pageName, rows, filterKey);
}

function openFirstRecordForFilter(pageName, filterKey = 'all') {
    const dataset = getSortedDataset(pageName, getRowsByFilter(pageName, getVisibleDataset(pageName), filterKey));
    if (!dataset.length) {
        mostraNotifica('Nessun record disponibile per questa vista.', 'warning');
        return;
    }
    const first = dataset[0];
    if (pageName === 'clienti') {
        apriVisualizzazioneTimeline(first.id);
        return;
    }
    apriRecordDettaglio(pageName, first.id);
}

function openModuleAndApplyFilter(pageName, filterKey = 'all') {
    setPageQuickFilter(pageName, filterKey);
    if (paginaAttuale !== pageName) cambiaPagina(pageName);
}

function renderModuleWorkspace(pageName, rows) {
    const cards = [];
    const actions = [];
    const queue = [];
    const playbook = [];

    if (pageName === 'preventivi') {
        const aperti = rows.filter(item => !['accettato', 'rifiutato'].includes(item.stato));
        const inScadenza = aperti.filter(item => {
            const days = daysFromToday(item.dataScadenza);
            return days !== null && days <= 7;
        });
        const accettati = rows.filter(item => item.stato === 'accettato');
        const valoreAperto = aperti.reduce((sum, item) => sum + toFiniteNumber(item.totale), 0);
        cards.push(
            { label: 'Da seguire', value: formatCompactNumber(aperti.length), detail: 'Preventivi ancora aperti' },
            { label: 'In scadenza', value: formatCompactNumber(inScadenza.length), detail: 'Entro 7 giorni' },
            { label: 'Valore aperto', value: formatCrmMoney(valoreAperto), detail: 'Pipeline offerta attiva' },
            { label: 'Accettati', value: formatCompactNumber(accettati.length), detail: 'Pronti per ordine o conferma' }
        );
        actions.push(
            { label: 'Apri scadenze', icon: 'fa-hourglass-half', onclick: `openModuleAndApplyFilter('preventivi', 'scadenza')` },
            { label: 'Scheda piu urgente', icon: 'fa-bolt', onclick: `openFirstRecordForFilter('preventivi', 'scadenza')` },
            { label: 'Nuovo preventivo', icon: 'fa-plus', onclick: 'apriModalGenericCrea()' },
            { label: 'Importa offerte', icon: 'fa-file-import', onclick: `apriImportatoreCSV('preventivi')` }
        );
        queue.push(...[...inScadenza]
            .sort((a, b) => (daysFromToday(a.dataScadenza) ?? 999) - (daysFromToday(b.dataScadenza) ?? 999))
            .slice(0, 4)
            .map(item => ({
                title: item.numero,
                meta: `${formatRelativeDays(daysFromToday(item.dataScadenza))} · ${formatCrmMoney(item.totale || 0)}`,
                onclick: `apriRecordDettaglio('preventivi', '${item.id}')`
            })));
        playbook.push(
            'Presidia prima i preventivi entro 7 giorni.',
            'Converti in ordine solo dopo verifica righe e pagamento.',
            'Usa la board per vedere subito bozza, inviato, accettato, rifiutato.'
        );
    }

    if (pageName === 'ordiniVendita') {
        const urgenti = rows.filter(item => {
            const days = daysFromToday(item.dataConsegna);
            return days !== null && days <= 3 && !['spedito', 'consegnato'].includes(item.stato);
        });
        const nonPagati = rows.filter(item => item.statoPagamento === 'nonpagato' || item.statoPagamento === 'parziale');
        const evasione = rows.filter(item => !['spedito', 'consegnato'].includes(item.stato));
        const fatturazione = rows.filter(item => {
            const days = daysFromToday(item.dataPrevistaFattura);
            return days !== null && days <= 7;
        });
        cards.push(
            { label: 'Urgenti', value: formatCompactNumber(urgenti.length), detail: 'Consegna entro 72 ore' },
            { label: 'Da evadere', value: formatCompactNumber(evasione.length), detail: 'Ordini non spediti' },
            { label: 'Non pagati', value: formatCompactNumber(nonPagati.length), detail: 'Totale da presidiare' },
            { label: 'Fatturazione', value: formatCompactNumber(fatturazione.length), detail: 'Prevista entro 7 giorni' }
        );
        actions.push(
            { label: 'Apri urgenti', icon: 'fa-triangle-exclamation', onclick: `openModuleAndApplyFilter('ordiniVendita', 'urgenti')` },
            { label: 'Apri non pagati', icon: 'fa-wallet', onclick: `openModuleAndApplyFilter('ordiniVendita', 'nonpagati')` },
            { label: 'Ordine piu vicino', icon: 'fa-truck-fast', onclick: `openFirstRecordForFilter('ordiniVendita', 'urgenti')` },
            { label: 'Nuovo ordine', icon: 'fa-plus', onclick: 'apriModalGenericCrea()' }
        );
        queue.push(...[...evasione]
            .sort((a, b) => (daysFromToday(a.dataConsegna) ?? 999) - (daysFromToday(b.dataConsegna) ?? 999))
            .slice(0, 4)
            .map(item => ({
                title: item.numero,
                meta: `${formatRelativeDays(daysFromToday(item.dataConsegna))} · ${item.statoPagamento || 'nonpagato'}`,
                onclick: `apriRecordDettaglio('ordiniVendita', '${item.id}')`
            })));
        playbook.push(
            'Presidia per primi gli ordini in consegna e con pagamento aperto.',
            'Apri la scheda ordine per controllare DDT collegati e data fattura.',
            'Usa la board per separare in lavorazione, spedito e consegnato.'
        );
    }

    if (pageName === 'magazzino') {
        const critici = rows.filter(item => toFiniteNumber(item.quantita) <= toFiniteNumber(item.quantitaMinima || 0));
        const topValore = [...rows].sort((a, b) => toFiniteNumber(b.valoreFIFO) - toFiniteNumber(a.valoreFIFO)).slice(0, 3);
        const quantitaTotale = rows.reduce((sum, item) => sum + toFiniteNumber(item.quantita), 0);
        const valoreTotale = rows.reduce((sum, item) => sum + toFiniteNumber(item.valoreFIFO), 0);
        cards.push(
            { label: 'Scorte critiche', value: formatCompactNumber(critici.length), detail: 'Articoli sotto minimo' },
            { label: 'Quantita totale', value: formatCompactNumber(quantitaTotale), detail: 'Unita presidiate' },
            { label: 'Valore stock', value: formatCrmMoney(valoreTotale), detail: 'Inventario visibile' },
            { label: 'Top valore', value: formatCompactNumber(topValore.length), detail: 'Articoli da monitorare' }
        );
        actions.push(
            { label: 'Apri scorte critiche', icon: 'fa-warehouse', onclick: `openModuleAndApplyFilter('magazzino', 'critico')` },
            { label: 'Articolo piu critico', icon: 'fa-circle-exclamation', onclick: `openFirstRecordForFilter('magazzino', 'critico')` },
            { label: 'Nuova giacenza', icon: 'fa-plus', onclick: 'apriModalGenericCrea()' },
            { label: 'Apri distinta base', icon: 'fa-diagram-project', onclick: `cambiaPagina('distintaBase')` }
        );
        queue.push(...critici
            .slice(0, 4)
            .map(item => {
                const prodotto = DATASETS.prodotti.find(prod => prod.id === item.prodotto);
                return {
                    title: prodotto?.codice || item.prodotto || 'Articolo',
                    meta: `${toFiniteNumber(item.quantita)} su minimo ${toFiniteNumber(item.quantitaMinima)} · ${item.ubicazione || 'Ubicazione da definire'}`,
                    onclick: `apriRecordDettaglio('magazzino', '${item.id}')`
                };
            }));
        playbook.push(
            'Ricarica prima gli articoli sotto minimo e ad alto assorbimento.',
            'Apri la distinta base quando una spedizione consuma componenti collegati.',
            'Controlla il valore FIFO per isolare stock costoso fermo.'
        );
    }

    if (!cards.length) return '';

    return `
        <section class="crm-module-workspace">
            <div class="crm-module-workspace__metrics">
                ${cards.map(item => `
                    <article class="crm-module-metric">
                        <span>${item.label}</span>
                        <strong>${item.value}</strong>
                        <small>${item.detail}</small>
                    </article>
                `).join('')}
            </div>
            <div class="crm-module-workspace__grid">
                <div class="crm-module-card">
                    <div class="crm-module-card__head">
                        <span class="crm-table-eyebrow">Azioni rapide</span>
                        <strong>Workspace operativo</strong>
                    </div>
                    <div class="crm-module-actions">
                        ${actions.map(item => `
                            <button type="button" class="crm-module-action" onclick="${item.onclick}">
                                <i class="fas ${item.icon}"></i>
                                <span>${item.label}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
                <div class="crm-module-card">
                    <div class="crm-module-card__head">
                        <span class="crm-table-eyebrow">Coda prioritaria</span>
                        <strong>Record da presidiare</strong>
                    </div>
                    <div class="crm-module-queue">
                        ${queue.length ? queue.map(item => `
                            <button type="button" class="crm-module-queue__item" onclick="${item.onclick}">
                                <strong>${cleanUiText(item.title)}</strong>
                                <small>${cleanUiText(item.meta)}</small>
                            </button>
                        `).join('') : '<div class="dashboard-empty">Nessuna eccezione attiva in questo momento.</div>'}
                    </div>
                </div>
                <div class="crm-module-card">
                    <div class="crm-module-card__head">
                        <span class="crm-table-eyebrow">Playbook</span>
                        <strong>Uso consigliato del modulo</strong>
                    </div>
                    <div class="crm-module-playbook">
                        ${playbook.map(item => `<div class="crm-module-playbook__item">${cleanUiText(item)}</div>`).join('')}
                    </div>
                </div>
            </div>
        </section>
    `;
}

function getPageInsightSummary(pageName, rows) {
    if (pageName === 'clienti') {
        const top = [...rows].sort((a, b) => toFiniteNumber(b.valore) - toFiniteNumber(a.valore)).slice(0, 3);
        return {
            title: 'Account da presidiare',
            items: top.map(item => ({
                title: item.azienda,
                meta: `${mappaNomeStato(item.stato)} · ${formatCrmMoney(item.valore || 0)}`
            }))
        };
    }
    if (pageName === 'preventivi') {
        const top = [...rows].sort((a, b) => (daysFromToday(a.dataScadenza) ?? 999) - (daysFromToday(b.dataScadenza) ?? 999)).slice(0, 3);
        return {
            title: 'Preventivi da seguire',
            items: top.map(item => ({
                title: item.numero,
                meta: `${formatRelativeDays(daysFromToday(item.dataScadenza))} · ${formatCrmMoney(item.totale || 0)}`
            }))
        };
    }
    if (pageName === 'ordiniVendita') {
        const top = [...rows].filter(item => !['spedito', 'consegnato'].includes(item.stato)).slice(0, 3);
        return {
            title: 'Ordini in lavorazione',
            items: top.map(item => ({
                title: item.numero,
                meta: `${formatRelativeDays(daysFromToday(item.dataConsegna))} · ${item.statoPagamento || 'nonpagato'}`
            }))
        };
    }
    if (pageName === 'magazzino') {
        const top = [...rows].filter(item => toFiniteNumber(item.quantita) <= toFiniteNumber(item.quantitaMinima || 0)).slice(0, 3);
        return {
            title: 'Sotto scorta',
            items: top.map(item => {
                const prodotto = DATASETS.prodotti.find(p => p.id === item.prodotto);
                return {
                    title: prodotto?.codice || 'Articolo',
                    meta: `${toFiniteNumber(item.quantita)} disponibili su minimo ${toFiniteNumber(item.quantitaMinima)}`
                };
            })
        };
    }
    return null;
}

function renderPageQuickFilters(pageName) {
    const active = getPageQuickFilter(pageName);
    return `
        <div class="crm-quick-filters">
            ${getQuickFiltersForPage(pageName).map(filter => `
                <button type="button" class="crm-filter-chip ${filter.key === active ? 'is-active' : ''}" onclick="setPageQuickFilter('${pageName}', '${filter.key}')">${filter.label}</button>
            `).join('')}
        </div>
    `;
}

function renderPageViewSwitch(pageName) {
    const current = getPageViewMode(pageName);
    const supportsBoard = ['segnalazioni', 'clienti', 'preventivi', 'ordiniVendita'].includes(pageName);
    if (!supportsBoard) return '';
    return `
        <div class="crm-view-switch">
            <button type="button" class="crm-view-switch-btn ${current === 'table' ? 'is-active' : ''}" onclick="setPageViewMode('${pageName}', 'table')"><i class="fas fa-table"></i> Tabella</button>
            <button type="button" class="crm-view-switch-btn ${current === 'board' ? 'is-active' : ''}" onclick="setPageViewMode('${pageName}', 'board')"><i class="fas fa-table-columns"></i> Board</button>
        </div>
    `;
}

function getBoardColumns(pageName) {
    const map = {
        segnalazioni: ['aperto', 'inlavorazione', 'risolto'],
        clienti: ['lead', 'contattato', 'offerta', 'trattativa', 'vinto', 'perso'],
        preventivi: ['bozza', 'inviato', 'accettato', 'rifiutato'],
        ordiniVendita: ['inlavorazione', 'spedito', 'consegnato']
    };
    return map[pageName] || [];
}

function renderBoardView(pageName, rows) {
    const columns = getBoardColumns(pageName);
    if (!columns.length) return '';
    return `
        <div class="crm-board">
            ${columns.map(column => {
                const columnRows = rows.filter(item => (item.stato || 'inlavorazione') === column);
                return `
                    <section class="crm-board-column">
                        <header class="crm-board-column-head">
                            <strong>${mappaNomeStato(column)}</strong>
                            <span>${columnRows.length}</span>
                        </header>
                        <div class="crm-board-card-list">
                            ${columnRows.length ? columnRows.map(item => renderBoardCard(pageName, item)).join('') : '<div class="crm-board-empty">Nessun record</div>'}
                        </div>
                    </section>
                `;
            }).join('')}
        </div>
    `;
}

function renderBoardCard(pageName, record) {
    if (pageName === 'segnalazioni') {
        return `
            <button type="button" class="crm-board-card" onclick="apriRecordDettaglio('segnalazioni', '${record.id}')">
                <strong>${record.titolo}</strong>
                <span>${record.zona || 'Area non indicata'}</span>
                <small>${record.priorita || 'media'}</small>
            </button>
        `;
    }
    if (pageName === 'clienti') {
        return `
            <button type="button" class="crm-board-card" onclick="apriVisualizzazioneTimeline('${record.id}')">
                <strong>${record.azienda}</strong>
                <span>${record.nome || 'Referente non indicato'}</span>
                <small>${formatCrmMoney(record.valore || 0)}</small>
            </button>
        `;
    }
    if (pageName === 'preventivi') {
        return `
            <button type="button" class="crm-board-card" onclick="apriRecordDettaglio('preventivi', '${record.id}')">
                <strong>${record.numero}</strong>
                <span>${formatRelativeDays(daysFromToday(record.dataScadenza))}</span>
                <small>${formatCrmMoney(record.totale || 0)}</small>
            </button>
        `;
    }
    if (pageName === 'ordiniVendita') {
        return `
            <button type="button" class="crm-board-card" onclick="apriRecordDettaglio('ordiniVendita', '${record.id}')">
                <strong>${record.numero}</strong>
                <span>${formatRelativeDays(daysFromToday(record.dataConsegna))}</span>
                <small>${formatCrmMoney(record.totale || 0)}</small>
            </button>
        `;
    }
    return `
        <button type="button" class="crm-board-card">
            <strong>${record.titolo || record.numero || record.nome || record.id}</strong>
        </button>
    `;
}

function getSelectableProducts(context = {}) {
    const { pageName = paginaAttuale, fieldKey = '', documentType = '', supplierId = '' } = context;
    const allProducts = DATASETS.prodotti || [];

    if (pageName === 'magazzino') return allProducts;
    if (pageName === 'distintaBase') {
        return fieldKey === 'prodotto' ? allProducts.filter(isFinishedProduct) : allProducts;
    }
    if (pageName === 'segnalazioni') return allProducts.filter(isFinishedProduct);
    if (['preventivi', 'ordiniVendita', 'ddtVendita'].includes(pageName) || documentType === 'vendita') {
        return allProducts.filter(isFinishedProduct);
    }
    if (['preventiviAcquisto', 'ordiniAcquisto', 'ddtAcquisto'].includes(pageName) || documentType === 'acquisto') {
        const componenti = allProducts.filter(isComponentProduct);
        if (!supplierId) return componenti;
        const fornitore = DATASETS.fornitori.find(item => item.id === supplierId);
        if (!fornitore) return componenti;
        const supplierTokens = String(fornitore.nome || '')
            .toLowerCase()
            .replace(/[^\w\s/.-]/g, '')
            .split(/[\s/.-]+/)
            .filter(token => token.length > 2);
        return componenti.filter(prodotto => {
            const produttore = String(prodotto.produttore || '').toLowerCase();
            if (!produttore) return false;
            if (produttore.includes(String(fornitore.nome || '').toLowerCase())) return true;
            return supplierTokens.some(token => produttore.includes(token));
        });
    }
    if (pageName === 'prodotti') return allProducts.filter(isFinishedProduct);
    return allProducts;
}

function getSelectedSupplierForModal() {
    const supplierSelect = document.getElementById('field-fornitore');
    if (!supplierSelect) return '';
    return String(supplierSelect.value || '').trim();
}

function refreshDocumentLineProductOptions() {
    const rowSelects = document.querySelectorAll('#document-lines-body .line-product');
    if (!rowSelects.length) return;
    const supplierId = ['ordiniAcquisto', 'ddtAcquisto'].includes(paginaAttuale) ? getSelectedSupplierForModal() : '';
    const options = getSelectableProducts({
        pageName: paginaAttuale,
        documentType: ['ordiniAcquisto', 'ddtAcquisto'].includes(paginaAttuale) ? 'acquisto' : 'vendita',
        supplierId
    });
    const optionsHtml = options.map(item => `<option value="${item.id}">${item.codice} - ${item.nome}</option>`).join('');

    rowSelects.forEach(selectEl => {
        const currentValue = selectEl.value;
        selectEl.innerHTML = `<option value="">Seleziona articolo</option>${optionsHtml}`;
        if (options.some(item => item.id === currentValue)) {
            selectEl.value = currentValue;
        } else {
            selectEl.value = '';
            const row = selectEl.closest('tr');
            if (row) {
                const descInput = row.querySelector('.line-description');
                const skuInput = row.querySelector('.line-sku');
                const priceInput = row.querySelector('.line-price');
                if (descInput) descInput.value = '';
                if (skuInput) skuInput.value = '';
                if (priceInput) priceInput.value = '';
            }
        }
    });

    aggiornaTotaliDocumentoModal();
}

function parseBomComponents(csv) {
    if (!csv) return [];
    return String(csv)
        .split(',')
        .map(part => part.trim())
        .filter(Boolean)
        .map(part => {
            const [skuRaw, qtyRaw] = part.split(':');
            const sku = String(skuRaw || '').trim();
            const quantita = Number(String(qtyRaw || '').replace(',', '.')) || 0;
            const prodotto = DATASETS.prodotti.find(item => item.codice === sku);
            return sku && quantita > 0 ? { sku, quantita, prodotto } : null;
        })
        .filter(Boolean);
}

function getBomByFinishedProduct(productId) {
    return DATASETS.distintaBase.find(item => item.prodotto === productId) || null;
}

function getMagazzinoRecordByProductId(productId) {
    return DATASETS.magazzino.find(item => item.prodotto === productId) || null;
}

function ensureMagazzinoRecord(productId) {
    let record = getMagazzinoRecordByProductId(productId);
    if (record) return record;
    const prodotto = DATASETS.prodotti.find(item => item.id === productId);
    if (!prodotto) return null;
    record = {
        id: `mag_${DATASETS.magazzino.length + 1}_${Date.now().toString().slice(-4)}`,
        prodotto: productId,
        quantita: 0,
        quantitaMinima: 0,
        valoreFIFO: 0,
        ubicazione: isFinishedProduct(prodotto) ? 'Assemblato / finiti' : 'Da assegnare'
    };
    DATASETS.magazzino.unshift(record);
    return record;
}

function applyDdtAcquistoStock(record) {
    const ordine = DATASETS.ordiniAcquisto.find(item => item.numero === record.ordineRif);
    if (!ordine || !Array.isArray(ordine.righe) || !ordine.righe.length) {
        return { ok: false, message: 'Ordine di acquisto non trovato o privo di righe.' };
    }

    ordine.righe.forEach(riga => {
        const magRecord = ensureMagazzinoRecord(riga.prodotto);
        if (!magRecord) return;
        const qty = Number(riga.quantita || 0);
        const price = Number(riga.prezzo || prezzoProdottoPerDocumento(riga.prodotto, 'ordiniAcquisto') || 0);
        magRecord.quantita = Number(magRecord.quantita || 0) + qty;
        magRecord.valoreFIFO = Number(magRecord.valoreFIFO || 0) + (qty * price);
    });

    record.movimentatoMagazzino = true;
    return { ok: true, message: `Magazzino componenti aggiornato da ordine ${ordine.numero}.` };
}

function applyDdtVenditaStock(record) {
    const ordine = DATASETS.ordiniVendita.find(item => item.numero === record.ordineRif);
    if (!ordine || !Array.isArray(ordine.righe) || !ordine.righe.length) {
        return { ok: false, message: 'Ordine di vendita non trovato o privo di righe.' };
    }

    const requiredComponents = [];
    ordine.righe.forEach(riga => {
        const bom = getBomByFinishedProduct(riga.prodotto);
        if (!bom) return;
        parseBomComponents(bom.componentiCsv).forEach(comp => {
            requiredComponents.push({
                prodotto: comp.prodotto,
                sku: comp.sku,
                quantita: comp.quantita * Number(riga.quantita || 0)
            });
        });
    });

    if (!requiredComponents.length) {
        return { ok: false, message: 'Nessuna distinta base trovata per i prodotti dell’ordine.' };
    }

    const insufficient = requiredComponents
        .map(comp => {
            const magRecord = comp.prodotto ? getMagazzinoRecordByProductId(comp.prodotto.id) : null;
            const disponibile = Number(magRecord?.quantita || 0);
            return {
                ...comp,
                disponibile
            };
        })
        .filter(comp => !comp.prodotto || comp.disponibile < comp.quantita);

    if (insufficient.length) {
        const dettaglio = insufficient
            .map(item => `${item.sku} richiesti ${item.quantita}, disponibili ${item.disponibile || 0}`)
            .join(' | ');
        return { ok: false, message: `Scorte insufficienti per evadere il DDT: ${dettaglio}` };
    }

    requiredComponents.forEach(comp => {
        const magRecord = ensureMagazzinoRecord(comp.prodotto.id);
        const prodotto = comp.prodotto;
        const costoUnitario = Number(prodotto?.prezzoAcquisto || 0);
        magRecord.quantita = Number(magRecord.quantita || 0) - comp.quantita;
        magRecord.valoreFIFO = Math.max(0, Number(magRecord.valoreFIFO || 0) - (comp.quantita * costoUnitario));
    });

    record.movimentatoMagazzino = true;
    return { ok: true, message: `Componenti scaricati automaticamente in base alla distinta dell’ordine ${ordine.numero}.` };
}

function renderDatabaseTable(container, pageName) {
    const config = TABLE_CONFIGS[pageName];
    const dataset = getVisibleDataset(pageName);
    const filteredDataset = applyQuickFilter(pageName, dataset);
    const sortedDataset = getSortedDataset(pageName, filteredDataset);
    const mobileViewport = isMobileViewport();
    const viewMode = getPageViewMode(pageName);
    const insightSummary = getPageInsightSummary(pageName, sortedDataset);

    let html = `
        <section class="crm-workbench crm-workbench--dense">
        <div class="crm-page-header">
            <div class="crm-header-card">
                <div class="crm-header-info">
                    <span class="crm-header-eyebrow">${cleanUiText(config.eyebrow)}</span>
                    <h2 class="crm-header-title">${cleanUiText(config.title)}</h2>
                    <p class="crm-header-subtitle">${sortedDataset.length} record visibili su ${dataset.length} totali nel modulo corrente</p>
                </div>
                <div class="crm-header-actions">
                    ${renderKpiMiniDock(pageName, sortedDataset)}
                    <button class="btn-secondary" onclick="apriImportatoreCSV('${pageName}')">
                        <i class="fas fa-upload"></i> Carica CSV
                    </button>
                    <button class="btn-primary" onclick="apriModalGenericCrea()">
                        <i class="fas fa-plus"></i> Nuovo
                    </button>
                </div>
            </div>
        </div>

        <div class="crm-toolbar-shell">
            <div class="crm-toolbar-shell__left">
                ${renderPageQuickFilters(pageName)}
            </div>
            <div class="crm-toolbar-shell__right">
                ${renderPageViewSwitch(pageName)}
            </div>
        </div>

        ${renderModuleWorkspace(pageName, sortedDataset)}

        <div class="crm-dense-layout">
        <div class="crm-table-container">
            <div class="crm-table-toolbar">
                <div>
                    <span class="crm-table-eyebrow">${mobileViewport ? 'Vista mobile' : viewMode === 'board' ? 'Board operativa' : 'Vista tabellare'}</span>
                    <strong>${cleanUiText(config.title)}</strong>
                </div>
                <span class="crm-table-count">${sortedDataset.length} righe</span>
            </div>
    `;

    if (!mobileViewport && viewMode === 'board' && ['segnalazioni', 'clienti', 'preventivi', 'ordiniVendita'].includes(pageName)) {
        html += renderBoardView(pageName, sortedDataset);
    } else if (mobileViewport) {
        html += renderMobileRecordCards(pageName, sortedDataset, config);
    } else {
        html += `
            <table class="crm-table">
                <thead>
                    <tr>
        `;

        config.headers.forEach((h, idx) => {
            const sortState = getColumnSortState(pageName, idx);
            const badge = sortState === 'asc' ? '1' : (sortState === 'desc' ? '2' : '');
            html += `
                <th class="crm-th-sortable ${sortState !== 'none' ? 'is-sorted' : ''}" onclick="toggleColumnSort(${idx})">
                    <span>${cleanUiText(h)}</span>
                    <span class="crm-th-sort-badge">${badge}</span>
                </th>
            `;
        });

        html += `
                </thead>
                <tbody id="crm-table-body-rows">
        `;

        if (sortedDataset && sortedDataset.length > 0) {
            sortedDataset.forEach(record => {
                html += renderRigaTabella(pageName, record);
            });
        } else {
            html += `<tr><td colspan="${config.headers.length}" class="crm-empty-state"><i class="fas fa-folder-open" aria-hidden="true"></i><strong>Nessun record trovato</strong><span>Clicca su "Aggiungi" o importa un CSV per iniziare.</span></td></tr>`;
        }

        html += `
                </tbody>
            </table>
        `;
    }

    html += `
        </div>
        ${insightSummary ? `
            <aside class="crm-side-insights">
                <div class="crm-side-insights__card">
                    <span class="crm-table-eyebrow">Focus modulo</span>
                    <strong>${insightSummary.title}</strong>
                    <div class="crm-side-insights__list">
                        ${insightSummary.items.map(item => `
                            <div class="crm-side-insights__item">
                                <span>${item.title}</span>
                                <small>${item.meta}</small>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="crm-side-insights__card">
                    <span class="crm-table-eyebrow">Prossimo passo</span>
                    <strong>Riduci il tempo di lettura</strong>
                    <p class="crm-side-insights__copy">Usa filtri rapidi, board view e schede record per lavorare per eccezioni invece che per semplice elenco.</p>
                </div>
            </aside>
        ` : ''}
        </div>
        </section>
    `;

    container.innerHTML = html;
    filtraUniversale();
}

function getColumnSortState(pageName, columnIndex) {
    const pageSort = tableSortByPage[pageName] || [];
    return pageSort[columnIndex] || 'none';
}

function toggleColumnSort(columnIndex) {
    if (!tableSortByPage[paginaAttuale]) tableSortByPage[paginaAttuale] = [];
    const current = tableSortByPage[paginaAttuale][columnIndex] || 'none';
    const next = current === 'none' ? 'asc' : (current === 'asc' ? 'desc' : 'none');
    tableSortByPage[paginaAttuale][columnIndex] = next;
    const contentEl = document.getElementById('contenitore-dati');
    if (contentEl) {
        renderDatabaseTable(contentEl, paginaAttuale);
    }
}

function normalizeSortValue(raw) {
    const value = String(raw ?? '').trim();
    if (!value) return '';
    const isoDateMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (isoDateMatch) return new Date(value).getTime();
    const itDateMatch = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (itDateMatch) return new Date(`${itDateMatch[3]}-${itDateMatch[2]}-${itDateMatch[1]}`).getTime();
    const num = Number(value.replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.'));
    if (Number.isFinite(num) && /[\d]/.test(value)) return num;
    return value.toLowerCase();
}

function compareSortValues(a, b, dir) {
    const av = normalizeSortValue(a);
    const bv = normalizeSortValue(b);
    if (typeof av === 'number' && typeof bv === 'number') return dir === 'asc' ? av - bv : bv - av;
    if (av < bv) return dir === 'asc' ? -1 : 1;
    if (av > bv) return dir === 'asc' ? 1 : -1;
    return 0;
}

function getSortedDataset(pageName, rows) {
    const sortStates = tableSortByPage[pageName] || [];
    const activeSorts = sortStates
        .map((state, index) => ({ state, index }))
        .filter(item => item.state === 'asc' || item.state === 'desc');
    if (!activeSorts.length) return rows;
    const cloned = [...rows];
    cloned.sort((a, b) => {
        const at = extractRowCellTexts(renderRigaTabella(pageName, a));
        const bt = extractRowCellTexts(renderRigaTabella(pageName, b));
        for (const s of activeSorts) {
            const idx = s.index;
            const av = at[idx] || '';
            const bv = bt[idx] || '';
            const cmp = compareSortValues(av, bv, s.state);
            if (cmp !== 0) return cmp;
        }
        return 0;
    });
    return cloned;
}

function extractRowCellTexts(rowHtml) {
    return String(rowHtml || '')
        .match(/<td[\s\S]*?<\/td>/gi)?.map(cell =>
            cell
                .replace(/<br\s*\/?>/gi, ' ')
                .replace(/<[^>]*>/g, ' ')
                .replace(/\s+/g, ' ')
                .trim()
        ) || [];
}

function extractRowCells(rowHtml) {
    const cells = [];
    const regex = /<td([^>]*)>([\s\S]*?)<\/td>/gi;
    let match;
    while ((match = regex.exec(String(rowHtml || ''))) !== null) {
        const attrs = match[1] || '';
        const html = match[2] || '';
        const text = html
            .replace(/<br\s*\/?>/gi, ' ')
            .replace(/<[^>]*>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        cells.push({ attrs, html, text });
    }
    return cells;
}

function renderMobileRecordCards(pageName, rows, config) {
    if (!rows || !rows.length) {
        return `
            <div id="crm-mobile-card-list" class="crm-mobile-card-list">
                <div class="crm-empty-state crm-empty-state-mobile">
                    <i class="fas fa-folder-open" aria-hidden="true"></i>
                    <strong>Nessun record trovato</strong>
                    <span>Clicca su "Aggiungi" o importa un CSV per iniziare.</span>
                </div>
            </div>
        `;
    }

    const cards = rows.map(record => {
        const rowHtml = renderRigaTabella(pageName, record);
        const cells = extractRowCells(rowHtml);
        if (!cells.length) return '';

        const headers = config.headers || [];
        const actionCell = cells[cells.length - 1];
        const detailCells = cells.slice(1, -1);
        const primaryCell = cells[0];
        const searchIndex = cells.map(cell => cell.text).join(' ').toLowerCase();
        const primaryAttrs = primaryCell.attrs && /onclick=/.test(primaryCell.attrs)
            ? `${primaryCell.attrs} role="button" tabindex="0"`
            : '';

        const detailMarkup = detailCells.map((cell, index) => `
            <div class="crm-mobile-record__field">
                <span class="crm-mobile-record__label">${cleanUiText(headers[index + 1] || `Campo ${index + 2}`)}</span>
                <div class="crm-mobile-record__value">${cell.html}</div>
            </div>
        `).join('');

        return `
            <article class="crm-mobile-record" data-search-index="${escapeHtmlAttr(searchIndex)}">
                <div class="crm-mobile-record__head">
                    <div class="crm-mobile-record__lead" ${primaryAttrs}>${primaryCell.html}</div>
                </div>
                ${detailMarkup ? `<div class="crm-mobile-record__body">${detailMarkup}</div>` : ''}
                <div class="crm-mobile-record__footer">
                    <span class="crm-mobile-record__label">${cleanUiText(headers[cells.length - 1] || 'Azioni')}</span>
                    <div class="crm-mobile-record__actions">${actionCell.html}</div>
                </div>
            </article>
        `;
    }).join('');

    return `<div id="crm-mobile-card-list" class="crm-mobile-card-list">${cards}</div>`;
}

function escapeHtmlAttr(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// Renderizza una singola riga della tabella a seconda del contesto
function renderRigaTabella(pageName, r) {
    let rigaHtml = `<tr id="row-${escapeHtmlAttr(r.id)}" data-search-nome="${escapeHtmlAttr(r.nome)}" data-search-azienda="${escapeHtmlAttr(r.azienda)}" data-search-codice="${escapeHtmlAttr(r.codice)}" data-search-numero="${escapeHtmlAttr(r.numero)}" data-search-titolo="${escapeHtmlAttr(r.titolo)}">`;

    if (pageName === 'segnalazioni') {
        const cli = DATASETS.clienti.find(c => c.id === r.cliente) || { azienda: "Sconosciuto" };
        const leadDays = daysFromToday(r.data);
        
        rigaHtml += `
            <td onclick="apriRecordDettaglio('segnalazioni', '${r.id}')" style="cursor: pointer;">
                <div class="client-name-bold">${r.titolo}</div>
                <div class="client-company-sub">${r.descrizione || ''}</div>
                <div class="crm-inline-tags"><span class="crm-inline-tag is-warning">${r.priorita}</span><span class="crm-inline-tag">${formatRelativeDays(leadDays)}</span></div>
            </td>
            <td>${cli.azienda}</td>
            <td><span class="status-pill status-media">${r.zona}</span></td>
            <td><span class="status-pill status-${r.priorita}">${r.priorita.toUpperCase()}</span></td>
            <td><span class="status-pill status-${r.stato}">${mappaNomeStato(r.stato)}</span></td>
            <td>
                ${r.stato !== 'risolto' ? `
                    <button class="btn-primary btn-workflow-next" style="min-height: 28px; height:28px; padding: 0 10px; font-size:11px; border-radius:6px;" onclick="convertiSegnalazioneInPreventivo('${r.id}')" title="Genera un preventivo per questa opportunita">
                        <i class="fas fa-arrow-right"></i> Crea Prev.
                    </button>
                ` : `<span style="font-size: 11px; color: #10b981; font-weight: 700;"><i class="fas fa-check-double"></i> Convertito</span>`}
            </td>
        `;
    } else if (pageName === 'clienti') {
        const lastTimeline = Array.isArray(r.timeline) && r.timeline.length ? r.timeline[0] : null;
        rigaHtml += `
            <td onclick="apriVisualizzazioneTimeline('${r.id}')" style="cursor: pointer;">
                <div class="client-name-bold">${r.azienda}</div>
                <div class="client-company-sub">P.IVA: ${r.piva || 'N/D'}</div>
                <div class="crm-inline-tags"><span class="crm-inline-tag">${mappaNomeStato(r.stato)}</span>${lastTimeline ? `<span class="crm-inline-tag">Ultimo touch: ${lastTimeline.date}</span>` : ''}</div>
            </td>
            <td>
                <div class="client-name-bold">${r.nome}</div>
                <div class="client-company-sub"><i class="far fa-envelope"></i> ${r.email || 'N/A'} | <i class="fas fa-phone-alt" style="font-size: 11px;"></i> ${r.telefono || 'N/D'}</div>
            </td>
            <td style="font-weight: 700;">${formatCrmMoney(r.valore || 0)}</td>
            <td>
                <div>SDI: <span style="font-family: monospace; font-weight: 700; background: #e2e8f0; padding: 2px 6px; border-radius: 4px; font-size:10px;">${r.sdi || 'N/D'}</span></div>
                <div class="client-company-sub"><i class="far fa-envelope"></i> ${r.pec || 'N/D'}</div>
            </td>
            <td>
                <span class="status-pill status-${r.stato}">${mappaNomeStato(r.stato)}</span>
            </td>
        `;
    } else if (pageName === 'preventivi') {
        const cli = DATASETS.clienti.find(c => c.id === r.cliente) || { azienda: "Sconosciuto" };
        const righeCount = r.righe ? r.righe.length : 0;
        const quoteDays = daysFromToday(r.dataScadenza);
        const righeDesc = r.righe ? r.righe.map(li => {
            const p = prodotti.find(item => item.id === li.prodotto);
            return `${p ? p.codice : li.prodotto} (x${li.quantita})`;
        }).join(', ') : 'Nessun articolo';

        rigaHtml += `
            <td onclick="apriRecordDettaglio('preventivi', '${r.id}')" style="font-weight: 700; cursor: pointer;">${r.numero}<div class="crm-inline-tags"><span class="crm-inline-tag ${quoteDays !== null && quoteDays <= 3 ? 'is-danger' : ''}">${formatRelativeDays(quoteDays)}</span></div></td>
            <td>${cli.azienda}</td>
            <td>
                <div>Offerta: ${r.data}</div>
                <div class="client-company-sub" style="color: #ef4444; font-weight: 600;">Scad: ${r.dataScadenza || 'N/D'}</div>
            </td>
            <td>
                <div style="font-size: 11px; max-width: 220px; line-height: 1.4; color: var(--text-muted);" title="${righeDesc}">
                    <strong>${righeCount} righe:</strong> ${righeDesc.length > 35 ? righeDesc.slice(0, 33) + '...' : righeDesc}
                </div>
            </td>
            <td style="font-weight: 700; color: #1e293b;">${formatCrmMoney(r.totale || 0)}</td>
            <td>
                <span class="status-pill status-${r.stato}">${mappaNomeStato(r.stato)}</span>
            </td>
            <td>
                ${r.stato !== 'accettato' ? `
                    <button class="btn-primary btn-workflow-next" style="min-height: 28px; height:28px; padding: 0 10px; font-size:11px; border-radius:6px;" onclick="convertiPreventivoInOrdine('${r.id}')" title="Accetta l'offerta e crea l'ordine di vendita">
                        <i class="fas fa-file-signature"></i> Crea Ordine
                    </button>
                ` : `<span style="font-size: 11px; color: #10b981; font-weight: 700;"><i class="fas fa-check-double"></i> Approvato</span>`}
            </td>
        `;
    } else if (pageName === 'preventiviAcquisto') {
        const forn = DATASETS.fornitori.find(f => f.id === r.fornitore) || { nome: "Sconosciuto" };
        const righeCount = r.righe ? r.righe.length : 0;
        const righeDesc = r.righe ? r.righe.map(li => {
            const p = prodotti.find(item => item.id === li.prodotto);
            return `${p ? p.codice : li.prodotto} (x${li.quantita})`;
        }).join(', ') : 'Nessun articolo';

        rigaHtml += `
            <td onclick="apriRecordDettaglio('preventiviAcquisto', '${r.id}')" style="font-weight: 700; cursor: pointer;">${r.numero}</td>
            <td>${forn.nome}</td>
            <td>
                <div>Richiesta: ${r.data}</div>
                <div class="client-company-sub" style="color: #ef4444; font-weight: 600;">Scad: ${r.dataScadenza || 'N/D'}</div>
            </td>
            <td>
                <div style="font-size: 11px; max-width: 220px; line-height: 1.4; color: var(--text-muted);" title="${righeDesc}">
                    <strong>${righeCount} righe:</strong> ${righeDesc.length > 35 ? righeDesc.slice(0, 33) + '...' : righeDesc}
                </div>
            </td>
            <td style="font-weight: 700; color: #1e293b;">${formatCrmMoney(r.totale || 0)}</td>
            <td>
                <span class="status-pill status-${r.stato}">${mappaNomeStato(r.stato)}</span>
            </td>
        `;
    } else if (pageName === 'ordiniVendita') {
        const cli = DATASETS.clienti.find(c => c.id === r.cliente) || { azienda: "Sconosciuto" };
        const righeCount = r.righe ? r.righe.length : 0;
        const orderDays = daysFromToday(r.dataConsegna);
        const righeDesc = r.righe ? r.righe.map(li => {
            const p = prodotti.find(item => item.id === li.prodotto);
            return `${p ? p.codice : li.prodotto} (x${li.quantita})`;
        }).join(', ') : 'Nessun articolo';

        rigaHtml += `
            <td onclick="apriRecordDettaglio('ordiniVendita', '${r.id}')" style="font-weight: 700; cursor: pointer;">${r.numero}<div class="crm-inline-tags"><span class="crm-inline-tag ${orderDays !== null && orderDays <= 2 ? 'is-danger' : ''}">${formatRelativeDays(orderDays)}</span></div></td>
            <td>${cli.azienda}</td>
            <td>
                <div>Ord: ${r.data}</div>
                <div class="client-company-sub" style="font-weight:600; color:#3b82f6;">Consegna: ${r.dataConsegna || 'N/D'}</div>
            </td>
            <td>
                <div style="font-size: 11px; max-width: 220px; line-height: 1.4; color: var(--text-muted);" title="${righeDesc}">
                    <strong>${righeCount} righe:</strong> ${righeDesc.length > 35 ? righeDesc.slice(0, 33) + '...' : righeDesc}
                </div>
            </td>
            <td>
                <span class="status-pill status-${r.statoPagamento || 'nonpagato'}">${r.statoPagamento === 'pagato' ? 'PAGATO' : r.statoPagamento === 'parziale' ? 'PARZIALE' : 'NON PAGATO'}</span>
            </td>
            <td style="font-weight: 700; color: #1e293b;">${formatCrmMoney(r.totale || 0)}</td>
            <td>
                <span class="status-pill status-${r.stato}">${mappaNomeStato(r.stato)}</span>
            </td>
            <td>
                ${r.stato !== 'spedito' && r.stato !== 'consegnato' ? `
                    <button class="btn-primary btn-workflow-next" style="min-height: 28px; height:28px; padding: 0 10px; font-size:11px; border-radius:6px;" onclick="convertiOrdineInDDT('${r.id}')" title="Crea documento di trasporto DDT di spedizione">
                        <i class="fas fa-truck"></i> Spedisci / DDT
                    </button>
                ` : `<span style="font-size: 11px; color: #10b981; font-weight: 700;"><i class="fas fa-check-double"></i> Spedito</span>`}
            </td>
        `;
    } else if (pageName === 'ddtVendita') {
        const cli = DATASETS.clienti.find(c => c.id === r.cliente) || { azienda: "Sconosciuto" };
        const ordine = DATASETS.ordiniVendita.find(o => o.numero === r.ordineRif);
        const righe = Array.isArray(r.righe) && r.righe.length ? r.righe : (Array.isArray(ordine?.righe) ? ordine.righe : []);
        const righeDesc = righe.map(li => {
            const p = prodotti.find(item => item.id === li.prodotto);
            return `${p ? p.codice : li.prodotto} (x${li.quantita})`;
        }).join(', ');
        rigaHtml += `
            <td onclick="apriRecordDettaglio('ddtVendita', '${r.id}')" style="font-weight: 700; cursor: pointer;">${r.numero}</td>
            <td>${cli.azienda}</td>
            <td>${r.data}</td>
            <td>${r.ordineRif || 'N/A'}</td>
            <td>
                <div style="font-size: 11px; max-width: 220px; line-height: 1.4; color: var(--text-muted);" title="${righeDesc}">
                    <strong>${righe.length} righe:</strong> ${righeDesc.length > 35 ? righeDesc.slice(0, 33) + '...' : (righeDesc || 'Nessun articolo')}
                </div>
            </td>
            <td>
                <div>Colli: ${r.colli || 1}</div>
                <div class="client-company-sub"><i class="fas fa-truck"></i> ${r.vettore || 'DHL'}</div>
            </td>
            <td>
                <div style="font-size: 11px;">Peso: <strong>${r.pesoLordo || 0} kg</strong></div>
                <div style="font-size: 11px; color: var(--text-muted);">Volume: ${r.volumeMc || 0} mc | Porto: ${r.porto || 'franco'}</div>
            </td>
        `;
    } else if (pageName === 'fornitori') {
        rigaHtml += `
            <td onclick="apriRecordDettaglio('fornitori', '${r.id}')" style="font-weight: 700; cursor: pointer;">
                <div>${r.nome}</div>
                <div class="client-company-sub">P.IVA: ${r.piva || 'N/D'}</div>
            </td>
            <td>
                <div class="client-name-bold">${r.referente || 'N/D'}</div>
                <div class="client-company-sub"><i class="far fa-envelope"></i> ${r.email || 'N/A'} | <i class="fas fa-phone-alt" style="font-size: 11px;"></i> ${r.telefono || 'N/D'}</div>
            </td>
            <td>
                <div class="client-company-sub"><i class="far fa-envelope"></i> PEC: ${r.pec || 'N/D'}</div>
                <div class="client-company-sub">SDI: <span style="font-family: monospace; font-weight: 700; background: #e2e8f0; padding: 2px 4px; border-radius: 4px; font-size:10px;">${r.sdi || 'N/D'}</span></div>
            </td>
            <td>
                <span class="status-pill status-bassa">${r.terminiPagamento ? r.terminiPagamento.replace('_', ' ').toUpperCase() : 'VISTA FATTURA'}</span>
            </td>
        `;
    } else if (pageName === 'ordiniAcquisto') {
        const forn = DATASETS.fornitori.find(f => f.id === r.fornitore) || { nome: "Sconosciuto" };
        const righeCount = r.righe ? r.righe.length : 0;
        rigaHtml += `
            <td onclick="apriRecordDettaglio('ordiniAcquisto', '${r.id}')" style="font-weight: 700; cursor: pointer;">${r.numero}</td>
            <td>${forn.nome}</td>
            <td>
                <div>Inviato: ${r.data}</div>
                <div class="client-company-sub" style="font-weight:600; color:#d97706;">Prevista: ${r.dataConsegna || 'N/D'}</div>
            </td>
            <td>
                <div style="font-size: 11px; color: var(--text-muted);">
                    <strong>${righeCount} righe</strong> di componenti
                </div>
            </td>
            <td style="font-weight: 700; color: #1e293b;">${formatCrmMoney(r.totale || 0)}</td>
            <td>
                <span class="status-pill status-${r.stato}">${mappaNomeStato(r.stato)}</span>
            </td>
            <td>
                ${r.stato !== 'ricevuto' ? `
                    <button class="btn-primary btn-workflow-next" style="min-height: 28px; height:28px; padding: 0 10px; font-size:11px; border-radius:6px;" onclick="convertiOrdineAcquistoInDDT('${r.id}')" title="Crea DDT di acquisto per ricezione merce">
                        <i class="fas fa-truck-ramp-box"></i> Evadi in DDT
                    </button>
                ` : `<span style="font-size: 11px; color: #10b981; font-weight: 700;"><i class="fas fa-check-double"></i> Ricevuto</span>`}
            </td>
        `;
    } else if (pageName === 'ddtAcquisto') {
        const forn = DATASETS.fornitori.find(f => f.id === r.fornitore) || { nome: "Sconosciuto" };
        const ordine = DATASETS.ordiniAcquisto.find(o => o.numero === r.ordineRif);
        const righe = Array.isArray(r.righe) && r.righe.length ? r.righe : (Array.isArray(ordine?.righe) ? ordine.righe : []);
        const righeDesc = righe.map(li => {
            const p = prodotti.find(item => item.id === li.prodotto);
            return `${p ? p.codice : li.prodotto} (x${li.quantita})`;
        }).join(', ');
        rigaHtml += `
            <td onclick="apriRecordDettaglio('ddtAcquisto', '${r.id}')" style="font-weight: 700; cursor: pointer;">${r.numero}</td>
            <td>${forn.nome}</td>
            <td>${r.data}</td>
            <td>${r.ordineRif || 'N/A'}</td>
            <td>
                <div style="font-size: 11px; max-width: 220px; line-height: 1.4; color: var(--text-muted);" title="${righeDesc}">
                    <strong>${righe.length} righe:</strong> ${righeDesc.length > 35 ? righeDesc.slice(0, 33) + '...' : (righeDesc || 'Nessun articolo')}
                </div>
            </td>
            <td>
                <div>Colli: ${r.colli || 1}</div>
                <div class="client-company-sub"><i class="fas fa-truck"></i> ${r.vettore || 'DHL'}</div>
            </td>
            <td>
                <div style="font-size: 11px;">Peso: <strong>${r.pesoLordo || 0} kg</strong></div>
                <div style="font-size: 11px; color: var(--text-muted);">Volume: ${r.volumeMc || 0} mc</div>
            </td>
        `;
    } else if (pageName === 'prodotti') {
        rigaHtml += `
            <td onclick="apriRecordDettaglio('prodotti', '${r.id}')" style="font-family: monospace; font-weight: 700; cursor: pointer;">
                <div>${r.codice}</div>
                <div style="font-size: 10px; color: var(--text-muted); font-weight: normal;">EAN: ${r.ean || 'N/D'}</div>
                <div class="crm-inline-tags"><span class="crm-inline-tag">${r.categoria || 'Categoria'}</span></div>
            </td>
            <td style="font-weight: 700;">
                <div>${r.nome}</div>
                <div style="font-size: 10px; font-weight: normal; color: var(--text-muted); max-width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${r.descrizioneTecnica || ''}</div>
            </td>
            <td style="font-weight: 700; color: #059669;">€ ${Number(r.prezzoVendita || 0).toLocaleString('it-IT')}</td>
            <td style="color: var(--text-muted);">€ ${Number(r.prezzoAcquisto || 0).toLocaleString('it-IT')}</td>
            <td>
                <div><span class="status-pill status-media">${r.categoria || 'Varie'}</span></div>
                <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">Prod: ${r.produttore || 'PROD S.r.l.'}</div>
            </td>
        `;
    } else if (pageName === 'distintaBase') {
        const prod = DATASETS.prodotti.find(p => p.id === r.prodotto) || { nome: "Sconosciuto", prezzoVendita: 0 };
        const costoTotale = calcolaCostoBOM(r.componentiCsv);
        
        rigaHtml += `
            <td onclick="apriRecordDettaglio('distintaBase', '${r.id}')" style="cursor: pointer;">
                <div class="client-name-bold">${prod.nome}</div>
                <div class="client-company-sub">Cod. Finito: ${prod.codice}</div>
            </td>
            <td>
                <div style="font-size: 11px; max-width: 250px; line-height: 1.4;">
                    ${renderBOMComponentiPills(r.componentiCsv)}
                </div>
            </td>
            <td style="font-weight: 700; color: #dc2626;">${formatCrmMoney(costoTotale)}</td>
            <td style="font-weight: 700; color: #059669;">${formatCrmMoney(prod.prezzoVendita || 0)}</td>
        `;
    } else if (pageName === 'magazzino') {
        const prod = DATASETS.prodotti.find(p => p.id === r.prodotto) || { codice: "N/A", nome: "Sconosciuto" };
        const sottoScorta = Number(r.quantita) <= Number(r.quantitaMinima || 0);
        rigaHtml += `
            <td onclick="apriRecordDettaglio('magazzino', '${r.id}')" style="cursor: pointer;">
                <div class="client-name-bold">${prod.nome}</div>
                <div class="client-company-sub">SKU: ${prod.codice}</div>
                <div class="crm-inline-tags"><span class="crm-inline-tag ${sottoScorta ? 'is-danger' : ''}">${sottoScorta ? 'Sotto scorta' : 'Stock ok'}</span></div>
            </td>
            <td style="font-weight: 800; font-size: 14px;">${r.quantita} unita</td>
            <td style="color: var(--text-muted);">${r.quantitaMinima || 0} unita</td>
            <td>
                <span class="status-pill status-${sottoScorta ? 'errore' : 'bassa'}">${sottoScorta ? 'SOTTO SCORTA' : 'OK'}</span>
            </td>
            <td style="font-weight: 700; color: #1e293b;">${formatCrmMoney(r.valoreFIFO || 0)}</td>
            <td><i class="fas fa-map-marker-alt" style="color: var(--text-muted); font-size: 11px; margin-right: 4px;"></i> ${r.ubicazione || 'Non assegnato'}</td>
        `;
    }

    // CRUD action buttons
    rigaHtml += `
        <td class="actions-cell" onclick="event.stopPropagation()">
            <button class="action-icon-btn btn-edit" onclick="apriModalGenericModifica('${r.id}')" title="Modifica">
                <i class="fas fa-pencil-alt"></i>
            </button>
            <button class="action-icon-btn btn-duplicate" onclick="duplicaRecord('${r.id}')" title="Duplica">
                <i class="far fa-copy"></i>
            </button>
            <button class="action-icon-btn btn-delete" onclick="eliminaRecord('${r.id}')" title="Elimina">
                <i class="far fa-trash-alt"></i>
            </button>
        </td>
    </tr>`;

    return rigaHtml;
}

// Calcola costo BOM totale dai SKU inseriti
function calcolaCostoBOM(csv) {
    if (!csv) return 0;
    let sum = 0;
    const parti = csv.split(',').map(p => p.trim());
    parti.forEach(p => {
        const splitVal = p.split(':');
        if (splitVal.length === 2) {
            const sku = splitVal[0].trim();
            const qta = Number(splitVal[1]) || 0;
            const comp = prodotti.find(item => item.codice === sku);
            if (comp) {
                sum += (comp.prezzoAcquisto * qta);
            }
        }
    });
    return sum;
}

// Visualizza i componenti BOM in modo leggibile
function renderBOMComponentiPills(csv) {
    if (!csv) return "";
    let pills = "";
    const parti = csv.split(',').map(p => p.trim());
    parti.forEach(p => {
        const splitVal = p.split(':');
        if (splitVal.length === 2) {
            const sku = splitVal[0].trim();
            const qta = splitVal[1].trim();
            const comp = prodotti.find(item => item.codice === sku) || { nome: sku };
            pills += `<span class="status-pill status-bassa" style="margin: 2px; padding: 1px 6px; font-size: 9px;" title="${comp.nome}">${sku} x${qta}</span>`;
        }
    });
    return pills;
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 6. TIMELINE DETTAGLIO CLIENTE ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function apriVisualizzazioneTimeline(clientId) {
    apriCrmDrawer('clienti', clientId);
    setDrawerTab('timeline');
}

function renderTimelineDettaglio(container, cliente) {
    if (!cliente.timeline) {
        cliente.timeline = [{ type: "nota", text: "Record inserito.", date: ottieniDataOraAttuale() }];
    }

    const related = getClientRelatedRecords(cliente.id);
    let html = `
        <div class="crm-page-header">
            <div class="crm-header-card">
                <div class="crm-header-info">
                    <span class="crm-header-eyebrow">Scheda Dettagli Cliente</span>
                    <h2 class="crm-header-title">${cliente.azienda}</h2>
                </div>
                <div class="crm-header-actions">
                    <button class="btn-secondary" onclick="cambiaPagina('clienti')">
                        <i class="fas fa-chevron-left"></i> Torna alla Lista
                    </button>
                    <button class="btn-primary" onclick="apriModalGenericModifica('${cliente.id}')">
                        <i class="fas fa-pen"></i> Modifica Anagrafica
                    </button>
                </div>
            </div>
        </div>

        ${renderClientSummaryCards(cliente)}

        <div class="detail-layout">
            <div class="detail-sidebar-card">
                <div class="detail-user-block">
                    <div class="detail-avatar-large">${ottieniIniziali(cliente.nome)}</div>
                    <div class="detail-name">${cliente.nome}</div>
                    <div class="detail-company">${cliente.azienda}</div>
                </div>
                
                <div class="detail-info-list">
                    <div class="detail-info-item">
                        <span class="detail-info-label">Stato Pipeline</span>
                        <div style="margin-top: 4px;">
                            <span class="status-pill status-${cliente.stato}">${mappaNomeStato(cliente.stato)}</span>
                        </div>
                    </div>
                    
                    <div class="detail-info-item">
                        <span class="detail-info-label">Valore Offerta</span>
                        <span class="detail-info-value" style="font-size: 16px; color: #1e293b;">${formatCrmMoney(cliente.valore || 0)}</span>
                    </div>

                    <div class="detail-info-item">
                        <span class="detail-info-label">Email Commerciale</span>
                        <span class="detail-info-value"><a href="mailto:${cliente.email}" style="color: inherit; text-decoration: none;"><i class="far fa-envelope" style="margin-right: 5px;"></i> ${cliente.email || 'N/A'}</a></span>
                    </div>

                    <div class="detail-info-item">
                        <span class="detail-info-label">Telefono di Riferimento</span>
                        <span class="detail-info-value"><a href="tel:${cliente.telefono}" style="color: inherit; text-decoration: none;"><i class="fas fa-phone-alt" style="margin-right: 5px; font-size: 11px;"></i> ${cliente.telefono || 'N/A'}</a></span>
                    </div>

                    <div class="detail-info-item">
                        <span class="detail-info-label">Data Creazione Anagrafica</span>
                        <span class="detail-info-value"><i class="far fa-calendar-alt" style="margin-right: 5px;"></i> ${cliente.creato || "N/D"}</span>
                    </div>
                </div>

                <div class="detail-related-stack">
                    <div class="detail-related-card">
                        <span class="detail-info-label">Preventivi collegati</span>
                        ${renderCompactRelationList(related.preventivi.slice(0, 4), { emptyLabel: 'Nessun preventivo collegato', pageName: 'preventivi' })}
                    </div>
                    <div class="detail-related-card">
                        <span class="detail-info-label">Ordini collegati</span>
                        ${renderCompactRelationList(related.ordiniVendita.slice(0, 4), { emptyLabel: 'Nessun ordine collegato', pageName: 'ordiniVendita' })}
                    </div>
                </div>
            </div>

            <div class="detail-timeline-panel">
                <div class="detail-panel-title">
                    <span>Timeline Interazioni</span>
                    <button class="btn-dark" style="min-height: 36px; padding: 0 14px; font-size: 12px;" onclick="apriModalInterazione('${cliente.id}')">
                        <i class="fas fa-plus"></i> Registra Attività
                    </button>
                </div>
                
                <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 16px; padding: 14px; margin-bottom: 24px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <span style="font-size: 10px; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">Logger Rapido (Premi Invio per salvare)</span>
                    </div>
                    <div class="detail-quick-note-row">
                        <input type="text" id="fast-note-input" class="input-field-modern" placeholder="Aggiungi una nota al volo..." onkeydown="if(event.key==='Enter') aggiungiNotaRapida('${cliente.id}')" style="font-size: 13px;">
                        <button class="btn-dark" onclick="aggiungiNotaRapida('${cliente.id}')" style="min-height: auto; height: 38px; padding: 0 14px; font-size: 12px; border-radius: 10px;">
                            Invia
                        </button>
                    </div>
                </div>

                <div class="timeline" id="timeline-container">
    `;

    cliente.timeline.forEach((item, idx) => {
        const activeClass = idx === 0 ? "active-item" : "";
        const iconClass = item.type === "chiamata" ? "fa-phone" 
                        : item.type === "email" ? "fa-envelope" 
                        : item.type === "incontro" ? "fa-handshake" 
                        : "fa-sticky-note";

        html += `
            <div class="timeline-item ${activeClass}">
                <div class="timeline-icon">
                    <i class="fas ${iconClass}"></i>
                </div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <span class="timeline-title">${renderInterazioneTitolo(item.type)}</span>
                        <span class="timeline-time">${item.date}</span>
                    </div>
                    <p class="timeline-text">${item.text}</p>
                </div>
            </div>
        `;
    });

    html += `
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 7. WORKFLOW CONVERSIONS (COMMERCIAL TRANSITIONS ITER) ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function convertiSegnalazioneInPreventivo(segId) {
    const seg = DATASETS.segnalazioni.find(s => s.id === segId);
    if (!seg) return;

    // Recupera prezzo di vendita prodotto interesse per il preventivo
    const prod = DATASETS.prodotti.find(p => p.id === seg.prodottoInteresse) || { prezzoVendita: 0 };

    // Imposta la pagina sui preventivi e apri il form pre-compilato!
    paginaAttuale = 'preventivi';
    editingRecordId = null;
    
    // Cambia interfaccia e apri form
    cambiaPagina('preventivi');
    
    setTimeout(() => {
        apriModalGenericCrea();
        
        // Popola i campi pre-compilandoli
        document.getElementById('field-numero').value = getSezionali()['preventivi'] || 1;
        document.getElementById('field-cliente').value = seg.cliente;
        document.getElementById('field-data').value = new Date().toISOString().slice(0, 10);
        document.getElementById('field-totale').value = prod.prezzoVendita;
        document.getElementById('field-stato').value = "bozza";
        
        // Link di riferimento
        mostraNotifica("Form Preventivo pre-popolato dall'opportunita", "info");
        
        // Risolvi/chiudi la segnalazione in background
        seg.stato = 'risolto';
        aggiornaTuttiBadgeSidebar();
    }, 100);
}

function convertiPreventivoInOrdine(prevId) {
    const prev = DATASETS.preventivi.find(p => p.id === prevId);
    if (!prev) return;

    const righeClonate = Array.isArray(prev.righe) ? JSON.parse(JSON.stringify(prev.righe)) : [];
    const totaleDaRighe = righeClonate.reduce((sum, riga) => {
        const prezzo = Number(riga.prezzo || prezzoProdottoPerDocumento(riga.prodotto, 'ordiniVendita') || 0);
        const qty = Number(riga.quantita || 0);
        const sconto = Number(riga.sconto || 0);
        return sum + (qty * prezzo * (1 - sconto / 100));
    }, 0);

    // Crea in automatico l'ordine di vendita
    const nuovoId = "ov_" + (DATASETS.ordiniVendita.length + 1) + "_" + Date.now().toString().slice(-4);
    const sezOrdini = getSezionali();
    const numeroOrdine = sezOrdini['ordiniVendita'] || 1;
    sezOrdini['ordiniVendita'] = Number(numeroOrdine) + 1;
    saveSezionali(sezOrdini);

    const nuovoOrdine = {
        id: nuovoId,
        numero: numeroOrdine,
        cliente: prev.cliente,
        data: new Date().toISOString().slice(0, 10),
        righe: righeClonate,
        totale: Number(prev.totale || 0) || totaleDaRighe,
        stato: "daelaborare"
    };

    // Salva in DB
    DATASETS.ordiniVendita.unshift(nuovoOrdine);
    
    // Aggiorna lo stato del preventivo ad accettato
    prev.stato = 'accettato';

    mostraNotifica(`Ordine di Vendita ${nuovoOrdine.numero} creato automaticamente!`, "success");
    aggiornaTuttiBadgeSidebar();
    cambiaPagina('ordiniVendita');
}

function convertiOrdineInDDT(ordId) {
    const ord = DATASETS.ordiniVendita.find(o => o.id === ordId);
    if (!ord) return;

    // Imposta la pagina sui DDT ed apri il modal pre-compilato
    paginaAttuale = 'ddtVendita';
    editingRecordId = null;
    
    cambiaPagina('ddtVendita');
    
    setTimeout(() => {
        apriModalGenericCrea();
        
        document.getElementById('field-numero').value = getSezionali()['ddtVendita'] || 1;
        document.getElementById('field-cliente').value = ord.cliente;
        document.getElementById('field-data').value = new Date().toISOString().slice(0, 10);
        document.getElementById('field-ordineRif').value = ord.numero;
        document.getElementById('field-colli').value = 1;
        document.getElementById('field-vettore').value = "DHL Express";
        window.__pendingDdtVenditaLines = Array.isArray(ord.righe) ? JSON.parse(JSON.stringify(ord.righe)) : [];
        
        mostraNotifica("Form Spedizione DDT pronto per l'invio", "info");
        
        // Aggiorna lo stato dell'ordine in background
        ord.stato = 'spedito';
        aggiornaTuttiBadgeSidebar();
    }, 100);
}

function convertiOrdineAcquistoInDDT(ordId) {
    const ord = DATASETS.ordiniAcquisto.find(o => o.id === ordId);
    if (!ord) return;

    paginaAttuale = 'ddtAcquisto';
    editingRecordId = null;

    cambiaPagina('ddtAcquisto');

    setTimeout(() => {
        apriModalGenericCrea();

        document.getElementById('field-numero').value = getSezionali()['ddtAcquisto'] || 1;
        document.getElementById('field-fornitore').value = ord.fornitore;
        document.getElementById('field-data').value = new Date().toISOString().slice(0, 10);
        document.getElementById('field-ordineRif').value = ord.numero;
        document.getElementById('field-colli').value = 1;
        document.getElementById('field-vettore').value = "Corriere fornitore";
        window.__pendingDdtAcquistoLines = Array.isArray(ord.righe) ? JSON.parse(JSON.stringify(ord.righe)) : [];

        mostraNotifica("Form DDT acquisto pronto per la ricezione merce", "info");

        ord.stato = 'ricevuto';
        aggiornaTuttiBadgeSidebar();
    }, 100);
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 8. MOTORE DI GENERAZIONE DINAMICA DEI FORM CRUD (MODALI) ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function costruisciCampiFormModal(pageName, record = null) {
    const fieldsContainer = document.getElementById('modal-generic-fields');
    fieldsContainer.innerHTML = '';
    
    const config = TABLE_CONFIGS[pageName];
    const fieldsConfig = [...config.fields];
    if (pageName === 'ordiniVendita') {
        const options = getOrdiniVenditaFieldOptions();
        (config.optionalFields || []).forEach(field => {
            if (options[field.key]) fieldsConfig.push(field);
        });
    }
    const modalContent = document.querySelector('#modal-generic .modal-content');
    if (modalContent) {
        modalContent.classList.toggle('modal-document', !!config.isDocument);
        modalContent.classList.toggle('modal-master-data', pageName === 'fornitori' || pageName === 'prodotti');
    }

    fieldsContainer.className = `modal-fields-container ${config.isDocument || pageName === 'fornitori' ? 'modal-form-grid' : ''}`;
    const groupLabels = {
        identita: pageName === 'fornitori' ? 'Identita e qualifica' : 'Dati principali',
        contatti: 'Contatti',
        fiscale: 'Fatturazione e pagamenti',
        logistica: 'Logistica',
        stato: 'Stato e avanzamento',
        tecnico: 'Dati tecnici',
        note: 'Note'
    };
    let currentGroup = '';

    fieldsConfig.forEach(field => {
        const group = getFormFieldGroup(pageName, field.key, field.type);
        if (group !== currentGroup) {
            currentGroup = group;
            fieldsContainer.innerHTML += `<div class="form-section-title ${group === 'note' ? 'field-full' : ''}">${groupLabels[group] || 'Dettagli'}</div>`;
        }

        const isRequired = field.required ? 'required' : '';
        const reqStar = field.required ? ' <span class="required">*</span>' : '';
        let val = record ? (record[field.key] || '') : '';
        
        let fieldHtml = `
            <div class="form-field ${field.fullWidth ? 'field-full' : ''}">
                <label class="modal-label">${field.label}${reqStar}</label>
        `;

        if (!record && field.key === 'numero' && ['preventivi', 'ordiniVendita', 'ddtVendita', 'preventiviAcquisto', 'ordiniAcquisto', 'ddtAcquisto'].includes(pageName)) {
            val = getSezionali()[pageName] || 1;
        }

        if (field.key === 'numero' && ['preventivi', 'ordiniVendita', 'ddtVendita', 'preventiviAcquisto', 'ordiniAcquisto', 'ddtAcquisto'].includes(pageName)) {
            const valoreNumero = record?.numero || val;
            fieldHtml += `<input type="${field.type}" id="field-${field.key}" class="input-field-modern" value="${valoreNumero}">`;
            fieldHtml += `</div>`;
            fieldsContainer.innerHTML += fieldHtml;
            return;
        }

        if (field.type === 'select') {
            fieldHtml += `<select id="field-${field.key}" class="input-field-modern select-custom" ${isRequired}>`;
            
            let opzioni = field.options || [];
            if (field.dynamicOptions) {
                const targetDataset = field.dynamicOptions === 'prodotti'
                    ? getSelectableProducts({ pageName, fieldKey: field.key })
                    : DATASETS[field.dynamicOptions];
                if (targetDataset) {
                    opzioni = targetDataset.map(item => {
                        let label = item.nome || item.azienda || item.numero || item.codice || item.id;
                        if (item.azienda && item.nome) label = `${item.azienda} (${item.nome})`;
                        return { value: item.id, label: label };
                    });
                }
            }

            if (!record) {
                fieldHtml += `<option value="" disabled selected>Seleziona un'opzione...</option>`;
            }

            opzioni.forEach(opt => {
                const selected = String(opt.value) === String(val) ? 'selected' : '';
                fieldHtml += `<option value="${opt.value}" ${selected}>${opt.label}</option>`;
            });

            fieldHtml += `</select>`;
        } else if (field.type === 'textarea') {
            fieldHtml += `<textarea id="field-${field.key}" placeholder="${field.placeholder || 'Scrivi dettagli utili per chi lavora il documento'}" ${isRequired}>${val}</textarea>`;
        } else {
            fieldHtml += `<input type="${field.type}" id="field-${field.key}" class="input-field-modern" value="${val}" placeholder="${field.placeholder || ''}" ${isRequired}>`;
        }

        fieldHtml += `</div>`;
        fieldsContainer.innerHTML += fieldHtml;
    });

    if (config.isDocument && !config.isDeliveryOnly) {
        fieldsContainer.innerHTML += costruisciEditorRigheDocumento(record);
        aggiornaTotaliDocumentoModal();
    }

    if (pageName === 'ordiniAcquisto') {
        const supplierSelect = document.getElementById('field-fornitore');
        if (supplierSelect) {
            supplierSelect.addEventListener('change', refreshDocumentLineProductOptions);
        }
        refreshDocumentLineProductOptions();
    }
}

function getFormFieldGroup(pageName, key, type) {
    if (type === 'textarea' || key === 'note') return 'note';
    if (['preventivi', 'ordiniVendita', 'ddtVendita', 'preventiviAcquisto', 'ordiniAcquisto', 'ddtAcquisto'].includes(pageName)) {
        return 'identita';
    }
    if (['email', 'telefono', 'referente'].includes(key)) return 'contatti';
    if (pageName === 'prodotti' && ['codice', 'alias', 'nome', 'tipo', 'categoria', 'sottocategoria', 'gruppo', 'brand', 'produttore', 'sku', 'barcode', 'metel', 'codDocumento'].includes(key)) return 'identita';
    if (pageName === 'prodotti' && ['prezzoVendita', 'prezzoAcquisto', 'iva', 'unitaMisura', 'quantitaConfezione', 'quantitaEsistente', 'provvigione', 'magazzino', 'peso', 'volume'].includes(key)) return 'tecnico';
    if (pageName === 'prodotti' && key === 'descrizioneTecnica') return 'note';
    if (pageName === 'clienti' && ['codice', 'azienda', 'tipo', 'stato', 'categoria', 'area', 'sottocategoria', 'sottosettore', 'agente', 'listino', 'fonte', 'dataNascita'].includes(key)) return 'identita';
    if (['piva', 'cf', 'pec', 'sdi', 'iban', 'terminiPagamento', 'statoPagamento', 'minimoOrdine'].includes(key)) return 'fiscale';
    if (['dataConsegna', 'porto', 'vettore', 'colli', 'aspettoBeni', 'pesoLordo', 'volumeMc', 'leadTime'].includes(key)) return 'logistica';
    if (['stato', 'priorita', 'statoQualifica'].includes(key)) return 'stato';
    return 'identita';
}

function generaNumeroOrdineVendita() {
    const numeri = DATASETS.ordiniVendita
        .map(ord => String(ord.numero || ''))
        .map(numero => {
            const match = numero.match(/(\d+)(?!.*\d)/);
            return match ? Number(match[1]) : 0;
        })
        .filter(num => Number.isFinite(num) && num > 0);
    const prossimo = (numeri.length ? Math.max(...numeri) : 0) + 1;
    return `ORDV-${new Date().getFullYear()}-${String(prossimo).padStart(3, '0')}`;
}

function costruisciEditorRigheDocumento(record = null) {
    const righe = record && Array.isArray(record.righe) && record.righe.length ? record.righe : [{ prodotto: '', quantita: 1, sconto: 0 }];
    const rows = righe.map((riga, idx) => costruisciRigaDocumentoHtml(riga, idx)).join('');
    return `
        <div class="lines-editor-container field-full">
            <div class="lines-editor-title">
                <span>Righe documento</span>
                <button type="button" class="btn-line-add" onclick="aggiungiRigaDocumentoModal()"><i class="fas fa-plus"></i> Aggiungi riga</button>
            </div>
            <div id="document-lines-body" class="document-lines-list">
                ${rows}
            </div>
            <div class="document-totals-panel">
                <div class="document-totals-card">
                    <div class="totals-row"><span>Sconto Globale %</span><input type="number" id="doc-global-discount" class="line-input global-discount-input" min="0" max="100" value="0" placeholder="%" oninput="aggiornaTotaliDocumentoModal()" style="max-width: 60px; text-align: right; background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2);"></div>
                    <div class="totals-row"><span>Imponibile</span><span id="doc-subtotal">EUR 0,00</span></div>
                    <div class="totals-row"><span>IVA stimata</span><span id="doc-tax">EUR 0,00</span></div>
                    <div class="totals-row totals-final"><span>Totale documento</span><span id="doc-grandtotal">EUR 0,00</span></div>
                </div>
            </div>
        </div>
    `;
}

function costruisciRigaDocumentoHtml(riga = {}, idx = 0) {
    const supplierId = ['ordiniAcquisto', 'ddtAcquisto'].includes(paginaAttuale) ? getSelectedSupplierForModal() : '';
    const productOptions = getSelectableProducts({
        pageName: paginaAttuale,
        documentType: ['ordiniAcquisto', 'ddtAcquisto'].includes(paginaAttuale) ? 'acquisto' : 'vendita',
        supplierId
    }).map(p => {
        const selected = p.id === riga.prodotto ? 'selected' : '';
        return `<option value="${p.id}" ${selected}>${p.codice} - ${p.nome}</option>`;
    }).join('');
    const selectedProduct = DATASETS.prodotti.find(p => p.id === riga.prodotto) || {};
    const selectedUom = riga.unitaMisura || selectedProduct.unitaMisura || 'pz';
    const selectedIva = String(riga.iva ?? selectedProduct.iva ?? 22);
    return `
        <div class="document-line-card document-line-row">
            <div class="line-card-header">
                <span class="line-card-index">Riga ${idx + 1}</span>
                <button type="button" class="line-delete-btn" onclick="rimuoviRigaDocumentoModal(this)" title="Elimina riga"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="line-card-grid">
                <div class="line-field col-span-2">
                    <label>Articolo</label>
                    <div class="line-articolo-stack">
                        <select class="line-input line-select line-product" onchange="aggiornaPrezzoRigaDocumento(this); aggiornaTotaliDocumentoModal()"><option value="">Seleziona articolo</option>${productOptions}</select>
                        <input type="hidden" class="line-sku" value="${selectedProduct.codice || ''}">
                    </div>
                </div>
                <div class="line-field col-span-2">
                    <label>Descrizione</label>
                    <input type="text" class="line-input line-description" value="${selectedProduct.nome || riga.descrizione || ''}" placeholder="Descrizione articolo">
                </div>
                <div class="line-field">
                    <label>U.M.</label>
                    <select class="line-input line-select line-uom" onchange="aggiornaTotaliDocumentoModal()"><option value="pz" ${selectedUom === 'pz' ? 'selected' : ''}>Pz</option><option value="m" ${selectedUom === 'm' ? 'selected' : ''}>m</option><option value="kg" ${selectedUom === 'kg' ? 'selected' : ''}>kg</option><option value="scatola" ${selectedUom === 'scatola' ? 'selected' : ''}>Scatola</option></select>
                </div>
                <div class="line-field">
                    <label>Q.ta</label>
                    <input type="number" min="0" step="1" class="line-input line-qty" value="${riga.quantita || 1}" oninput="aggiornaTotaliDocumentoModal()">
                </div>
                <div class="line-field">
                    <label>Prezzo</label>
                    <input type="number" min="0" step="0.01" class="line-input line-price" value="${riga.prezzo || ''}" placeholder="Auto" oninput="aggiornaTotaliDocumentoModal()">
                </div>
                <div class="line-field">
                    <label>Sc. %</label>
                    <input type="number" min="0" max="100" step="0.01" class="line-input line-discount1" value="${riga.sconto1 || 0}" placeholder="%" oninput="aggiornaTotaliDocumentoModal()">
                </div>
                <div class="line-field">
                    <label>IVA</label>
                    <select class="line-input line-select line-tax" onchange="aggiornaTotaliDocumentoModal()"><option value="22" ${selectedIva === '22' ? 'selected' : ''}>22%</option><option value="10" ${selectedIva === '10' ? 'selected' : ''}>10%</option><option value="4" ${selectedIva === '4' ? 'selected' : ''}>4%</option><option value="0" ${selectedIva === '0' ? 'selected' : ''}>0%</option></select>
                </div>
                <div class="line-field summary-field">
                    <label>Imponibile</label>
                    <div class="line-imponibile-cell">EUR 0,00</div>
                </div>
                <div class="line-field summary-field">
                    <label>Totale netto</label>
                    <div class="line-total-cell">EUR 0,00</div>
                </div>
                <div class="line-field summary-field col-span-1" style="display: flex; align-items: flex-end;">
                    <button type="button" class="btn-secondary btn-sm" onclick="toggleRigaAvanzata(this)" style="width: 100%; height: 26px; padding: 0;"><i class="fas fa-sliders-h"></i> Dett.</button>
                </div>
            </div>
            
            <div class="document-line-advanced" style="display: none;">
                <div class="line-advanced-panel">
                    <div class="line-advanced-grid">
                        <div class="line-advanced-field">
                            <label>Prezzo per confezione</label>
                            <input type="number" min="0" step="0.01" class="line-input line-packprice" value="${riga.prezzoConfezione || ''}" placeholder="EUR/conf" oninput="aggiornaTotaliDocumentoModal()">
                        </div>
                        <div class="line-advanced-field">
                            <label>Q.ta per confezione</label>
                            <input type="number" min="0" step="1" class="line-input line-packqty" value="${riga.quantitaConfezione || 1}" oninput="aggiornaTotaliDocumentoModal()">
                        </div>
                        <div class="line-advanced-field">
                            <label>Sconto 2</label>
                            <input type="number" min="0" max="100" step="0.01" class="line-input line-discount2" value="${riga.sconto2 || 0}" oninput="aggiornaTotaliDocumentoModal()">
                        </div>
                        <div class="line-advanced-field">
                            <label>Sconto 3</label>
                            <input type="number" min="0" max="100" step="0.01" class="line-input line-discount3" value="${riga.sconto3 || 0}" oninput="aggiornaTotaliDocumentoModal()">
                        </div>
                        <div class="line-advanced-field">
                            <label>Data consegna riga</label>
                            <input type="date" class="line-input line-delivery" value="${riga.dataConsegna || ''}" oninput="aggiornaTotaliDocumentoModal()">
                        </div>
                        <div class="line-advanced-field line-advanced-span">
                            <label>Note riga</label>
                            <input type="text" class="line-input line-notes" value="${riga.note || ''}" placeholder="Note su trasporto, imballo o gestione">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function aggiungiRigaDocumentoModal() {
    const tbody = document.getElementById('document-lines-body');
    if (!tbody) return;
    tbody.insertAdjacentHTML('beforeend', costruisciRigaDocumentoHtml({}, tbody.children.length));
    aggiornaTotaliDocumentoModal();
}

function rimuoviRigaDocumentoModal(button) {
    const tbody = document.getElementById('document-lines-body');
    if (!tbody || tbody.children.length <= 1) return;
    const row = button.closest('.document-line-card');
    row?.remove();
    // Update indices
    Array.from(tbody.querySelectorAll('.document-line-card')).forEach((card, idx) => {
        const indexEl = card.querySelector('.line-card-index');
        if (indexEl) indexEl.textContent = `Riga ${idx + 1}`;
    });
    aggiornaTotaliDocumentoModal();
}

function toggleRigaAvanzata(button) {
    const row = button.closest('.document-line-card');
    const advanced = row?.querySelector('.document-line-advanced');
    if (advanced) {
        if (advanced.style.display === 'none') {
            advanced.style.display = 'block';
        } else {
            advanced.style.display = 'none';
        }
    }
}

function aggiornaPrezzoRigaDocumento(selectEl) {
    const row = selectEl.closest('.document-line-card');
    const prodotto = DATASETS.prodotti.find(p => p.id === selectEl.value);
    const priceInput = row.querySelector('.line-price');
    const descInput = row.querySelector('.line-description');
    const skuInput = row.querySelector('.line-sku');
    if (prodotto && priceInput && !priceInput.value) {
        const isAcquisto = paginaAttuale === 'ordiniAcquisto';
        priceInput.value = Number(isAcquisto ? prodotto.prezzoAcquisto : prodotto.prezzoVendita || 0).toFixed(2);
    }
    if (prodotto && descInput) descInput.value = prodotto.nome || '';
    if (prodotto && skuInput) skuInput.value = prodotto.codice || '';
}

function leggiRigheDocumentoModal() {
    return Array.from(document.querySelectorAll('#document-lines-body .document-line-card')).map(row => {
        const advancedRow = row.querySelector('.document-line-advanced');
        return {
            prodotto: row.querySelector('.line-product')?.value || '',
            sku: row.querySelector('.line-sku')?.value || '',
            quantita: Number(row.querySelector('.line-qty')?.value || 0),
            prezzo: Number(row.querySelector('.line-price')?.value || 0) || prezzoProdottoPerDocumento(row.querySelector('.line-product')?.value || '', paginaAttuale),
            prezzoConfezione: Number(advancedRow?.querySelector('.line-packprice')?.value || 0),
            quantitaConfezione: Number(advancedRow?.querySelector('.line-packqty')?.value || 0),
            sconto1: Number(row.querySelector('.line-discount1')?.value || 0),
            sconto2: Number(advancedRow?.querySelector('.line-discount2')?.value || 0),
            sconto3: Number(advancedRow?.querySelector('.line-discount3')?.value || 0),
            iva: Number(row.querySelector('.line-tax')?.value || 0),
            dataConsegna: advancedRow?.querySelector('.line-delivery')?.value || '',
            unitaMisura: row.querySelector('.line-uom')?.value || 'pz',
            descrizione: row.querySelector('.line-description')?.value || '',
            note: advancedRow?.querySelector('.line-notes')?.value || ''
        };
    }).filter(riga => riga.prodotto && riga.quantita > 0);
}

function aggiornaTotaliDocumentoModal() {
    const righe = leggiRigheDocumentoModal();
    let imponibile = 0;
    let iva = 0;
    const globalDiscountInput = document.getElementById('doc-global-discount');
    const globalDiscount = globalDiscountInput ? Number(globalDiscountInput.value || 0) : 0;
    
    righe.forEach(riga => {
        const scontoTotale = [riga.sconto1, riga.sconto2, riga.sconto3].filter(v => Number.isFinite(v) && v > 0).reduce((acc, v) => acc + v, 0);
        const netto = riga.quantita * riga.prezzo * (1 - (scontoTotale || 0) / 100);
        imponibile += netto;
        iva += netto * (1 - globalDiscount / 100) * ((riga.iva || 0) / 100);
    });
    
    // applica sconto globale all'imponibile per il totale doc
    imponibile = imponibile * (1 - globalDiscount / 100);
    
    const format = value => `EUR ${value.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.querySelectorAll('#document-lines-body .document-line-card').forEach(row => {
        const advancedRow = row.querySelector('.document-line-advanced');
        const qty = Number(row.querySelector('.line-qty')?.value || 0);
        const price = Number(row.querySelector('.line-price')?.value || 0);
        const discount1 = Number(row.querySelector('.line-discount1')?.value || 0);
        const discount2 = Number(advancedRow?.querySelector('.line-discount2')?.value || 0);
        const discount3 = Number(advancedRow?.querySelector('.line-discount3')?.value || 0);
        const discount = discount1 + discount2 + discount3;
        
        const imponibileCell = row.querySelector('.line-imponibile-cell');
        if (imponibileCell) imponibileCell.textContent = format(qty * price);
        
        const totalCell = row.querySelector('.line-total-cell');
        if (totalCell) totalCell.textContent = format(qty * price * (1 - discount / 100));
    });
    const subtotalEl = document.getElementById('doc-subtotal');
    const taxEl = document.getElementById('doc-tax');
    const totalEl = document.getElementById('doc-grandtotal');
    if (subtotalEl) subtotalEl.textContent = format(imponibile);
    if (taxEl) taxEl.textContent = format(iva);
    if (totalEl) totalEl.textContent = format(imponibile + iva);
}

function apriModalGenericCrea() {
    editingRecordId = null;
    window.drawerPageName = paginaAttuale;
    window.drawerRecordId = null;
    
    const drawer = document.getElementById('crm-drawer');
    if (!drawer) return;

    const config = TABLE_CONFIGS[paginaAttuale];
    document.getElementById('crm-drawer-eyebrow').innerText = config.eyebrow || config.title;
    document.getElementById('crm-drawer-title').innerText = `Nuovo - ${config.title}`;
    
    const tabContainer = document.getElementById('crm-drawer-tabs');
    tabContainer.innerHTML = `
        <button type="button" class="crm-drawer-tab-btn active">
            <i class="fas fa-plus"></i> Inserimento Dati
        </button>
    `;

    drawer.classList.add('active', 'is-document');

    const body = document.getElementById('crm-drawer-body');
    const footer = document.getElementById('crm-drawer-footer');
    if (!body || !footer) return;

    const fieldsContainer = document.getElementById('modal-generic-fields');
    costruisciCampiFormModal(paginaAttuale);

    body.innerHTML = `<form id="drawer-edit-form" onsubmit="event.preventDefault(); confermaSalvaInDrawer();" style="display:contents;"></form>`;
    const formNode = body.querySelector('#drawer-edit-form');
    
    while (fieldsContainer.firstChild) {
        formNode.appendChild(fieldsContainer.firstChild);
    }

    body.className = `crm-drawer-body modal-fields-container ${config.isDocument || paginaAttuale === 'fornitori' ? 'modal-form-grid' : ''}`;

    footer.innerHTML = `
        <button type="button" class="btn-secondary" onclick="chiudiCrmDrawer()">Annulla</button>
        <button type="button" class="btn-dark" onclick="confermaSalvaInDrawer()">
            <i class="fas fa-check"></i> Salva Nuovo
        </button>
    `;
}

function apriModalGenericModifica(id) {
    editingRecordId = id;
    window.drawerPageName = paginaAttuale;
    window.drawerRecordId = id;
    
    const drawer = document.getElementById('crm-drawer');
    if (!drawer) return;

    const config = TABLE_CONFIGS[paginaAttuale];
    const record = DATASETS[paginaAttuale].find(r => r.id === id);
    if (!record) return;

    document.getElementById('crm-drawer-eyebrow').innerText = config.eyebrow || config.title;
    document.getElementById('crm-drawer-title').innerText = `Modifica - ${record.numero || record.azienda || record.nome || record.titolo || id}`;
    
    const tabContainer = document.getElementById('crm-drawer-tabs');
    tabContainer.innerHTML = `
        <button type="button" class="crm-drawer-tab-btn active">
            <i class="fas fa-edit"></i> Modifica Dati
        </button>
    `;

    drawer.classList.add('active', 'is-document');
    attivaModificaInDrawer(paginaAttuale, id);
}

function chiudiModalGeneric() {
    document.getElementById('modal-generic').classList.remove('active');
}

function confermaSalvaGeneric() {
    const pageName = paginaAttuale;
    const config = TABLE_CONFIGS[pageName];
    const dataset = DATASETS[pageName];
    
    const recordSalvato = {};
    let formValido = true;

    config.fields.forEach(field => {
        const inputEl = document.getElementById(`field-${field.key}`);
        if (inputEl) {
            let val = inputEl.value.trim();
            
            if (field.required && !val) {
                formValido = false;
                inputEl.classList.add('error');
            } else {
                inputEl.classList.remove('error');
            }
            
            if (field.type === 'number') {
                val = Number(val) || 0;
            }

            recordSalvato[field.key] = val;
        }
    });

    if (!formValido) {
        mostraNotifica("Compila tutti i campi contrassegnati con l'asterisco", "error");
        return;
    }

    if (config.isDocument && !config.isDeliveryOnly) {
        const righeDocumento = leggiRigheDocumentoModal();
        if (righeDocumento.length === 0) {
            mostraNotifica("Aggiungi almeno una riga articolo al documento", "error");
            return;
        }
        recordSalvato.righe = righeDocumento;
        recordSalvato.totale = righeDocumento.reduce((sum, riga) => {
            const prezzo = riga.prezzo || prezzoProdottoPerDocumento(riga.prodotto, pageName);
            return sum + (riga.quantita * prezzo * (1 - (riga.sconto || 0) / 100));
        }, 0);
    }

    if (pageName === 'ddtVendita' && Array.isArray(window.__pendingDdtVenditaLines)) {
        recordSalvato.righe = JSON.parse(JSON.stringify(window.__pendingDdtVenditaLines));
    }
    if (pageName === 'ddtAcquisto' && Array.isArray(window.__pendingDdtAcquistoLines)) {
        recordSalvato.righe = JSON.parse(JSON.stringify(window.__pendingDdtAcquistoLines));
    }

    if (config.isDeliveryOnly && editingRecordId) {
        const existingRecord = dataset.find(r => r.id === editingRecordId);
        if (existingRecord?.movimentatoMagazzino) {
            recordSalvato.movimentatoMagazzino = true;
        }
    }

    if (editingRecordId) {
        const index = dataset.findIndex(r => r.id === editingRecordId);
        if (index !== -1) {
            recordSalvato.id = editingRecordId;
            if (dataset[index].creato) recordSalvato.creato = dataset[index].creato;
            if (dataset[index].timeline) recordSalvato.timeline = dataset[index].timeline;
            
            if (pageName === 'ddtAcquisto' && !dataset[index].movimentatoMagazzino) {
                const result = applyDdtAcquistoStock(recordSalvato);
                if (!result.ok) {
                    mostraNotifica(result.message, "error");
                    return;
                }
                mostraNotifica(result.message, "success");
            }

            if (pageName === 'ddtVendita' && !dataset[index].movimentatoMagazzino) {
                const result = applyDdtVenditaStock(recordSalvato);
                if (!result.ok) {
                    mostraNotifica(result.message, "error");
                    return;
                }
                mostraNotifica(result.message, "success");
            }

            dataset[index] = recordSalvato;
            mostraNotifica("Record aggiornato correttamente", "success");
        }
    } else {
        const nuovoId = pageName.substring(0, 3) + "_" + (dataset.length + 1) + "_" + Date.now().toString().slice(-4);
        recordSalvato.id = nuovoId;
        
        if (['preventivi', 'ordiniVendita', 'ddtVendita', 'preventiviAcquisto', 'ordiniAcquisto', 'ddtAcquisto'].includes(pageName)) {
            const sez = getSezionali();
            if (sez[pageName] !== undefined && recordSalvato.numero == sez[pageName]) {
                sez[pageName] = Number(sez[pageName]) + 1;
                saveSezionali(sez);
            }
        }
        
        if (pageName === 'clienti') {
            recordSalvato.creato = new Date().toISOString().slice(0, 10);
            recordSalvato.timeline = [
                { type: "nota", text: "Record cliente creato in anagrafica.", date: ottieniDataOraAttuale() }
            ];
        }

        if (pageName === 'ddtAcquisto') {
            const result = applyDdtAcquistoStock(recordSalvato);
            if (!result.ok) {
                mostraNotifica(result.message, "error");
                return;
            }
            mostraNotifica(result.message, "success");
        }

        if (pageName === 'ddtVendita') {
            const result = applyDdtVenditaStock(recordSalvato);
            if (!result.ok) {
                mostraNotifica(result.message, "error");
                return;
            }
            mostraNotifica(result.message, "success");
        }

        dataset.unshift(recordSalvato);
        mostraNotifica("Nuovo record creato con successo", "success");
    }

    chiudiModalGeneric();
    if (pageName === 'ddtVendita') window.__pendingDdtVenditaLines = null;
    if (pageName === 'ddtAcquisto') window.__pendingDdtAcquistoLines = null;
    aggiornaTuttiBadgeSidebar();
    cambiaPagina(paginaAttuale);
}

function prezzoProdottoPerDocumento(productId, pageName) {
    const prodotto = DATASETS.prodotti.find(p => p.id === productId);
    if (!prodotto) return 0;
    return Number(pageName === 'ordiniAcquisto' ? prodotto.prezzoAcquisto : prodotto.prezzoVendita || 0);
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 9. ELIMINAZIONE E DUPLICAZIONE RECORDS ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function eliminaRecord(id) {
    const pageName = paginaAttuale;
    const dataset = DATASETS[pageName];
    const record = dataset.find(r => r.id === id);
    if (!record) return;

    const etichetta = record.nome || record.azienda || record.numero || record.codice || record.titolo || "questo record";
    
    if (confirm(`Sei sicuro di voler eliminare definitivamente "${etichetta}"?`)) {
        const index = dataset.findIndex(r => r.id === id);
        if (index !== -1) {
            dataset.splice(index, 1);
        }
        mostraNotifica("Elemento eliminato", "info");
        aggiornaTuttiBadgeSidebar();
        cambiaPagina(paginaAttuale);
    }
}

function duplicaRecord(id) {
    const pageName = paginaAttuale;
    const dataset = DATASETS[pageName];
    const record = dataset.find(r => r.id === id);
    if (!record) return;

    const clone = JSON.parse(JSON.stringify(record));
    const nuovoId = pageName.substring(0, 3) + "_" + (dataset.length + 1) + "_" + Date.now().toString().slice(-4);
    clone.id = nuovoId;

    if (clone.nome) clone.nome += " (Copia)";
    if (clone.azienda) clone.azienda += " (Copia)";
    if (clone.numero) clone.numero += "-COP";
    if (clone.codice) clone.codice += "-COP";
    if (clone.titolo) clone.titolo += " (Copia)";

    if (pageName === 'clienti') {
        clone.creato = new Date().toISOString().slice(0, 10);
        clone.timeline = [{ type: "nota", text: `Record cliente duplicato da ${record.azienda || record.nome}.`, date: ottieniDataOraAttuale() }];
    }

    dataset.unshift(clone);
    mostraNotifica("Record duplicato con successo", "success");
    aggiornaTuttiBadgeSidebar();
    cambiaPagina(paginaAttuale);
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 10. IMPORTATORE CSV ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function apriImportatoreCSV(pageName) {
    const select = document.getElementById('csv-target-table');
    if (select) {
        select.value = pageName;
    }
    aggiornaTemplateCSV();
    document.getElementById('csv-raw-data').value = '';
    const fileInput = document.getElementById('csv-file-input');
    if (fileInput) fileInput.value = '';
    csvLoadedFileText = '';
    csvLoadedFileName = '';
    const fileStatus = document.getElementById('csv-file-status');
    if (fileStatus) fileStatus.innerText = 'Nessun file selezionato';
    const pickBtn = document.getElementById('csv-pick-button');
    if (pickBtn) pickBtn.innerHTML = `<i class="fas fa-folder-open"></i> Carica CSV dal PC`;
    document.getElementById('modal-csv-import').classList.add('active');
}

function chiudiModalCsv(preserveScreeningState = false) {
    document.getElementById('modal-csv-import').classList.remove('active');
    if (!preserveScreeningState) {
        productScreeningState = null;
    }
    csvLoadedFileText = '';
    csvLoadedFileName = '';
    const fileStatus = document.getElementById('csv-file-status');
    if (fileStatus) fileStatus.innerText = 'Nessun file selezionato';
    const pickBtn = document.getElementById('csv-pick-button');
    if (pickBtn) pickBtn.innerHTML = `<i class="fas fa-folder-open"></i> Carica CSV dal PC`;
    toggleCsvCleaner(false);
}

function aggiornaTemplateCSV() {
    const target = document.getElementById('csv-target-table').value;
    const templateCode = document.getElementById('csv-fields-template');
    if (templateCode && TABLE_CONFIGS[target]) {
        templateCode.innerText = TABLE_CONFIGS[target].csvTemplate;
    }
}

function leggiFileCSV(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const text = String(e.target.result || '');
            csvLoadedFileText = text;
            csvLoadedFileName = file.name;
            document.getElementById('csv-raw-data').value = text;
            const fileStatus = document.getElementById('csv-file-status');
            if (fileStatus) {
                const linesCount = text.split('\n').filter(Boolean).length;
                fileStatus.innerText = `File caricato: ${file.name} (${linesCount} righe)`;
            }
            const pickBtn = document.getElementById('csv-pick-button');
            if (pickBtn) pickBtn.innerHTML = `<i class="fas fa-check-circle"></i> File pronto: ${file.name}`;
            mostraNotifica(`File CSV caricato: ${file.name}`, "info");
        };
        reader.onerror = function() {
            csvLoadedFileText = '';
            csvLoadedFileName = '';
            const fileStatus = document.getElementById('csv-file-status');
            if (fileStatus) fileStatus.innerText = 'Errore lettura file';
            const pickBtn = document.getElementById('csv-pick-button');
            if (pickBtn) pickBtn.innerHTML = `<i class="fas fa-folder-open"></i> Carica CSV dal PC`;
            mostraNotifica("Errore durante la lettura del file CSV", "error");
        };
        reader.readAsText(file);
    }
}

function selezionaFileCSV() {
    const input = document.getElementById('csv-file-input');
    if (input) input.click();
}

let productScreeningState = null;
let csvLoadedFileText = '';

function getScreeningElement(baseId) {
    return document.getElementById(`page-${baseId}`) || document.getElementById(baseId);
}
let csvLoadedFileName = '';

function splitCsvLineSafe(line, delimiter) {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
            continue;
        }
        if (ch === delimiter && !inQuotes) {
            result.push(current);
            current = '';
            continue;
        }
        current += ch;
    }
    result.push(current);
    return result.map(cell => cell.trim().replace(/^["']|["']$/g, ''));
}

function parseCsvRaw(rawText) {
    const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length < 2) return null;
    const headerLine = lines[0];
    const delimiter = headerLine.includes(';') ? ';' : ',';
    const headers = splitCsvLineSafe(headerLine, delimiter).map(h => normalizeCsvHeader(h));
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
        rows.push(splitCsvLineSafe(lines[i], delimiter));
    }
    return { headers, rows };
}

function normalizeCsvHeader(header) {
    return normalizeProductText(header).replace(/\s+/g, '');
}

function findHeaderIndex(headers, targetTable, fieldKey) {
    const field = normalizeCsvHeader(fieldKey);
    const aliases = {
        prodotti: {
            codice: ['codice'],
            nome: ['nome'],
            barcode: ['barcode'],
            tipo: ['tipo'],
            categoria: ['categoria'],
            sottocategoria: ['sottocategoria'],
            quantitaesistente: ['giacenza', 'quantitaesistente', 'quantita', 'qta'],
            prezzoacquisto: ['prezzodiacquisto', 'costoacquisto'],
            prezzovendita: ['prezzo', 'prezzoeuro', 'prezzoivato', 'prezzovendita'],
            quantitaconfezione: ['qtaperconfezione', 'quantitaperconfezione', 'pezziperconfezione'],
            iva: ['iva'],
            brand: ['brand', 'marca'],
            stato: ['stato', 'disabilitato']
        }
    };
    const candidateKeys = [field, ...((aliases[targetTable]?.[field]) || [])].map(normalizeCsvHeader);
    for (const candidate of candidateKeys) {
        const idx = headers.indexOf(candidate);
        if (idx !== -1) return idx;
    }
    return -1;
}

function createRecordFromCsvRow(headers, rowCells, config, targetTable, indexSeed) {
    const nuovoRecord = {};
    const dataset = DATASETS[targetTable];
    const recordId = targetTable.substring(0, 3) + "_" + (dataset.length + 1) + "_" + Date.now().toString().slice(-4) + "_" + indexSeed;
    nuovoRecord.id = recordId;

    config.fields.forEach(field => {
        const headerIndex = findHeaderIndex(headers, targetTable, field.key);
        if (headerIndex !== -1 && rowCells[headerIndex] !== undefined) {
            let val = rowCells[headerIndex];
            if (field.type === 'number') val = Number(String(val).replace(',', '.')) || 0;
            nuovoRecord[field.key] = val;
        } else {
            nuovoRecord[field.key] = field.type === 'number' ? 0 : "";
        }
    });

    if (targetTable === 'prodotti') {
        const disabledIdx = findHeaderIndex(headers, targetTable, 'stato');
        if (disabledIdx !== -1) {
            const disabledRaw = normalizeProductText(rowCells[disabledIdx]);
            if (disabledRaw === 'true' || disabledRaw === '1' || disabledRaw === 'si') {
                nuovoRecord.stato = 'dismesso';
            }
        }
    }
    return nuovoRecord;
}

function normalizeProductText(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}

function productCompletenessScore(record) {
    const keys = ['codice', 'nome', 'brand', 'sku', 'barcode', 'categoria', 'descrizioneTecnica', 'prezzoVendita', 'prezzoAcquisto'];
    return keys.reduce((acc, key) => acc + (record[key] ? 1 : 0), 0);
}

function startProductScreening(headers, rows, config) {
    const parsed = [];
    rows.forEach((cells, idx) => {
        const record = createRecordFromCsvRow(headers, cells, config, 'prodotti', idx + 1);
        const code = normalizeProductText(record.codice);
        const sku = normalizeProductText(record.sku);
        const barcode = normalizeProductText(record.barcode);
        const name = normalizeProductText(record.nome);
        const brand = normalizeProductText(record.brand);
        const category = normalizeProductText(record.categoria);
        const exactKey = [code || '-', sku || '-', barcode || '-', name || '-', brand || '-'].join('|');
        const similarKey = [name || '-', brand || '-', category || '-'].join('|');
        parsed.push({
            id: `imp_${idx}_${Date.now().toString().slice(-4)}`,
            csvRow: idx + 2,
            record,
            exactKey,
            similarKey,
            score: productCompletenessScore(record),
            reasons: [],
            decision: 'main',
            suggestedDecision: 'keep',
            manual: false,
            selected: false
        });
    });

    productScreeningState = {
        items: parsed,
        visibleItems: parsed,
        activeView: 'main',
        search: '',
        usage: {
            salesCsvText: '',
            purchaseCsvText: '',
            salesFileName: '',
            purchaseFileName: '',
            months: 36,
            usageMap: {}
        },
        rules: {
            removeDismissed: true,
            mergeExact: true,
            skipExisting: true,
            markSimilar: true
        }
    };
    const cleanerSearch = getScreeningElement('csv-cleaner-search');
    if (cleanerSearch) cleanerSearch.value = '';
    ricalcolaScrematuraProdotti();
    chiudiModalCsv(true);
    cambiaPagina('scrematura_prodotti');
}

function toggleCsvCleaner(show) {
    const cleaner = document.getElementById('csv-product-cleaner');
    const footer = cleaner?.previousElementSibling;
    if (!cleaner) return;
    cleaner.style.display = show ? 'block' : 'none';
    if (footer && footer.classList.contains('modal-footer')) {
        footer.style.display = show ? 'none' : 'flex';
    }
}

function chiudiConsoleScrematuraProdotti() {
    productScreeningState = null;
    toggleCsvCleaner(false);
    cambiaPagina('prodotti');
}

function ricalcolaScrematuraProdotti() {
    if (!productScreeningState) return;
    const rules = {
        removeDismissed: !!getScreeningElement('rule-remove-dismissed')?.checked,
        mergeExact: !!getScreeningElement('rule-merge-exact')?.checked,
        skipExisting: !!getScreeningElement('rule-skip-existing')?.checked,
        markSimilar: !!getScreeningElement('rule-mark-similar')?.checked
    };
    productScreeningState.rules = rules;

    const byExact = new Map();
    const bySimilar = new Map();
    const existingKeys = new Set();
    DATASETS.prodotti.forEach(p => {
        [p.codice, p.sku, p.barcode].forEach(raw => {
            const k = normalizeProductText(raw);
            if (k) existingKeys.add(k);
        });
    });

    productScreeningState.items.forEach(item => {
        item.reasons = [];
        item.suggestedDecision = 'keep';

        const stato = normalizeProductText(item.record.stato);
        const isDismissed = stato.includes('dismess') || stato.includes('obsolete') || stato.includes('obsoleto') || stato.includes('fuori catalogo');
        if (rules.removeDismissed && isDismissed) {
            item.reasons.push('Dismesso/obsoleto');
            item.suggestedDecision = 'drop';
        }

        const codeKeys = [item.record.codice, item.record.sku, item.record.barcode]
            .map(normalizeProductText)
            .filter(Boolean);
        if (rules.skipExisting && codeKeys.some(k => existingKeys.has(k))) {
            item.reasons.push('Gia presente nel CRM');
            item.suggestedDecision = 'drop';
        }

        if (!byExact.has(item.exactKey)) byExact.set(item.exactKey, []);
        byExact.get(item.exactKey).push(item);

        if (!bySimilar.has(item.similarKey)) bySimilar.set(item.similarKey, []);
        bySimilar.get(item.similarKey).push(item);
    });

    if (rules.mergeExact) {
        byExact.forEach(group => {
            if (group.length <= 1) return;
            const best = group.reduce((a, b) => (a.score >= b.score ? a : b));
            group.forEach(item => {
                if (item.id !== best.id) {
                    item.reasons.push('Duplicato esatto');
                    item.suggestedDecision = 'drop';
                }
            });
        });
    }

    if (rules.markSimilar) {
        bySimilar.forEach(group => {
            if (group.length <= 1) return;
            group.forEach(item => {
                if (!item.reasons.includes('Duplicato esatto')) {
                    item.reasons.push('Molto simile');
                    if (item.suggestedDecision === 'keep') item.suggestedDecision = 'review';
                }
            });
        });
    }

    renderProductScreening();
}

function renderProductScreening() {
    if (!productScreeningState) return;
    const body = getScreeningElement('csv-cleaner-rows');
    const stats = getScreeningElement('csv-cleaner-stats');
    if (!body || !stats) return;

    const items = productScreeningState.items;
    const main = items.filter(i => i.decision === 'main').length;
    const keep = items.filter(i => i.decision === 'keep').length;
    const review = items.filter(i => i.decision === 'review').length;
    const drop = items.filter(i => i.decision === 'drop').length;

    stats.innerHTML = `
        <div style="border:1px solid var(--border-color); border-radius:8px; padding:8px;"><strong>${items.length}</strong><div style="font-size:11px; color:var(--text-muted);">Totali</div></div>
        <div style="border:1px solid #cbd5e1; border-radius:8px; padding:8px;"><strong>${main}</strong><div style="font-size:11px; color:#475569;">Da scremare</div></div>
        <div style="border:1px solid #86efac; border-radius:8px; padding:8px;"><strong>${keep}</strong><div style="font-size:11px; color:#15803d;">Importa</div></div>
        <div style="border:1px solid #fcd34d; border-radius:8px; padding:8px;"><strong>${review}</strong><div style="font-size:11px; color:#a16207;">Revisione</div></div>
        <div style="border:1px solid #fca5a5; border-radius:8px; padding:8px;"><strong>${drop}</strong><div style="font-size:11px; color:#b91c1c;">Scarta</div></div>
    `;
    aggiornaTabScrematura(main, keep, review, drop);
    const filtered = getFilteredScreeningItems();
    productScreeningState.visibleItems = filtered;
    body.innerHTML = filtered.slice(0, 250).map(item => `
        <tr>
            <td style="padding:6px;">
                <input type="checkbox" ${item.selected ? 'checked' : ''} onchange="setSelezioneScrematura('${item.id}', this.checked)">
            </td>
            <td style="padding:6px;">${renderDecisionBadgeScrematura(item.decision)}</td>
            <td style="padding:6px;">${item.record.codice || '-'}</td>
            <td style="padding:6px;">${item.record.nome || '-'}</td>
            <td style="padding:6px;">${item.record.brand || '-'}</td>
            <td style="padding:6px;">${item.reasons.join(', ') || 'OK'}${item.decision === 'main' ? ` (Suggerito: ${labelDecisione(item.suggestedDecision)})` : ''}</td>
        </tr>
    `).join('');
}

function renderDecisionBadgeScrematura(decision) {
    if (decision === 'main') {
        return '<span style="display:inline-flex; align-items:center; justify-content:center; min-width:74px; padding:4px 8px; border-radius:999px; border:1px solid #cbd5e1; color:#475569; background:#f8fafc; font-weight:700;">Da scremare</span>';
    }
    if (decision === 'keep') {
        return '<span style="display:inline-flex; align-items:center; justify-content:center; min-width:74px; padding:4px 8px; border-radius:999px; border:1px solid #86efac; color:#15803d; background:#f0fdf4; font-weight:700;">Importa</span>';
    }
    if (decision === 'drop') {
        return '<span style="display:inline-flex; align-items:center; justify-content:center; min-width:74px; padding:4px 8px; border-radius:999px; border:1px solid #fca5a5; color:#b91c1c; background:#fef2f2; font-weight:700;">Scarta</span>';
    }
    return '<span style="display:inline-flex; align-items:center; justify-content:center; min-width:74px; padding:4px 8px; border-radius:999px; border:1px solid #fcd34d; color:#a16207; background:#fffbeb; font-weight:700;">Revisione</span>';
}

function setSelezioneScrematura(itemId, checked) {
    if (!productScreeningState) return;
    const item = productScreeningState.items.find(i => i.id === itemId);
    if (!item) return;
    item.selected = !!checked;
}

function toggleSelezioneScrematuraVisibili(checked) {
    if (!productScreeningState) return;
    (productScreeningState.visibleItems || []).forEach(item => {
        item.selected = !!checked;
    });
    renderProductScreening();
}

function impostaDecisioneSelezionatiScrematura(decision) {
    if (!productScreeningState) return;
    let touched = 0;
    productScreeningState.items.forEach(item => {
        if (item.selected) {
            item.decision = decision;
            item.manual = true;
            item.selected = false;
            touched++;
        }
    });
    if (!touched) {
        mostraNotifica("Seleziona almeno un articolo dalla lista", "info");
        return;
    }
    renderProductScreening();
}

function aggiornaTabScrematura(main, keep, review, drop) {
    const map = [
        ['csv-view-main', 'main', `Da scremare (${main})`],
        ['csv-view-keep', 'keep', `Da importare (${keep})`],
        ['csv-view-review', 'review', `In sospeso (${review})`],
        ['csv-view-drop', 'drop', `Scarta (${drop})`]
    ];
    map.forEach(([id, view, label]) => {
        const el = getScreeningElement(id);
        if (!el) return;
        el.textContent = label;
        el.classList.toggle('is-active', productScreeningState.activeView === view);
    });
}

function setViewScrematura(view) {
    if (!productScreeningState) return;
    productScreeningState.activeView = view;
    renderProductScreening();
}

function aggiornaRicercaScrematura(value) {
    if (!productScreeningState) return;
    productScreeningState.search = String(value || '').trim().toLowerCase();
    renderProductScreening();
}

function getFilteredScreeningItems() {
    if (!productScreeningState) return [];
    const view = productScreeningState.activeView || 'main';
    const q = productScreeningState.search || '';
    const scoped = productScreeningState.items.filter(item => item.decision === view);
    if (!q) return scoped;
    return scoped.filter(item => {
        const text = [
            item.record.codice,
            item.record.nome,
            item.record.sku,
            item.record.barcode,
            item.record.brand
        ].join(' ').toLowerCase();
        return text.includes(q);
    });
}

function labelDecisione(decision) {
    if (decision === 'keep') return 'Importa';
    if (decision === 'drop') return 'Scarta';
    if (decision === 'review') return 'In sospeso';
    return 'Da scremare';
}

function selezionaFileAnalisiProdotti(type) {
    const inputId = type === 'sales' ? 'usage-sales-file' : 'usage-purchase-file';
    const input = document.getElementById(inputId);
    if (input) input.click();
}

function leggiFileAnalisiProdotti(event, type) {
    if (!productScreeningState) return;
    const file = event?.target?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
        const text = String(ev?.target?.result || '');
        if (type === 'sales') {
            productScreeningState.usage.salesCsvText = text;
            productScreeningState.usage.salesFileName = file.name;
        } else {
            productScreeningState.usage.purchaseCsvText = text;
            productScreeningState.usage.purchaseFileName = file.name;
        }
        aggiornaStatiFileUsoProdotti();
    };
    reader.readAsText(file);
}

function aggiornaPeriodoUsoProdotti(value) {
    if (!productScreeningState) return;
    const months = Number(value) || 36;
    productScreeningState.usage.months = months;
}

function aggiornaStatiFileUsoProdotti() {
    if (!productScreeningState) return;
    const sales = document.getElementById('usage-sales-status');
    const purchase = document.getElementById('usage-purchase-status');
    if (sales) sales.innerText = productScreeningState.usage.salesFileName || 'Nessun file';
    if (purchase) purchase.innerText = productScreeningState.usage.purchaseFileName || 'Nessun file';
}

function analizzaCsvUsoProdotti() {
    if (!productScreeningState) return;
    const usage = {};
    const months = Number(productScreeningState.usage.months || 36);
    mergeUsageFromCsv(productScreeningState.usage.salesCsvText, usage, 'sales', months);
    mergeUsageFromCsv(productScreeningState.usage.purchaseCsvText, usage, 'purchase', months);
    productScreeningState.usage.usageMap = usage;
    applicaUsoAScrematura();
    mostraNotifica('Analisi utilizzo completata', 'success');
}

function mergeUsageFromCsv(rawText, usageMap, flow, months) {
    if (!rawText) return;
    const parsed = parseCsvRaw(rawText);
    if (!parsed) return;
    const { headers, rows } = parsed;
    const codeIdx = findFirstHeaderIndex(headers, ['codice', 'sku', 'barcode', 'articolo', 'prodotto', 'codicearticolo']);
    const qtyIdx = findFirstHeaderIndex(headers, ['quantita', 'qta', 'qty', 'pezzi', 'quantitaordinata', 'quantitavenduta']);
    const dateIdx = findFirstHeaderIndex(headers, ['data', 'datadocumento', 'dataordine', 'datafattura']);
    if (codeIdx === -1) return;
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - months);
    rows.forEach(row => {
        const codeKey = normalizeProductText(row[codeIdx]);
        if (!codeKey) return;
        const rowDate = parseFlexibleDate(row[dateIdx]);
        if (rowDate && rowDate < cutoff) return;
        const qty = Number(String(row[qtyIdx] || '1').replace(',', '.')) || 1;
        if (!usageMap[codeKey]) usageMap[codeKey] = { soldCount: 0, soldQty: 0, buyCount: 0, buyQty: 0, lastSold: null, lastBuy: null };
        const stat = usageMap[codeKey];
        if (flow === 'sales') {
            stat.soldCount += 1;
            stat.soldQty += qty;
            if (!stat.lastSold || (rowDate && rowDate > stat.lastSold)) stat.lastSold = rowDate || stat.lastSold;
        } else {
            stat.buyCount += 1;
            stat.buyQty += qty;
            if (!stat.lastBuy || (rowDate && rowDate > stat.lastBuy)) stat.lastBuy = rowDate || stat.lastBuy;
        }
    });
}

function parseFlexibleDate(value) {
    const raw = String(value || '').trim();
    if (!raw) return null;
    if (/^\d{4}-\d{2}-\d{2}/.test(raw)) return new Date(raw);
    const m = raw.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
    if (m) {
        const day = Number(m[1]);
        const month = Number(m[2]) - 1;
        const year = Number(m[3].length === 2 ? `20${m[3]}` : m[3]);
        return new Date(year, month, day);
    }
    const d = new Date(raw);
    return Number.isNaN(d.getTime()) ? null : d;
}

function findFirstHeaderIndex(headers, keys) {
    for (const key of keys) {
        const idx = headers.indexOf(normalizeCsvHeader(key));
        if (idx !== -1) return idx;
    }
    return -1;
}

function applicaUsoAScrematura() {
    if (!productScreeningState) return;
    const usageMap = productScreeningState.usage.usageMap || {};
    productScreeningState.items.forEach(item => {
        const keys = [item.record.codice, item.record.sku, item.record.barcode].map(normalizeProductText).filter(Boolean);
        let usage = null;
        for (const key of keys) {
            if (usageMap[key]) {
                usage = usageMap[key];
                break;
            }
        }
        item.reasons = (item.reasons || []).filter(r => !r.startsWith('Uso '));
        if (!usage) {
            item.reasons.push('Uso: nessun movimento nel periodo');
            if (!item.manual && item.decision === 'main') item.suggestedDecision = 'drop';
            return;
        }
        item.reasons.push(`Uso: vendite ${usage.soldCount}, acquisti ${usage.buyCount}`);
        if (!item.manual && item.decision === 'main') {
            if (usage.soldCount >= 3 || usage.soldQty >= 10) item.suggestedDecision = 'keep';
            else if (usage.soldCount === 0 && usage.buyCount <= 1) item.suggestedDecision = 'drop';
            else item.suggestedDecision = 'review';
        }
    });
    renderProductScreening();
}

function setDecisioneScrematura(itemId, decision) {
    if (!productScreeningState) return;
    const item = productScreeningState.items.find(i => i.id === itemId);
    if (!item) return;
    item.decision = decision;
    item.manual = true;
    renderProductScreening();
}

function impostaDecisioneMassivaScrematura(decision) {
    if (!productScreeningState) return;
    productScreeningState.items.forEach(item => {
        item.decision = decision;
        item.manual = true;
    });
    renderProductScreening();
}

function confermaImportScrematoProdotti() {
    if (!productScreeningState) return;
    const selected = productScreeningState.items.filter(i => i.decision === 'keep').map(i => i.record);
    if (!selected.length) {
        mostraNotifica("Nessun prodotto selezionato per l'import", "error");
        return;
    }
    selected.forEach(record => DATASETS.prodotti.unshift(record));
    mostraNotifica(`Importati ${selected.length} prodotti dopo la scrematura`, "success");
    productScreeningState = null;
    toggleCsvCleaner(false);
    chiudiModalCsv();
    aggiornaTuttiBadgeSidebar();
    cambiaPagina('prodotti');
}

function avviaImportazioneCSV() {
    const targetTable = document.getElementById('csv-target-table').value;
    const rawTextFromArea = document.getElementById('csv-raw-data').value.trim();
    const rawText = rawTextFromArea || String(csvLoadedFileText || '').trim();
    
    if (!rawText) {
        mostraNotifica("Seleziona un file CSV o incolla dei dati per procedere", "error");
        return;
    }

    const parsedCsv = parseCsvRaw(rawText);
    if (!parsedCsv || parsedCsv.rows.length < 1) {
        mostraNotifica("Formato CSV non valido. ÃƒÆ’Ã‹â€  richiesta l'intestazione dei campi.", "error");
        return;
    }
    const { headers, rows } = parsedCsv;
    
    const config = TABLE_CONFIGS[targetTable];
    const dataset = DATASETS[targetTable];

    if (targetTable === 'prodotti') {
        startProductScreening(headers, rows, config);
        mostraNotifica(`CSV caricato: ${rows.length} righe pronte per la scrematura`, "info");
        return;
    }
    
    let righeInserite = 0;

    for (let i = 0; i < rows.length; i++) {
        const rowCells = rows[i];
        
        if (rowCells.length > 0) {
            const nuovoRecord = createRecordFromCsvRow(headers, rowCells, config, targetTable, i + 1);

            if (targetTable === 'clienti') {
                nuovoRecord.creato = nuovoRecord.creato || new Date().toISOString().slice(0, 10);
                nuovoRecord.timeline = [{ type: "nota", text: "Record cliente importato via CSV.", date: ottieniDataOraAttuale() }];
            }

            dataset.unshift(nuovoRecord);
            righeInserite++;
        }
    }

    mostraNotifica(`Inseriti ${righeInserite} record in ${config.title}`, "success");
    chiudiModalCsv();
    aggiornaTuttiBadgeSidebar();
    cambiaPagina(paginaAttuale);
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 11. IMPOSTAZIONI ED ESPORTAZIONE GLOBALE ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function renderImpostazioni(container) {
    const orderOptions = getOrdiniVenditaFieldOptions();
    let html = `
        <div class="crm-page-header">
            <div class="crm-header-card">
                <div class="crm-header-info">
                    <span class="crm-header-eyebrow">Pannello di Configurazione</span>
                    <h2 class="crm-header-title">Strumenti di Sistema</h2>
                </div>
                <div class="crm-header-actions"></div>
            </div>
        </div>

        <div style="background: var(--bg-surface-strong); border: 1px solid var(--border-color); border-radius: 24px; padding: 24px; box-shadow: var(--shadow-sm); max-width: 650px; display: flex; flex-direction: column; gap: 20px;">
            <div>
                <h3 style="font-family: var(--font-display); font-size: 16px; margin-bottom: 8px;">Tema visivo</h3>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 14px; line-height: 1.5;">
                    Mantieni due modalità coerenti con il nuovo redesign: chiaro operativo o scuro nero+verde.
                </p>
                <div class="settings-theme-grid">
                    <button type="button" class="settings-theme-card" data-theme-choice="light" onclick="applyTheme('light')">
                        <strong>Light Green</strong>
                        <small>Versione attuale: chiara, pulita e ad alto contrasto.</small>
                    </button>
                    <button type="button" class="settings-theme-card" data-theme-choice="dark" onclick="applyTheme('dark')">
                        <strong>Dark Green</strong>
                        <small>Stesso stile, palette scura nero + verde elegante.</small>
                    </button>
                </div>
            </div>

            <hr style="border: 0; border-top: 1px solid var(--border-color);">

            <div>
                <h3 style="font-family: var(--font-display); font-size: 16px; margin-bottom: 8px;">Esportazione Backup Completo</h3>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 14px; line-height: 1.5;">
                    Esegui il backup completo di tutti i listini prodotti, delle distinte base (BOM), dei clienti e dei documenti contabili.
                </p>
                <button class="btn-dark" onclick="esportaTuttoCSV()" style="min-height: 42px;">
                    <i class="fas fa-file-archive"></i> Esporta database completo (CSV)
                </button>
            </div>
            
            <hr style="border: 0; border-top: 1px solid var(--border-color);">

            <div>
                <h3 style="font-family: var(--font-display); font-size: 16px; margin-bottom: 8px;">Importazione CSV Massiva</h3>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 14px; line-height: 1.5;">
                    Utilizza l'importatore integrato per caricare file di clienti, distinte base BOM o anagrafiche fornite in CSV.
                </p>
                <button class="btn-primary" onclick="apriImportatoreCSV('clienti')" style="min-height: 42px; border: 1px solid var(--primary); background: #f8fafc; color: var(--primary);">
                    <i class="fas fa-file-upload"></i> Apri Importatore Guidato
                </button>
            </div>

            <hr style="border: 0; border-top: 1px solid var(--border-color);">

            <div>
                <h3 style="font-family: var(--font-display); font-size: 16px; margin-bottom: 8px; color: #ef4444;">Reinizializzazione Sistema</h3>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 14px; line-height: 1.5;">
                    Ripristina la demo del CRM cancellando tutte le modifiche fatte in questa sessione e ripristinando la BOM dei faretti outdoor.
                </p>
                <button class="btn-secondary" onclick="resetDatabaseCompleto()" style="min-height: 42px; background-color: #fff; color: #ef4444; border-color: #fca5a5;">
                    <i class="fas fa-undo"></i> Reset Database Demo
                </button>
                <button class="btn-dark" onclick="ripristinaSeedSuCloud()" style="min-height: 42px; margin-left: 8px;">
                    <i class="fas fa-database"></i> Ripristina Seed su Supabase
                </button>
            </div>
        </div>

        <div style="margin-top: 20px; background: var(--bg-surface-strong); border: 1px solid var(--border-color); border-radius: 24px; padding: 24px; box-shadow: var(--shadow-sm); max-width: 980px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:16px; margin-bottom: 18px;">
                <div>
                    <h3 style="font-family: var(--font-display); font-size: 16px; margin-bottom: 6px;">Ordini di vendita - campi opzionali</h3>
                    <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin: 0;">
                        Attiva solo i campi che servono davvero nella tua PMI. Il modal resta pulito e cresce quando vuoi tu.
                    </p>
                </div>
                <button class="btn-dark" onclick="salvaOpzioniOrdiniVendita()" style="min-height: 42px;">
                    <i class="fas fa-save"></i> Salva opzioni ordine
                </button>
            </div>
            <div class="settings-switch-grid" id="ordini-vendita-options-grid">
                ${renderOrdiniVenditaOptionsMarkup(orderOptions)}
            </div>
        </div>

        <div style="margin-top: 20px; background: var(--bg-surface-strong); border: 1px solid var(--border-color); border-radius: 24px; padding: 24px; box-shadow: var(--shadow-sm); max-width: 980px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:16px; margin-bottom: 18px;">
                <div>
                    <h3 style="font-family: var(--font-display); font-size: 16px; margin-bottom: 6px;">Sezionali Documenti (Progressivi)</h3>
                    <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin: 0;">
                        Imposta il prossimo numero progressivo per ciascun tipo di documento. I nuovi documenti generati partiranno da questo numero.
                    </p>
                </div>
                <button class="btn-primary" onclick="salvaSezionaliForm()" style="min-height: 42px;">
                    <i class="fas fa-save"></i> Salva Sezionali
                </button>
            </div>
            <div class="settings-switch-grid" id="sezionali-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
                ${renderSezionaliMarkup()}
            </div>
        </div>
    `;

    container.innerHTML = html;
}

function getSezionali() {
    try {
        const stored = localStorage.getItem('crm_sezionali');
        if (stored) return JSON.parse(stored);
    } catch(e){}
    return {
        preventivi: 1,
        ordiniVendita: 1,
        ddtVendita: 1,
        preventiviAcquisto: 1,
        ordiniAcquisto: 1,
        ddtAcquisto: 1
    };
}

function saveSezionali(sez) {
    localStorage.setItem('crm_sezionali', JSON.stringify(sez));
}

function renderSezionaliMarkup() {
    const sez = getSezionali();
    const config = [
        { key: 'preventivi', label: 'Preventivi' },
        { key: 'ordiniVendita', label: 'Ordini di Vendita' },
        { key: 'ddtVendita', label: 'DDT di Vendita' },
        { key: 'preventiviAcquisto', label: 'Preventivi Acquisto' },
        { key: 'ordiniAcquisto', label: 'Ordini di Acquisto' },
        { key: 'ddtAcquisto', label: 'DDT di Acquisto' }
    ];
    
    return config.map(c => `
        <div class="line-advanced-field" style="background: var(--bg-surface); padding: 12px; border-radius: 12px; border: 1px solid var(--border-color);">
            <label style="font-weight: 600; color: var(--text-color); margin-bottom: 6px; display: block;">${c.label}</label>
            <input type="number" min="1" step="1" class="input-field-modern" data-sezionale="${c.key}" value="${sez[c.key] || 1}">
        </div>
    `).join('');
}

function salvaSezionaliForm() {
    const sez = getSezionali();
    document.querySelectorAll('input[data-sezionale]').forEach(input => {
        sez[input.getAttribute('data-sezionale')] = Number(input.value) || 1;
    });
    saveSezionali(sez);
    mostraNotifica('Numerazione sezionali salvata', 'success');
}


function renderOrdiniVenditaOptionsMarkup(options) {
    const cfg = TABLE_CONFIGS.ordiniVendita.optionalFields || [];
    return cfg.map(field => `
        <label class="settings-switch-item">
            <input type="checkbox" data-ordini-vendita-option="${field.key}" ${options[field.key] ? 'checked' : ''}>
            <span>
                <strong>${field.label}</strong>
                <small>${field.placeholder || 'Campo opzionale del modal'}</small>
            </span>
        </label>
    `).join('');
}

function salvaOpzioniOrdiniVendita() {
    const options = { ...DEFAULT_ORDER_SALES_OPTIONAL_FIELDS };
    document.querySelectorAll('[data-ordini-vendita-option]').forEach(input => {
        options[input.getAttribute('data-ordini-vendita-option')] = input.checked;
    });
    saveOrdiniVenditaFieldOptions(options);
    mostraNotifica('Opzioni ordini di vendita salvate', 'success');
    if (paginaAttuale === 'impostazioni') {
        renderImpostazioni(document.getElementById('contenitore-dati'));
    }
}

function esportaTuttoCSV() {
    let output = "=== DATABASE INTEGRATO CRM (LIGHTING SYSTEM EDITION) ===\n\n";
    
    Object.keys(TABLE_CONFIGS).forEach(tableKey => {
        const config = TABLE_CONFIGS[tableKey];
        const dataset = DATASETS[tableKey];
        
        output += `--- TABELLA: ${config.title.toUpperCase()} ---\n`;
        output += config.csvTemplate + "\n";
        
        dataset.forEach(r => {
            let riga = "";
            const celle = config.csvTemplate.split(',');
            celle.forEach((c, idx) => {
                let cellValue = r[c] !== undefined ? r[c] : "";
                if (typeof cellValue === 'string') {
                    cellValue = `"${cellValue.replace(/"/g, '""')}"`;
                }
                riga += cellValue + (idx < celle.length - 1 ? "," : "");
            });
            output += riga + "\n";
        });
        output += "\n";
    });

    const encodedUri = "data:text/plain;charset=utf-8," + encodeURIComponent(output);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `crm_database_lighting_backup_${new Date().toISOString().slice(0,10)}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    mostraNotifica("Backup scaricato con successo", "success");
}

function resetDatabaseCompleto() {
    const proceed = confirm("Attenzione: questa azione cancellerà tutti i dati locali importati. Vuoi procedere?");
    if (!proceed) return;
    localStorage.removeItem(DATASETS_STORAGE_KEY);
    location.reload();
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 12. RICERCA GLOBALE ED HELPERS ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
function filtraUniversale() {
    const deskInput = document.getElementById('universal-search');
    const mobInput = document.getElementById('mobile-search');

    const queryVal = (deskInput && deskInput.value !== '')
        ? deskInput.value
        : ((mobInput && mobInput.value !== '') ? mobInput.value : '');

    ricercaQuery = String(queryVal || '').trim().toLowerCase();

    const righe = document.querySelectorAll('#crm-table-body-rows tr');
    righe.forEach(riga => {
        const rowText = String(riga.innerText || '').toLowerCase();
        const globalMatch = !ricercaQuery || rowText.includes(ricercaQuery);
        riga.style.display = globalMatch ? '' : 'none';
    });

    const cards = document.querySelectorAll('.crm-mobile-record');
    cards.forEach(card => {
        const cardText = String(card.getAttribute('data-search-index') || card.innerText || '').toLowerCase();
        const globalMatch = !ricercaQuery || cardText.includes(ricercaQuery);
        card.style.display = globalMatch ? '' : 'none';
    });

    const boardCards = document.querySelectorAll('.crm-board-card');
    boardCards.forEach(card => {
        const cardText = String(card.innerText || '').toLowerCase();
        const globalMatch = !ricercaQuery || cardText.includes(ricercaQuery);
        card.style.display = globalMatch ? '' : 'none';
    });
}

function ensureSidebarBadge(button) {
    if (!button) return null;
    let badge = button.querySelector('.app-sidebar-badge');
    if (!badge) {
        badge = document.createElement('span');
        badge.className = 'app-sidebar-badge';
        button.appendChild(badge);
    }
    return badge;
}

let dismissedBadgeCounts = {};
try {
    dismissedBadgeCounts = JSON.parse(localStorage.getItem('dismissedBadgeCounts')) || {};
} catch(e) {
    dismissedBadgeCounts = {};
}

function dismissSidebarBadge(selector) {
    let currentVal = 0;
    if (selector === '[data-sidebar-page="dashboard_operativa"]') currentVal = getDashboardAlerts().length;
    else if (selector === '[data-sidebar-group="preventivi"]') currentVal = DATASETS.preventivi.filter(item => !['accettato', 'rifiutato'].includes(item.stato)).length;
    else if (selector === '[data-sidebar-group="ordini"]') currentVal = DATASETS.ordiniVendita.filter(item => !['spedito', 'consegnato'].includes(item.stato)).length;
    else if (selector === '[data-sidebar-group="catalogo"]') currentVal = DATASETS.magazzino.filter(item => toFiniteNumber(item.quantita) <= toFiniteNumber(item.quantitaMinima || 0)).length;
    
    dismissedBadgeCounts[selector] = currentVal;
    localStorage.setItem('dismissedBadgeCounts', JSON.stringify(dismissedBadgeCounts));
    aggiornaTuttiBadgeSidebar();
}

function setSidebarBadge(selector, value) {
    const button = document.querySelector(selector);
    const badge = ensureSidebarBadge(button);
    if (!badge) return;
    
    const dismissed = dismissedBadgeCounts[selector] || 0;
    const numericValue = Math.max(0, Number(value || 0) - dismissed);
    
    badge.textContent = numericValue > 99 ? '99+' : String(numericValue);
    badge.style.display = numericValue > 0 ? 'inline-flex' : 'none';
}

function aggiornaTuttiBadgeSidebar() {
    Object.keys(DATASETS).forEach(key => {
        const badge = document.getElementById(`badge-${key}-count`);
        if (badge && DATASETS[key]) {
            badge.textContent = DATASETS[key].length;
        }
    });
    setSidebarBadge('[data-sidebar-page="dashboard_operativa"]', getDashboardAlerts().length);
    setSidebarBadge('[data-sidebar-group="preventivi"]', DATASETS.preventivi.filter(item => !['accettato', 'rifiutato'].includes(item.stato)).length);
    setSidebarBadge('[data-sidebar-group="ordini"]', DATASETS.ordiniVendita.filter(item => !['spedito', 'consegnato'].includes(item.stato)).length);
    setSidebarBadge('[data-sidebar-group="catalogo"]', DATASETS.magazzino.filter(item => toFiniteNumber(item.quantita) <= toFiniteNumber(item.quantitaMinima || 0)).length);
}

function apriModalInterazione(clientId) {
    const c = DATASETS.clienti.find(item => item.id === clientId);
    if (!c) return;

    document.getElementById('interazione-cliente-nome').innerText = `${c.azienda} (${c.nome})`;
    document.getElementById('interazione-cliente-id').value = clientId;
    document.getElementById('interazione-dettagli').value = '';
    setTipoInterazione('nota');
    document.getElementById('modal-interazione').classList.add('active');
}

function chiudiModalInterazione() {
    document.getElementById('modal-interazione').classList.remove('active');
}

function setTipoInterazione(tipo) {
    tipoInterazioneSelezionato = tipo;
    
    const bottoni = document.querySelectorAll('.modal-action-row .btn-tipo');
    bottoni.forEach(btn => {
        btn.classList.remove('active');
    });

    const mapping = {
        nota: 'btn-tipo-nota',
        chiamata: 'btn-tipo-chiamata',
        envelope: 'btn-tipo-email',
        handshake: 'btn-tipo-incontro'
    };

    const idBtn = mapping[tipo] || 'btn-tipo-nota';
    const btnAttivo = document.getElementById(idBtn);
    if (btnAttivo) btnAttivo.classList.add('active');
}

function confermaAggiungiInterazione() {
    const clientId = document.getElementById('interazione-cliente-id').value;
    const dettagli = document.getElementById('interazione-dettagli').value.trim();

    if (!dettagli) {
        mostraNotifica("Inserisci una descrizione per registrare l'attività", "error");
        return;
    }

    const cIdx = DATASETS.clienti.findIndex(c => c.id === clientId);
    if (cIdx !== -1) {
        let tipoMappato = 'nota';
        if (tipoInterazioneSelezionato === 'chiamata') tipoMappato = 'chiamata';
        else if (tipoInterazioneSelezionato === 'envelope') tipoMappato = 'email';
        else if (tipoInterazioneSelezionato === 'handshake') tipoMappato = 'incontro';

        DATASETS.clienti[cIdx].timeline.unshift({
            type: tipoMappato,
            text: dettagli,
            date: ottieniDataOraAttuale()
        });

        mostraNotifica("Attività registrata con successo", "success");
        renderTimelineDettaglio(document.getElementById('contenitore-dati'), DATASETS.clienti[cIdx]);
    }

    chiudiModalInterazione();
}

function ottieniDataOraAttuale() {
    const ora = new Date();
    const mesi = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
    const giorno = ora.getDate();
    const mese = mesi[ora.getMonth()];
    const anno = ora.getFullYear();
    const hh = String(ora.getHours()).padStart(2, '0');
    const mm = String(ora.getMinutes()).padStart(2, '0');
    return `${giorno} ${mese} ${anno}, ${hh}:${mm}`;
}

function mostraNotifica(testo, tipo = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    
    let icon = 'fa-info-circle';
    if (tipo === 'success') icon = 'fa-check-circle';
    else if (tipo === 'error') icon = 'fa-exclamation-circle';

    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${testo}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => {
            if (toast.parentNode) {
                container.removeChild(toast);
            }
        }, 400);
    }, 3000);
}

// Mappa lo stato dei record a etichette in italiano leggibili
function mappaNomeStato(codice) {
    const mappa = {
        lead: "Lead",
        contattato: "Contattato",
        offerta: "Offerta Inviata",
        trattativa: "In Negoziazione",
        vinto: "Chiuso Vinto",
        perso: "Chiuso Perso",
        bozza: "Bozza",
        inviato: "Inviato",
        accettato: "Accettato / Confermato",
        rifiutato: "Rifiutato",
        daelaborare: "Da Elaborare",
        inlavorazione: "In Lavorazione",
        spedito: "Spedito / Evaso",
        consegnato: "Consegnato",
        ricevuto: "Ricevuto Completo",
        aperto: "Aperto",
        risolto: "Risolto / Convertito"
    };
    return mappa[codice] || (codice ? codice.toUpperCase() : "");
}

function isMobileViewport() {
    return window.matchMedia('(max-width: 768px)').matches;
}

function initSidebarState() {
    chiudiSidebarMobile();
    chiudiMobileSearch();
}

function chiudiSidebarMobile() {
    if (!isMobileViewport()) return;
    document.body.classList.remove('sidebar-is-open');
}

function toggleSidebar() {
    if (isMobileViewport()) {
        chiudiMobileSearch();
        document.body.classList.toggle('sidebar-is-open');
        return;
    }
    const sidebar = document.getElementById('app-sidebar');
    if (!sidebar) return;
    const isCollapsed = sidebar.classList.toggle('collapsed');
    document.body.classList.toggle('sidebar-collapsed', isCollapsed);
}

function toggleMobileSearch() {
    if (!isMobileViewport()) return;
    const shouldOpen = !document.body.classList.contains('mobile-search-open');
    document.body.classList.toggle('mobile-search-open', shouldOpen);
    if (shouldOpen) {
        document.body.classList.remove('sidebar-is-open');
        requestAnimationFrame(() => {
            const input = document.getElementById('mobile-search');
            if (input) input.focus();
        });
    }
}

function chiudiMobileSearch() {
    document.body.classList.remove('mobile-search-open');
}

window.addEventListener('resize', () => {
    const sidebar = document.getElementById('app-sidebar');
    if (!isMobileViewport()) {
        document.body.classList.remove('sidebar-is-open');
        if (sidebar) sidebar.classList.remove('collapsed');
        document.body.classList.remove('sidebar-collapsed');
    }
    layoutRadialMenu();
});

function toggleRadialMenu() {
    const hub = document.getElementById('command-hub');
    const trigger = hub?.querySelector('.hub-trigger');
    const ring = document.getElementById('radial-nav-ring');
    if (hub) {
        layoutRadialMenu();
        const willOpen = !hub.classList.contains('active');
        hub.classList.toggle('active');
        if (trigger) trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        if (ring) ring.setAttribute('aria-hidden', willOpen ? 'false' : 'true');
        if (willOpen) {
            radialExpandedGroup = getRadialGroupConfigByPage(paginaAttuale || DEFAULT_PAGE)?.key || RADIAL_MENU_GROUPS[0].key;
            syncRadialMenuState(paginaAttuale || DEFAULT_PAGE);
            updateRadialCenter(paginaAttuale || DEFAULT_PAGE);
        } else {
            syncRadialMenuState(paginaAttuale || DEFAULT_PAGE, { forceCollapsed: true });
        }
    }
}

function initRadialHoverEffects() {
    const radialItems = document.querySelectorAll('.radial-item');
    const radialGroups = document.querySelectorAll('.radial-group');
    const centerCat = document.getElementById('radial-center-cat');
    const centerName = document.getElementById('radial-center-name');

    radialGroups.forEach(group => {
        if (group.dataset.bound === 'true') return;
        group.dataset.bound = 'true';

        group.addEventListener('click', () => {
            const groupKey = group.getAttribute('data-group');
            if (groupKey) setRadialExpandedGroup(groupKey);
        });

        group.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const groupKey = group.getAttribute('data-group');
                if (groupKey) setRadialExpandedGroup(groupKey);
            }
        });

        group.addEventListener('mouseenter', () => {
            if (centerName) {
                centerName.innerText = group.getAttribute('data-label') || 'Categoria';
            }
            if (centerCat) {
                centerCat.innerText = 'Categorie';
            }
        });

        group.addEventListener('mouseleave', () => {
            updateRadialCenter(paginaAttuale);
        });
    });

    radialItems.forEach(item => {
        if (item.dataset.bound === 'true') return;
        item.dataset.bound = 'true';

        item.addEventListener('click', () => {
            const page = item.getAttribute('data-page');
            if (page) cambiaPagina(page);
        });

        item.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const page = item.getAttribute('data-page');
                if (page) cambiaPagina(page);
            }
        });

        item.addEventListener('mouseenter', () => {
            const page = item.getAttribute('data-page');
            if (centerName) {
                centerName.innerText = item.getAttribute('title') || 'Seleziona';
            }
            if (centerCat) {
                centerCat.innerText = getRadialSectorLabel(page);
            }
        });

        item.addEventListener('mouseleave', () => {
            updateRadialCenter(paginaAttuale);
        });
    });
}

function stampaDocumento(pageName, recordId) {
    const record = getRecordByPage(pageName, recordId);
    if (!record) return;
    
    let container = document.getElementById('print-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'print-container';
        document.body.appendChild(container);
    }
    
    const isDoc = ['preventivi', 'ordiniVendita', 'ddtVendita', 'ordiniAcquisto', 'ddtAcquisto'].includes(pageName);
    
    const docTitle = cleanUiText(TABLE_CONFIGS[pageName]?.title || pageName);
    const linkedName = record.cliente
        ? (DATASETS.clienti.find(item => item.id === record.cliente)?.azienda || 'Cliente Sconosciuto')
        : record.fornitore
            ? (DATASETS.fornitori.find(item => item.id === record.fornitore)?.nome || 'Fornitore Sconosciuto')
            : 'Destinatario Sconosciuto';
            
    const linkedAddress = record.cliente
        ? (DATASETS.clienti.find(item => item.id === record.cliente)?.indirizzo || '')
        : record.fornitore
            ? (DATASETS.fornitori.find(item => item.id === record.fornitore)?.indirizzo || '')
            : '';
            
    const linkedPiva = record.cliente
        ? (DATASETS.clienti.find(item => item.id === record.cliente)?.piva || '')
        : record.fornitore
            ? (DATASETS.fornitori.find(item => item.id === record.fornitore)?.piva || '')
            : '';

    const rows = Array.isArray(record.righe) ? record.righe : [];
    
    let rowsHtml = '';
    if (rows.length > 0) {
        rowsHtml = `
            <table class="print-table">
                <thead>
                    <tr>
                        <th>Codice</th>
                        <th>Descrizione</th>
                        <th class="num">Q.tà</th>
                        <th class="num">Prezzo</th>
                        <th class="num">Totale</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows.map(r => {
                        const prod = DATASETS.prodotti?.find(p => p.id === r.prodotto);
                        const desc = prod ? prod.nome : (r.descrizione || 'Articolo');
                        const qta = r.quantita || 1;
                        const pz = r.prezzoUnitario || r.prezzo || 0;
                        const tot = qta * pz;
                        return `
                        <tr>
                            <td>${prod ? prod.sku : ''}</td>
                            <td>${desc}</td>
                            <td class="num">${qta}</td>
                            <td class="num">${formatCrmMoney(pz)}</td>
                            <td class="num">${formatCrmMoney(tot)}</td>
                        </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
            
            <div class="print-totals">
                <div class="print-totals-row">
                    <span>Imponibile:</span>
                    <span>${formatCrmMoney(record.imponibile || record.totale || 0)}</span>
                </div>
                <div class="print-totals-row">
                    <span>IVA:</span>
                    <span>${formatCrmMoney(record.tasse || 0)}</span>
                </div>
                <div class="print-totals-row grand-total">
                    <span>Totale Documento:</span>
                    <span>${formatCrmMoney((record.imponibile || record.totale || 0) + (record.tasse || 0))}</span>
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="print-document">
            <div class="print-header">
                <div class="print-logo">
                    <h1>SIDEIS SRL</h1>
                    <p>P.IVA: 09876543210 - C.F. 09876543210</p>
                    <p>Via dell'Innovazione 1, 20100 Milano (MI) - Italia</p>
                    <p>Tel: +39 02 1234567 | Email: info@sideis.it</p>
                </div>
                <div class="print-doc-info">
                    <h2>${docTitle}</h2>
                    <p>Numero: <strong>${record.numero || record.codice || record.id}</strong></p>
                    <p>Data: <strong>${record.data || formatDisplayDate(new Date())}</strong></p>
                    ${record.dataScadenza ? `<p>Scadenza: <strong>${record.dataScadenza}</strong></p>` : ''}
                </div>
            </div>
            
            <div class="print-addresses">
                <div class="print-address-box">
                    <h3>Intestatario Documento</h3>
                    <p><strong>${linkedName}</strong></p>
                    <p>${linkedAddress}</p>
                    <p>P.IVA: ${linkedPiva}</p>
                </div>
                <div class="print-address-box">
                    <h3>Destinazione Merce</h3>
                    <p>Come Intestatario</p>
                </div>
            </div>
            
            ${rowsHtml}
            
            <div class="print-notes">
                <p><strong>Note:</strong> ${record.note || 'Nessuna nota aggiuntiva.'}</p>
            </div>
            
            <div class="print-footer">
                Documento generato da CRM SIDEIS - Pagina 1 di 1
            </div>
        </div>
    `;
    
    setTimeout(() => {
        window.print();
    }, 300);
}

// --- FUNZIONE DI STAMPA ---
function stampaDocumentoCorrente() {
    if (!editingRecordId) return;
    const record = DATASETS[paginaAttuale].find(r => r.id === editingRecordId);
    if (!record) return;

    let entityName = "Cliente";
    let entityData = null;
    
    if (['preventivi', 'ordiniVendita', 'ddtVendita'].includes(paginaAttuale)) {
        entityData = DATASETS.clienti.find(c => c.id === record.cliente);
    } else {
        entityName = "Fornitore";
        entityData = DATASETS.fornitori.find(c => c.id === record.fornitore);
    }

    const config = TABLE_CONFIGS[paginaAttuale];
    const docTitle = (config.title || "Documento").toUpperCase();

    const righeHTML = (record.righe || []).map(r => {
        const importo = r.quantita * r.prezzoUnitario * (1 - (r.sconto || 0)/100);
        return "<tr>" +
            "<td>" + r.prodotto + "</td>" +
            "<td>" + (r.descrizione || '') + "</td>" +
            "<td style='text-align: right;'>" + r.quantita + "</td>" +
            "<td style='text-align: right;'>&euro; " + formatCrmMoney(r.prezzoUnitario).replace('&euro;','') + "</td>" +
            "<td style='text-align: right;'>" + (r.sconto ? r.sconto + '%' : '-') + "</td>" +
            "<td style='text-align: right;'>&euro; " + formatCrmMoney(importo).replace('&euro;','') + "</td>" +
        "</tr>";
    }).join('');

    const html = "<div class='print-document'>" +
        "<div class='print-header'>" +
            "<div class='print-company-info'>" +
                "<div class='print-logo'>SIDEIS<span>SRL</span></div>" +
                "<p>Via dell'Innovazione, 123<br>00100 Roma (RM)<br>P.IVA: 01234567890<br>info@sideis.it</p>" +
            "</div>" +
            "<div class='print-entity-info'>" +
                "<div class='print-entity-label'>Intestatario Documento</div>" +
                "<strong>" + (entityData ? (entityData.azienda || entityData.nome) : 'N/D') + "</strong>" +
                (entityData && entityData.indirizzo ? "<p>" + entityData.indirizzo + "</p>" : "") +
                (entityData && entityData.piva ? "<p>P.IVA: " + entityData.piva + "</p>" : "") +
            "</div>" +
        "</div>" +
        
        "<div class='print-doc-meta'>" +
            "<div class='print-doc-title'>" +
                "<h2>" + docTitle + "</h2>" +
                "<h1>N. " + (record.numero || 'N/D') + "</h1>" +
            "</div>" +
            "<div class='print-doc-details'>" +
                "<div class='print-detail-box'><span>Data emissione</span><strong>" + (record.data || '') + "</strong></div>" +
                (record.dataConsegna ? "<div class='print-detail-box'><span>Consegna Prevista</span><strong>" + record.dataConsegna + "</strong></div>" : "") +
            "</div>" +
        "</div>" +

        "<table class='print-table'>" +
            "<thead>" +
                "<tr>" +
                    "<th style='text-align: left; width: 15%;'>Codice</th>" +
                    "<th style='text-align: left; width: 45%;'>Descrizione</th>" +
                    "<th style='text-align: right; width: 10%;'>Q.tà</th>" +
                    "<th style='text-align: right; width: 15%;'>Prezzo Unit.</th>" +
                    "<th style='text-align: right; width: 15%;'>Importo</th>" +
                "</tr>" +
            "</thead>" +
            "<tbody>" +
                (record.righe || []).map(r => {
                    const importo = r.quantita * r.prezzoUnitario * (1 - (r.sconto || 0)/100);
                    return "<tr>" +
                        "<td><strong>" + r.prodotto + "</strong></td>" +
                        "<td>" + (r.descrizione || '') + (r.sconto ? "<br><small style='color: #6b7280;'>Sconto applicato: " + r.sconto + "%</small>" : "") + "</td>" +
                        "<td style='text-align: right; font-weight: 600;'>" + r.quantita + "</td>" +
                        "<td style='text-align: right;'>&euro; " + formatCrmMoney(r.prezzoUnitario).replace('&euro;','') + "</td>" +
                        "<td style='text-align: right; font-weight: 600;'>&euro; " + formatCrmMoney(importo).replace('&euro;','') + "</td>" +
                    "</tr>";
                }).join('') +
            "</tbody>" +
        "</table>" +

        "<div class='print-totals'>" +
            "<div class='print-totals-row'>" +
                "<span>Imponibile</span>" +
                "<span>" + formatCrmMoney(record.imponibile) + "</span>" +
            "</div>" +
            "<div class='print-totals-row'>" +
                "<span>Tasse (IVA)</span>" +
                "<span>" + formatCrmMoney(record.tasse) + "</span>" +
            "</div>" +
            "<div class='print-totals-row print-totals-grand'>" +
                "<span>TOTALE</span>" +
                "<span>" + formatCrmMoney(record.totale) + "</span>" +
            "</div>" +
        "</div>" +

        (record.note ? "<div class='print-notes'><strong>Note Operative:</strong><br>" + record.note + "</div>" : "") +
        "<div class='print-footer'>Documento generato da SIDEIS CRM - " + new Date().toLocaleDateString('it-IT') + "</div>" +
    "</div>";

    document.getElementById('print-area').innerHTML = html;
    window.print();
}

// ==========================================================================
// PRE-INTEGRATO SLIDE-OVER DRAWER (LINEAR / STRIPE STYLE)
// ==========================================================================

window.drawerPageName = null;
window.drawerRecordId = null;
window.drawerActiveTab = 'general';

function apriCrmDrawer(pageName, recordId) {
    window.drawerPageName = pageName;
    window.drawerRecordId = recordId;
    editingRecordId = recordId; // Map to edit scope
    window.drawerActiveTab = 'general';
    
    const config = TABLE_CONFIGS[pageName];
    const record = DATASETS[pageName].find(r => r.id === recordId);
    if (!record) {
        mostraNotifica("Record non trovato", "error");
        return;
    }

    const drawer = document.getElementById('crm-drawer');
    if (!drawer) return;

    const isDoc = !!config.isDocument;
    drawer.classList.toggle('is-document', isDoc);

    // Header info
    document.getElementById('crm-drawer-eyebrow').innerText = config.eyebrow || config.title;
    document.getElementById('crm-drawer-title').innerText = record.numero || record.azienda || record.nome || record.titolo || recordId;

    // Render tab bar
    const tabContainer = document.getElementById('crm-drawer-tabs');
    let tabsHtml = `
        <button type="button" class="crm-drawer-tab-btn ${window.drawerActiveTab === 'general' ? 'active' : ''}" onclick="setDrawerTab('general')">
            <i class="fas fa-circle-info"></i> Dati Generali
        </button>
    `;

    if (pageName === 'clienti') {
        tabsHtml += `
            <button type="button" class="crm-drawer-tab-btn ${window.drawerActiveTab === 'timeline' ? 'active' : ''}" onclick="setDrawerTab('timeline')">
                <i class="fas fa-clock-rotate-left"></i> Attività & Timeline
            </button>
        `;
    }

    if (['clienti', 'preventivi', 'ordiniVendita'].includes(pageName)) {
        tabsHtml += `
            <button type="button" class="crm-drawer-tab-btn ${window.drawerActiveTab === 'relations' ? 'active' : ''}" onclick="setDrawerTab('relations')">
                <i class="fas fa-link"></i> Collegamenti
            </button>
        `;
    }

    tabContainer.innerHTML = tabsHtml;

    // Open drawer
    drawer.classList.add('active');

    // Render contents of current tab
    renderDrawerTabContent();
}

function chiudiCrmDrawer() {
    const drawer = document.getElementById('crm-drawer');
    if (drawer) {
        drawer.classList.remove('active');
        drawer.classList.remove('is-document');
    }
    
    // Reimposta la classe del body a quella del drawer standard prima di svuotare
    const body = document.getElementById('crm-drawer-body');
    if (body) body.className = 'crm-drawer-body';
    
    window.drawerPageName = null;
    window.drawerRecordId = null;
    editingRecordId = null;
}

function setDrawerTab(tabName) {
    window.drawerActiveTab = tabName;
    document.querySelectorAll('.crm-drawer-tab-btn').forEach(btn => {
        const isCurrent = btn.getAttribute('onclick').includes(`'${tabName}'`);
        btn.classList.toggle('active', isCurrent);
    });
    renderDrawerTabContent();
}

function renderDrawerTabContent() {
    const body = document.getElementById('crm-drawer-body');
    const footer = document.getElementById('crm-drawer-footer');
    if (!body || !footer) return;

    body.className = 'crm-drawer-body'; // Reset form layout classes

    const pageName = window.drawerPageName;
    const recordId = window.drawerRecordId;
    const config = TABLE_CONFIGS[pageName];
    const record = DATASETS[pageName].find(r => r.id === recordId);
    
    if (window.drawerActiveTab === 'general') {
        // Read-only info cards in a beautiful grid
        let html = `<div class="drawer-info-grid">`;
        config.fields.forEach(field => {
            let val = record[field.key] || 'N/A';
            if (field.type === 'select') {
                const opt = (field.options || []).find(o => String(o.value) === String(val));
                if (opt) val = opt.label;
                else if (field.dynamicOptions) {
                    const linked = DATASETS[field.dynamicOptions]?.find(item => item.id === val);
                    if (linked) val = linked.azienda || linked.nome || linked.numero || val;
                }
            } else if (field.type === 'number') {
                val = field.key.toLowerCase().includes('valore') || field.key.toLowerCase().includes('prezzo') 
                    ? formatCrmMoney(val) 
                    : formatCompactNumber(val);
            }
            
            // Map values for cleaner representation
            if (field.key === 'stato' || field.key === 'statoPagamento') {
                val = `<span class="status-pill status-${record[field.key]}">${mappaNomeStato(record[field.key])}</span>`;
            }
            
            html += `
                <div class="drawer-info-item ${field.fullWidth ? 'full-width' : ''}">
                    <span class="drawer-info-label">${field.label}</span>
                    <div class="drawer-info-value">${val}</div>
                </div>
            `;
        });
        
        // Render document lines if it is a document
        if (config.isDocument && Array.isArray(record.righe)) {
            const isDelivery = !!config.isDeliveryOnly;
            let imponibile = 0;
            let totalTax = 0;
            let rowsHtml = '';
            
            record.righe.forEach(li => {
                const p = prodotti.find(item => item.id === li.prodotto) || { nome: li.prodotto, prezzoVendita: li.prezzo || 0 };
                const quantita = li.quantita || 0;
                const prezzo = li.prezzoUnitario || li.prezzo || p.prezzoVendita || 0;
                const discount = (li.sconto || 0) + (li.sconto1 || 0) + (li.sconto2 || 0) + (li.sconto3 || 0);
                const importo = quantita * prezzo * (1 - discount / 100);
                
                imponibile += importo;
                const taxPerc = parseFloat(li.iva ?? p.iva ?? 22);
                totalTax += importo * (taxPerc / 100);
                
                if (isDelivery) {
                    rowsHtml += `
                        <tr>
                            <td style="padding:8px 10px;"><strong>${p.codice || li.prodotto}</strong><br><small style="color:var(--text-muted);">${p.nome || ''}</small></td>
                            <td style="padding:8px 10px; text-align:right;">${quantita}</td>
                            <td style="padding:8px 10px; text-align:right;">${li.unitaMisura || p.unitaMisura || 'pz'}</td>
                        </tr>
                    `;
                } else {
                    rowsHtml += `
                        <tr>
                            <td style="padding:8px 10px;"><strong>${p.codice || li.prodotto}</strong><br><small style="color:var(--text-muted);">${p.nome || ''}</small></td>
                            <td style="padding:8px 10px; text-align:right;">${quantita} ${li.unitaMisura || p.unitaMisura || 'pz'}</td>
                            <td style="padding:8px 10px; text-align:right;">${formatCrmMoney(prezzo)}</td>
                            <td style="padding:8px 10px; text-align:right;">${discount > 0 ? `${discount}%` : '-'}</td>
                            <td style="padding:8px 10px; text-align:right;">${taxPerc}%</td>
                            <td style="padding:8px 10px; text-align:right; font-weight:700;">${formatCrmMoney(importo)}</td>
                        </tr>
                    `;
                }
            });

            html += `
                <div class="drawer-info-item full-width" style="margin-top: 16px; border-top: 1px dashed var(--border-color); padding-top:16px;">
                    <span class="drawer-info-label">Articoli Collegati</span>
                    <table class="crm-table" style="margin-top: 8px; width: 100%; font-size: 12px; border-collapse: collapse;">
                        <thead>
                            <tr style="background:var(--bg-surface-soft);">
                                <th style="padding:6px 10px; font-size:10px;">Prodotto</th>
                                <th style="padding:6px 10px; font-size:10px; text-align:right;">Q.ta</th>
                                ${isDelivery ? `
                                    <th style="padding:6px 10px; font-size:10px; text-align:right;">U.M.</th>
                                ` : `
                                    <th style="padding:6px 10px; font-size:10px; text-align:right;">Prezzo Unitario</th>
                                    <th style="padding:6px 10px; font-size:10px; text-align:right;">Sconto</th>
                                    <th style="padding:6px 10px; font-size:10px; text-align:right;">IVA</th>
                                    <th style="padding:6px 10px; font-size:10px; text-align:right;">Importo</th>
                                `}
                            </tr>
                        </thead>
                        <tbody>
                            ${rowsHtml}
                        </tbody>
                    </table>
                    
                    ${!isDelivery ? `
                        <div class="document-totals-panel" style="margin-top: 16px;">
                            <div class="document-totals-card" style="margin-left: auto;">
                                <div class="totals-row"><span>Imponibile</span><span>${formatCrmMoney(imponibile)}</span></div>
                                <div class="totals-row"><span>IVA stimata</span><span>${formatCrmMoney(totalTax)}</span></div>
                                <div class="totals-row totals-final"><span>Totale documento</span><span>${formatCrmMoney(imponibile + totalTax)}</span></div>
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        }
        
        html += `</div>`;
        body.innerHTML = html;

        // Footer buttons for General Tab
        footer.innerHTML = `
            <button type="button" class="btn-secondary" onclick="chiudiCrmDrawer()" style="margin-right:auto;">Chiudi</button>
            ${['preventivi', 'ordiniVendita', 'ddtVendita', 'preventiviAcquisto', 'ordiniAcquisto', 'ddtAcquisto'].includes(pageName) ? `
                <button type="button" class="btn-secondary" onclick="stampaDocumentoCorrente()">
                    <i class="fas fa-print"></i> Stampa
                </button>
            ` : ''}
            <button type="button" class="btn-dark" onclick="attivaModificaInDrawer('${pageName}', '${recordId}')">
                <i class="fas fa-pen"></i> Modifica Dati
            </button>
        `;
    } 
    
    else if (window.drawerActiveTab === 'timeline' && pageName === 'clienti') {
        // Customer interaction Timeline list inside drawer
        let html = `
            <div style="margin-bottom:16px;">
                <div class="drawer-info-label" style="margin-bottom:8px;">Aggiungi Attività</div>
                <div style="display:flex; gap:8px;">
                    <input type="text" id="drawer-note-input" class="input-field-modern" placeholder="Aggiungi una nota al volo..." style="font-size:13px; flex:1;">
                    <button type="button" class="btn-dark" style="min-height:36px; padding:0 12px; font-size:12px;" onclick="aggiungiNotaRapidaDrawer('${recordId}')">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="timeline-shell" style="display:flex; flex-direction:column; gap:16px; position:relative; padding-left:14px; margin-top:20px;">
                <div style="position:absolute; left:4px; top:4px; bottom:4px; width:2px; background:var(--border-color); border-radius:1px;"></div>
        `;

        if (Array.isArray(record.timeline) && record.timeline.length) {
            record.timeline.forEach(t => {
                let icon = 'fa-sticky-note';
                if (t.type === 'chiamata') icon = 'fa-phone';
                else if (t.type === 'email') icon = 'fa-envelope';
                else if (t.type === 'incontro') icon = 'fa-handshake';

                html += `
                    <div style="position:relative; display:flex; flex-direction:column; gap:4px;">
                        <div style="position:absolute; left:-14px; top:4px; width:8px; height:8px; border-radius:50%; background:var(--brand-primary); box-shadow: 0 0 0 4px var(--bg-body);"></div>
                        <div style="display:flex; align-items:center; gap:8px;">
                            <span class="status-pill status-contattato" style="font-size:9px !important; padding:1px 6px !important;"><i class="fas ${icon}"></i> ${t.type.toUpperCase()}</span>
                            <span style="font-size:10.5px; color:var(--text-muted); font-weight:600;">${t.date}</span>
                        </div>
                        <div style="font-size:13px; color:var(--text-main); background:var(--bg-surface-soft); padding:10px 12px; border-radius:10px; border:1px solid var(--border-color); line-height:1.4;">
                            ${t.text}
                        </div>
                    </div>
                `;
            });
        } else {
            html += `<div style="text-align:center; font-size:13px; color:var(--text-muted); padding:32px 0;">Nessuna attività registrata.</div>`;
        }

        html += `</div>`;
        body.innerHTML = html;

        footer.innerHTML = `
            <button type="button" class="btn-secondary" onclick="chiudiCrmDrawer()">Chiudi</button>
            <button type="button" class="btn-dark" onclick="apriRegistraAttivitaDrawer('${recordId}')">
                <i class="fas fa-plus"></i> Registra Attività Completa
            </button>
        `;
    } 
    
    else if (window.drawerActiveTab === 'relations') {
        // Linked records (relations) inside drawer
        let html = `<div style="display:flex; flex-direction:column; gap:16px;">`;
        if (pageName === 'clienti') {
            const related = getClientRelatedRecords(recordId);
            
            html += `<div><span class="drawer-info-label" style="display:block; margin-bottom:6px;">Segnalazioni / Opportunità (${related.segnalazioni.length})</span>`;
            html += renderCompactRelationList(related.segnalazioni, { emptyLabel: 'Nessuna opportunità collegata', pageName: 'segnalazioni' });
            html += `</div>`;

            html += `<div><span class="drawer-info-label" style="display:block; margin-bottom:6px;">Preventivi Offerti (${related.preventivi.length})</span>`;
            html += renderCompactRelationList(related.preventivi, { emptyLabel: 'Nessun preventivo collegato', pageName: 'preventivi' });
            html += `</div>`;

            html += `<div><span class="drawer-info-label" style="display:block; margin-bottom:6px;">Ordini di Vendita (${related.ordiniVendita.length})</span>`;
            html += renderCompactRelationList(related.ordiniVendita, { emptyLabel: 'Nessun ordine collegato', pageName: 'ordiniVendita' });
            html += `</div>`;

            html += `<div><span class="drawer-info-label" style="display:block; margin-bottom:6px;">DDT di Spedizione (${related.ddtVendita.length})</span>`;
            html += renderCompactRelationList(related.ddtVendita, { emptyLabel: 'Nessun DDT collegato', pageName: 'ddtVendita' });
            html += `</div>`;
        } else if (pageName === 'preventivi') {
            const cliente = DATASETS.clienti.find(item => item.id === record.cliente);
            html += `
                <div>
                    <span class="drawer-info-label" style="display:block; margin-bottom:6px;">Cliente Intestatario</span>
                    ${cliente ? `
                        <div class="relation-card" style="border:1px solid var(--border-color); border-radius:12px; padding:12px; background:var(--bg-surface-soft); display:flex; justify-content:space-between; align-items:center;">
                            <div>
                                <strong style="font-size:13.5px; color:var(--text-main); display:block;">${cliente.azienda}</strong>
                                <small style="font-size:11px; color:var(--text-muted);">${cliente.nome}</small>
                            </div>
                            <button type="button" class="btn-dark" style="min-height:30px; padding:0 10px; font-size:11px;" onclick="apriCrmDrawer('clienti', '${cliente.id}')">Apri Cliente</button>
                        </div>
                    ` : '<div class="dashboard-empty">Nessun cliente collegato.</div>'}
                </div>
            `;
        } else if (pageName === 'ordiniVendita') {
            const cliente = DATASETS.clienti.find(item => item.id === record.cliente);
            const linkedDdt = DATASETS.ddtVendita.filter(item => item.ordineRif === record.numero);
            html += `
                <div>
                    <span class="drawer-info-label" style="display:block; margin-bottom:6px;">Cliente Intestatario</span>
                    ${cliente ? `
                        <div class="relation-card" style="border:1px solid var(--border-color); border-radius:12px; padding:12px; background:var(--bg-surface-soft); display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                            <div>
                                <strong style="font-size:13.5px; color:var(--text-main); display:block;">${cliente.azienda}</strong>
                                <small style="font-size:11px; color:var(--text-muted);">${cliente.nome}</small>
                            </div>
                            <button type="button" class="btn-dark" style="min-height:30px; padding:0 10px; font-size:11px;" onclick="apriCrmDrawer('clienti', '${cliente.id}')">Apri Cliente</button>
                        </div>
                    ` : '<div class="dashboard-empty">Nessun cliente collegato.</div>'}
                </div>
                <div>
                    <span class="drawer-info-label" style="display:block; margin-bottom:6px;">Documenti di Trasporto (DDT)</span>
                    ${renderCompactRelationList(linkedDdt, { emptyLabel: 'Nessun DDT collegato', pageName: 'ddtVendita' })}
                </div>
            `;
        }
        
        html += `</div>`;
        body.innerHTML = html;

        footer.innerHTML = `
            <button type="button" class="btn-secondary" onclick="chiudiCrmDrawer()">Chiudi</button>
        `;
    }
}

function attivaModificaInDrawer(pageName, recordId) {
    const body = document.getElementById('crm-drawer-body');
    const footer = document.getElementById('crm-drawer-footer');
    if (!body || !footer) return;

    const record = DATASETS[pageName].find(r => r.id === recordId);
    if (!record) return;

    document.getElementById('crm-drawer-title').innerText = `Modifica - ${record.numero || record.azienda || record.nome || record.titolo || recordId}`;

    const fieldsContainer = document.getElementById('modal-generic-fields');
    costruisciCampiFormModal(pageName, record);

    body.innerHTML = `<form id="drawer-edit-form" onsubmit="event.preventDefault(); confermaSalvaInDrawer();" style="display:contents;"></form>`;
    const formNode = body.querySelector('#drawer-edit-form');
    
    while (fieldsContainer.firstChild) {
        formNode.appendChild(fieldsContainer.firstChild);
    }

    const config = TABLE_CONFIGS[pageName];
    body.className = `crm-drawer-body modal-fields-container ${config.isDocument || pageName === 'fornitori' ? 'modal-form-grid' : ''}`;

    footer.innerHTML = `
        <button type="button" class="btn-secondary" onclick="annullaModificaInDrawer('${pageName}', '${recordId}')">Annulla</button>
        <button type="button" class="btn-dark" onclick="confermaSalvaInDrawer()">
            <i class="fas fa-check"></i> Salva Modifiche
        </button>
    `;
}

function annullaModificaInDrawer(pageName, recordId) {
    const body = document.getElementById('crm-drawer-body');
    if (body) body.className = 'crm-drawer-body';
    apriCrmDrawer(pageName, recordId);
}

function confermaSalvaInDrawer() {
    const pageName = window.drawerPageName;
    const recordId = window.drawerRecordId;

    confermaSalvaGeneric();
    chiudiCrmDrawer();
    cambiaPagina(paginaAttuale);
}

function aggiungiNotaRapidaDrawer(clientId) {
    const input = document.getElementById('drawer-note-input');
    if (!input) return;
    const notaText = input.value.trim();
    if (!notaText) return;

    const cliente = DATASETS.clienti.find(c => c.id === clientId);
    if (!cliente) return;

    if (!Array.isArray(cliente.timeline)) cliente.timeline = [];
    cliente.timeline.unshift({
        type: "nota",
        text: notaText,
        date: ottieniDataOraAttuale()
    });

    saveDatasetsToLocal();
    saveDatasetsToApiIfChanged();
    
    input.value = '';
    renderDrawerTabContent();
    mostraNotifica("Nota aggiunta al cliente", "success");
}

function apriRegistraAttivitaDrawer(clientId) {
    chiudiCrmDrawer();
    apriModalInterazione(clientId);
}
