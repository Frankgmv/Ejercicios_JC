"use strict";

const precios = {
    camisas: 1000, 
    pantalones: 2032
}


Object.seal(precios);

precios.camisas = 200;

Object.freeze(precios);

console.log(precios);
console.log(Object.freeze(precios));


