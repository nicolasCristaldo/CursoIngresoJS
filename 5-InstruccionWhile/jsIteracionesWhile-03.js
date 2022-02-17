//nicolas cristaldo - while 3
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("ingrese la clave");

	while(clave != "utn750"){
		clave = prompt("clave incorrecta, ingresala nuevamente");
	}
	
}//FIN DE LA FUNCIÓN
