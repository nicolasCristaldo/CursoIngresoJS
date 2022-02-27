/*nicolas cristaldo simil parcial 1
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar) 
la temperaruta mínima que se registra en su territorio(entre -50 y 50) 
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados    
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
i) que continente tiene mas habitantes.
*/
function mostrar()
{
	let nombre;
	let i;
	let continente;
	let habitantes;
	let pobreza;
	let cantTemperaturasPar = 0;
	let habitantesMin = 10000;
	let nombrePaisMenosHab;
	let cantTemperaturasImparesEu = 0;
	let paisesMasCalurosos = 0;
	let paisesAmericaMasFrios = 0;
	let promedioTotalHabitantes;
	let contHabitantes = 0;
	let promedioPaisesCalurosos;
	let contHabPaisesCalurosos = 0;
	let tempMinima = 100;
	let paisMasFrio;
	let contHabAmerica = 0;
	let contHabOceania = 0;
	let contHabAsia = 0;
	let contHabEuropa  = 0;
	let contHabAfrica = 0;

	for(i = 0; i < 5; i++){
		do{
			continente = prompt("ingrese el continente");
		}while(!(continente == "africa" || continente == "america" || continente == "asia" || continente == "oceania" || continente == "europa"));

		do{
			nombre = prompt("ingrese el pais");
		}while(isNaN(nombre) == false);

		do{
			habitantes = parseInt(prompt("ingrese la cantidad de habitantes (en millones)"));
		}while(isNaN(habitantes) == true || habitantes < 1 || habitantes > 7000);

		do{
			pobreza = prompt("ingrese el nivel de pobreza (pobre, rico, muy rico)");
		}while( pobreza == "pobre" && continente == "europa" || !(pobreza == "pobre" || pobreza == "rico" || pobreza == "muy rico"));

		do{
			temperatura = parseFloat(prompt("ingrese la temperatura minima que se registra"));
		}while(isNaN(temperatura) == true || temperatura < -50 || temperatura > 50);

		contHabitantes = contHabitantes + habitantes;

		if(temperatura % 2 == 0){
			cantTemperaturasPar++;
		}		

		if(habitantes < habitantesMin){
			habitantesMin = habitantes;
			nombrePaisMenosHab = nombre;
		}

		if(temperatura >= 40){
			paisesMasCalurosos++;
			contHabPaisesCalurosos = contHabPaisesCalurosos + habitantes;
		}

		if(temperatura < tempMinima){
			tempMinima = temperatura;
			paisMasFrio = nombre;
		}

		switch(continente){
			case "europa":
				contHabEuropa = contHabEuropa + habitantes;

				if(temperatura % 2 != 0){
					cantTemperaturasImparesEu++;
				}	
				break;
			case "america":
				contHabAmerica = contHabAmerica + habitantes;
				
				if(temperatura < 0){
					paisesAmericaMasFrios++;
				}
				break;
			case "asia":
				contHabAsia = contHabAsia + habitantes;
				break;
			case "africa":
				contHabAfrica = contHabAfrica + habitantes;
				break;
			default:
				contHabOceania = contHabOceania + habitantes;
				break;
		}

	}

	promedioTotalHabitantes = contHabitantes / 5;
	promedioPaisesCalurosos = contHabPaisesCalurosos / paisesMasCalurosos;

	if(contHabAfrica > contHabOceania && contHabAfrica > contHabAsia && contHabAfrica > contHabAmerica && contHabAfrica > contHabEuropa){
		document.write("continente mas poblado: africa" + "<br>");
	}
	else if(contHabEuropa > contHabAmerica && contHabEuropa > contHabOceania && contHabEuropa > contHabAsia){
		document.write("continente mas poblado: europa" + "<br>");
	} 
	else if(contHabAsia > contHabOceania && contHabAsia > contHabAmerica){
		document.write("continente mas poblado: asia" + "<br>");
	}
	else if(contHabAmerica > contHabOceania){
		document.write("continente mas poblado: america" + "<br>");
	}
	else{
		document.write("continente mas poblado: oceania" + "<br>");
	}

	document.write("cantidad de temperaturas pares: " + cantTemperaturasPar + "<br>");
	document.write("cantidad de temperaturas impares en europa: " + cantTemperaturasImparesEu + "<br>");
	document.write("pais con menos habitantes: " + nombrePaisMenosHab + "<br>");
	document.write("paises que superan los 40°: " + paisesMasCalurosos + "<br>");
	document.write("cantidad de paises de america con menos de 0°: " + paisesAmericaMasFrios + "<br>");
	document.write("promedio de habitantes: " + promedioTotalHabitantes.toFixed(2) + "<br>");
	document.write("promedio de habitantes en paises con mas de 40°: " + promedioPaisesCalurosos.toFixed(2) + "<br>");
	document.write("temperatura minima ingresada: " + tempMinima + "<br>");
	document.write("pais con la temperatura mas baja: " + paisMasFrio + "<br>");

}
