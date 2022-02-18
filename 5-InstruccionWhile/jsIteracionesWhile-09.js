/* Nicolas cristaldo - while 9
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let respuesta;
	let numeroMax;
	let numeroMin;

	numero = parseFloat(prompt("ingrese un numero"));
	while(isNaN(numero) == true){
		numero = parseFloat(prompt("por favor, ingrese un NUMERO"));
	}

	numeroMax = numero;
	numeroMin = numero;

	respuesta = prompt("ingresa otro? s/n");

	while(respuesta == "s"){
		numero = parseFloat(prompt("ingrese un numero"));
		while(isNaN(numero) == true){
			numero = parseFloat(prompt("por favor, ingrese un NUMERO"));
		}
		if(numero > numeroMax){
			numeroMax = numero;
		}
		else if(numero < numeroMin){
			numeroMin = numero;
		}
		respuesta = prompt("ingresa otro? s/n");
	}

	document.getElementById("txtIdMaximo").value = numeroMax; 
	document.getElementById("txtIdMinimo").value = numeroMin;
}//FIN DE LA FUNCIÓN
