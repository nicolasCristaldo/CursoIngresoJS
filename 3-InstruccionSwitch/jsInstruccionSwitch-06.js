//Nicolás Cristaldo - switch ejercicio 6 con if
function mostrar()
{
	let hora;

	hora = parseFloat(document.getElementById("txtIdHora").value);

	if(hora >= 7 && hora <= 11){
		alert("es de mañana");
	}
	else if(hora >= 12 && hora <=19){
		alert("es de tarde");
	}
	else if(hora >= 0 && hora <= 24){
		alert("es de noche");
	}
	else{
		alert("esa hora no existe");
	}
}//FIN DE LA FUNCIÓN