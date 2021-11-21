/**
*   @file ejercicio21
*   @description Rellenar una primitiva, para ello sacar 6 números aleatorios del 1 al 49.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let primitiva = [];

for (let i = 0; i < 6; i++)
    primitiva.push(Math.floor(Math.random() * 49) + 1);

for (let i = 0; i < 6; i++)
    console.log(primitiva[i]);