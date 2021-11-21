/**
*   @file ejercicio9
*   @description Confeccionar un programa que muestre en que cuatrimestre del año nos encontramos. Para esto obtener el mes.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

const fecha = new Date();
const mes = fecha.getMonth()+1;

switch(mes){
    case 1:
    case 2:
    case 3:
    case 4:
        alert('Primer cuatrimestre.');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
        alert('Segundo cuatrimestre.');
        break;
    case 9:
    case 10:
    case 11:
    case 12:
        alert('Tercer cuatrimestre.');
        break;
}