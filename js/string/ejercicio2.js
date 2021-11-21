/**
*   @file ejercicio2
*   @description Ingresar una serie de nombres por teclado hasta que se cargue la palabra Fin, y mostrar cuántos nombres se ingresaron.
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

    nombres.push(prompt('Introduce un nombre:'));

}while(nombres[nombres.length - 1] != 'Fin')

console.log(nombres.length - 1);