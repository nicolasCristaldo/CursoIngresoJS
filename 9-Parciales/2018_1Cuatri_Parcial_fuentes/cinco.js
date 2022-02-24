/*nicolas cristaldo - parcial 2018 5
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/
function mostrar()
{
	let plameta;

	planeta = prompt("ingrese un planeta del sistema solar (en minuscula)");

	switch(planeta){
		case "tierra":
			alert("acá vivimos");
			break;
		case "mercurio":
		case "venus":
			alert("acá hace mas calor");
			break;
		case "marte":
		case "jupiter":
		case "urano":
		case "saturno":
		case "neptuno":
		case "pluton":
			alert("acá hace mas frío");
			break;
		default:
			alert("no es un planeta del sistema solar o no lo ingresó en minuscula");
	}
}
