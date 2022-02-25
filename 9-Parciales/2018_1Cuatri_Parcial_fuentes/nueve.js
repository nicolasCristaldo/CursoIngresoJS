/*nicolas Cristaldo - parcial 2018 9
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera
 e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/
function mostrar()
{
	let marca;
	let peso;
	let temperatura;
	let temperaturaPar = 0;
	let marcaMayorPeso;
	let cantProductosAMenosDe0 = 0;
	let contPeso = 0;
	let cantProductos = 0;
	let promedioPeso;
	let pesoMaximo = 0;
	let pesoMinimo = 101;
	let respuesta;

	do{
		marca = prompt("ingrese la marca");

		do{
			peso = parseFloat(prompt("ingrese el peso (entre 1 y 100)"));
		}while(isNaN(peso) == true || peso < 1 || peso > 100);

		do{
			temperatura = parseFloat(prompt("ingrese la temperatura de almacenamiento(entre -30 y 30)"));
		}while(isNaN(temperatura) == true || temperatura < -30 || temperatura > 30);

		if(temperatura % 2 == 0){
			temperaturaPar++;
		}

		if(peso > pesoMaximo){
			pesoMaximo = peso;
			marcaMayorPeso = marca;
		}
		else if(peso < pesoMinimo){
			pesoMinimo = peso;
		}

		if(temperatura < 0){
			cantProductosAMenosDe0++;
		}

		contPeso = contPeso + peso;
		cantProductos++;

		respuesta = prompt("desea continuar? s/n");
	}while(respuesta == "s");

	promedioPeso = contPeso / cantProductos;

	document.write("cantidad de temperaturas pares: " + temperaturaPar + "<br>");
	document.write("marca del producto mas pesado: " + marcaMayorPeso + "<br>");
	document.write("cantidad de productos que se conservan a menos de 0 grados: " + cantProductosAMenosDe0 + "<br>");
	document.write("promedio del peso de todos los productos: " + promedioPeso + "<br>");
	document.write("peso maximo: " + pesoMaximo + "<br>");
	document.write("peso minimo: " + pesoMinimo + "<br>");
}
