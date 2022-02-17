// Nicolás Cristaldo - if ejercicio 1 v2
function mostrar()
{
	let distancia;
	let tiempo;
	let kilometrosPorHora;

	distancia = parseFloat(prompt("ingrese los kilometros recorridos"));
	tiempo = parseFloat(prompt("ingrese las horas que tardó"));

	kilometrosPorHora = distancia / tiempo;

	if(kilometrosPorHora <= 60){
		alert("muy lento");
	}
	else if(kilometrosPorHora <= 80){
		alert("lento");
	}
    else if(kilometrosPorHora <= 100){
    	alert("buen ritmo");
    }
    else if(kilometrosPorHora <= 120){
    	alert("ahi de la ley");
    }
    else{
    	alert("eso no se hace");
    }

    document.getElementById("txtIdEdad").value = kilometrosPorHora.toFixed(2) + "km/h";
}//FIN DE LA FUNCIÓN