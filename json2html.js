
export default function json2html(data) {
    // Extract headers
    const headers = Array.from(new Set(data.flatMap(Object.keys)));

    // Generate HTML for the table
    const thead = `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;
    const tbody = `<tbody>${data.map(row => {
        return `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
    }).join('')}</tbody>`;

    return `<table data-user="shivliraina13@gmail.com">${thead}${tbody}</table>`;
}
