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

/* No entendi como hacer para enviar un alert con un
 mensaje determinado si 3 condicionales dan como resultado true.
  Ver ejemplo a continuacion (no me sale): */
if (acertijo === "si") {
  alert("Enhorabuena, acertaste 1 pregunta. Tienes un 2!");
} else if (acertijo && historia === "si" && "si") {
  alert("Enhorabuena, acertaste 2 preguntas. Tienes un 4!");
} else if (acertijo && historia && deportes === "si" && "si" && "si") {
  alert("Enhorabuena, acertaste a todas las preguntas. Tienes un optimo!");
} else {
  alert("Has fallado todas las preguntas. Desapruebas este examen");
}
