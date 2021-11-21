/**
*   @file ejercicio19
*   @description Solicitar una frase desde teclado, almacenar cada palabra en un array y mostrar los siguientes datos:
*       - La primera palabra de la frase.
*       - La última palabra de la frase.
*       - El número de palabras de la frase.
*       - Todas las palabras ordenadas alfabéticamente.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let frase = prompt('Introduce una frase:');
//let frase = "Oh brave new world that has such people in it.";
let array = frase.split(' ');

console.log('Primera palabra de la frase:');
console.log(array[0]);
console.log('Última palabra de la frase:');
console.log(array[array.length-1]);
console.log('Número de palabras de la frase:');
console.log(array.length);
console.log('Palabras ordenadas alfabéticamente:');
array = ordenacion(array);
for(let i=0;i<array.length;i++)
    console.log(array[i]);

function ordenacion(array){

    for(let i=0;i<array.length-1;i++)
        for(let j=0;j<array.length-1-i;j++)
            if(array[j]>array[j+1])
                [array[j], array[j+1]] = [array[j+1], array[j]];
    return array;
    
}
 