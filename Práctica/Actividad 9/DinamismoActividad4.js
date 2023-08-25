function Bienvenido(){
	alert("Hola, Bienvenido a esta página web");
}

function ColorRojo(){
	var ColR = document.getElementById('Color1R');
	ColR.style.color ="red";

	var PT = document.getElementById("PintarTriangulo");
	PT.addEventListener("click",triangulo);
}

/*function ColorVerde(){
	var ColV = document.getElementById('Color2V').value('#088A08');
}

function ColorAzul(){
	var ColA = document.getElementById('Color3A').value('#0000FF');
}*/

 function triangulo(){

	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
	lienzo.beginPath();
	
	// Dibuja una linea //
	lienzo.moveTo(20, 50);
	lienzo.lineTo(20, 100);
	lienzo.lineTo(70, 100);
	lienzo.lineTo(20,50);
	// Cierra el trazo //
	lienzo.closePath();
	// Dibuja la figura vacia
	lienzo.stroke();

	// Dibuja una linea //

	lienzo.moveTo(100, 50);
	lienzo.lineTo(100, 150);
	lienzo.lineTo(300, 150);
	lienzo.lineTo(100,50);
	lienzo.stroke();

}
window.addEventListener("load",triangulo,false);

function rectangulo(){

	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
	lienzo.beginPath();
	
	// Dibuja una linea //
	lienzo.moveTo(20, 50);
	lienzo.lineTo(20, 100);
	lienzo.lineTo(70, 100);
	lienzo.lineTo(20,50);
	// Cierra el trazo //
	lienzo.closePath();
	// Dibuja la figura vacia
	lienzo.stroke();

	// Dibuja una linea //

	lienzo.moveTo(100, 50);
	lienzo.lineTo(100, 150);
	lienzo.lineTo(300, 150);
	lienzo.lineTo(100,50);
	lienzo.stroke();

}