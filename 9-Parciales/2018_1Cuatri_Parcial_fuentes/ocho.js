/*nicolas cristaldo - parcial 2018 8
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra
 y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar 
 al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)*/
function mostrar()
{
	let letra;
	let numero;
	let respuesta;
	let cantPares = 0;
	let cantImpares = 0;
	let cantCeros = 0;
	let cantPositivos = 0;
	let sumaPositivos = 0;
	let promedio;
	let sumaNegativos = 0;
	let numeroMax = -1000;
	let letraMax;
	let numeroMin = 1000;
	let letraMin;

	do{
		do{
			letra = prompt("ingrese una letra");
		}while(isNaN(letra) == false);

		do{
			numero = parseInt(prompt("ingrese un numero del -100 al 100"));
		}while(isNaN(numero) == true || numero < -100 || numero > 100);
    
		if(numero == 0){
			cantCeros++;
		}
		else if(numero % 2 == 0){
			cantPares++;
		}
		else{
			cantImpares++;
		}

		if(numero > 0){
			sumaPositivos = sumaPositivos + numero;
			cantPositivos++;
		}
		else{
			sumaNegativos = sumaNegativos + numero;
		}

		if(numero > numeroMax){
			numeroMax = numero;
			letraMax = letra;
		}
		else if(numero < numeroMin){
			numeroMin = numero;
			letraMin = letra;
		}

		respuesta = prompt("desea continuar? s/n");
	}while(respuesta == "s");

	promedio = sumaPositivos / cantPositivos;

	document.write("cantidad de pares: " + cantPares + "<br>");
	document.write("cantidad de impares: " + cantImpares + "<br>");
	document.write("cantidad de ceros: " + cantCeros + "<br>");
	document.write("promedio de positivos: " + promedio + "<br>");
	document.write("suma de todos los negativos: " + sumaNegativos + "<br>");
	document.write("numero maximo: " + numeroMax + "<br>");
	document.write("numero minimo: " + numeroMin + "<br>");
	document.write("letra del numero maximo: " + letraMax + "<br>");
	document.write("letra del numero minimo: " + letraMin + "<br>");
	
}
