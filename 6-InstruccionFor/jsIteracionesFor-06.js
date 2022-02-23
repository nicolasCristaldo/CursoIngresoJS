function mostrar()
{
	let i;
	let numero;
	let pares = 0;

	numero = parseInt(prompt("ingrese un numero"));
	if(isNaN(numero) == true){
		numero = parseInt(prompt("error, no ingreso un numero"));
	}

	if(numero > 0){
		for(i = 1; i <= numero; i++){
			if((i % 2) == 0){
				pares++;
				alert(i);
			}
		}
	}
	else{
		for(i = 1; i >= numero; i--){
			if((i % 2) == 0){
				pares++;
				alert(i);
			}
		}
	}
	alert("cantidaad de pares: " + pares);
}//FIN DE LA FUNCIÓN