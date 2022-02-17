//nicolas cristaldo - while 6
function mostrar()
{
	let numero;
	let acumulador = 0;
	let contador = 0;
	let i = 0;
	let promedio;

	while(i < 5){
		numero = parseInt(prompt("ingrese un numero"));
		acumulador = acumulador + numero;
		i++;
	}
	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
    document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN