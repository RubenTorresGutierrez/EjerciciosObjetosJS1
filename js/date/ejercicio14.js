/**
*   @file ejercicio14
*   @description Calcular el tiempo restante en milisegundos entre la fecha actual y la fecha Maya del fin del mundo (21 de Diciembre de 2012).
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let fechaMaya = new Date(2012, 11, 21);
let fecha = new Date();
console.log(`Desde el 21 de Diciembre de 2012 han pasado ${fecha.getTime() - fechaMaya.getTime()} milisegundos`);