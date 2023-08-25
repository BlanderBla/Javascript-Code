function Evaluar(){
	var cMin=0, cMay=0;
	var cad = document.getElementById('CADENA').value;
	var ncad = cad.length;
	alert("La cadena es: "+cad+", el numero de caracteres son: "+ncad);
	for(var i=0; i<ncad; i++){
		var carMay = cad[i].toUpperCase();
		if(carMay != cad[i]){
			cMin = cMin + 1;
		}else if(carMay == cad[i]){
			 cMay = cMay+1;
		}
	}
	alert("El numero de mayúsculas son: "+cMay);
	alert("El numero de minúsculas son: "+cMin);
	if(cMay==0){
		alert("La cadena: "+cad+" contiene minúsculas");
	}else if(cMin==0){
		alert("La cadena: "+cad+" contiene mayúsculas");
	}else if(cMay!=0 && cMin!=0){
		alert("La cadena: "+cad+" contiene mayúsculas y minúsculas");
	}
}