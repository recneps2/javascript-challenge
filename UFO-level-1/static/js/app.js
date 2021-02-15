// from data.js
const tableData = data;

// get table references
const tbody = d3.select("tbody");

function buildTable(data) {
  // clear out any existing data
  tbody.html("");

  // loop through each object in the data and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // append a row to the table body
    const row = tbody.append("tr");

    // loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}
