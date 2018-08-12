function onDOMLoad(){
  google.charts.load('current', {'packages':['corechart','bar']});
  google.charts.setOnLoadCallback(getRenewableData);
  google.charts.setOnLoadCallback(getElectricityData);
}

document.addEventListener("DOMContentLoaded", onDOMLoad)

function getRenewableData(){
  let request = new XMLHttpRequest()
  let requestUrl = "http://api.eia.gov/series/?api_key=7e2d26726c1fde2b93ac09457d6c2f37&series_id=SEDS.REPRB.FL.A"
  request.open('GET', requestUrl, true)

  request.onload = function(){
    if(request.status !== 200){
      console.log("Something went wrong: ", request)
      return
    }

    let response = JSON.parse(request.response)
    drawRenewableChart(response.series[0].data)
  }

  request.error = function(err){
    console.log("error is: ", err)
    return
  }
  request.send()
}

function getElectricityData(){
  let request = new XMLHttpRequest()
  let requestUrl = "http://api.eia.gov/series/?api_key=7e2d26726c1fde2b93ac09457d6c2f37&series_id=SEDS.ESTCB.FL.A"
  request.open('GET', requestUrl, true)

  request.onload = function(){
    if(request.status !== 200){
      console.log("Something went wrong: ", request)
      return
    }

    let response = JSON.parse(request.response)
    drawElectricityChart(response.series[0].data)
  }

  request.error = function(err){
    console.log("error is: ", err)
    return
  }
  request.send()
}

function drawRenewableChart(renewableData) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Renewable Energy Production');
  data.addRows(renewableData);

  var options = {'title':'Annual renewable energy production in Florida',
                 legend: 'none',
                 vAxis: {title: "Billion Btu"},
                 hAxis: {title: "Year"},
                 height: 400,
                 'colors': ['#8AD1C2']
                };

  var chart = new google.visualization.ColumnChart(document.getElementById('renewable'));
  chart.draw(data, options);
}

function drawElectricityChart(electricityData) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Renewable Energy Production');
  data.addRows(electricityData);

  var options = {'title':'Electricity total consumption (i.e. sold) Florida',
                 legend: 'none',
                 vAxis: {title: "Billion Btu"},
                 hAxis: {title: "Year"},
                 height: 400,
                 'colors': ['#8AD1C2']
                };

  var chart = new google.visualization.ColumnChart(document.getElementById('electricity'));
  chart.draw(data, options);
}
