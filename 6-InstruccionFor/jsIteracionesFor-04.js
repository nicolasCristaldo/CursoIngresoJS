// nicolas cristaldo - for 4
function mostrar()
{
	let repeticiones;
	let i;

	repeticiones = parseInt(prompt("ingrese un numero"));
	while(isNaN(repeticiones) == true){
		repeticiones = parseInt(prompt("error, no ha ingresado un numero"));
	}

	for(i = 1; i <= repeticiones; i++){
		alert(i);
		if(i == 3){
			break;
		}
	}
}//FIN DE LA FUNCIÓN