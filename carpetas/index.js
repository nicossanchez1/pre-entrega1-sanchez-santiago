/*  >< */

/* let nombre = prompt("ingrese su nombre");
if (nombre === "nicolas" || nombre.toLowerCase === "nicolas") {
  alert("es un cra");
} else {
  alert("no so un cra");
} */

//---------------

/*
let nombre = prompt("ingrese su nombre");
if (nombre.toLowerCase() === "nicolas") {
  alert("El es nicolas");
} else {
  alert("El no es nicolas");
} 
 */

//---------------

/* 
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

if (acertijo === "si") {
  alert("Enhorabuena, acertaste 1 pregunta. Tienes un 2!");
} else if (acertijo && historia === "si" && "si") {
  alert("Enhorabuena, acertaste 2 preguntas. Tienes un 4!");
} else if (acertijo && historia && deportes === "si" && "si" && "si") {
  alert("Enhorabuena, acertaste a todas las preguntas. Tienes un optimo!");
} else {
  alert("Has fallado todas las preguntas. Desapruebas este examen");
}
*/

//---------------

/* 
  for (let i = 0; i < 100; i++) {
   console.log("hola");
 }
 */

//---------------

//  for(let turno = 1; turno <= 7; turno++){
//   let nombre = prompt("Ingrese su nombre");
//   let mensaje = `Turno #${turno} Nombre: ${nombre}`;
//   alert(mensaje);
// }

// for (let i = 1; i <= 10; i++) {
//   if(i % 2 === 1){
//     continue;
//   }

//   console.log(i);
// }

//-------------------------------------------------
//COTIZACIÓN DOLAR BLUE Y EXPRESION EN MONEDA "ARS:
//-------------------------------------------------
// let numero = parseFloat(prompt("Ingrese monto a Cotizar (dolar blue)"));
// let i = parseFloat(386.65);
// let resultado = numero * i;
// const number = 123456.789;
// let formateador=  new Intl.NumberFormat('de-DE', {
//    style: 'currency',
//    currency: 'ars' });
//    let resultadoFormateado= formateador.format(resultado);
// alert(`${numero} X ${i} = $${resultadoFormateado}`);

//ACTIVIDAD 1-A WORKBOOK
// let numero = parseInt(prompt("ingrese numero"));
// for (let i = 1; i <= 10; i++) {
//   let resultado = i * numero;
//   alert(`${i} X ${numero} = ${resultado}`);
// }

//---------------------------------------
//ACTIVIDAD 1-B WORKBOOK
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

// ACTIVIDAD 1-C WORKBOOK

for (let i = 1; i <= 1000; i.none) {
  let ingresoSaludos = prompt("Ingrese cantidad de saludos que desea");
  let sumaDeSaludos = ingresoSaludos;
  if (sumaDeSaludos != 0 | "") {
    saludar = "hola ";
    saludar.repeat(ingresoSaludos);
  } else alert("usted no pidio ninguna cantidad de saludos");
  let mensaje = saludar.repeat(sumaDeSaludos);
  alert(mensaje);
}



// ----------------------------
// CLASE 3 BLOQUE 1 Y 2
// ----------------------------
// class producto {
//   constructor(nombre, precio, cantidad) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
//   }

//   vender() {
//     this.cantidad -= 1;
//   }
// }

// const producto1 = new producto("monitor", 500, 4);
// console.log(producto1);
// producto1.vender();
// console.log(producto1);
