/**
*   @file ejercicio12
*   @description Crear parte de un formulario que utilizaría un videoclub, en el que se pida titulo de la película y cogiendo la fecha del sistema, nos aparezca también la fecha de devolución (tres días después).
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let fechaDevolucion = new Date();
fechaDevolucion.setDate(fechaDevolucion.getDate() + 3)
console.log(`La fecha de devolución es para el ${fechaDevolucion.getDate()} de ${fechaDevolucion.getMonth() + 1} del ${fechaDevolucion.getFullYear()}`);