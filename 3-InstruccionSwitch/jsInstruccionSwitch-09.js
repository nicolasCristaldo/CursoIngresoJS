//Nicolás Cristaldo - switch ejercicio 9
function mostrar()
{
	let estacion;
	let destino;
	let precioBase;
	let porcentaje20;
	let porcentaje10;
	let mensaje;
	let mensajeAumento10;
	let mensajeAumento20;
	let mensajeDescuento10;
	let mensajeDescuento20;


	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	precioBase = 15000;
	porcentaje10 = precioBase * 0.1;
	porcentaje20 = precioBase * 0.2;

	 mensaje = precioBase + "$ a pagar";
	 mensajeDescuento10 = precioBase - porcentaje10 + "$ a pagar";
	 mensajeDescuento20 = precioBase - porcentaje20 + "$ a pagar";
     mensajeAumento10 = precioBase + porcentaje10 + "$ a pagar";
     mensajeAumento20 = precioBase + porcentaje20 + "$ a pagar";

    if(estacion == "Invierno"){
		switch(destino){
			case "Mar del plata":
				alert(mensajeDescuento20);
				break;
			case "Bariloche":
				alert(mensajeAumento20);
				break;
			default:
				alert(mensajeDescuento10);
				break;
			}
	}
	else if (estacion == "Verano"){
		switch(destino){
			case "Bariloche":
				alert(mensajeDescuento20);
				break;
			case "Mar del plata":
				alert(mensajeAumento20);
				break;
			default:
				alert(mensajeAumento10);
				break;
	        }
    }
    else{
    	switch(destino){
				case "Cordoba":
					alert(mensaje);
					break;
				default:
					alert(mensajeAumento10);
					break;
			}
    }
}//FIN DE LA FUNCIÓN
