/*nicolas cristaldo - parcial 2018 7
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
 el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
function mostrar()
{
	let nota;
	let sexo;
	let notaMasBaja;
	let sexoNotaMasBaja;
	let contVaronesConNotaMayorA6 = 0;
	let promedio;
	let contAlumnos = 0;
	let flag = 1;
	let sumaNotas = 0;

	do{
		sexo = prompt("ingrese el sexo (f o m)");
		while(!(sexo == "f" || sexo == "m")){
			sexo = prompt("error, ingrese el sexo (f o m)");
		}
		nota = parseInt(prompt("ingrese la nota"));
		while(isNaN(nota) == true || nota > 10 || nota < 0){
			nota = parseInt(prompt("error, ingrese la nota"));
		}

		if(flag == 1){
			notaMasBaja = nota;
			sexoNotaMasBaja = sexo;
			flag = 0;
		}

		if(nota < notaMasBaja){
			notaMasBaja = nota;
			sexoNotaMasBaja = sexo;
		}

		if(nota >= 6 && sexo == "m"){
			contVaronesConNotaMayorA6++;
		}

		sumaNotas = sumaNotas + nota;

		contAlumnos++;

	}while(contAlumnos < 5);

	promedio = sumaNotas / contAlumnos; 

	document.write("promedio notas totales: " + promedio + "<br>");
	document.write("nota mas baja: " + notaMasBaja + " sexo de la persona: " + sexoNotaMasBaja + "<br>");
	document.write("cantidad de varones con nota mayor o igual a 6: " + contVaronesConNotaMayorA6);
}
