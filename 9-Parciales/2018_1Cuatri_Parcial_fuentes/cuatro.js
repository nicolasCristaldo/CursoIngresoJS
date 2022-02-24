/*nicolas cristaldo - parcial 2018 4
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/
function mostrar()
{
	let primerNumero;
	let segundoNumero;
	let suma;
	
	primerNumero = parseFloat(prompt("ingrese el primer numero"));
	segundoNumero = parseFloat(prompt("ingrese el segundo numero"));

	suma = primerNumero + segundoNumero;

	if(primerNumero == segundoNumero){
		alert("" + primerNumero + segundoNumero);
	}
	else if(primerNumero > segundoNumero){
		alert(primerNumero - segundoNumero);
	}
	else{
		 alert(suma);
		 if(suma > 10){
		alert("la suma es " + suma + " y supero los 10");
		}
	}

}
