// COLORES //

function Rojo(){
	// Muestra que color fue el que eligió
	alert("Seleccionó el color rojo");
	// A la variable Color se le asigna el valor de Rojo (Botón) del documento HTML
	var Color = document.getElementById("Rojo");
	// La variable Color toma el color rojo
	Color = "red";
	// A la variable BotonTriangulo se le asigna el valor de Triangulo (Botón) del documento HTML
	var BotonTriangulo = document.getElementById("Triangulo");
	//	A la variable Botoncuadrado se le asigna el valor de Cuadrado (Botón) del documento HTML
	var BotonCuadrado = document.getElementById("Cuadrado");
	//	A la variable BotonBorrar se le asigna el valor de Borrar (Botón) del documento HTML
	if(BotonTriangulo.addEventListener('click')){
		BotonTriangulo.addEventListener('click',triangulo);
	}else{
		BotonCuadrado.addEventListener('click',cuadrado);
	}
	return Color;
}
function Verde(){
	// Muestra que color fue el que eligió
	alert("Seleccionó el color verde");
	// A la variable Color se le asigna el valor de Verde (Botón) del documento HTML
	var Color = document.getElementById("Verde");
	// La variable color toma el valor de verde
	Color = "green";
	// A la variable BotonTriangulo se le asigna el valor de Triangulo (Botón) del docomento HTML
	var BotonTriangulo = document.getElementById("Triangulo");
	//	A la variable Botoncuadrado se le asigna el valor de Cuadrado (Botón) del docomento HTML
	var BotonCuadrado = document.getElementById("Cuadrado");
	
	if(BotonTriangulo.addEventListener('click')){
		BotonTriangulo.addEventListener('click',triangulo);
	}else{
		BotonCuadrado.addEventListener('click',cuadrado);
	}
	return Color;
}
function Azul(){
	// Muestra que color fue el que eligió
	alert("Seleccionó el color azul");
	// La variable Color se la asigna el valor de Azul (Botón) del documento HTML
	var Color = document.getElementById("Azul");
	// La variable toma el color de azul
	Color.style.color="blue";
	// A la variable BotonTriangulo se le asigna el valor de Triangulo (Botón) del docomento HTML
	var BotonTriangulo = document.getElementById("Triangulo");
	//	A la variable Botoncuadrado se le asigna el valor de Cuadrado (Botón) del docomento HTML
	var BotonCuadrado = document.getElementById("Cuadrado");
	
	if(BotonTriangulo.addEventListener('click')){
		BotonTriangulo.addEventListener('click',triangulo(Color));
	}else{
		BotonCuadrado.addEventListener('click',cuadrado(Color));
	}
	return Color;
}

function triangulo(){

	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
	lienzo.beginPath();

	// Dibuja una linea //
	lienzo.moveTo(100, 50);
	lienzo.lineTo(100, 150);
	lienzo.lineTo(300, 150);
	lienzo.lineTo(100,50);
	// Dibuja la figura vacia
	lienzo.stroke();
	// Cierra el trazo //
	lienzo.closePath();

}
function cuadrado(){
	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
	lienzo.beginPath();

	//Dibuja rectangullo
	lienzo.strokeRect(200,50,100,100);
	lienzo.closePath();
	lienzo.strokeRect(200,140,50,50);
	lienzo.closePath();
}
function borrar(){
	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
	lienzo.beginPath();
	lienzo.clearRect(99,49,600,150); 
	lienzo.closePath();
}