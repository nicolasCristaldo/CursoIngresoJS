/*nicolas cristaldo - simil parcial 3
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato 
(siamés, turco, Peterbald , generico) y si es de tipo "otros" o pájaro
, pedir solo un texto
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/
function mostrar()
{
	let i;
	let tipo;
	let raza;
	let edad;
	let nombre;
	let gatoMasViejo;
	let perroMasViejo;
	let pajaroMasViejo;
	let otroMasViejo;
	let edadMaxGato = -1;
	let edadMaxPerro = -1;
	let edadMaxPajaro = -1;
	let edadMaxOtro = -1;
	let cantSiameses = 0;
	let contEdadSiames = 0;
	let cantTurco = 0;
	let contEdadTurco = 0;
	let cantPeterbald = 0;
	let contEdadPeterbald = 0;
	let cantGenerico = 0;
	let contEdadGenerico = 0;
	let promedioEdad;

	for(i = 0; i < 10; i++){
		do{
			tipo = prompt("ingrese el tipo (gato , perro , pajaro u otro)");
		}while(!(tipo == "gato" || tipo == "perro" || tipo == "pajaro" || tipo == "otro"));

		do{
			nombre = prompt("ingrese el nombre de tu mascota");
		}while(isNaN(nombre) == false);

		switch(tipo){
			case "gato":
				do{
					raza = prompt("ingrese la raza (siames, turco, peterbald , generico)");
				}while(!(raza == "peterbald" || raza == "generico" || raza == "turco" || raza == "siames"));

				do{
					edad = parseInt(prompt("ingrese la edad"));
				}while(isNaN(edad) == true || edad < 1 || edad > 20);

				switch(raza){
					case "generico":
						cantGenerico++;
						contEdadGenerico = contEdadGenerico + edad;
						break;
					case "turco":
						cantTurco++;
						contEdadTurco = contEdadTurco + edad;
						break;
					case "siames":
						cantSiameses++;
						contEdadSiames = contEdadSiames + edad;
						break;
					default:
						cantPeterbald++;
						contEdadPeterbald = cantPeterbald + edad;
						break;
				}

				if(edad > edadMaxGato){
					edadMaxGato = edad;
					gatoMasViejo = nombre;
				}
				break;
			case "perro":
				do{
					raza = prompt("ingrese la raza (pastor, toy, callejero)");
				}while(!(raza == "callejero" || raza == "toy" || raza == "pastor"));

				do{
					edad = parseInt(prompt("ingrese la edad"));
				}while(isNaN(edad) == true || edad < 1 || edad > 20);

				if(edad > edadMaxPerro){
					edadMaxPerro = edad;
					perroMasViejo = nombre;
				}
				break;
			case "pajaro":
				do{
					raza = prompt("ingrese la raza");
				}while(isNaN(raza) == false);
				
				do{
					edad = parseInt(prompt("ingrese la edad"));
				}while(isNaN(edad) == true || edad < 1 || edad > 50);

				if(edad > edadMaxPajaro){
					edadMaxPajaro = edad;
					pajaroMasViejo = nombre;
				}
				break;
			default:
				do{
					raza = prompt("ingrese la raza");
				}while(isNaN(raza) == false);
				
				do{
					edad = parseInt(prompt("ingrese la edad"));
				}while(isNaN(edad) == true || edad < 1 || edad > 100);

				if(edad > edadMaxOtro){
					edadMaxOtro = edad;
					otroMasViejo = nombre;
				}
				break;
		}

	}

	if(cantSiameses > cantPeterbald && cantSiameses > cantTurco && cantSiameses > cantGenerico){
		promedioEdad = contEdadSiames / cantSiameses;
		document.write("raza de gato con mas animales: siames " + "<br>");
		document.write("promedio edad siames: " + promedioEdad + "<br>");
	}
	else if(cantGenerico > cantTurco && cantGenerico > cantPeterbald){
		promedioEdad = contEdadGenerico / cantGenerico;
		document.write("raza de gato con mas animales: generico" + "<br>");
		document.write("promedio edad generico: " + promedioEdad + "<br>");
	}
	else if(cantTurco > cantPeterbald){
		promedioEdad = contEdadTurco / cantTurco;
		document.write("raza de gato con mas animales: turco" + "<br>");
		document.write("promedio edad turco: " + promedioEdad + "<br>");
	} 
	else{
		promedioEdad = contEdadPeterbald / cantPeterbald;
		document.write("raza de gato con mas animales: peterbald" + "<br>");
		document.write("promedio edad peterbald: " + promedioEdad + "<br>");
	}

	if(edadMaxGato != -1){
		document.write("gato mas viejo: " + gatoMasViejo + "<br>");
	}

	if(edadMaxPerro != -1){
		document.write("perro mas viejo: " + perroMasViejo + "<br>");
	}

	if(edadMaxPajaro != -1){
		document.write("pajaro mas viejo: " + pajaroMasViejo + "<br>");
	}

	if(edadMaxOtro != -1){
		document.write("otro mas viejo: " + otroMasViejo + "<br>");
	}

	
}
