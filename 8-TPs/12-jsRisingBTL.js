/*nicolas cristaldo - tp 12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas 
y censos nos pide realizar una carga de datos validada e ingresada por ventanas
 emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{ 
	let edadIngresada;
	let sexo;
	let estadoCivil;
	let sueldo;
	let numLegajo;
	let nacionalidad;

	edadIngresada = parseInt(prompt("ingrese su edad. (entre 18 y 90)"));
	while(isNaN(edadIngresada) == true || edadIngresada < 18 || edadIngresada > 90){
		edadIngresada = parseInt(prompt("error, ingrese su edad. (entre 18 y 90)"));
	}

	sexo = prompt("ingrese su sexo. (f para femenino, m para masculino)");
	while(!(sexo == "f" || sexo == "m")){
		sexo = prompt("error, ingrese su sexo. (f para femenino, m para masculino)");
	}
	switch(sexo){
		case "f":
			sexo = "femenino";
			break;
		default:
			sexo = "masculino";
			break;

	}

	estadoCivil = parseInt(prompt("ingrese su estado civil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)"));
	while(isNaN(estadoCivil)== true || estadoCivil > 4 || estadoCivil < 1){
		estadoCivil = parseInt(prompt("error, ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudo"));
	}
	switch(estadoCivil){
		case 1: 
			estadoCivil = "soltero";
			break;
		case 2: 
			estadoCivil = "casado";
			break;
		case 3: 	
			estadoCivil = "divorciado";
			break;
		default:
			estadoCivil = "viudo";
			break;
	}

	sueldo = parseFloat(prompt("ingrese su sueldo. (no menor a 8000)"));
	while(isNaN(sueldo) == true || sueldo < 8000){
		sueldo = parseFloat(prompt("error, por favor ingrese su sueldo. (no menor a 8000)"));
	}

	numLegajo = parseInt(prompt("ingrese su numero de legajo. (4 cifras, sin ceros a la izquierda)"));
	while(isNaN(numLegajo) == true || numLegajo < 1000 || numLegajo > 9999){
		numLegajo = parseInt(prompt("error, ingrese su numero de legajo. (4 cifras, sin ceros a la izquierda)"));
	}

	nacionalidad = prompt("ingrese su nacionalidad, (a para argentinos, e para extranjeros, n para nacionalizados)");
	while(!(nacionalidad == "a" || nacionalidad == "e" || nacionalidad == "n")){
		nacionalidad = prompt("error, ingrese su nacionalidad, (a para argentinos, e para extranjeros, n para nacionalizados)");
	}
	switch(nacionalidad){
		case "a":
			nacionalidad = "Argentino";
			break;
		case "e":
			nacionalidad = "Extranjero";
			break;
		default:
			nacionalidad = "Nacionalizado";
			break;
	}

	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexo;
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	document.getElementById("txtIdSueldo").value = sueldo;
	document.getElementById("txtIdLegajo").value = numLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
