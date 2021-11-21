/**
*   @file ejercicio18
*   @description Realizar un programa que pida la carga de dos vectores numéricos.  Obtener la suma de los dos vectores, dicho resultado guardarlo en un tercer vector del mismo tamaño. Sumar componente a componente. El tamaño del vector es a elección del usuario.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let vector1 = [1, 1, 1, 1, 1];
let vector2 = [2, 2, 2, 2, 2];
let vector3 = [];

for (let i = 0; i < vector1.length; i++) {
    vector3[i] = vector1[i] + vector2[i];
    
}

for (const num of vector3)
    console.log(num);