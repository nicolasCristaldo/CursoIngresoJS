/* Nicolas cristaldo - while 9
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let respuesta;
	let numeroMax;
	let numeroMin;
	let flag = 1;

	do{
		numero = parseFloat(prompt("ingrese un numero"));
		while(isNaN(numero) == true){
			numero = parseFloat(prompt("no se ingreso un numero"));
		}

		if(flag == 1){
			numeroMax = numero;
			numeroMin = numero;
			flag = 0;
		}

		if(numero > numeroMax){
			numeroMax = numero;
		}
		else if(numero < numeroMin){
			numeroMin = numero;
		}

		respuesta = prompt("desea continuar? s/n");
	}while(respuesta == "s");
	

	document.getElementById("txtIdMaximo").value = numeroMax; 
	document.getElementById("txtIdMinimo").value = numeroMin;
}//FIN DE LA FUNCIÓN
