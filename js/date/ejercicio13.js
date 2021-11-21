/**
*   @file ejercicio13
*   @description El método getDay obtiene el día de la semana como un número comprendido entre 0 (domingo) y 6 (sábado). (Este método es diferente del método getDate, que obtiene el día del mes como un número comprendido entre 1 y 31).
*   Hacer un programa que diga la fecha del Día de Acción de Gracias, que en Estados Unidos es el cuarto jueves de noviembre. El script deberá encontrar el 1 de noviembre del año actual, después busca el primer jueves y le agrega tres semanas.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

// Obtener el día 1 de noviembre del año actual
let fecha = new Date(new Date().getFullYear(), 10, 1);

// Se le asigna el primer jueves
fecha.setDate(fecha.getDay() + (4 - fecha.getDay())); // Dia de la semana actual + (Jueves - Dia de la semana actual)

// Sumarle 3 semanas
fecha.setDate(fecha.getDay() + (3 * 7));

console.log(`El día de Acción de Gracias en ${fecha.getFullYear()} cae en ${fecha.getDate()} del ${fecha.getMonth() + 1}`);