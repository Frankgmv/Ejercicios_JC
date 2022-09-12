
// forma de acceder a un array

var numeroDePersonas =[ 1, 2, 3, 4, [ 1, 3, 4, 5 ] ]
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[4[2]]);
console.log(numeros[20]);

/* para saber el numero de datos

para recorrer un array se utiliza for
for es un ciclo

for(inicio;condición;incremento){}
*/

for (let i = 0; i < numeroDePersonas.length; i++) {
    console.log(numeroDePersonas[i]);
}
// remplazar valores
productos[2] = 'arroz'

// gregar valores

numeroDePersonas.push()   //agrega al final

numeroDePersonas.unshift() //agrega al inicio


// forma de agregar declarativa   spread operator

var carritoCompleto = [...carrito, productoNuevo];

// eliminar el ultimo elemento de un array
carritoDeCompras.pop()

// eliminar el 1er elemento de un array
carritoDeCompras.shift()

// eliminar elementos de un array con rangos

carritoDeCompras.splice(0,2)

// destruturing en arrays

carritos = [1, 2, 3, 4, 5, 6]

const [ _1, segundo, tres, ,...sobrantes ] = carritos

/* en la extracción los valores pueden tomar cualquier nombre como: primero, _01, _1 y cuando no necesites los saltas con un espacio
 y el Spred operator(...) recoge todos los datos sobrantes en un array, los
 espacios en comas ( , ) cuentan

 iteración sobre arrays, me va a pasar lo que le pida con for
*/

for(let i = 0 ; i < carrito.length; i++  ){
    console.log(`nombre: ${carrito[i].nombre} precio: ${carrito[i].precio} ` )

}
// .forEach para dar cualquier nombre a la function
carrito.forEach( function (canasta) {
    console.log(`producto: ${canasta.nombre} precio: ${canasta.precio} `)
} )

// .map para crear un  nuevoArray

const nuevoArray = carrito.map( function(producto) {
    return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;
})