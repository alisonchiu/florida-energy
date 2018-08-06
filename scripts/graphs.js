// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawRenewable);
google.charts.setOnLoadCallback(drawElectricity);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function drawRenewable() {

	// Create the data table.
	var renewableData = new google.visualization.DataTable();

	var queryString = encodeURIComponent('SELECT A, B');
	var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/19Dp0nIdXmed2NTBhUpQA13f3-9l2YGcIyKB7K2DEM-A/gviz/tq?gid=0&headers=6&tq=' + queryString);

	query.send(handleRenewableResponse);
}

function drawElectricity() {

	// Create the data table.
	var electricityData = new google.visualization.DataTable();

	var queryString = encodeURIComponent('SELECT A, B');
	var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1GlroqCQ697z-blgfSvp-gWSkqAZCgJTMl7WUG8o0tUs/gviz/tq?gid=965468755&headers=5&tq=' + queryString);

	query.send(handleElectricityResponse);
}

function handleRenewableResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var renewableData = response.getDataTable();
  var renewable = new google.visualization.LineChart(document.getElementById('renewable'));
  renewable.draw(renewableData, { 
  	title: 'Renewable energy production Florida',
  	vAxis: {title: 'Billion Btu'},
  	hAxis: {format: '', title: 'Year'},
  	legend: 'none',
  	height: 400,
  	colors: ['#8AD1C2'] });

}

function handleElectricityResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var electricityData = response.getDataTable();
  var electricity = new google.visualization.LineChart(document.getElementById('electricity'));
  electricity.draw(electricityData, { 
  	title: 'Electricity total consumption (i.e. sold) Florida',
  	vAxis: {title: 'Billion Btu'},
  	hAxis: {format: '', title: 'Year'},
  	legend: 'none',
  	height: 400,
  	colors: ['#BCD18A'] });
}