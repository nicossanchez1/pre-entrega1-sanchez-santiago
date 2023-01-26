/*  >< */

/* let nombre = prompt("ingrese su nombre");
if (nombre === "nicolas" || nombre.toLowerCase === "nicolas") {
  alert("es un cra");
} else {
  alert("no so un cra");
} */

/*
let nombre = prompt("ingrese su nombre");
if (nombre.toLowerCase() === "nicolas") {
  alert("es un cra");
} else {
  alert("no so un cra");
} 
 */

/*
 for (let i = 0; i < 10; i++) {
    let resultado = 
}
*/

let acertijo = prompt("1+1 es igual a 2?");
if (acertijo === "si") {
  alert("Respuesta correcta");
} else {
  alert("INCORRECTO!");
}
let historia = prompt("Argentina se independizo en 1810?");
if (historia === "si") {
  alert("Respuesta correcta");
} else {
  alert("INCORRECTO!");
}
let deportes = prompt("Messi es el numero 1?");
if (deportes === "si") {
  alert("Respuesta correcta");
} else {
  alert("INCORRECTO!");
}

if (acertijo & historia & deportes === isNaN("si")) {
  alert("has fallado, desapruebas este examen");
} else alert("Enhorabuena, acertaste a todas las preguntas. Tienes un optimo!");
