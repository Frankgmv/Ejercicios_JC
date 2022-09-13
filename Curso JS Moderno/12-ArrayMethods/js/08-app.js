const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audífonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// spread operator no modifica el array original y meses.push("Agosto") si
// meses1 = [...meses, "Agosto"]
// console.table(meses1)

// carrito2 =[...carrito, {nombre:"Teclado partido", precio: 800}]
// console.table(carrito2)













































console.log(meses.includes("Enero"))

console.log( meses.some(producto => producto == 'Enero'))


console.log( carrito.some(producto => producto.nombre == 'Celular'))


console.log( carrito.findIndex(producto => producto.nombre == 'Celular'))

console.log( carrito.reduce((total, producto) => total + producto.precio, 0))

console.log( carrito.find(producto => producto.nombre == 'Celular'))

console.log( carrito.filter(producto => producto.precio > 600))

console.log( carrito.every(producto => producto.precio > 100))














