/*una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , 
que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito 
se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por 
mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por 
débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%*/
function mostrar()
{
	let continente;
	let dias;
	const PRECIODIA = 100;
	let importeTotal;
	let maneraDePago;
	let descuento = 0;
	let importeConDescuento;
	let importeConRecarga;

	continente = document.getElementById("Marca").value;

	dias = parseInt(prompt("ingrese la cantidad de dias "));

	maneraDePago = prompt("ingrese la manera de pago");

	importeTotal = dias * PRECIODIA;

	switch(continente){
		case "América":
			descuento = 0.5;

			switch(maneraDePago){
				case "debito":
					descuento = 0.6;
					break;
			}
			break;
		case "África":
			descuento = 0.6;

			switch(maneraDePago){
				case "mercadoPago":
				case "efectivo":
					descuento = 0.75;
				break;
			}
			break;
		case "Europa":

			switch(maneraDePago){
				case "debito":
					descuento = 0.35;
					break;
				case "mercadoPago":
					descuento = 0.3;
					break;
				default:
					descuento = 0.25;
					break;
			}
			break;
		default:
			importeConRecarga = importeTotal + importeTotal * 0.2;
			alert("importe total a pagar: " + importeConRecarga);
			break;
	}

	switch(descuento != 0){
		case true:
			importeConDescuento = importeTotal - importeTotal * descuento;

			alert("importe total a pagar: " + importeConDescuento);
			break;
	}


}
