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

const companyNames = ["Tech Solutions SRL", "Luce & Design SPA", "Edilizia Moderna Snc", "Impianti Sicuri SRL", "Arredo Ufficio SPA", "Global Services Snc", "Innovazione Digitale SRL", "Green Energy SPA", "Studio Architetti Associati", "Costruzioni Generali SRL", "Retail Group SPA", "Food & Beverage Snc", "Logistica Veloce SRL", "Hospitality Management SPA", "Industrie Meccaniche Snc", "Automotive Parts SRL", "Fashion Milano SPA", "Pharma Distribuzione Snc", "Medical Devices SRL", "AgriTech SPA", "Smart Home Solutions SRL", "Security Systems SPA", "Eventi & Fiere Snc", "Consulenza Aziendale SRL", "Marketing Digitale SPA", "Software House Snc", "Cloud Services SRL", "Cyber Security SPA", "Data Analytics Snc", "E-commerce Solutions SRL", "Ristorante La Bella Vita", "Hotel Plaza SPA", "Palestra Fitness SRL", "Supermercati Uniti SPA", "Centro Commerciale Snc"];
const firstNames = ["Marco", "Giuseppe", "Giovanni", "Antonio", "Mario", "Luigi", "Francesco", "Angelo", "Vincenzo", "Pietro", "Salvatore", "Carlo", "Franco", "Domenico", "Giovanni", "Bruno", "Paolo", "Michele", "Giorgio", "Aldo", "Maria", "Anna", "Giuseppina", "Rosa", "Angela", "Giovanna", "Teresa", "Lucia", "Carmela", "Caterina", "Francesca", "Antonietta", "Carla", "Elena", "Concetta", "Rita", "Margherita", "Franca", "Paola"];
const lastNames = ["Rossi", "Russo", "Ferrari", "Esposito", "Bianchi", "Romano", "Colombo", "Ricci", "Marino", "Greco", "Bruno", "Gallo", "Conti", "De Luca", "Mancini", "Costa", "Giordano", "Rizzo", "Lombardi", "Moretti", "Barbieri", "Fontana", "Santoro", "Mariani", "Rinaldi", "Caruso", "Ferrara", "Galli", "Martini", "Leone", "Longo", "Gentile", "Martinelli", "Vitale", "Lombardo", "Serra", "Coppola", "De Santis", "D'Angelo", "Marchetti"];
const cities = ["Roma", "Milano", "Napoli", "Torino", "Palermo", "Genova", "Bologna", "Firenze", "Bari", "Catania", "Venezia", "Verona", "Messina", "Padova", "Trieste", "Taranto", "Brescia", "Parma", "Prato", "Modena"];

const startDate = new Date('2026-01-01');
const endDate = new Date('2026-06-30');

const numClients = 40;
const numPreventivi = 80;
const numOrdiniVendita = 60;
const numDdtVendita = 55;

const numOrdiniAcquisto = 45;
const numDdtAcquisto = 40;

const fornitoriIds = data.fornitori.map(f => f.id);
const prodottiList = data.prodotti;

const clienti = [];
for (let i = 1; i <= numClients; i++) {
    const isCompany = Math.random() > 0.3;
    const nome = randomElement(firstNames) + ' ' + randomElement(lastNames);
    const azienda = isCompany ? randomElement(companyNames) : '';
    const city = randomElement(cities);
    clienti.push({
        id: `cli_sim_${i}`,
        codice: `CLI-${2000 + i}`,
        azienda: azienda,
        tipo: isCompany ? 'azienda' : 'privato',
        stato: randomElement(['lead', 'contattato', 'offerta', 'attivo', 'perso']),
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

function generateRighe(min, max, maxPezzi = 10) {
    const numRighe = randomInt(min, max);
    const righe = [];
    for (let i = 0; i < numRighe; i++) {
        const prod = randomElement(prodottiList);
        const qta = randomInt(1, maxPezzi);
        const prezzo = prod.prezzoVendita || randomInt(10, 500);
        righe.push({
            prodotto: prod.id,
            descrizione: prod.nome,
            quantita: qta,
            prezzoUnitario: prezzo,
            sconto: Math.random() > 0.8 ? randomElement([5, 10, 15]) : 0
        });
    }
    return righe;
}

function calculateTotale(righe) {
    return righe.reduce((sum, r) => sum + (r.quantita * r.prezzoUnitario * (1 - (r.sconto||0)/100)), 0);
}

const preventivi = [];
for (let i = 1; i <= numPreventivi; i++) {
    const cliente = randomElement(clienti);
    const date = randomDate(startDate, endDate);
    const scadenza = new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    const righe = generateRighe(1, 5);
    const imponibile = calculateTotale(righe);
    preventivi.push({
        id: `prev_sim_${i}`,
        codice: `PRE-${2026000 + i}`,
        cliente: cliente.id,
        data: formatDate(date),
        dataScadenza: formatDate(scadenza),
        stato: randomElement(['bozza', 'inviato', 'accettato', 'rifiutato', 'scaduto']),
        righe: righe,
        imponibile: imponibile,
        tasse: imponibile * 0.22,
        totale: imponibile * 1.22,
        note: "Preventivo generato per simulazione."
    });
}

const ordiniVendita = [];
const preventiviAccettati = preventivi.filter(p => p.stato === 'accettato' || Math.random() > 0.5);
for (let i = 1; i <= numOrdiniVendita; i++) {
    const prev = i <= preventiviAccettati.length ? preventiviAccettati[i-1] : randomElement(preventivi);
    const date = new Date(new Date(prev.data).getTime() + randomInt(1, 15) * 24 * 60 * 60 * 1000);
    if(date > endDate) continue;
    ordiniVendita.push({
        id: `ordv_sim_${i}`,
        codice: `ORD-${2026000 + i}`,
        cliente: prev.cliente,
        data: formatDate(date),
        stato: randomElement(['confermato', 'in_lavorazione', 'spedito', 'fatturato', 'annullato']),
        righe: prev.righe,
        imponibile: prev.imponibile,
        tasse: prev.tasse,
        totale: prev.totale,
        preventivoOrigine: prev.id,
        note: "Ordine da preventivo confermato."
    });
}

const ddtVendita = [];
const ordiniSpediti = ordiniVendita.filter(o => ['spedito', 'fatturato'].includes(o.stato) || Math.random() > 0.5);
for (let i = 1; i <= numDdtVendita; i++) {
    if(i > ordiniSpediti.length) break;
    const ord = ordiniSpediti[i-1];
    const date = new Date(new Date(ord.data).getTime() + randomInt(1, 10) * 24 * 60 * 60 * 1000);
    if(date > endDate) continue;
    ddtVendita.push({
        id: `ddtv_sim_${i}`,
        codice: `DDT-${2026000 + i}`,
        cliente: ord.cliente,
        data: formatDate(date),
        stato: randomElement(['da_fatturare', 'fatturato']),
        righe: ord.righe,
        imponibile: ord.imponibile,
        tasse: ord.tasse,
        totale: ord.totale,
        ordineOrigine: ord.id,
        vettore: randomElement(["BRT", "SDA", "DHL", "FedEx", "Nostro mezzo"]),
        note: "DDT di vendita per spedizione merci."
    });
}

const ordiniAcquisto = [];
for (let i = 1; i <= numOrdiniAcquisto; i++) {
    const fornitoreId = randomElement(fornitoriIds);
    const date = randomDate(startDate, endDate);
    const righe = generateRighe(1, 8, 50);
    const imponibile = calculateTotale(righe);
    ordiniAcquisto.push({
        id: `orda_sim_${i}`,
        codice: `OAC-${2026000 + i}`,
        fornitore: fornitoreId,
        data: formatDate(date),
        stato: randomElement(['inviato', 'confermato', 'ricevuto', 'fatturato']),
        righe: righe,
        imponibile: imponibile,
        tasse: imponibile * 0.22,
        totale: imponibile * 1.22,
        note: "Ordine di fornitura merci."
    });
}

const ddtAcquisto = [];
const ordiniRicevuti = ordiniAcquisto.filter(o => ['ricevuto', 'fatturato'].includes(o.stato) || Math.random() > 0.5);
for (let i = 1; i <= numDdtAcquisto; i++) {
    if(i > ordiniRicevuti.length) break;
    const ord = ordiniRicevuti[i-1];
    const date = new Date(new Date(ord.data).getTime() + randomInt(2, 20) * 24 * 60 * 60 * 1000);
    if(date > endDate) continue;
    ddtAcquisto.push({
        id: `ddta_sim_${i}`,
        codice: `DDA-${2026000 + i}`,
        fornitore: ord.fornitore,
        data: formatDate(date),
        stato: randomElement(['registrato', 'fatturato']),
        righe: ord.righe,
        imponibile: ord.imponibile,
        tasse: ord.tasse,
        totale: ord.totale,
        ordineOrigine: ord.id,
        vettore: "Mittente",
        note: "Ricezione merce da fornitore."
    });
}

data.clienti = clienti;
data.preventivi = preventivi;
data.ordiniVendita = ordiniVendita;
data.ddtVendita = ddtVendita;
data.ordiniAcquisto = ordiniAcquisto;
data.ddtAcquisto = ddtAcquisto;

// Write to seed-data.js
fs.writeFileSync('./seed-data.js', 'window.CRM_SEED_DATA = ' + JSON.stringify(data, null, 2) + ';', 'utf8');

// Write to data.js
fs.writeFileSync('./data.js', 'module.exports = ' + JSON.stringify(data, null, 2) + ';', 'utf8');

console.log("Mock data populated successfully!");
