/* Nicolás 1cristaldo - ejercicio 5 bis
Se debe mostrar el mensaje:
 "Perez, usted se llama Jose y tiene 66 años" se debe obtener el apellido , de la manera que puedan... 	*/
function mostrar()
{	
	let nombre;
	let edad;
	let apellido;
	let mensaje;

    apellido = prompt("ingrese su apellido");

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	mensaje = apellido + ", " + "usted se llama " + nombre + " y tiene " + edad + " años.";
	
	alert(mensaje);
}

