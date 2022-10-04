const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audífonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// comprobar su existe un valor en un []
let resultado = meses.includes("Marzo")
console.log(resultado)

// comprobar su existe un valor en un {}

let result = carrito.some(producto => producto.nombre == 'Celular' );

console.log(result)

// .some soporta objetos y arreglos
let result2 = meses.some(producto => producto == 'Enero');
console.log(result2)


