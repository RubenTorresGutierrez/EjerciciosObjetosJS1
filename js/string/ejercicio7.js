/**
*   @file ejercicio7
*   @description Cargar un String por teclado e implementar las siguientes funciones:
*       a) Imprimir la primera mitad de los caracteres de la cadena.
*       b) Imprimir el último carácter.
*       c) Imprimirlo en forma inversa.
*       d) Imprimir cada carácter del String separado con un guión.
*       e) Imprimir la cantidad de vocales almacenadas.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let cadena = prompt('Introduce una cadena:');
let vocales = 0;

// a) Imprimir la primera mitad de los caracteres de la cadena.
console.log(cadena.substring(0, cadena.length / 2));

// b) Imprimir el último carácter.
console.log(cadena.charAt(cadena.length - 1));

// c) Imprimirlo en forma inversa.
console.log(cadena.split('').reverse().join(''));

// d) Imprimir cada carácter del String separado con un guión.
console.log(cadena.split('').join('-'));

// e) Imprimir la cantidad de vocales almacenadas.
for (let i = 0; i < cadena.length; i++)
    if(cadena.charAt(i).toUpperCase() == 'A' || cadena.charAt(i).toUpperCase() == 'E' || cadena.charAt(i).toUpperCase() == 'I' || cadena.charAt(i).toUpperCase() == 'O' || cadena.charAt(i).toUpperCase() == 'U')
        vocales++;
console.log(vocales);