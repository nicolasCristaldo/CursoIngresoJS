//nicolas cristaldo - for 5
/*Realizar el programa que permita el ingreso de 5 botellas de gaseosa,
 con marca, los cm3(validar: 1-250, 2- 500, 3-1500, 4-2000) ,
  tipo de marca validar(“Marca Líder”, “Otra”), precio(validar entre 100 y 500) 
  e informar por alert: 
  a) El promedio de precio de marca líder en 500cm3 y la cantidad. 
  b) La botella más barata y su precio. 
  c) La cantidad de tipo otra.*/
function mostrar()
{
	let i;
	let tipoMarca;
	let cm3;
	let marca;
	let precio;
	let promedio;
	let contPrecioML = 0;
	let cantMLEn500 = 0;
	let precioBotellaBarata = 501;
	let marcaBotellaBarata;
	let cantTipoOtra = 0;

	for(i = 0; i < 5; i++){

		marca = prompt("ingrese la marca");

		do{
			cm3 = parseInt(prompt("ingrese los cm cubicos (250, 500, 1500 o 2000)"));
		}while(isNaN(cm3) == true || !(cm3 == 250 || cm3 == 500 || cm3 == 1500 || cm3 == 2000));

		do{
			tipoMarca = prompt("que tipo de marca es? (lider u otra)");
		}while(!(tipoMarca == "lider" || tipoMarca == "otra"));

		do{
			precio = parseFloat(prompt("ingrese el precio (entre 100 y 500)"));
		}while(isNaN(precio) == true || precio < 100 || precio > 500);

		if(tipoMarca == "lider" && cm3 == 500){
			contPrecioML = contPrecioML + precio;
			cantMLEn500++;
		}
		else if(tipoMarca == "otra"){
			cantTipoOtra++;
		}

		if(precio < precioBotellaBarata){
			precioBotellaBarata = precio;
			marcaBotellaBarata = marca;
		}

	}

	promedio = contPrecioML / cantMLEn500;

	alert("promedio precio de marca líder en 500cm3: " + promedio + " cantidad: " + cantMLEn500);
	alert("botella mas barata: " + marcaBotellaBarata + " precio: " + precioBotellaBarata);
	alert("cantidad de botellas de tipo otra: " + cantTipoOtra);
}//FIN DE LA FUNCIÓN