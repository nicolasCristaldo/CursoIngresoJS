// Nicolás Cristaldo - if ejercicio 1 v3
function mostrar()
{
	let peso;
	let altura;
	let imc;

	peso = parseFloat(prompt("ingrese su peso"));
	altura = parseFloat(prompt("ingrese su altura"));

	imc = peso / (altura * altura);

	if(imc <= 18.5){
		alert("bajo peso");
	}
	else if(imc <= 24.9){
		alert("peso normal");
	}
    else if(imc <= 26.9){
    	alert("pre obesidad");
    }
    else if(imc <= 29.9){
    	alert("obesidad I");
    }
    else if(imc <= 34.9){
    	alert("obesidad II");
    }
    else{
    	alert("obesidad III");
    }

    document.getElementById("txtIdEdad").value = imc.toFixed(2);
}//FIN DE LA FUNCIÓN