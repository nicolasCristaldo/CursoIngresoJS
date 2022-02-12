//Nicolás Cristaldo - switch ejercicio 7
function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("se encuentra al oeste");
			break;
		case "Ushuaia":
			alert("se encuentra al sur");
			break;
		case "Cataratas":
			alert("se encuentra al norte");
			break;
		default:
			alert("se encuentra al este");
			break;
	}

}//FIN DE LA FUNCIÓN