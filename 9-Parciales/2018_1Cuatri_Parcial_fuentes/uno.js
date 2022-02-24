//nicolas cristaldo - parcial 2018 1
function mostrar()
{
	let ancho;
	let largo;
	let perimetro;

	largo = parseFloat(prompt("ingrese el largo del rectangulo"));
	ancho = parseFloat(prompt("ingrese el ancho del rectangulo"));

	perimetro = ancho * 2 + largo * 2;

	alert("el perimetro del rectangulo es " + perimetro);
}
