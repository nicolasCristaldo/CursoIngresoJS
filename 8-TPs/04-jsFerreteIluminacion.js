/*Nicolás Cristaldo - tp 4
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidadLamparas;
 	let marca;
 	let precioLamparas;

 	cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
 	marca = document.getElementById("Marca").value;

 	precioLamparas = cantidadLamparas * 35;

 	if(cantidadLamparas >= 6){
 		document.getElementById("txtIdprecioDescuento").value = precioLamparas - precioLamparas * 0.5;
 	}
 	else if(cantidadLamparas == 5){
 		if (marca == "ArgentinaLuz") {
 			document.getElementById("txtIdprecioDescuento").value = precioLamparas - precioLamparas * 0.4;
 		}
 		else{
 			document.getElementById("txtIdprecioDescuento").value = precioLamparas - precioLamparas * 0.3;
 		}
 	}
 	else if (cantidadLamparas == 4){
 		if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
 			document.getElementById("txtIdprecioDescuento").value = precioLamparas - precioLamparas * 0.25;
 		}
 		else{
 			document.getElementById("txtIdprecioDescuento").value = precioLamparas - precioLamparas * 0.2;
 		}
 	}
 	else if(cantidadLamparas == 4){
 	
 	}

}
