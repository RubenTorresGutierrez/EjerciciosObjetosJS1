/**
*   @file ejercicio11
*   @description Crear una función JavaScript para ver si una fecha que se le pasa como parámetro es correcta. Un año es bisiesto si es divisible por 400, o si es divisible por 4 pero no por 100.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

// Comprobación de que la fecha es correcta en el ejercicio anterior

function comprobarBisiesto(){

    let fecha = prompt('Introduce la fecha (dd/mm/aaaa)');
    fecha = fecha.split('/');
    let aaaa = fecha[2];

    if(aaaa % 400 == 0 || aaaa % 4 == 0 && aaaa % 100 != 0)
        return true;
    return false;

}

if(comprobarBisiesto())
    console.log('Es bisiesto');
else console.log('NO es bisiesto');