/**
*   @file ejercicio8
*   @description Codifique un programa que permita cargar una oración por teclado, luego mostrar cada palabra ingresada en una línea distinta.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let cadena = prompt('Introduce una cadena:');
let palabras = cadena.trim().split(' ');
for (const palabra of palabras) {
    console.log(palabra);
}