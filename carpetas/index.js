/* PRE-ENTREGA1-SANCHEZ-SANTIAGO,NICOLAS */

// -------------------------------------------------
// COTIZACIÓN DOLAR BLUE Y EXPRESION EN MONEDA "ARS:
// -------------------------------------------------
// let numero = parseFloat(prompt("Ingrese monto a Cotizar (dolar blue)"));
// let i = parseFloat(386.65);
// let resultado = numero * i;
// let formateador = new Intl.NumberFormat("de-DE", {
//   style: "currency",
//   currency: "ARS",
// });
// let resultadoFormateado = formateador.format(resultado);
// alert(`${numero} X ${i} = $${resultadoFormateado}`);

// ------------------------
// SIMULADOR EXAMEN INGRESO
// ------------------------
// let opAcertijo = 1;
// let opHistoria = 1;
// let opDeportes = 1;
// let si = "si";

// let acertijo = prompt("Cada pregunta suma 10 puntos. Comencemos. 1+1 es igual a 2?");
// if (acertijo.toLowerCase() === "si") {
//   alert("Enhorabuena, sumaste 10 puntos!");
//   opAcertijo--;
// } else {
//   alert("INCORRECTO!");
// }
// let historia = prompt("Argentina se independizo en 1810?");
// if (historia.toLowerCase() === "si") {
//   alert("Enhorabuena, sumaste 10 puntos!");
//   opHistoria--;
// } else {
//   alert("INCORRECTO!");
// }
// let deportes = prompt("Messi es el numero 1?");
// if (deportes.toLowerCase() === "si") {
//   alert("Enhorabuena, sumaste 10 puntos!");
//   opDeportes--;
// } else {
//   alert("INCORRECTO!");
// }

// if (opAcertijo == 0) {
//   acertijo = 10;
// } else {
//   acertijo = 0;
// }
// if (opHistoria == 0) {
//   historia = 10;
// } else {
//   historia = 0;
// }
// if (opDeportes == 0) {
//   deportes = 10;
// } else {
//   deportes = 0;
// }
// let resultado = acertijo + historia + deportes;
// if (resultado === 30) {
//   alert(`sumaste ${resultado} puntos: OBTUVISTE UN OPTIMO`);
// }

// if (resultado === 20) {
//   alert(`sumaste ${resultado} puntos: OBTUVISTE UN REGULAR`);
// }

// if (resultado === 10) {
//   alert(`sumaste ${resultado} puntos: OBTUVISTE UN DESAPROBADO`);
// }

// ---------------------
// UTILIZACIÓN CICLO FOR
// ---------------------
// for (let i = 1; i <= 1000; i.none) {
//   let ingresoSaludos = prompt("Ingrese cantidad de saludos que desea");
//   let sumaDeSaludos = ingresoSaludos;
//   if (sumaDeSaludos != 0 | "") {
//     saludar = "hola ";
//     saludar.repeat(ingresoSaludos);
//   } else alert("usted no pidio ninguna cantidad de saludos");
//   let mensaje = saludar.repeat(sumaDeSaludos);
//   alert(mensaje);
// }

//------------------
//UTILIZACIÓN WHILE
// -----------------
// let nombre = prompt("ingrese usuario");
// while (nombre != "ESC") {
//   switch (nombre) {
//     case "juan":
//       alert("hola juan");
//       break;

//     case "marcos":
//       alert("hola marcos");
//       break;

//     default:
//       alert("Usuario incorrecto");
//       break;
//   }
//   nombre = prompt("ingrese usuario");
// }
