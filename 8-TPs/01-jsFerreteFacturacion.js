/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
	let precio2;
	let precio3;
	let resultadoSuma;
	let mostrarMensaje;

	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    resultadoSuma = precio1 + precio2 + precio3;

    mostrarMensaje = "la suma de los productos es: " + resultadoSuma;

    alert(mostrarMensaje);
}
function Promedio () 
{
	let precio1;
	let precio2;
	let precio3;
    let promedio;
	let mostrarMensaje;

	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    promedio = (precio1 + precio2 + precio3) / 3;

    mostrarMensaje = "el promedio es: " + promedio;

    alert(mostrarMensaje);

}
function PrecioFinal () 
{
	let precio1;
	let precio2;
	let precio3;
    let resultadoSuma;
    let iva;
    let precioFinal;
	let mostrarMensaje;

	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    resultadoSuma = precio1 + precio2 + precio3;
    iva = resultadoSuma * 0.21;
    precioFinal = resultadoSuma + iva;

    mostrarMensaje = "el precio final es: " + precioFinal;

    alert(mostrarMensaje);

}