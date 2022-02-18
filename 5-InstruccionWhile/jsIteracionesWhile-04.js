/* nicolas cristaldo - while 4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = parseFloat(prompt("ingrese un numero entre 0 y 9"));

	while(numero < 0 || numero > 9){
		numero = parseFloat(prompt("numero incorrecto, ingrese un numero entre 0 y 9"));
	}
	
	document.getElementById("txtIdNumero").value = numero;
}//FIN DE LA FUNCIÓN