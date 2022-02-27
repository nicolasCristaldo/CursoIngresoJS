/*nicolas cristaldo - parcial 2019 9
Realizar el algoritmo que permita ingresar el nombre de un país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/
function mostrar()
{
	let pais;
	let habitantes;
	let temperatura;
	let respuesta;
	let cantTemperaturasPar = 0;
	let habitantesMin = 10000;
	let nombrePaisMenosHab;
	let paisesMasCalurosos = 0;
	let promedio;
	let totalPaises = 0;
	let contHabitantes = 0;
	let tempMinima = 100;
	let paisMasFrio;

	do{
		do{
			pais = prompt("ingrese el pais");
		}while(isNaN(pais) == false);

		do{
			habitantes = parseInt(prompt("ingrese la cantidad de habitantes (en millones)"));
		}while(isNaN(habitantes) == true || habitantes < 1 || habitantes > 7000);

		do{
			temperatura = parseFloat(prompt("ingrese la temperatura minima que se registra"));
		}while(isNaN(temperatura) == true || temperatura < -50 || temperatura > 50);

		contHabitantes = contHabitantes + habitantes;
		totalPaises++;

		if(temperatura % 2 == 0){
			cantTemperaturasPar++;
		}		

		if(habitantes < habitantesMin){
			habitantesMin = habitantes;
			nombrePaisMenosHab = pais;
		}

		if(temperatura < tempMinima){
			tempMinima = temperatura;
			paisMasFrio = pais;
		}

		if(temperatura >= 40){
			paisesMasCalurosos++;
		}

		respuesta = prompt("desea continuar? s/n");
	}while(respuesta == "s");

	promedio = contHabitantes / totalPaises;

	document.write("cantidad de temperaturas pares: " + cantTemperaturasPar + "<br>");
	document.write("pais con menos habitantes: " + nombrePaisMenosHab + "<br>");
	document.write("paises que superan los 40°: " + paisesMasCalurosos + "<br>");
	document.write("promedio de habitantes: " + promedio.toFixed(2) + "<br>");
	document.write("temperatura minima ingresada: " + tempMinima + "<br>");
	document.write("pais con la temperatura mas baja: " + paisMasFrio);

}
