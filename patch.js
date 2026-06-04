const fs = require('fs');
let script = fs.readFileSync('script.js', 'utf8');

script = script.replace(
    'costruisciCampiFormModal(paginaAttuale, record);\r\n    document.getElementById(\'modal-generic\').classList.add(\'active\');',
    'costruisciCampiFormModal(paginaAttuale, record);\r\n    const btnStampa = document.getElementById(\'btn-stampa-doc\');\r\n    if (btnStampa) btnStampa.style.display = [\'preventivi\', \'ordiniVendita\', \'ddtVendita\', \'preventiviAcquisto\', \'ordiniAcquisto\', \'ddtAcquisto\'].includes(paginaAttuale) ? \'inline-flex\' : \'none\';\r\n    document.getElementById(\'modal-generic\').classList.add(\'active\');'
);

script = script.replace(
    'costruisciCampiFormModal(paginaAttuale);\r\n    document.getElementById(\'modal-generic\').classList.add(\'active\');',
    'costruisciCampiFormModal(paginaAttuale);\r\n    const btnStampa = document.getElementById(\'btn-stampa-doc\');\r\n    if (btnStampa) btnStampa.style.display = \'none\';\r\n    document.getElementById(\'modal-generic\').classList.add(\'active\');'
);

let appendCode = `
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
                "<h1>SIDEIS SRL</h1>" +
                "<p>Via dell'Innovazione, 123<br>00100 Roma (RM)<br>P.IVA: 01234567890<br>Email: info@sideis.it</p>" +
            "</div>" +
            "<div class='print-entity-info'>" +
                "<strong>Spett.le " + entityName + ":</strong>" +
                "<p>" + (entityData ? (entityData.azienda || entityData.nome) : 'N/D') + "</p>" +
                (entityData && entityData.indirizzo ? "<p>" + entityData.indirizzo + "</p>" : "") +
                (entityData && entityData.piva ? "<p>P.IVA: " + entityData.piva + "</p>" : "") +
            "</div>" +
        "</div>" +
        
        "<div class='print-doc-title'>" +
            "<h2>" + docTitle + " N. " + (record.numero || 'N/D') + "</h2>" +
            "<p>Data: " + formatDate(record.data) + "</p>" +
        "</div>" +

        "<table class='print-table'>" +
            "<thead>" +
                "<tr>" +
                    "<th style='text-align: left;'>Articolo</th>" +
                    "<th style='text-align: left;'>Descrizione</th>" +
                    "<th style='text-align: right;'>Q.tà</th>" +
                    "<th style='text-align: right;'>Prezzo Unit.</th>" +
                    "<th style='text-align: right;'>Sconto</th>" +
                    "<th style='text-align: right;'>Importo</th>" +
                "</tr>" +
            "</thead>" +
            "<tbody>" +
                righeHTML +
            "</tbody>" +
        "</table>" +

        "<div class='print-totals'>" +
            "<div class='print-totals-row'>" +
                "<span>Imponibile:</span>" +
                "<span>" + formatCrmMoney(record.imponibile) + "</span>" +
            "</div>" +
            "<div class='print-totals-row'>" +
                "<span>Tasse (IVA):</span>" +
                "<span>" + formatCrmMoney(record.tasse) + "</span>" +
            "</div>" +
            "<div class='print-totals-row print-totals-grand'>" +
                "<span>TOTALE DOCUMENTO:</span>" +
                "<span>" + formatCrmMoney(record.totale) + "</span>" +
            "</div>" +
        "</div>" +

        (record.note ? "<div class='print-notes'><strong>Note:</strong><br>" + record.note + "</div>" : "") +
    "</div>";

    document.getElementById('print-area').innerHTML = html;
    window.print();
}
`;

fs.writeFileSync('script.js', script + appendCode);
