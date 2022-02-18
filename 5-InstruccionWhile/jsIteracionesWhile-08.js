/*nicolas cristaldo - while 8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let contadorPositivos = 0;
	let multiplicadorNegativos = 1;
	let respuesta = "si";

	while(respuesta == "si"){
		numero = parseFloat(prompt("ingrese un numero"));
		if(numero >= 0){
			contadorPositivos = contadorPositivos + numero;
		}
		else{
			multiplicadorNegativos = multiplicadorNegativos * numero;
		}
		respuesta = prompt("¿quiere seguir? si/no");
	}

	document.getElementById("txtIdSuma").value = contadorPositivos;
	document.getElementById("txtIdProducto").value = multiplicadorNegativos;
}//FIN DE LA FUNCIÓN