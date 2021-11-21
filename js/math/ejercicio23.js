/**
*   @file ejercicio23
*   @description Ingresar por teclado un valor y luego mostrar la raíz cuadrada de dicho valor.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let raiz = (numero => Math.sqrt(numero));
let numero = parseInt(prompt('Introduce un número:'));

alert(`La raíz cuadrada de ${numero} es: ${raiz(numero)}`);