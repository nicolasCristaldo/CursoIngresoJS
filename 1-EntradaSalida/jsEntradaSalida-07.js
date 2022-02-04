/* Nicolás Cristaldo - ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let sumarNumero1;
	let sumarNumero2;
	let resultadoSuma;
	let mostrarMensajeSuma;

    sumarNumero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    sumarNumero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultadoSuma = sumarNumero1 + sumarNumero2;

    mostrarMensajeSuma = "el resultado de la suma es: " + resultadoSuma;

	alert(mostrarMensajeSuma);	
}

function restar()
{
	let restarNumero1;
	let restarNumero2;
	let resultadoResta;
	let mostrarMensajeResta;

    restarNumero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    restarNumero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultadoResta = restarNumero1 - restarNumero2;

    mostrarMensajeResta = "el resultado de la resta es: " + resultadoResta;
    
	alert(mostrarMensajeResta);
}

function multiplicar()
{ 
	let multiplicarNumero1;
	let multiplicarNumero2;
	let resultadoMultiplicacion;
	let mostrarMensajeMultiplicacion;

    multiplicarNumero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    multiplicarNumero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultadoMultiplicacion = multiplicarNumero1 * multiplicarNumero2;

    mostrarMensajeMultiplicacion = "el resultado de la multiplicación es: " + resultadoMultiplicacion;
    
	alert(mostrarMensajeMultiplicacion);
}

function dividir()
{
	let divisionNumero1;
	let divisionnumero2;
	let resultadoDivision;
	let mostrarMensajeDivision;

    divisionNumero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    divisionNumero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultadoDivision = divisionNumero1 / divisionNumero2;

    mostrarMensajeDivision = "el resultado de la división es: " + resultadoDivision;
    
	alert(mostrarMensajeDivision);
}

