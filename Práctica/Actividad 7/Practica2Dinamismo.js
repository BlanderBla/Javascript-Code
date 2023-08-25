function Generador(){
	var nom = document.getElementById('Nombre').value;
	var aP = document.getElementById('ApellidoPaterno').value;
	var aM = document.getElementById('ApellidoMaterno').value;
	var anio = document.getElementById('Anio').value;
	var mes = document.getElementById('Mes').value;
	var dia = document.getElementById('Dia').value;

	var carnom = nom.charAt(0);
	var cadaP = aP.substring(0,2);
	var cadaM = aM.substring(0,2);
	var cadanio = anio.substring(2,4);

	var cadenatotal = carnom+cadaP+cadaM+cadanio+mes+dia
	var cadTM = cadenatotal.toUpperCase();

	alert("Su RFC es: "+cadTM);
}