function Iniciar(){
	var Boton = document.getElementById('Boton');
	Boton.addEventListener('click',Obtener,false);
}

function Obtener(){
 navigator.geolocation.getCurrentPosition(Ubicacion, errores);
}

function Ubicacion(){
	var Lat = document.getElementById('Latitud').value;
	var Lon = document.getElementById('Longitud').value;
	var GoogleMaps = document.getElementById('GoogleMaps');

	alert("Latitud: "+Lat+" Longitud: "+Lon);

	navigator.geolocation;

	var mapurl='http://maps.google.com/maps/api/staticmap?center='+Lat+','+Lon+'&zoom= 12&size=400x400&sensor=false&markers='+Lat+','+Lon;

	GoogleMaps.innerHTML= "<img src="+mapurl+">"; 
}

function errores(error){
 alert('Error: '+error.code+' '+error.message);
} 

window.addEventListener('load',Iniciar,false);