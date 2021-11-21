/**
*   @file ejercicio22
*   @description Confeccionar un programa que solicite el ingreso de un número y nos muestre dicho valor elevado a la tercera potencia.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let elevado = (numero => numero * numero * numero);
let numero = parseInt(prompt('Ingrese un número:'));

alert(`El número ${numero} elevado a la 3ª potencia da: ${elevado(numero)}`);