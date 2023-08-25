
	function Decision(conversion){
		if(document.getElementById('SegundaOpcion').value == 1){
			
			var valor = document.forms["Formulario"]["Metro"].value;
			var conversion = valor/1000;
			Mostrar(conversion);

		}else if(document.getElementById('SegundaOpcion').value == 2){
			
			var valor = document.forms["Formulario"]["Metro"].value;
			var conversion = valor/1;
			Mostrar(conversion);
			
		}else if(document.getElementById('SegundaOpcion').value == 3){
			
			var valor = document.forms["Formulario"]["Metro"].value;
			var conversion = valor/0.01;
			Mostrar(conversion);
			
		}else if(document.getElementById('SegundaOpcion').value == 4){
			
			var valor = document.forms["Formulario"]["Metro"].value;
			var conversion = valor/0.001;
			Mostrar(conversion);
			
		}
	}
	function Mostrar(conversion){
		Resultado.innerHTML = "La conversion es: "+conversion;
	}