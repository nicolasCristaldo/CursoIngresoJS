//Nicolás Cristaldo - switch ejercicio 8 con if
function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	if(destino == "Ushuaia" || destino == "Bariloche"){
		alert("hace frio");
	}
	else{
		alert("hace calor");
	}

}//FIN DE LA FUNCIÓN