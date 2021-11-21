/**
*   @file ejercicio15
*   @description Hacer un programa en javascript para mostrar en una página el reloj y que se vaya actualizando. Puedes usar el método setTimeout.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

function  reloj(){

    let fecha = new Date();
    let h = fecha.getHours();
    let m = fecha.getMinutes();
    let s = fecha.getSeconds();
    m = validarTiempo(m);
    s = validarTiempo(s);
    document.body.innerHTML = h + ':' + m + ':' + s;
    setTimeout(reloj, 1000);

}

function validarTiempo(tiempo) {
    if (tiempo < 10)
        tiempo = '0' + tiempo;
    return tiempo;
}

reloj();