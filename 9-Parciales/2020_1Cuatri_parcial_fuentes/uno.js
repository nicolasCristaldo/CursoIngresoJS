/*nicolas cristaldo simil parcial 7
Ingrese nombre , sexo , edad (validar que si es mujer debe ser adolescente
y si el hombre debe ser niño), altura (validar), temperatura corporal(validar)
Necesitamos saber:
  a)el nombre y el sexo de la persona con mas temperatura,
  b)de las mujeres el nombre de la mas joven ,
  c)de los hombre el nombre del mas bajito,
  ... solo si los hay
  d)el promedio de edad entre los hombres,
  e)el promedio de edad entre las mujeres,
  f)la cantidad de personas que miden mas de 1,60 metros,  
  g)el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts.
*/
function mostrar()
{
	let nombre;
	let sexo;
	let edad;
	let altura;
	let temperatura;
	let mayorTemperatura = 0;
	let nombreMayorTemperatura;
	let sexoMayorTemperatura;
	let masJoven = 500;
	let nombreMasJoven;
	let masBajo = 500;
	let nombreMasBajo;
	let cantHombres = 0;
	let cantMujeres = 0;
	let contEdadHombres = 0;
	let contEdadMujeres = 0;
	let promedioEdadHombres;
	let promedioEdadMujeres;
	let cantPersonasAltas = 0;
	let cantMujeresAltas = 0;
	let porcentajeTotalMujeres;
	let respuesta;

	do{
		do{  
			nombre = prompt("ingrese su nombre");
		}while(isNaN(nombre) == false);

		do{
			sexo = prompt("ingrese el sexo (f o m )");
		}while(!(sexo == "f" || sexo == "m"));

		if(sexo == "f"){
			do{
				edad = parseInt(prompt("ingrese la edad"));
			}while(isNaN(edad) == true || edad < 13 || edad > 18);
		}
		else{
			do{
				edad = parseInt(prompt("ingrese la edad"));
			}while(isNaN(edad) == true || edad < 3 || edad > 12);
		}

		do{
			altura = parseFloat(prompt("ingrese la altura"));
		}while(isNaN(altura) == true || altura < 30 || altura > 300);

		do{
			temperatura = parseFloat(prompt("ingrese la temperatura"));
		}while(isNaN(temperatura) == true || temperatura < 30 || temperatura > 44);

		if(mayorTemperatura < temperatura){
			mayorTemperatura = temperatura;
			nombreMayorTemperatura = nombre;
			sexoMayorTemperatura = sexo;
		}

		switch(sexo){
			case "f":
				cantMujeres++;
				contEdadMujeres = contEdadMujeres + edad;

				if(edad < masJoven){
					masJoven = edad;
					nombreMasJoven = nombre;
				}
				break;
			default:
				cantHombres++;
				contEdadHombres = contEdadHombres + edad;

				if(altura < masBajo){
					masBajo = altura;
					nombreMasBajo = nombre;
				}
				break;
		}

		if(altura > 160){
			cantPersonasAltas++;

			if(sexo == "f"){
				cantMujeresAltas++;
			}
		}

		respuesta = prompt("desea continuar? s/n");
	}while(respuesta == "s");

	porcentajeTotalMujeres = (cantMujeresAltas * 100) / cantPersonasAltas;

	document.write("Nombre de la persona con mas temperatura: " + nombreMayorTemperatura + "<br>");
	document.write("Sexo de la persona con mas temperatura: " + sexoMayorTemperatura + "<br>");

	if(cantMujeres != 0){
		promedioEdadMujeres = contEdadMujeres / cantMujeres;
		document.write("Mujer mas joven: " + nombreMasJoven + "<br>");
		document.write("Promedio de edad de las mujeres: " + promedioEdadMujeres.toFixed(2) + "<br>");
	}

	if(cantHombres != 0){
		promedioEdadHombres = contEdadHombres / cantHombres;
		document.write("Hombre mas bajo: " + nombreMasBajo + "<br>");
		document.write("Promedio de edad de los hombres: " + promedioEdadHombres.toFixed(2) + "<br>");
	}

	document.write("cantidad de personas con mas de 1.60 mts: " + cantPersonasAltas + "<br>");
	document.write("Porcentaje de mujeres sobre el total de personas de mas de 1.60 mts: " + porcentajeTotalMujeres.toFixed(2) + "% <br>");
}
