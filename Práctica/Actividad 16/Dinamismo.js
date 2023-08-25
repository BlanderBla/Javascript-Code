function multiplicacion(){
	var num, i; 
	num=prompt('Ingrese un numero del 1 al 10','');
	/*Prompt--> Muestra un cuadro de solicitud que le pregunta al usuario por su nombre y muestra un mensaje:*/
	num=parseInt(num);
	/*
		prseInt --> Convierte un argumento de tipo cadena y devuelve un entero de la base especificada.
		parseInt(cadena,base);
			parseInt
			parseFloat
	*/
	document.write("");
	/*documen.write --> Escribe un texto directamente en el documento HTML: */
	for (i=1; i <= 10; i++) {
		resultado=num*i;
		document.write(num+' x '+i+' = '+resultado+ '<br>');
	}
}