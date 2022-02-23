//nicolas cristaldo - for 3
function mostrar()
{
	let repeticiones;
	let i;

	repeticiones = parseInt(prompt("ingrese un numero"));
	while(isNaN(repeticiones) == true){
		repeticiones = parseInt(prompt("error, no ha ingresado un numero"));
	}

	for(i = 1; i <= repeticiones; i++){
		console.log("hola UTN fra");
	}
}//FIN DE LA FUNCIÓN