/* Nicolás Cristaldo - ejercicio 10 bis 2
se debe pedir el nombre del producto al usuario, 
el importe y tambien se debe pedir el porcentaje de descuento al usuario, 
se debe: mostrar el importe final por ID y ademas mostrar el mensaje:  
"Usted compro un XXXXXX con XX % de descuento, el precio final es XXXX" */
function mostrarAumento()
{
	let nombreProducto;
	let importe; 
	let sacarPorcentaje;
	let porcentaje;
	let descuento;
	let resultado;
	let mostrarMensaje;

	importe = parseInt(document.getElementById("txtIdImporte").value);

	nombreProducto = prompt("ingrese el nombre del producto");

	sacarPorcentaje = prompt("¿cuál es el % de descuento? En caso que el número sea menor a 10 agregarle un 0 por delante");
	porcentaje = parseFloat("0." + sacarPorcentaje);
    
    descuento = importe * porcentaje;
	resultado = importe - descuento;
	
	mostrarMensaje = "usted compró un " + nombreProducto + " con " + sacarPorcentaje + "% de descuento, el precio final es: " + resultado;

	document.getElementById("txtIdResultado").value = resultado;

	alert(mostrarMensaje);
}
