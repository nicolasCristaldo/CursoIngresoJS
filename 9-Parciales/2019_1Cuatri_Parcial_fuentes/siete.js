/*nicolas cristaldo - parcial 2019 7
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros
(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet,
 informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/
function mostrar()
{
	let altura;
	let sexo;
	let i;
	let promedio;
	let contAtura = 0;
	let alturaMasBaja = 500;
	let sexoAlturaBaja;
	let mujeresMasAltas = 0;

	for(i = 0; i < 5; i++){
		do{
			altura = parseInt(prompt("ingrese la altura en cm (entre 0 y 250)"));
		}while(isNaN(altura) == true || altura < 0 || altura > 250);

		do{
			sexo = prompt("ingrese el sexo (f o m)");
		}while(!(sexo == "f" || sexo == "m"));

		contAtura = contAtura + altura;

		if(altura < alturaMasBaja){
			alturaMasBaja = altura;
			sexoAlturaBaja = sexo;
		}

		if(sexo == "f" && altura > 190){
			mujeresMasAltas++;
		}

	}

	promedio = contAtura / 5;

	alert("promedio de altura: " + promedio.toFixed(2));
	alert("altura del mas bajo: " + alturaMasBaja + " sexo de esa persona: " + sexoAlturaBaja);
	alert("mujeres con altura mayor a 190 cm: " + mujeresMasAltas);
}
