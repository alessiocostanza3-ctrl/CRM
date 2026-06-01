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
        descrizioneTecnica: "Faretto LED ad alta efficienza per esterni, corpo in alluminio pressofuso, impermeabilitÃƒÆ’Ã‚Â  IP67, finitura standard grigio antracite."
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
        descrizioneTecnica: "Chip LED COB da 10W ad alta luminositÃƒÆ’Ã‚Â , temperatura colore 4000K, efficienza 130 lm/W."
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
        descrizioneTecnica: "Alimentatore IP65 corrente costante 1050mA, ingresso universale, PFC attivo, alta affidabilitÃƒÆ’Ã‚Â ."
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
const DATASETS_STORAGE_KEY = 'crm_datasets_v2';
const LEGACY_DATASET_STORAGE_KEYS = ['crm_datasets_v1'];
let lastSyncedDatasetsSignature = '';
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
            { type: "nota", text: "Inserita opportunitÃƒÆ’Ã‚Â  commerciale in dashboard per villa Porto Cervo.", date: "20 Mag 2026, 16:15" }
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
        descrizione: "OpportunitÃƒÆ’Ã‚Â  chiusa positivamente e convertita in preventivo PRV-2026-001."
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

function getDatasetsSignature() {
    try {
        return JSON.stringify(DATASETS);
    } catch (err) {
        return '';
    }
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
            if (!remote) return false;
        } else {
            const res = await fetch('/api/data', { cache: 'no-store' });
            if (!res.ok) throw new Error(`API data failed: ${res.status}`);
            remote = await res.json();
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
    } catch (err) {
        console.warn('Sync dataset verso API fallito:', err);
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

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 2. CONFIGURAZIONI DELLE TABELLE & CAMPI DEI FORM ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
const TABLE_CONFIGS = {
    segnalazioni: {
        title: "Segnalazioni (Pre-preventivi)",
        eyebrow: "OpportunitÃƒÆ’Ã‚Â  Commerciali",
        headers: ["OpportunitÃƒÆ’Ã‚Â  / Prodotto", "Cliente Segnalante", "Zona", "PrioritÃƒÆ’Ã‚Â ", "Stato", "Workflow", "Azioni"],
        fields: [
            { key: "titolo", label: "Titolo OpportunitÃƒÆ’Ã‚Â ", type: "text", required: true, fullWidth: true, placeholder: "Fornitura fari per villa" },
            { key: "cliente", label: "Cliente di Riferimento", type: "select", required: true, dynamicOptions: "clienti" },
            { key: "prodottoInteresse", label: "Prodotto d'Interesse", type: "select", required: true, dynamicOptions: "prodotti" },
            { key: "zona", label: "Zona / Area Geografica", type: "text", required: true, placeholder: "Roma Nord" },
            { key: "priorita", label: "PrioritÃƒÆ’Ã‚Â  OpportunitÃƒÆ’Ã‚Â ", type: "select", required: true, options: [
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
            { key: "valore", label: "Valore Stimato Pipeline (ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬)", type: "number", placeholder: "10000" },
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
            { key: "colli", label: "QuantitÃƒÆ’Ã‚Â  Colli", type: "number", required: true, placeholder: "2" },
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
            { key: "colli", label: "QuantitÃƒÆ’Ã‚Â  Colli", type: "number", placeholder: "2" },
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
            { key: "prezzoAcquisto", label: "Prezzo di Costo Acquisto (ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬)", type: "number", required: true, placeholder: "22.00" },
            { key: "prezzoVendita", label: "Prezzo di Vendita (ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬)", type: "number", required: true, placeholder: "85.00" },
            { key: "sku", label: "SKU", type: "text", placeholder: "AURA-XS" },
            { key: "unitaMisura", label: "UnitÃƒÆ’Ã‚Â  di misura", type: "select", required: true, options: [
                { value: "pz", label: "Pezzi" },
                { value: "m", label: "Metri" },
                { value: "kg", label: "Kg" },
                { value: "scatola", label: "Scatola" }
            ]},
            { key: "quantitaConfezione", label: "QuantitÃƒÆ’Ã‚Â  per confezione", type: "number", placeholder: "1" },
            { key: "quantitaEsistente", label: "Giacenza", type: "number", placeholder: "0" },
            { key: "brand", label: "Brand", type: "text", placeholder: "PROD" },
            { key: "provvigione", label: "Provvigione %", type: "number", placeholder: "0" },
            { key: "barcode", label: "Barcode", type: "text", placeholder: "8012345678901" },
            { key: "metel", label: "METEL", type: "text", placeholder: "METEL" },
            { key: "magazzino", label: "Magazzino", type: "select", required: true, options: [
                { value: "si", label: "SÃƒÆ’Ã‚Â¬" },
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
            { key: "componentiCsv", label: "Elenco Componenti (Formato SKU:QuantitÃƒÆ’Ã‚Â , separati da virgola)", type: "textarea", required: true, fullWidth: true, placeholder: "LED-10W:1, DRV-10W:1, BODY-AURA:1, CAB-NEO:1" }
        ],
        csvTemplate: "prodotto,componentiCsv"
    },
    magazzino: {
        title: "Magazzino",
        eyebrow: "Giacenze e Scorte",
        headers: ["Codice / Articolo", "QuantitÃƒÆ’Ã‚Â  Disponibile", "Scorta Minima", "Stato Scorta", "Valore Scorta FIFO", "Ubicazione", "Azioni"],
        fields: [
            { key: "prodotto", label: "Articolo Prodotto", type: "select", required: true, dynamicOptions: "prodotti" },
            { key: "quantita", label: "Giacenza Attuale", type: "number", required: true, placeholder: "100" },
            { key: "quantitaMinima", label: "Livello Sotto-scorta Minimo", type: "number", placeholder: "10" },
            { key: "valoreFIFO", label: "Valore di Inventario FIFO (ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬)", type: "number", placeholder: "5000" },
            { key: "ubicazione", label: "Ubicazione Magazzino", type: "text", placeholder: "Scaffale B-18" }
        ],
        csvTemplate: "prodotto,quantita,quantitaMinima,valoreFIFO,ubicazione"
    }
};

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 3. STATE DI NAVIGAZIONE ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
let paginaAttuale = 'segnalazioni';
let editingRecordId = null;
let radialExpandedGroup = 'vendite';
let ricercaQuery = '';
const tableSortByPage = {};
let timelineClienteSelezionatoId = null;
let tipoInterazioneSelezionato = 'nota';
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

function cleanUiText(value) {
    const text = String(value ?? '');
    return text
        .replaceAll('â‚¬', 'EUR ')
        .replaceAll('ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬', 'EUR ')
        .replaceAll('ÃƒÆ’Ã‚Â ', 'a')
        .replaceAll('ÃƒÆ’Ã‚Â¨', 'e')
        .replaceAll('ÃƒÆ’Ã‚Â©', 'e')
        .replaceAll('ÃƒÆ’Ã‚Â¬', 'i')
        .replaceAll('ÃƒÆ’Ã‚Â²', 'o')
        .replaceAll('ÃƒÆ’Ã‚Â¹', 'u')
        .replaceAll('Ã ', 'a')
        .replaceAll('Ã¨', 'e')
        .replaceAll('Ã©', 'e')
        .replaceAll('Ã¬', 'i')
        .replaceAll('Ã²', 'o')
        .replaceAll('Ã¹', 'u')
        .replaceAll('Ã', 'a');
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
    if (page === 'impostazioni') {
        return 'Sistema';
    }
    return 'Sistema';
}

function getRadialCenterTitle(page) {
    if (page === 'impostazioni') {
        return 'Impostazioni';
    }
    const activeItem = document.querySelector(`.radial-item[data-page="${page}"]`);
    if (activeItem) {
        return activeItem.getAttribute('title') || page;
    }
    const config = TABLE_CONFIGS[page];
    return config ? config.title : page;
}

function getSidebarAnchorPage(page) {
    if (['segnalazioni'].includes(page)) return 'segnalazioni';
    if (['clienti'].includes(page)) return 'clienti';
    if (['preventivi', 'preventiviAcquisto'].includes(page)) return 'preventivi';
    if (['ordiniVendita', 'ordiniAcquisto'].includes(page)) return 'ordini';
    if (['ddtVendita', 'ddtAcquisto'].includes(page)) return 'ddt';
    if (['prodotti', 'distintaBase', 'magazzino', 'fornitori'].includes(page)) return 'catalogo';
    if (page === 'impostazioni') return 'impostazioni';
    return 'segnalazioni';
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
            { page: 'magazzino', label: 'Magazzino' },
            { page: 'fornitori', label: 'Fornitori' }
        ]
    }
};

let activeSidebarGroup = null;

function renderSidebarSubmenu(groupKey) {
    const container = document.getElementById('app-sidebar-submenu');
    if (!container) return;
    const group = SIDEBAR_SUBNAV[groupKey];
    if (!group) {
        container.classList.remove('active');
        container.innerHTML = '';
        activeSidebarGroup = null;
        return;
    }
    const buttons = group.items.map(item => {
        const isActive = item.page === paginaAttuale;
        return `<button type="button" class="app-subtab-btn ${isActive ? 'active' : ''}" onclick="cambiaPagina('${item.page}')">${item.label}</button>`;
    }).join('');
    container.innerHTML = `
        <div class="app-subtab-title">${group.title}</div>
        <div class="app-subtab-row">${buttons}</div>
    `;
    container.classList.add('active');
    activeSidebarGroup = groupKey;
}

function toggleSidebarGroup(groupKey) {
    const group = SIDEBAR_SUBNAV[groupKey];
    if (!group) return;
    if (activeSidebarGroup === groupKey) {
        renderSidebarSubmenu(null);
        return;
    }
    renderSidebarSubmenu(groupKey);
    syncSidebarActiveState(paginaAttuale);
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
        renderSidebarSubmenu(activeSidebarGroup);
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
    const activePage = paginaAttuale || 'segnalazioni';
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
    const activePage = paginaAttuale || 'segnalazioni';
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
    const activePage = paginaAttuale || 'segnalazioni';
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
        syncRadialMenuState(paginaAttuale || 'segnalazioni');
        return;
    }

    if (svg.dataset.rendered !== 'true') {
        svg.innerHTML = buildRadialMenuMarkup();
        svg.dataset.rendered = 'true';
        initRadialHoverEffects();
        aggiornaTuttiBadgeSidebar();
    }

    syncRadialMenuState(paginaAttuale || 'segnalazioni');
}

// ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 4. LIFECYCLE ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬
document.addEventListener('DOMContentLoaded', async () => {
    applyTheme(getSavedTheme());
    clearLegacyDatasetsFromLocal();
    const loadedFromApi = await loadDatasetsFromApi();
    wireDatasetAutoPersist();
    const restoredFromLocal = loadedFromApi ? false : restoreDatasetsFromLocal();
    if (!loadedFromApi && !restoredFromLocal) {
        saveDatasetsToLocal();
    }
    initSidebarState();
    aggiornaTuttiBadgeSidebar();
    layoutRadialMenu();
    renderTopNavMenu();
    bindTopNavEvents();
    initRadialHoverEffects(); // Inizializza gli effetti hover sul menu radiale
    cambiaPagina('segnalazioni'); // Avvia sulla prima pagina delle Segnalazioni
    setInterval(() => {
        saveDatasetsToLocal();
        saveDatasetsToApiIfChanged();
    }, 2500);
    window.addEventListener('beforeunload', saveDatasetsToLocal);
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.app-sidebar')) {
            renderSidebarSubmenu(null);
        }
        if (!event.target.closest('.kpi-mini-item')) {
            document.querySelectorAll('.kpi-mini-item.open').forEach(el => el.classList.remove('open'));
        }
    });
    
    // Gestione ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            chiudiSidebarMobile();
            chiudiMobileSearch();
            chiudiModalGeneric();
            chiudiModalCsv();
            chiudiModalInterazione();

            const hub = document.getElementById('command-hub');
            const trigger = hub?.querySelector('.hub-trigger');
            const ring = document.getElementById('radial-nav-ring');
            if (hub?.classList.contains('active')) {
                hub.classList.remove('active');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
                if (ring) ring.setAttribute('aria-hidden', 'true');
                syncRadialMenuState(paginaAttuale || 'segnalazioni', { forceCollapsed: true });
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
    paginaAttuale = page;
    editingRecordId = null;
    timelineClienteSelezionatoId = null;
    
    // Resetta ricerca
    document.getElementById('universal-search').value = '';
    const mobSearch = document.getElementById('mobile-search');
    if (mobSearch) mobSearch.value = '';
    ricercaQuery = '';
    chiudiMobileSearch();

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
    }
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

function renderCrmMetricStrip(pageName, dataset) {
    const rowClass = 'crm-kpi-row crm-kpi-row--compact';
    return `
        <div class="${rowClass}">
            ${buildCrmMetricCards(pageName, dataset).map(metric => `
                <button type="button" class="crm-kpi-card crm-kpi-card--compact crm-kpi-card--button" title="${metric.label}: ${metric.value}" onclick="showKpiDetail('${encodeURIComponent(`${metric.label}: ${metric.value} (${metric.detail})`)}')">
                    <div class="crm-kpi-icon crm-kpi-icon--compact"><i class="fas ${metric.icon}" aria-hidden="true"></i></div>
                    <div class="crm-kpi-copy crm-kpi-copy--compact">
                        <span class="crm-kpi-label crm-kpi-label--compact">${metric.label}</span>
                        <strong class="crm-kpi-value crm-kpi-value--compact">${metric.value}</strong>
                        <span class="crm-kpi-subtext crm-kpi-subtext--compact">${metric.detail}</span>
                    </div>
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
    const sortedDataset = getSortedDataset(pageName, dataset);

    let html = `
        <section class="crm-workbench">
        <div class="crm-page-header">
            <div class="crm-header-card">
                <div class="crm-header-info">
                    <span class="crm-header-eyebrow">${cleanUiText(config.eyebrow)}</span>
                    <h2 class="crm-header-title">${cleanUiText(config.title)}</h2>
                    <p class="crm-header-subtitle">${dataset.length} record nel modulo corrente</p>
                </div>
                <div class="crm-header-actions">
                    ${renderKpiMiniDock(pageName, dataset)}
                    <button class="btn-secondary" onclick="apriImportatoreCSV('${pageName}')">
                        <i class="fas fa-file-import"></i> Importa CSV
                    </button>
                    <button class="btn-primary" onclick="apriModalGenericCrea()">
                        <i class="fas fa-plus"></i> Aggiungi Record
                    </button>
                </div>
            </div>
        </div>

        <div class="crm-table-container">
            <div class="crm-table-toolbar">
                <div>
                    <span class="crm-table-eyebrow">Vista tabellare</span>
                    <strong>${cleanUiText(config.title)}</strong>
                </div>
                <span class="crm-table-count">${dataset.length} righe</span>
            </div>
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
        
        rigaHtml += `
            <td>
                <div class="client-name-bold">${r.titolo}</div>
                <div class="client-company-sub">${r.descrizione || ''}</div>
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
        rigaHtml += `
            <td onclick="apriVisualizzazioneTimeline('${r.id}')" style="cursor: pointer;">
                <div class="client-name-bold">${r.azienda}</div>
                <div class="client-company-sub">P.IVA: ${r.piva || 'N/D'}</div>
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
        const righeDesc = r.righe ? r.righe.map(li => {
            const p = prodotti.find(item => item.id === li.prodotto);
            return `${p ? p.codice : li.prodotto} (x${li.quantita})`;
        }).join(', ') : 'Nessun articolo';

        rigaHtml += `
            <td style="font-weight: 700;">${r.numero}</td>
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
            <td style="font-weight: 700;">${r.numero}</td>
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
        const righeDesc = r.righe ? r.righe.map(li => {
            const p = prodotti.find(item => item.id === li.prodotto);
            return `${p ? p.codice : li.prodotto} (x${li.quantita})`;
        }).join(', ') : 'Nessun articolo';

        rigaHtml += `
            <td style="font-weight: 700;">${r.numero}</td>
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
            <td style="font-weight: 700;">${r.numero}</td>
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
            <td style="font-weight: 700;">
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
            <td style="font-weight: 700;">${r.numero}</td>
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
            <td style="font-weight: 700;">${r.numero}</td>
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
            <td style="font-family: monospace; font-weight: 700;">
                <div>${r.codice}</div>
                <div style="font-size: 10px; color: var(--text-muted); font-weight: normal;">EAN: ${r.ean || 'N/D'}</div>
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
            <td>
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
            <td>
                <div class="client-name-bold">${prod.nome}</div>
                <div class="client-company-sub">SKU: ${prod.codice}</div>
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
    window.dettagliClienteIdAttivo = clientId;
    cambiaPagina('timeline_dettagli');
}

function renderTimelineDettaglio(container, cliente) {
    if (!cliente.timeline) {
        cliente.timeline = [{ type: "nota", text: "Record inserito.", date: ottieniDataOraAttuale() }];
    }

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
            </div>

            <div class="detail-timeline-panel">
                <div class="detail-panel-title">
                    <span>Timeline Interazioni</span>
                    <button class="btn-dark" style="min-height: 36px; padding: 0 14px; font-size: 12px;" onclick="apriModalInterazione('${cliente.id}')">
                        <i class="fas fa-plus"></i> Registra AttivitÃƒÆ’Ã‚Â 
                    </button>
                </div>
                
                <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 16px; padding: 14px; margin-bottom: 24px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <span style="font-size: 10px; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">Logger Rapido (Premi Invio per salvare)</span>
                    </div>
                    <div style="display: flex; gap: 10px;">
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
        document.getElementById('field-numero').value = `PRV-${Date.now().toString().slice(-6)}`;
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
    const nuovoOrdine = {
        id: nuovoId,
        numero: `ORDV-FROM-PRV-${prev.numero.slice(-4)}`,
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
        
        document.getElementById('field-numero').value = `DDTV-${Date.now().toString().slice(-6)}`;
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

        document.getElementById('field-numero').value = `DDTA-${Date.now().toString().slice(-6)}`;
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

        if (pageName === 'ordiniVendita' && field.key === 'numero') {
            const valoreNumero = record?.numero || generaNumeroOrdineVendita();
            fieldHtml += `<input type="${field.type}" id="field-${field.key}" class="input-field-modern input-readonly" value="${valoreNumero}" readonly>`;
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
    if (pageName === 'ordiniVendita' && ['numero', 'cliente', 'contatto', 'rifCliente', 'referente', 'agente', 'listaPrezzi', 'canale', 'data'].includes(key)) return 'identita';
    if (pageName === 'ordiniVendita' && ['dataConsegna', 'priorita', 'stato', 'terminiPagamento', 'statoPagamento', 'porto', 'vettore', 'dataPrevistaFattura'].includes(key)) return 'stato';
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
            <div class="lines-editor-table-wrapper">
                <table class="lines-editor-table">
                    <thead>
                        <tr>
                            <th>Articolo</th>
                            <th>Descrizione</th>
                            <th>U.M.</th>
                            <th>Q.ta</th>
                            <th>Prezzo</th>
                            <th>IVA</th>
                            <th>Totale</th>
                            <th>Dettagli</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="document-lines-body">${rows}</tbody>
                </table>
            </div>
            <div class="document-totals-panel">
                <div class="document-totals-card">
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
        <tr class="document-line-row">
            <td>
                <div class="line-articolo-stack">
                    <select class="line-input line-select line-product" onchange="aggiornaPrezzoRigaDocumento(this); aggiornaTotaliDocumentoModal()"><option value="">Seleziona articolo</option>${productOptions}</select>
                    <input type="hidden" class="line-sku" value="${selectedProduct.codice || ''}">
                </div>
            </td>
            <td><input type="text" class="line-input line-description" value="${selectedProduct.nome || riga.descrizione || ''}" placeholder="Descrizione articolo"></td>
            <td><select class="line-input line-select line-uom" onchange="aggiornaTotaliDocumentoModal()"><option value="pz" ${selectedUom === 'pz' ? 'selected' : ''}>Pz</option><option value="m" ${selectedUom === 'm' ? 'selected' : ''}>m</option><option value="kg" ${selectedUom === 'kg' ? 'selected' : ''}>kg</option><option value="scatola" ${selectedUom === 'scatola' ? 'selected' : ''}>Scatola</option></select></td>
            <td><input type="number" min="0" step="1" class="line-input line-qty" value="${riga.quantita || 1}" oninput="aggiornaTotaliDocumentoModal()"></td>
            <td><input type="number" min="0" step="0.01" class="line-input line-price" value="${riga.prezzo || ''}" placeholder="Auto" oninput="aggiornaTotaliDocumentoModal()"></td>
            <td><select class="line-input line-select line-tax" onchange="aggiornaTotaliDocumentoModal()"><option value="22" ${selectedIva === '22' ? 'selected' : ''}>22%</option><option value="10" ${selectedIva === '10' ? 'selected' : ''}>10%</option><option value="4" ${selectedIva === '4' ? 'selected' : ''}>4%</option><option value="0" ${selectedIva === '0' ? 'selected' : ''}>0%</option></select></td>
            <td class="line-total-cell">EUR 0,00</td>
            <td><button type="button" class="line-advanced-toggle" onclick="toggleRigaAvanzata(this)" title="Dettagli riga"><i class="fas fa-sliders-h"></i></button></td>
            <td><button type="button" class="line-delete-btn" onclick="rimuoviRigaDocumentoModal(this)" title="Elimina riga"><i class="fas fa-trash-alt"></i></button></td>
        </tr>
        <tr class="document-line-advanced">
            <td colspan="7">
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
                            <label>Sconto 1</label>
                            <input type="number" min="0" max="100" step="0.01" class="line-input line-discount1" value="${riga.sconto1 || 0}" oninput="aggiornaTotaliDocumentoModal()">
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
            </td>
        </tr>
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
    const row = button.closest('tr');
    const nextRow = row?.nextElementSibling;
    if (nextRow && nextRow.classList.contains('document-line-advanced')) {
        nextRow.remove();
    }
    row?.remove();
    aggiornaTotaliDocumentoModal();
}

function toggleRigaAvanzata(button) {
    const row = button.closest('tr');
    const advanced = row?.nextElementSibling;
    if (advanced && advanced.classList.contains('document-line-advanced')) {
        advanced.classList.toggle('active');
    }
}

function aggiornaPrezzoRigaDocumento(selectEl) {
    const row = selectEl.closest('tr');
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
    return Array.from(document.querySelectorAll('#document-lines-body tr')).map(row => ({
        prodotto: row.querySelector('.line-product')?.value || '',
        sku: row.querySelector('.line-sku')?.value || '',
        quantita: Number(row.querySelector('.line-qty')?.value || 0),
        prezzo: Number(row.querySelector('.line-price')?.value || 0) || prezzoProdottoPerDocumento(row.querySelector('.line-product')?.value || '', paginaAttuale),
        prezzoConfezione: Number(row.querySelector('.line-packprice')?.value || 0),
        quantitaConfezione: Number(row.querySelector('.line-packqty')?.value || 0),
        sconto1: Number(row.querySelector('.line-discount1')?.value || 0),
        sconto2: Number(row.querySelector('.line-discount2')?.value || 0),
        sconto3: Number(row.querySelector('.line-discount3')?.value || 0),
        iva: Number(row.querySelector('.line-tax')?.value || 0),
        dataConsegna: row.querySelector('.line-delivery')?.value || '',
        unitaMisura: row.querySelector('.line-uom')?.value || 'pz',
        descrizione: row.querySelector('.line-description')?.value || '',
        note: row.querySelector('.line-notes')?.value || ''
    })).filter(riga => riga.prodotto && riga.quantita > 0);
}

function aggiornaTotaliDocumentoModal() {
    const righe = leggiRigheDocumentoModal();
    let imponibile = 0;
    let iva = 0;
    righe.forEach(riga => {
        const scontoTotale = [riga.sconto1, riga.sconto2, riga.sconto3].filter(v => Number.isFinite(v) && v > 0).reduce((acc, v) => acc + v, 0);
        const netto = riga.quantita * riga.prezzo * (1 - (scontoTotale || 0) / 100);
        imponibile += netto;
        iva += netto * ((riga.iva || 0) / 100);
    });
    const format = value => `EUR ${value.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.querySelectorAll('#document-lines-body tr').forEach(row => {
        const qty = Number(row.querySelector('.line-qty')?.value || 0);
        const price = Number(row.querySelector('.line-price')?.value || 0);
        const discount1 = Number(row.querySelector('.line-discount1')?.value || 0);
        const discount2 = Number(row.querySelector('.line-discount2')?.value || 0);
        const discount3 = Number(row.querySelector('.line-discount3')?.value || 0);
        const discount = discount1 + discount2 + discount3;
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
    document.getElementById('modal-generic-titolo').innerText = `Aggiungi a ${TABLE_CONFIGS[paginaAttuale].title}`;
    
    costruisciCampiFormModal(paginaAttuale);
    document.getElementById('modal-generic').classList.add('active');
}

function apriModalGenericModifica(id) {
    editingRecordId = id;
    document.getElementById('modal-generic-titolo').innerText = `Modifica Record - ${TABLE_CONFIGS[paginaAttuale].title}`;
    
    const record = DATASETS[paginaAttuale].find(r => r.id === id);
    if (!record) return;

    costruisciCampiFormModal(paginaAttuale, record);
    document.getElementById('modal-generic').classList.add('active');
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
    `;

    container.innerHTML = html;
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
}

function aggiornaTuttiBadgeSidebar() {
    Object.keys(DATASETS).forEach(key => {
        const badge = document.getElementById(`badge-${key}-count`);
        if (badge && DATASETS[key]) {
            badge.textContent = DATASETS[key].length;
        }
    });
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
        mostraNotifica("Inserisci una descrizione per registrare l'attivitÃƒÆ’Ã‚Â ", "error");
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

        mostraNotifica("AttivitÃƒÆ’Ã‚Â  registrata con successo", "success");
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
    const sidebar = document.getElementById('main-sidebar');
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
    const sidebar = document.getElementById('main-sidebar');
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
            radialExpandedGroup = getRadialGroupConfigByPage(paginaAttuale || 'segnalazioni')?.key || RADIAL_MENU_GROUPS[0].key;
            syncRadialMenuState(paginaAttuale || 'segnalazioni');
            updateRadialCenter(paginaAttuale || 'segnalazioni');
        } else {
            syncRadialMenuState(paginaAttuale || 'segnalazioni', { forceCollapsed: true });
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
 




