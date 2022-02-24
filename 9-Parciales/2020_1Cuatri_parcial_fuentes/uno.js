/*nicolas cristaldo parcial 2020 1
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el precio
c) Cuántas unidades de jabones hay en total

*/
function mostrar()
{
	let tipo;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	let i;
	let alcoholBarato = 301;
	let alcoholBaratoUnidades;
	let alcoholBaratoFabricante;
	let mayorUnidades = 0;
	let precioMayorUnidades;
	let acumUnidadesJabon = 0;

	for(i = 0; i < 5; i++){
		do{
			tipo = prompt("ingrese el tipo del producto, debe ser jabon, alcohol o barbijo");
		}while(!(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol"));

		do{
			precio = parseFloat(prompt("ingrese el precio del producto (entre 100 y 300)"));
		}while(isNaN(precio) == true || precio < 100 || precio > 300);

		do{
			unidades = parseInt(prompt("ingrese la cantidad de unidades (no mas de 1000)"));
		}while(isNaN(unidades) == true || unidades <= 0 || unidades > 1000);

		marca = prompt("ingrese la marca del producto");
		fabricante = prompt("ingrese el fabricante del producto");

		if(tipo == "alcohol" && precio < alcoholBarato){
			alcoholBarato = precio;
			alcoholBaratoFabricante = fabricante;
			alcoholBaratoUnidades = unidades;
		}

		if(unidades > mayorUnidades){
			mayorUnidades = unidades;
			precioMayorUnidades = precio;
		}

		if(tipo == "jabon"){
			acumUnidadesJabon = acumUnidadesJabon + unidades;
		}
	}

	alert("unidades y fabricante del alcohol mas barato: unidades: " + alcoholBaratoUnidades + " fabricante: " + alcoholBaratoFabricante);
	alert("precio del tipo con mas unidades: " + precioMayorUnidades);
	alert("total de unidades de jabon: " + acumUnidadesJabon);
}
