//Nicolás Cristaldo - switch ejercicio 10
function mostrar()
{
	let estacion;
	let destino;
	let mensajeNo;
	let mensajeSi;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	mensajeNo = "no se viaja";
	mensajeSi = "se viaja";

	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					alert(mensajeSi);
					break;
				default:
					alert(mensajeNo);
					break;
			}
			break;
		 case "Primavera":
		 	switch(destino){
		 		case "Bariloche":
		 			alert(mensajeNo);
		 			break;
		 		default:
		 			alert(mensajeSi);
		 			break;
		 	}
		 	break;
		 case "Verano":
		 	switch(destino){
		 		case "Mar del plata":
	 			case "Cataratas":
		 			alert(mensajeSi);
		 			break;
		 		default:
		 			alert(mensajeNo);
		 			break;
		 	}
		 	break;
		 default:
		 	alert(mensajeSi);
		 	break;
	}
}//FIN DE LA FUNCIÓN