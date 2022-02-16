/*Nicolás Cristaldo - tp 4
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 
40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace
 un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos 
brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 function CalcularPrecio () 
 {
  	let cantidadLamparas;
  	let marca;
  	let precioLamparas;
  	let importeFinal;
  	let mensajeAMostrar;

  	cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
  	marca = document.getElementById("Marca").value;
  	importeFinal = parseFloat(document.getElementById("txtIdprecioDescuento").value);
  	precioLamparas = cantidadLamparas * 35;

  	mensajeAMostrar = "Usted pagó " +  (importeFinal * 0.1) + "$ de IIBB";

  	if(cantidadLamparas >= 3){
  		switch(cantidadLamparas){
  			case 3:  
  				switch(marca){
  					case "ArgentinaLuz":
   						document.getElementById("txtIdprecioDescuento").value = precioLamparas - precioLamparas * 0.15;
  						break;
  					case "FelipeLamparas":
  						document.getElementById("txtIdprecioDescuento").value = precioLamparas - precioLamparas * 0.1;
  						break;
  					default:
  						document.getElementById("txtIdprecioDescuento").value = precioLamparas - precioLamparas * 0.05;
  				}
  					break;
  			case 4:
  				switch(marca){
  					case "ArgentinaLuz":
  					case "FelipeLamparas":
  						document.getElementById("txtIdprecioDescuento").value = precioLamparas - precioLamparas * 0.25;
  						break;
  					default:
  						document.getElementById("txtIdprecioDescuento").value = precioLamparas - precioLamparas * 0.2;
  						break;
  				}
  					break;
  			case 5:
  				switch(marca){
  					case "ArgentinaLuz":
  						document.getElementById("txtIdprecioDescuento").value = precioLamparas - precioLamparas * 0.4;
  						break;
  					default:
  						document.getElementById("txtIdprecioDescuento").value = precioLamparas - precioLamparas * 0.3;
  						break;
  				}
  					break;
  			default:
  					document.getElementById("txtIdprecioDescuento").value = precioLamparas - precioLamparas * 0.5;
  						break;
  				    break;
  		}
  	}
  	else if(cantidadLamparas >= 1){
  		document.getElementById("txtIdprecioDescuento").value = precioLamparas;
  	}

  	if (importeFinal > 120){
  		document.getElementById("txtIdprecioDescuento").value = importeFinal + importeFinal * 0.1;
  		alert(mensajeAMostrar);
  	}
}
