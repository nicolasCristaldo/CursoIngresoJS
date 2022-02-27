/*nicolas cristaldo - for 8
al presionar el botón pedir un número. 
Informar si el numero es PRIMO o no.*/
function mostrar()
{
	let numero;
	let i;
	let mensaje;
	let esPrimo = 1;

	mensaje = "no es primo";

	do{
		numero = parseInt(prompt("ingrese un numero"));
	}while(isNaN(numero) == true);

	if(numero == 0 || numero == 1){
		alert(mensaje);
		esPrimo = 0;
	}

	for(i = 2; i < numero - 1; i++){
		if(numero % i == 0){
			esPrimo = 0;
		}
	}

	if(esPrimo == 1){
		alert("es primo");
	}
	else{
		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN