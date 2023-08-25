  function librerias(){
  var boton = document.getElementById('Boton');
  google.charts.load('current', {'packages':['corechart']});
  boton.addEventListener('click',Nose,false);
  }

  function Nose() {
  	alert("Hola");
  	google.charts.load('current', {'packages':['corechart']});
  	google.charts.setOnLoadCallback(drawChart);
  }

  function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Materia', 'Parcial 1', 'Parcial 2'],
  ['Fisica', 9,9.5],
  ['Matematicas', 9,8.5],
  ['Ingles', 8,9],
  ['Programacion I', 10,9.5],
  ['Programacion Web I', 9.5,10]
  ]);

  var options = { title: 'Calificaciones del semestre', curveType: 'function',  legend: { position: 'bottom' }  };
  var chart = new google.visualization.LineChart(document.getElementById('Grafica'));
  chart.draw(data, options);
  window.addEventListener('load',librerias,false);