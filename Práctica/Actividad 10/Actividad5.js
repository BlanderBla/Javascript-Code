function GeneradorRespuesta(){

	var P1 = document.Test.Respuesta1.value;
		alert("El valor de la preguna 1 es: "+P1);
	var P2 = document.Test.Respuesta2.value;
		alert("El valor de la preguna 2 es: "+P2);
	var P3 = document.Test.Respuesta3.value;
		alert("El valor de la preguna 3 es: "+P3);
	var P4 = document.Test.Respuesta4.value;
		alert("El valor de la preguna 4 es: "+P4);
	var P5 = document.Test.Respuesta5.value;
		alert("El valor de la preguna 5 es: "+P5);
	var P6 = document.Test.Respuesta6.value;
		alert("El valor de la preguna 6 es: "+P6);
	var P7 = document.Test.Respuesta7.value;
		alert("El valor de la preguna 7 es: "+P7);
	var P8 = document.Test.Respuesta8.value;
		alert("El valor de la preguna 8 es: "+P8);
	var P9 = document.Test.Respuesta9.value;
		alert("El valor de la preguna 9 es: "+P9);
	var P10 = document.Test.Respuesta10.value;
		alert("El valor de la preguna 10 es: "+P10);

	var PCorrectas = 0;
	var nivel;

	if(P1 == 2){
		PCorrectas++;
	}
	if(P2 == 3){
		PCorrectas++;
	}
	if(P3 == 2){
		PCorrectas++;
	}
	if(P4 == 3){
		PCorrectas++;
	}
	if(P5 == 3){
		PCorrectas++;
	}
	if(P6 == 2){
		PCorrectas++;
	}
	if (P7 == 2) {
		PCorrectas++;
	}
	if (P8 == 2) {
		PCorrectas++;
	}
	if (P9 == 4) {
		PCorrectas++;
	}
	if (P10 == 3) {
		PCorrectas++;
	}

	if(PCorrectas>=0 && PCorrectas<5){
		nivel = "El nivel es bajo";
		recomendacion = "Tu nivel de IQ es por debajo del normal, te recomendamos que integres nuevas habilidades donde puedas crecer intelectualmente de una manera rápida";
	}
	if(PCorrectas>=5 && PCorrectas<8){
		nivel = "EL nivel es medio";
		recomendacion = "Tu nivel de IQ pertenece al normal, aún asi puedes mejorar";
	}
	if (PCorrectas>=8 && PCorrectas<11) {
		nivel = "El nivel es alto";
		recomendacion = "Tu nivel de IQ es bueno, mantente así";
	}
	
	Resultado.innerHTML = "<H4>Tu puntuacion fue de: "+PCorrectas+"</H4>"+"<br>"+nivel+"<br>"+recomendacion;
}