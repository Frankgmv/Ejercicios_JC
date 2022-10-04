const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audífonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Encontrar la posición de un elemento en un array

// 'Si retorna -1 no encontró la posición del elemento'

let indiceE = meses.findIndex(mes => mes == 'Enero');
let indiceD = meses.findIndex(mes => mes == 'Diciembre');

console.log(indiceE)
console.log(indiceD)

let indiceTablet = carrito.findIndex(product => product.nombre == 'Tablet');
let celular = carrito.findIndex(product => product.nombre == 'Celular' );

console.log(indiceTablet)
console.log(celular)