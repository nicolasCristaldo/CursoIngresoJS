/* Nicolas cristaldo - while 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let contNegativos = 0;
	let contPositivos = 0;
	let contCeros = 0;
	let contPares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	let respuesta;

	do{
		numero = parseFloat(prompt("ingrese un numero"));
		while(isNaN(numero) == true){
			numero = parseFloat(prompt("por favor, ingrese un numero"));
		}
		if(numero < 0){
			contNegativos++;
			sumaNegativos = sumaNegativos + (numero);
		}
		else if(numero == 0){
			contCeros++;
		}
		else{
			contPositivos++;
			sumaPositivos = sumaPositivos + numero;
		}

		if((numero % 2) == 0){
			contPares++;
		}
		respuesta = prompt("desea continuar? s/n");
	}while(respuesta == "s");

	promedioNegativos = sumaNegativos / contNegativos;
	promedioPositivos = sumaPositivos / contPositivos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write("la suma de los negativos es: " + sumaNegativos + "<br>");
	document.write("la suma de los positivos es: " + sumaPositivos + "<br>");
	document.write("la cantidad de negativos es: " + contNegativos + "<br>");
	document.write("la cantidad de positivos es: " + contPositivos + "<br>");
	document.write("la cantidad de ceros es: " + contCeros + "<br>");
	document.write("la cantidad de numeros pares es: " + contPares + "<br>");
	document.write("el promedio de los negativos es: " + promedioNegativos + "<br>");
	document.write("el promedio de los positivos es: " + promedioPositivos + "<br>");
	document.write("la diferencia entre positivos y negativos es: " + diferencia + "<br>");
}//FIN DE LA FUNCIÓN