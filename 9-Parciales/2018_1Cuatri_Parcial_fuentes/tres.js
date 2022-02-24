/* nicolas cristaldo - parcial 2018 3
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id.*/
function mostrar()
{
	let precio;
	let porcentajeDescuento;
	let descuento;
	let precioFinal;

	precio = parseFloat(prompt("ingrese el precio"));
	porcentajeDescuento = parseFloat(prompt("ingrese en porcentaje de descuento"));

	precioFinal = precio - precio * (porcentajeDescuento / 100);

	document.getElementById("elPrecioFinal").value = precioFinal;
}
