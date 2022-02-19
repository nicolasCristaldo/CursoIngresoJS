//nicolas cristaldo - while 2
/*
Pedir nombre y temperatura hasta que el usuario quiera, mostrar mensaje: 
" Usted se llama XXX y tiene la temperatura (NORMAL, BAJA, ALTA DEBE AISLARSE)"
(VALIDAR que sean numeros y los rangos de las temperaturas)*/
function mostrar()
{
	let respuesta;
	let temperatura;
	let nombre;
	let mensaje;

	do{
		nombre = prompt("ingrese su nombre");
		temperatura = parseFloat(prompt("ingrese su temperatura en grados celcius"));
		while(isNaN(temperatura) == true || temperatura > 44 || temperatura < 30){
			temperatura = parseFloat(prompt("es imposible que usted tenga esa temperatura, por favor vuelva a ingresarla"));
		}

		if(temperatura >= 38){
			temperatura = "ALTA, DEBE AISLARSE";
		}
		else if(temperatura > 35){
			temperatura = "NORMAL";
		}
		else{
			temperatura = "BAJA"
		}

		alert("hola " + nombre + ", usted tiene temperatura " + temperatura);
		
		respuesta = prompt("desea continuar? s/n");

	}while(respuesta == "s");

}//FIN DE LA FUNCIÓN