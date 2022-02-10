// Nicolás Cristaldo - if ejercicio 7
function mostrar()
{
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;


	if(edad <= 17 && estadoCivil != "Soltero"){
		alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN