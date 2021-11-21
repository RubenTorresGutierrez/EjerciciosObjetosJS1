/**
*   @file ejercicio10
*   @description Calcular la edad en JavaScript: https://desarrolloweb.com/articulos/1190.php
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

function calcularEdad(){

    let fechaNac = prompt('Introduce tu fecha de nacimiento (dd/mm/aaaa):');
    let fechaAct = new Date();

    //calculo la fecha que recibo
    //La descompongo en un array 
    let array_fecha = fechaNac.split('/');

    //si el array no tiene tres partes, la fecha es incorrecta 
    if(array_fecha.length != 3)
        return false;

    let dd = parseInt(array_fecha[0]);
    let mm = parseInt(array_fecha[1]);
    let aaaa = parseInt(array_fecha[2]);

    //compruebo que los año, mes, dia son correctos 
    if(isNaN(dd) || isNaN(mm) || isNaN(aaaa))
        return false;
    
    //si el año de la fecha que recibo solo tiene 2 cifras hay que cambiarlo a 4 
    if(aaaa <= 99)
        aaaa += 1900;
    
    //resto los años de las dos fechas 
    let edad = fechaAct.getFullYear() - aaaa - 1; //-1 porque no se si ha cumplido años ya este año 

    //si resto los meses y me da menor que 0 entonces no ha cumplido años. Si da mayor si ha cumplido 
    if(fechaAct.getMonth() + 1 - mm < 0) //+ 1 porque los meses empiezan en 0 
        return edad;
    if(fechaAct.getMonth() + 1 - mm > 0)
        return edad + 1;
    
    //si resto los dias y me da menor que 0 entonces no ha cumplido años. Si da mayor o igual si ha cumplido 
    if(fechaAct.getUTCDate() - dd >= 0)
        return edad + 1;
    return edad;

}

let edad = calcularEdad()

if(!edad)
    console.log('Fecha introducida incorrecta');
else console.log(`Tienes ${edad} años.`);