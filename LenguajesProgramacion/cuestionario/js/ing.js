
function capturar(){
    var resultado= 0;
    var suma= 0;
    var mensaje="ninguno";

    for (var p = 1; p<=10; p++) {
        var opcion=document.getElementsByName("op"+p);
         // Recorremos todos los valores del radio button para encontrar el
         // seleccionado
        for(var i=0;i<opcion.length;i++){
            if(opcion[i].checked){
                resultado=opcion[i].value;
                suma = (parseFloat(suma) + parseFloat(resultado));
            }
        }
    }

    if(suma< 30){
        mensaje="TU CALIFICACIÓN ES DEMASIADO BAJA, TE RECOMENDAMOS QUE VUELVAS A REPASAR LOS TEMAS QUE SE TE PROPORCIONARON";
    }
    if(suma>29 && suma<50){
        mensaje= "TU CALIFICACIÓN ES DEMASIADO BAJA, TE RECOMENDAMOS QUE VUELVAS A REPASAR LOS TEMAS QUE SE TE PROPORCIONARON";
    }
    if(suma>49 && suma<60){
        mensaje= "TU CALIFICACIÓN ES DEMASIADO BAJA, TE RECOMENDAMOS QUE VUELVAS A REPASAR LOS TEMAS QUE SE TE PROPORCIONARON";
    }
    if(suma>59 && suma<70){
        mensaje= "TU CALIFICACION ES ACEPTABLE, PERO NO ES LO SUFICIENTEMENTE BUENA";
    }
    if(suma>69 && suma<80){
        mensaje= "TU CALIFICACION ES ACEPTABLE, PERO NO ES LO SUFICIENTEMENTE BUENA";
    }
    if(suma>79 && suma<90){
        mensaje= "TU CALIFICACION ES BUENA, HAS APLICADO LO QUE HAS VISTO DE MUY BUENA MANERA ¡¡¡MUY BIEN!!!";
    }
    if(suma>89 && suma<100){
        mensaje= "TU CALIFICACION ES BUENA, HAS APLICADO LO QUE HAS VISTO DE MUY BUENA MANERA ¡¡¡MUY BIEN!!!";
    }
    if(suma==100){
        mensaje= "¡¡¡QUE HACES ESTUDIANDO EN UNA ESCUELA NORMAL, HARVARD QUIERE CONOCER TU UBICACION, EXCELLENTE!!!";
    }
    document.getElementById("resultado").innerHTML="Tu resultado es: "+suma+" de 100 puntos "+mensaje;
    document.getElementById("suma").value=suma;
}

function generar(){
    var doc = new jsPDF();
    var suma= document.getElementById('suma').value;


    doc.setFontSize(40);
    doc.setTextColor(9,7,121);
    doc.text(0, 20, "RESULTADOS DEL EXAMEN DE \rLENGUAJES DE PROGRAMACION");
    doc.setTextColor(17, 122, 209);
    doc.setFontSize(30);

    doc.text(0, 50, "HEMOS RECABADO TUS RESPUESTAS \rY SE DETERMINO QUE:");
    doc.setTextColor(0,0,0);
    doc.setFontSize(10);

    if(suma< 30){
        doc.text(20,70,"TU CALIFICACION ES DEMASIADO BAJA, \rTE RECOMENDAMOS QUE VUELVAS A REPASAR LOS TEMAS QUE SE TE PROPORCIONARON");
    }
    if(suma>29 && suma<50){
        doc.text(20, 70,"TU CALIFICACION ES DEMASIADO BAJA, \rTE RECOMENDAMOS QUE VUELVAS A REPASAR LOS TEMAS QUE SE TE PROPORCIONARON");
    }
    if(suma>49 && suma<60){
        doc.text(20, 70,"TU CALIFICACION ES DEMASIADO BAJA, \rTE RECOMENDAMOS QUE VUELVAS A REPASAR LOS TEMAS QUE SE TE PROPORCIONARON");
    }
    if(suma>59 && suma<70){
        doc.text(20, 70,"TU CALIFICACION ES ACEPTABLE, \rPERO NO ES LO SUFICIENTEMENTE BUENA");
    }
    if(suma>69 && suma<80){
        doc.text(20, 70,"TU CALIFICACION ES ACEPTABLE, \rPERO NO ES LO SUFICIENTEMENTE BUENA");
    }
    if(suma>79 && suma<90){
        doc.text(20, 70,"TU CALIFICACION ES BUENA, \rHAS APLICADO LO QUE HAS VISTO DE MUY BUENA MANERA ¡¡¡MUY BIEN!!!");
    }
    if(suma>89 && suma<100){
        doc.text(20, 70,"TU CALIFICACION ES BUENA, \rHAS APLICADO LO QUE HAS VISTO DE MUY BUENA MANERA ¡¡¡MUY BIEN!!!");
    }
    if(suma==100){
         doc.text(20, 70,"¡¡¡QUE HACES ESTUDIANDO EN UNA ESCUELA NORMAL, \rHARVARD QUIERE CONOCER TU UBICACION, EXCELLENTE!!!");
    }
    

    var string = doc.output('datauristring');

    $('iframe').attr('src', string);
}