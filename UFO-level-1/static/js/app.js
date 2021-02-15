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

function handleClick() {

  // grab the datetime value from the filter
  const date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check date was entered and filter the data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data... If no date entered then filteredData will just be the original tableData
  buildTable(filteredData);
}

