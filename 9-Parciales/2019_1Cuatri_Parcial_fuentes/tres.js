function mostrar()
{
	let precio;
	let porcentajeDescuento;
	let precioFinal;

	precio = parseFloat(prompt("ingrese el precio"));
	porcentajeDescuento = parseFloat(prompt("ingrese el porcentaje de descuento"));

	precioFinal = precio - precio * (porcentajeDescuento / 100);

	document.getElementById("elPrecioFinal").value = precioFinal;
}
