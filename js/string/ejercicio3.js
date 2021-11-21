/**
*   @file ejercicio3
*   @description Igual al anterior, pero que termine la aplicación sin contemplar mayúsculas ni minúsculas. Es decir que para salir se pueda teclear fin, Fin o FIN.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let nombres = [];

do{

    nombres.push(prompt('Introduce un nombre:').toUpperCase());

}while(nombres[nombres.length - 1] != 'FIN')

console.log(nombres.length - 1);