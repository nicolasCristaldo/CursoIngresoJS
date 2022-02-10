/* Nicolás cristaldo - tp 2
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno
 rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y
 se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar
 cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
	let perimetro;
	let cantidadAlambre;
	let mostrarMensaje;

	largo = parseFloat(document.getElementById("txtIdLargo").value);
	ancho = parseFloat(document.getElementById("txtIdAncho").value);

	perimetro = (largo * 2) + (ancho * 2);
	cantidadAlambre = perimetro * 3;

	mostrarMensaje = "se tienen que comprar " + cantidadAlambre + " metros de alambre";

	alert(mostrarMensaje);

}
function Circulo () 
{
	let radio;
	let perimetro;
	let cantidadAlambre;
	let mostrarMensaje;

	radio = parseFloat(document.getElementById("txtIdRadio").value);

	perimetro = 2 * 3.14 * radio;
	cantidadAlambre = perimetro * 3;

	mostrarMensaje = "se tienen que comprar " + cantidadAlambre + " metros de alambre"; 

	alert(mostrarMensaje);

}
function Materiales () 
{
	let largo;
	let ancho;
	let area;
	let bolsasDeCal;
	let bolsasDeCemento; 
	let mostrarMensaje;

	largo = parseFloat(document.getElementById("txtIdLargo").value);
	ancho = parseFloat(document.getElementById("txtIdAncho").value);

	area = largo * ancho;
	bolsasDeCemento = area * 2;
	bolsasDeCal = area * 3;

	mostrarMensaje = "se necesitan " + bolsasDeCemento + " bolsas de cemento y " + bolsasDeCal + " bolsas de cal";

	alert(mostrarMensaje);

}