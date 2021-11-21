/**
*   @file ejercicio16
*   @description Leer una cadena de texto en un formulario y generar un array con la función split(). Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra, última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la a la z y las palabras ordenadas de la z a la a.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let cadena = prompt('Introduce una cadena:');
let array_cadena = cadena.trim().split(' ');

// a) Número de palabras
console.log('~~~~~~~~~~~~~~ Número de palabras ~~~~~~~~~~~~~~');
console.log(array_cadena.length);

// b) Primera palabra
console.log('~~~~~~~~~~~~~~ Primera palabra ~~~~~~~~~~~~~~');
console.log(array_cadena[0]);

// c) Última palabra
console.log('~~~~~~~~~~~~~~ Última palabra ~~~~~~~~~~~~~~');
console.log(array_cadena[array_cadena.length - 1]);

// d) Las palabras colocadas en orden inverso
console.log('~~~~~~~~ Las palabras colocadas en orden inverso ~~~~~~~~');
for(let i = array_cadena.length - 1; i >= 0; i--)
    console.log(array_cadena[i]);

// e) Las palabras ordenadas de la a la z
console.log('~~~~~~~~ Las palabras ordenadas de la a la z ~~~~~~~~');
let arrayOrdenado = ordenacion(array_cadena);
for (let i = 0; i < arrayOrdenado.length; i++)
    console.log(arrayOrdenado[i]);

// f) Las palabras ordenadas de la z a la a
console.log('~~~~~~~~ Las palabras ordenadas de la z a la a ~~~~~~~~');
for(let i = arrayOrdenado.length - 1; i >= 0; i--)
    console.log(arrayOrdenado[i]);

    
function ordenacion(array){

    for(let i=0;i<array.length-1;i++)
        for(let j=0;j<array.length-1-i;j++)
            if(array[j]>array[j+1])
                [array[j], array[j+1]] = [array[j+1], array[j]];
    return array;
    
}