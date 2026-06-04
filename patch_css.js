const fs = require('fs');

const css = `

/* --- STILI PER LA STAMPA --- */
@media print {
    body * {
        visibility: hidden;
    }
    body {
        background: #fff;
        margin: 0;
        padding: 0;
    }
    #print-area, #print-area * {
        visibility: visible;
    }
    #print-area {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        padding: 2cm;
    }

    .print-document {
        font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #000;
        font-size: 11pt;
        line-height: 1.4;
    }

    .print-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2cm;
        border-bottom: 2px solid #000;
        padding-bottom: 1cm;
    }

    .print-company-info h1 {
        margin: 0 0 10px 0;
        font-size: 24pt;
        font-weight: 800;
        letter-spacing: -1px;
    }

    .print-company-info p, .print-entity-info p {
        margin: 0;
        font-size: 10pt;
        color: #444;
    }

    .print-entity-info {
        text-align: right;
    }

    .print-doc-title {
        margin-bottom: 1cm;
    }

    .print-doc-title h2 {
        margin: 0 0 5px 0;
        font-size: 18pt;
    }
    
    .print-doc-title p {
        margin: 0;
        color: #666;
    }

    .print-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 1cm;
    }

    .print-table th {
        background-color: #f3f4f6 !important;
        -webkit-print-color-adjust: exact;
        padding: 10px;
        border-bottom: 2px solid #000;
        font-size: 10pt;
    }

    .print-table td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        font-size: 10pt;
    }

    .print-totals {
        width: 40%;
        float: right;
    }

    .print-totals-row {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid #eee;
    }

    .print-totals-grand {
        font-weight: bold;
        font-size: 14pt;
        border-bottom: none;
        border-top: 2px solid #000;
        margin-top: 5px;
        padding-top: 10px;
    }

    .print-notes {
        clear: both;
        margin-top: 2cm;
        padding: 15px;
        background-color: #f9fafb !important;
        -webkit-print-color-adjust: exact;
        border: 1px solid #e5e7eb;
        font-size: 9pt;
        border-radius: 4px;
    }
}
`;

fs.appendFileSync('style.css', css);
