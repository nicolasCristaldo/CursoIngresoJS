/* nicolas cristaldo - while 7
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let promedio;
	let numero;
	let respuesta = "si";
	let acumulador = 0;
	let i = 0;

	while(respuesta == "si"){
		numero = parseInt(prompt("ingrese un numero"));
		acumulador = acumulador + numero;
		i++;
		respuesta = prompt("¿quiere seguir? si/no");
	}

	promedio = acumulador / i;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN