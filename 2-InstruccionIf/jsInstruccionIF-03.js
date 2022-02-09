// Nicolás Cristaldo - if ejercicio 3
function mostrar()
{
	var edadIngresada;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if(edadIngresada >= 18){
		alert("mayor de edad");
	}else{
		alert("menor de edad");
	}

}//FIN DE LA FUNCIÓN