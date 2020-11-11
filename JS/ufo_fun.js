// From dataset provided
var table_data = raw_data;

// Table
var tbody = d3.select("tbody");

// Function part
function fill_table() {
    table_data.map(data => {

        // Create a new row
        var row = tbody.append("tr");

        // Add each row to data
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.comments);
    });
}


function search_table() {
    // Var value
    var current = d3.select("#search-date").property("value");

    console.log(current);

    // Filters part from data value
    var new_data = table_data.filter(data => data.datetime === current);
    console.log(new_data);

    
    tbody.html("");

    
    new_data.forEach(obj => {

        // New row
        var row = tbody.append("tr");

        // Adding eaching rows
        row.append("td").text(obj.datetime);
        row.append("td").text(obj.city);
        row.append("td").text(obj.state);
        row.append("td").text(obj.country);
        row.append("td").text(obj.shape);
        row.append("td").text(obj.comments);
    });
}

// Fills table
fill_table();

// Input var date
var search_btn = d3.select("#search-btn");

// Apply function on click
search_btn.on("click", function() {
    search_table();
});

// Reset button id
var reset_btn = d3.select("#reset-btn");


reset_btn.on("click", function() {
    tbody.html("");
    fill_table();
});
