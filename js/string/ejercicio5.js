/**
*   @file ejercicio5
*   @description Ingresar una palabra o texto por teclado y determinar si es o no una palabra palíndromo. (Palabra que se lee de igual manera de adelante hacia atrás, que de atrás hacia delante)
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let palabra = prompt('Introduce una palabra:');
let arbalap = palabra.split('').reverse().join('');

if(palabra == arbalap)
    console.log('Palíndromo');
else console.log('NO Palíndromo');