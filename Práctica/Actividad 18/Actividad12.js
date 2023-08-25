function Bienvenido(){
	var Enviar = document.getElementById('Enviar');
	Enviar.addEventListener('click',Datos, false); 
}

function Datos(){
	var Clases = document.getElementById('Clases').value;
	var ImpValores = document.getElementById('Tabla');
	var Datos = new Array(Clases);
	
	for(var i=0 ; i<Clases ; i++){
		Datos[i] = prompt("Clases: "+Clases+" Valor: "+(i+1));
	}
	for (i=0; i < Clases; i++) {
		ImpValores.document("Posición: "+ (i+1)+"="+Datos[i]+ '<br>');
	}
}
	
window.addEventListener('load',Bienvenido,false);