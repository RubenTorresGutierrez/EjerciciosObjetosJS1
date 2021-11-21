/**
*   @file ejercicio17
*   @description Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
*       El valor acumulado de todos los elementos del vector.
*       El valor acumulado de los elementos del vector que sean mayores a 36.
*       Cantidad de valores mayores a 50.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let vector = [];

for (let i = 0; i < 8; i++)
    vector.push(parseInt(prompt(`Introduce el elemento número ${i+1}:`)));

// a) El valor acumulado de todos los elementos del vector.
console.log('~~ El valor acumulado de todos los elementos del vector ~~');
console.log(vector.reduce((x, y) => x + y));

// b) El valor acumulado de los elementos del vector que sean mayores a 36.
console.log('~~ El valor acumulado de los elementos del vector que sean mayores a 36 ~~');
let sum = 0;
for (const numero of vector)
    if(numero > 36)
        sum += numero;

console.log(sum);

// c) Cantidad de valores mayores a 50.
console.log('~~ Cantidad de valores mayores a 50 ~~');
let mayores = 0;
for (const numero of vector)
    if(numero > 50)
        mayores++;

console.log(mayores);