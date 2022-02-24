/*nicolas cristaldo parcial 2020 2
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
 hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
	let tipo;
	let bolsas;
	let cantidadBolsas = 0;
	let precio;
	let porcentajeDescuento = 0;
	let descuento;
	let importeTotalBruto = 0;
	let importeTotalDescuento;
	let cantBolsasArena = 0;
	let cantBolsasCal = 0;
	let cantBolsasCemento = 0;
	let mayorPrecio = -1;
	let tipoMayorPrecio;
	let respuesta;

	do{ 
	    do{
			tipo = prompt("ingrese el tipo del producto (arena, cal o cemento)");
		}while(!(tipo == "arena" || tipo == "cemento" || tipo == "cal"));

		do{
			bolsas = parseInt(prompt("ingrese cantidad de bolsas"));
		}while(isNaN(bolsas) == true || bolsas <= 0);

		do{
			precio = parseFloat(prompt("ingrese el precio"));
		}while(isNaN(precio) == true || precio <= 0);

		importeTotalBruto = importeTotalBruto + bolsas * precio;
		cantidadBolsas = cantidadBolsas + bolsas;

		if(precio > mayorPrecio){
			mayorPrecio = precio;
			tipoMayorPrecio = tipo;
		}

		switch(tipo){
			case "cal":
				cantBolsasCal = cantBolsasCal + bolsas;
				break;
			case "arena":
				cantBolsasArena = cantBolsasArena + bolsas;
				break;
			default:
				cantBolsasCemento = cantBolsasCemento + bolsas;
		}

		respuesta = prompt("desea continuar? s/n");
	}while(respuesta == "s");

	if(cantidadBolsas > 30){
		porcentajeDescuento = 0.25;
	}
	else if(cantidadBolsas > 10){
		porcentajeDescuento = 0.15;
	}

	importeTotalDescuento = importeTotalBruto - importeTotalBruto * porcentajeDescuento;

	alert("importe total bruto: " + importeTotalBruto);

	if(porcentajeDescuento != 0){
		alert("importe total con descuento: " + importeTotalDescuento);
	}

	if(cantBolsasCemento > cantBolsasArena && cantBolsasCemento > cantBolsasCal){
		alert("el tipo con mas cantidad de bolsas es cemento");
	}
	else if(cantBolsasCal > cantBolsasArena){
		alert("el tipo con mas cantidad de bolsas es cal");
	}
	else{
		alert("el tipo con mas cantidad de bolsas es arena");
	}

	alert("tipo mas caro: " + tipoMayorPrecio);
}
