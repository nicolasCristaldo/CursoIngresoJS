/* Nicolas cristaldo - while 10
Al presionar el botón pedir números hasta que el usuario quiera, mostrar por document.write:
 el número máximo y el número mínimo ingresado, el menor de los pares 
 y el mayor de los negativos ...solo si hay */
function mostrar()
{	
	let numero;
	let respuesta;
	let numeroMax;
	let numeroMin;
	let menorPar;
	let mayorNegativo;
	let flag = 1;
	let flag2 = 1;
	let flag3 = 1;

	do{
		numero = parseFloat(prompt("ingrese un numero"));
		while(isNaN(numero) == true){
			numero = parseFloat(prompt("no se ingreso un numero"));
		}

		if(flag == 1){
			numeroMax = numero;
			numeroMin = numero;

			if(numero < 0){
				mayorNegativo = numero;
				flag2 = 0;
			}

			if((numero % 2) == 0){
				menorPar = numero;
				flag3 = 0;
			}

			flag = 0;
		}

		if(flag2 == 1 && numero < 0){
			mayorNegativo = numero;
			flag2 = 0;
		}

		if(flag3 == 1 && (numero % 2) == 0){
			menorPar = numero;
			flag3 = 0;
		}

		if(numero > numeroMax){
			numeroMax = numero;
		}
		else if(numero < numeroMin){
			numeroMin = numero;
		}

		if(numero < 0 && mayorNegativo < numero){
			mayorNegativo = numero;
		}

		if((numero % 2) == 0 && numero < menorPar){
				menorPar = numero;
			}

		respuesta = prompt("desea continuar? s/n");
	}while(respuesta == "s");

	document.write("numero maximo: " + numeroMax + "<br>");
	document.write("numero minimo: " + numeroMin + "<br>");

	if(menorPar != undefined){
		document.write("menor de los pares: " + menorPar + "<br>");
	}
	
	if(mayorNegativo != undefined){
		document.write("mayor de los negativos: " + mayorNegativo);
	}

}//FIN DE LA FUNCIÓN