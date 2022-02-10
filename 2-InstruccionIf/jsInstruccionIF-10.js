// Nicolás Cristaldo - if ejercicio 10
function mostrar()
{
	let numero;
	let maximo = 10;
	let minimo = 1;

	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	if(numero >= 9){
		alert(numero + ", EXCELENTE");
	}
	else if(numero >= 4){
		alert(numero + ", APROBÓ");
	}
	else{
		alert(numero + ", Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN