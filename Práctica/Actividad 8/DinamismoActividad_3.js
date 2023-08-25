function inicio(){
	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
	/* 
		getContext() retorna un contexto de dibujo en el lienzo, 
		o null si el identificador del contexto no está soportado.
	*/

	//COLORES A UTILIZAR DEPENDIENDO DEL ESTILO DEL LIENZO
	lienzo.fillStyle="#FFBF00";
	lienzo.strokeStyle="#FA58AC";
	lienzo.clearStyle="#FFFFFF";
	//
	lienzo.strokeRect(170,100,100,100);	//Cuadro sin relleno
	lienzo.fillRect(190,120,100,100);	//Cuadro con relleno
	lienzo.strokeRect(210, 140, 100, 100);
	lienzo.clearRect(211,141,98,98);	//Extrae área seleccionada
	lienzo.fillRect(230,160,100,100);
	lienzo.strokeRect(250,180,100,100);
	lienzo.clearRect(251,181,98,98);
}	
window.addEventListener("load",inicio,false);