/**
*   @file ejercicio20
*   @description Confeccionar un programa que permita cargar un valor comprendido entre 1 y 10. Luego generar un valor aleatorio entre 1 y 10, mostrar un mensaje con el número sorteado e indicar si ganó o perdió.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let num1;
let num2 = Math.floor(Math.random() * 10) + 1;

do{

    num1 = parseInt(prompt('Introduce un número entre 1 y 10:'));

}while(num1 < 1 || num1 > 10)

if(num1 == num2)
    console.log('HAS ACERTADO!!!!');
else console.log('Sigue intentándolo.');
console.log(`Tu número: ${num1}`);
console.log(`Número aleatorio: ${num2}`);