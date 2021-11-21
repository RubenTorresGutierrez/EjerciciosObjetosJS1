/**
*   @file ejercicio4
*   @description Realizar la búsqueda de un string clave en un string fuente. Se deberá ingresar una frase o texto (fuente) y luego la clave a buscar. En caso de encontrarla, imprimir la posición, de lo contrario una leyenda.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let fuente = prompt('Introduce una fuente:');
let clave = prompt('Introduce una clave');

if(fuente.includes(clave))
    console.log(fuente.indexOf(clave));
else console.log('Leyenda');