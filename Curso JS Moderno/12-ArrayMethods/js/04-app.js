const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audífonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]



let resultado = carrito.filter( product => product.precio > 400)

console.table(resultado)

let resultado2 = carrito.filter( product => product.precio < 600)

console.table(resultado2)

let resultado3 = carrito.filter( product => product.nombre !== "Audífonos")

console.table(resultado3)