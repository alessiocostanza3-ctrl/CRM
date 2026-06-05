const fs = require('fs');
const window = {};
eval(fs.readFileSync('./seed-data.js', 'utf8'));
const data = window.CRM_SEED_DATA;

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const companyNames = ["Tech Solutions SRL", "Luce & Design SPA", "Edilizia Moderna Snc", "Impianti Sicuri SRL", "Arredo Ufficio SPA", "Global Services Snc"];
const firstNames = ["Marco", "Giuseppe", "Giovanni", "Antonio", "Mario", "Luigi"];
const lastNames = ["Rossi", "Russo", "Ferrari", "Esposito", "Bianchi", "Romano"];
const cities = ["Roma", "Milano", "Napoli", "Torino", "Palermo", "Genova"];

const startDate = new Date('2026-01-01');
const endDate = new Date('2026-06-30');

// Req: 10 prev vend, 4 prev acq
// 8 ord vend from prev, 3 ord acq from prev
// 5 ddt vend from ord, 3 ddt acq from ord

const fornitoriIds = data.fornitori.map(f => f.id);
const prodottiFiniti = data.prodotti.filter(p => String(p.categoria).toLowerCase() === 'prodotti finiti');
const prodottiComponenti = data.prodotti.filter(p => String(p.categoria).toLowerCase() !== 'prodotti finiti');

const clienti = [];
for (let i = 1; i <= 20; i++) {
    const isCompany = Math.random() > 0.3;
    const nome = randomElement(firstNames) + ' ' + randomElement(lastNames);
    const azienda = isCompany ? randomElement(companyNames) : '';
    const city = randomElement(cities);
    clienti.push({
        id: `cli_sim_${i}`,
        codice: `CLI-${2000 + i}`,
        azienda: azienda,
        tipo: isCompany ? 'azienda' : 'privato',
        stato: 'attivo',
        categoria: 'Cliente',
        agente: 'Marco Ferri',
        dataNascita: formatDate(randomDate(new Date('1970-01-01'), new Date('1995-12-31'))),
        piva: `0${randomInt(1000000000, 9999999999)}`,
        cf: `CF${randomInt(10000000000000, 99999999999999)}`,
        nome: nome,
        email: `info@${(azienda || nome).replace(/\s/g, '').toLowerCase()}.it`,
        telefono: `+39 ${randomInt(3000000000, 3999999999)}`,
        indirizzo: `Via Roma ${randomInt(1, 100)}, ${city}`,
        paese: "Italia",
        provincia: city.substring(0, 2).toUpperCase()
    });
}

function generateRighe(min, max, maxPezzi = 10, isVendita = true) {
    const numRighe = randomInt(min, max);
    const righe = [];
    const list = isVendita ? prodottiFiniti : prodottiComponenti;
    for (let i = 0; i < numRighe; i++) {
        const prod = randomElement(list);
        const qta = randomInt(1, maxPezzi);
        const prezzo = (isVendita ? prod.prezzoVendita : prod.prezzoAcquisto) || randomInt(10, 500);
        righe.push({
            prodotto: prod.id,
            descrizione: prod.nome,
            quantita: qta,
            prezzoUnitario: prezzo,
            sconto1: Math.random() > 0.8 ? randomElement([5, 10, 15]) : 0,
            sconto2: 0,
            sconto3: 0,
            linea: isVendita ? "Illuminazione" : "Componenti",
            descrizioneAggiuntiva: Math.random() > 0.7 ? "Finitura Standard" : "",
            costoConfezione: (prod.prezzoAcquisto || 10) * 2,
            quantitaConfezione: 1,
            tipologia: isVendita ? "prodotto" : "componente",
            iva: 22,
            unitaMisura: "pz"
        });
    }
    return righe;
}

function calculateTotale(righe) {
    return righe.reduce((sum, r) => {
        let net = r.quantita * r.prezzoUnitario;
        if (r.sconto1) net *= (1 - r.sconto1 / 100);
        if (r.sconto2) net *= (1 - r.sconto2 / 100);
        if (r.sconto3) net *= (1 - r.sconto3 / 100);
        return sum + net;
    }, 0);
}

// 1. Preventivi Vendita (10)
const preventivi = [];
for (let i = 1; i <= 10; i++) {
    const cliente = randomElement(clienti);
    const date = randomDate(startDate, endDate);
    const scadenza = new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    const righe = generateRighe(1, 2, 10, true);
    const imponibile = calculateTotale(righe);
    preventivi.push({
        id: `prev_sim_${i}`,
        numero: `PRE-${2026000 + i}`,
        sezionale: "00",
        titolo: randomElement(["Fornitura faretti led", "Progetto illuminazione villa", "Luci per showroom", "Sostituzione faretti esterni", "Illuminazione uffici"]),
        cliente: cliente.id,
        azienda: cliente.azienda || "DA DEFINIRE",
        destinazione: randomElement(["Sede Cliente", "Magazzino Milano", "Cantiere Roma", ""]),
        agente: randomElement(["Roberto Pagliai", "Marco Ferri", "Giacomo"]),
        condizioniPagamento: randomElement(["vista_fattura", "bonifico_30", "bonifico_60", "riba_30_60"]),
        porto: randomElement(["franco", "assegnato"]),
        listino: "Standard",
        ivaGenerale: 22,
        mostraImponibile: true,
        mostraIva: true,
        mostraScontiRiga: true,
        mostraScontiTotali: true,
        esportato: Math.random() > 0.5,
        data: formatDate(date),
        dataScadenza: formatDate(scadenza),
        stato: i <= 8 ? 'accettato' : randomElement(['bozza', 'inviato', 'rifiutato', 'scaduto']),
        righe: righe,
        imponibile: imponibile,
        tasse: imponibile * 0.22,
        totale: imponibile * 1.22,
        note: "Preventivo di vendita.",
        noteInterne: "Verificare disponibilità componenti prima dell'invio.",
        testoFondo: "Grazie per la collaborazione. Validità offerta: 30gg."
    });
}

// 2. Ordini Vendita (8 from Preventivi)
const ordiniVendita = [];
const preventiviDaOrdinare = preventivi.filter(p => p.stato === 'accettato').slice(0, 8);
for (let i = 0; i < 8; i++) {
    const prev = preventiviDaOrdinare[i];
    if (!prev) continue;
    const date = new Date(new Date(prev.data).getTime() + randomInt(1, 15) * 24 * 60 * 60 * 1000);
    ordiniVendita.push({
        id: `ordv_sim_${i+1}`,
        numero: `ORD-${2026000 + i + 1}`,
        cliente: prev.cliente,
        data: formatDate(date),
        stato: i < 5 ? 'spedito' : randomElement(['confermato', 'inlavorazione']),
        righe: prev.righe,
        imponibile: prev.imponibile,
        tasse: prev.tasse,
        totale: prev.totale,
        preventivoOrigine: prev.id,
        note: "Ordine da preventivo confermato."
    });
}

// 3. DDT Vendita (5 from Ordini)
const ddtVendita = [];
const ordiniDaSpedire = ordiniVendita.filter(o => o.stato === 'spedito').slice(0, 5);
for (let i = 0; i < 5; i++) {
    const ord = ordiniDaSpedire[i];
    if (!ord) continue;
    const date = new Date(new Date(ord.data).getTime() + randomInt(1, 10) * 24 * 60 * 60 * 1000);
    ddtVendita.push({
        id: `ddtv_sim_${i+1}`,
        numero: `DDT-${2026000 + i + 1}`,
        cliente: ord.cliente,
        data: formatDate(date),
        stato: 'fatturato',
        righe: ord.righe,
        imponibile: ord.imponibile,
        tasse: ord.tasse,
        totale: ord.totale,
        ordineOrigine: ord.id,
        vettore: randomElement(["BRT", "SDA", "DHL"]),
        note: "DDT per spedizione merci."
    });
}

// 4. Preventivi Acquisto (4)
const preventiviAcquisto = [];
for (let i = 1; i <= 4; i++) {
    const fornitore = randomElement(fornitoriIds);
    const date = randomDate(startDate, endDate);
    const scadenza = new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    const righe = generateRighe(1, 4, 50, false); // false = acquisto
    const imponibile = calculateTotale(righe);
    preventiviAcquisto.push({
        id: `preva_sim_${i}`,
        numero: `PRA-${2026000 + i}`,
        fornitore: fornitore,
        data: formatDate(date),
        dataScadenza: formatDate(scadenza),
        stato: i <= 3 ? 'accettato' : 'bozza',
        righe: righe,
        imponibile: imponibile,
        tasse: imponibile * 0.22,
        totale: imponibile * 1.22,
        note: "Preventivo fornitore."
    });
}

// 5. Ordini Acquisto (3 from Preventivi Acquisto)
const ordiniAcquisto = [];
const prevAcqAccettati = preventiviAcquisto.filter(p => p.stato === 'accettato').slice(0, 3);
for (let i = 0; i < 3; i++) {
    const prev = prevAcqAccettati[i];
    if (!prev) continue;
    const date = new Date(new Date(prev.data).getTime() + randomInt(1, 15) * 24 * 60 * 60 * 1000);
    ordiniAcquisto.push({
        id: `orda_sim_${i+1}`,
        numero: `OAC-${2026000 + i + 1}`,
        fornitore: prev.fornitore,
        data: formatDate(date),
        stato: 'ricevuto',
        righe: prev.righe,
        imponibile: prev.imponibile,
        tasse: prev.tasse,
        totale: prev.totale,
        preventivoOrigine: prev.id,
        note: "Ordine inviato a fornitore."
    });
}

// 6. DDT Acquisto (3 from Ordini Acquisto)
const ddtAcquisto = [];
for (let i = 0; i < 3; i++) {
    const ord = ordiniAcquisto[i];
    if (!ord) continue;
    const date = new Date(new Date(ord.data).getTime() + randomInt(2, 20) * 24 * 60 * 60 * 1000);
    ddtAcquisto.push({
        id: `ddta_sim_${i+1}`,
        numero: `DDA-${2026000 + i + 1}`,
        fornitore: ord.fornitore,
        data: formatDate(date),
        stato: 'registrato',
        righe: ord.righe,
        imponibile: ord.imponibile,
        tasse: ord.tasse,
        totale: ord.totale,
        ordineOrigine: ord.id,
        vettore: "Mittente",
        note: "Ricezione merce."
    });
}

data.clienti = clienti;
data.preventivi = preventivi;
data.ordiniVendita = ordiniVendita;
data.ddtVendita = ddtVendita;
data.preventiviAcquisto = preventiviAcquisto;
data.ordiniAcquisto = ordiniAcquisto;
data.ddtAcquisto = ddtAcquisto;

// Write to seed-data.js
fs.writeFileSync('./seed-data.js', 'window.CRM_SEED_DATA = ' + JSON.stringify(data, null, 2) + ';', 'utf8');

// Write to data.js
fs.writeFileSync('./data.js', 'module.exports = ' + JSON.stringify(data, null, 2) + ';', 'utf8');

console.log("Mock data populated successfully!");
