function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >=18){
		alert("es mayor");
	}
	else if(edad <= 12){
        alert("es menor");
	}
	else{
		alert("es adolescente");
	}


}//FIN DE LA FUNCIÓN