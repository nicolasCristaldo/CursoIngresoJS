function mostrar()
{
  let nombreMujer;
  let nombreHombre;
  let pesoMujer;
  let pesoHombre;
  let pesoTotal;
  let promedio;
  let mensaje;

  nombreHombre = prompt("ingrese el nombre del hombre");
  nombreMujer = prompt("ingrese el nombre de la mujer");

  pesoHombre = parseFloat(prompt("ingrese el peso del hombre"));
  pesoMujer = parseFloat(prompt("ingrese el peso de la mujer"));

  pesoTotal = pesoMujer + pesoHombre;

  promedio = pesoTotal / 2;

  mensaje = "ustedes se llaman " + nombreMujer + " y " + nombreHombre + " pesan " + pesoMujer + " y " + pesoHombre + " kilos, que sumados son " + pesoTotal + "  kilos y el promedio de peso " + promedio;
  alert(mensaje);
}
