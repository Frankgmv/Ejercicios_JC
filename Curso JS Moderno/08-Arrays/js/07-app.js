// continue

// forma declarativa de añadir valores a arrays
var canasta = [];

producto0 = {
    nombre: 'celular',
    precio: 900

};

producto1 = {
    nombre: 'Tv',
    precio: 12000
};


// spread operator, hace lo mismo que el push o unshift dependiendo de la posición

// .push()
canasta = [...canasta, producto0];
canasta = [...canasta, producto1];

// .unshift()
canasta = [producto0, ...canasta];
canasta = [producto1, ...canasta];

// eliminar elementos de un array con rangos, el primer numero es el indice en donde inicia, el segundo numero es cuanto es el numero de elementos a eliminar

let del  = [1,22,34,34,53,43,34];



// del.pop()
// del.shift()
// corta index específicos
del.splice(0,4)

console.table(del)


// carritoDeCompras.splice(0,)
console.table(canasta)