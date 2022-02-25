/*nicolas cristaldo simil parcial 2
El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?*/
function mostrar()
{
	let nombre;
	let carrera;
	let estadoCarrera;
	let sexo;
	let edad;
	let nota;
	let totalAlumnos;
	let mujeresProgramacion = 0;
	let cantNoBinarios = 0;
	let promedioFinalizantes;
	let cantFinalizantes = 0;
	let contNotasFinalizantes = 0;
	let respuesta;
	let nombreMasViejo;
	let sexoMasViejo;
	let edadMasViejo;
	let nombreMejorAlumno;
	let notaMejorAlumno;
	let estadoMejorAlumno;
	let cantAlumnosPsic = 0;
	let cantAlumnosProg = 0;
	let cantAlumnosDG = 0; 
	let flag = 1;
	let flag2 = 1;


	do{ 
	    do{
			nombre = prompt("ingrese su nombre");
		}while(isNaN(nombre) == false);

		do{
			carrera = prompt("ingrese la carrera (programación, psicología, diseño gráfico)");
		}while(!(carrera == "programacion" || carrera == "psicologia" || carrera == "diseño grafico"));

		do{
			estadoCarrera = prompt("ingrese el estado de la carrera (en curso, abandono o finalizado)");
		}while(!(estadoCarrera == "en curso" || estadoCarrera == "abandono" || estadoCarrera == "finalizado"));

		do{
			sexo = prompt("ingrese el sexo (femenino, masculino o nobinario)");
		}while(!(sexo == "femenino" || sexo == "masculino" || sexo == "nobinario"));

		do{
			edad = parseInt(prompt("ingrese la edad"));
		}while(isNaN(edad) == true || edad < 18 || edad > 100);

		do{
			nota = parseInt(prompt("ingrese la nota"));
		}while(isNaN(nota) == true || nota < 0 || nota > 10);

		switch(carrera){
			case "programacion":
				cantAlumnosProg++;

				if(sexo == "femenino"){
					mujeresProgramacion++;
				}
				break;
			case "diseño grafico":
				cantAlumnosDG++;
				break;
			default:
				cantAlumnosPsic++;

				if(flag = 1){
					edadMasViejo = edad;
					nombreMasViejo = nombre;
					sexoMasViejo = sexo;
					flag = 0;
				}

				if(edad > edadMasViejo){
					edadMasViejo = edad;
					nombreMasViejo = nombre;
					sexoMasViejo = sexo;
				}

				if(flag2 == 1 && sexo == "nobinario"){
					notaMejorAlumno = nota;
					nombreMejorAlumno = nombre;
					estadoMejorAlumno = estadoCarrera;
					flag2 = 0;
				}

				if(sexo == "nobinario" && nota > notaMejorAlumno){
					notaMejorAlumno = nota;
					nombreMejorAlumno = nombre;
					estadoMejorAlumno = estadoCarrera;
				}
				break;
		}

		if(sexo == "nobinario"){
			cantNoBinarios++;
		}

		if(estado = "finalizado"){
			cantFinalizantes++;
			contNotasFinalizantes = contNotasFinalizantes + nota;
		}

		respuesta = prompt("desea continuar? s/n");
	}while(respuesta == "s");

	totalAlumnos = cantAlumnosPsic + cantAlumnosProg + cantAlumnosDG;

	promedioFinalizantes = contNotasFinalizantes / cantFinalizantes;

	if(cantAlumnosProg > cantAlumnosDG && cantAlumnosProg > cantAlumnosPsic){
		document.write("carrera con mas alumnos: programación" + "<br>");
	}
	else if(cantAlumnosPsic > cantAlumnosDG){
		document.write("carrera con mas alumnos: psicologia" + "<br>");
	} 
	else{
		document.write("carrera con mas alumnos: diseño grafico" + "<br>");
	}

	document.write("cantidad total de alumnos: " + totalAlumnos + "<br>");
	document.write("cantidad total de mujeres en programación: " + mujeresProgramacion + "<br>");
	document.write("cantidad total de alumnos no binarios: " + cantNoBinarios + "<br>");
	document.write("promedio de notas de alumnos finalizantes: " + promedioFinalizantes + "<br>");
	document.write("nombre de la persona mas vieja en psicologia: "+ nombreMasViejo + "<br>");
	document.write("sexo de la persona mas vieja en psicologia: " + sexoMasViejo + "<br>");
	document.write("edad de la persona mas vieja en psicologia: " + edadMasViejo + "<br>");
	document.write("nombre del mejor alumno no binario en psicologia: " + nombreMejorAlumno + "<br>");
	document.write("nota del mejor alumno no binario en psicologia: " + notaMejorAlumno + "<br>");
	document.write("estado del mejor alumno no binario en psicologia: " + estadoMejorAlumno + "<br>");
}
