/*Nicolás Cristaldo - tp 4
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 
40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace
 un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  FelipeLamparas se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos 
brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 function CalcularPrecio () 
 {
  	let cantidadLamparas;
  	let marca;
  	let precioLamparas;
    const IIBB = 0.1;
    let descuento = 0;

  	cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
  	marca = document.getElementById("Marca").value;

  	precioLamparas = cantidadLamparas * 35;

    switch(cantidadLamparas){
      case 1:
      case 2:
        descuento = 0;
        break;
      case 3:
        switch(marca){
          case "ArgentinaLuz":
            descuento = 0.15;
            break;
          case "FelipeLamparas":
            descuento = 0.1;
            break;
          default:
            descuento = 0.05;
            break;
        }
        break;
      case 4:
        switch(marca){
          case "ArgentinaLuz":
          case "FelipeLamparas":
            descuento = 0.25;
            break;
          default:
            descuento = 0.2;
            break;
        }
        break;
      case 5:
        switch(marca){
          case "ArgentinaLuz":
            descuento = 0.4;
            break;
          default:
            descuento = 0.3;
            break;
        }
        break;
      default:
        descuento = 0.5;
        break;
    }
    
    switch(descuento){
      case 0:
        descuento = 0;
        break;
      default:
        precioLamparas = precioLamparas - precioLamparas * descuento;
        break;
    }

    switch(precioLamparas > 120){
      case true:
        precioLamparas = precioLamparas + precioLamparas * IIBB;
        alert("usted pagó " + (precioLamparas * IIBB).toFixed(2) + "$ de IIBB");
        break;
    }

    document.getElementById("txtIdprecioDescuento").value = precioLamparas;
}
