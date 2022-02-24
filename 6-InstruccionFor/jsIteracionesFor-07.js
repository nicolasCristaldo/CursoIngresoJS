/*nicolas cristaldo - for 7
al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar()
{
	let i;
	let numero;
	let divisores = 0;

	numero = parseInt(prompt("ingrese un numero"));
	while(isNaN(numero) == true){
		numero = parseInt(prompt("error, no ingreso un numero"));
	}

		for(i = 1; i <= numero; i++){
			if((numero % i) == 0){
				divisores++;
				console.log(i);
			}
		}
	console.log("cantidad de divisores: " + divisores);

}//FIN DE LA FUNCIÓN