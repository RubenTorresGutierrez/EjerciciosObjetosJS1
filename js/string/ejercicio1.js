/**
*   @file ejercicio1
*   @description Solicitar una cadena de texto desde teclado, presentar el número de caracteres que contiene y presentar la propia cadena en cursiva, en negrita y en tachado.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let cadena = prompt('Introduce una cadena:');

console.log(cadena.length);

// Crear p
let p = document.createElement('p');
document.body.appendChild(p);

// Crear i
let i = document.createElement('i');

// Crear b
let b = document.createElement('b');

// Crear strike
let strike = document.createElement('strike');

// Crear br
let br1 = document.createElement('br');
let br2 = document.createElement('br');

// Crear nodos
let nodo1 = document.createTextNode(cadena);
let nodo2 = document.createTextNode(cadena);
let nodo3 = document.createTextNode(cadena);

// Añadir nodo a los elementos
i.appendChild(nodo1);
b.appendChild(nodo2);
strike.appendChild(nodo3);

// Añadirlos al p
p.appendChild(i);
p.appendChild(br1);
p.appendChild(b);
p.appendChild(br2);
p.appendChild(strike);