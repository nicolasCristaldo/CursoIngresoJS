/*nicolas cristaldo - parcial 2020 3
En el ingreso a un viaje en avion nos solicitan nombre 
, edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let temperaturaMax = 0;
	let nombreTemperaturaMax;
	let mayoresViudos = 0;
	let cantHombresSoV = 0;
	let cantAncianosTempAlta = 0;
	let promedio;
	let contEdadSolteros = 0;
	let cantSolterosHombres = 0;
	let respuesta;

	do{
		do{
			nombre = prompt("ingrese el nombre");
		}while(isNaN(nombre) == false);
		
		do{
			edad = parseInt(prompt("ingrese la edad"));
		}while(isNaN(edad) == true || edad < 0 || edad > 110);

		do{
			sexo = prompt("ingrese el sexo (f o m)");
		}while(!(sexo == "f" || sexo == "m"));

		do{
			estadoCivil = prompt("ingrese el estado civil (casado, soltero o viudo)");
		}while(!(estadoCivil == "casado" || estadoCivil == "soltero" || estadoCivil == "viudo"));

		do{
			temperatura = parseFloat(prompt("ingrese la temperatura"));
		}while(isNaN(temperatura) == true || temperatura < 30 || temperatura > 44);

		if(temperatura > temperaturaMax){
			temperaturaMax = temperatura;
			nombreTemperaturaMax = nombre;
		}

		if(edad > 60 && temperatura > 38){
			cantAncianosTempAlta++;
		}
		
		if(edad >= 18 && estadoCivil == "viudo"){
			mayoresViudos++;
		}

		if(sexo == "m" && estadoCivil != "casado"){
			cantHombresSoV++;

			switch(estadoCivil){
				case "soltero":
					contEdadSolteros = contEdadSolteros + edad;
					cantSolterosHombres++;
					break;
			}
		}

		respuesta = prompt("desea continuar? s/n");
	}while(respuesta == "s");
  
	promedio = contEdadSolteros / cantSolterosHombres;

	document.write("persona con mas temperatura: " + nombreTemperaturaMax + "<br>");
	document.write("cantidad de mayores viudos: " + mayoresViudos + "<br>");
	document.write("cantidad de hombres solteros o viudos: " + cantHombresSoV + "<br>");
	document.write("cantidad de ancianos con temperatura mayor a 38: " + cantAncianosTempAlta + "<br>");
	document.write("promedio de edad entre los hombres solteros: " + promedio.toFixed(2));

}
