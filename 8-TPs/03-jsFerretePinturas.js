/* Nicolás Cristaldo - tp 3
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let gradosFahrenheit;
	let gradosCentigrados;
	let mensajeaMostrar;

	gradosFahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

	gradosCentigrados = gradosFahrenheit - 32;

	mensajeaMostrar = gradosFahrenheit + " grados fahrenheit son " + gradosCentigrados + " grados centígrados";

	alert(mensajeaMostrar);
}

function CentigradosFahrenheit () 
{
	let gradosFahrenheit;
	let gradosCentigrados;
	let mensajeaMostrar;

	gradosCentigrados = parseFloat(document.getElementById("txtIdTemperatura").value);

	gradosFahrenheit = gradosCentigrados + 32;

	mensajeaMostrar = gradosCentigrados + " grados centígrados son " + gradosFahrenheit + " grados fahrenheit";

	alert(mensajeaMostrar);
}
