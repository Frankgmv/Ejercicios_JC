
const producto = "Monitor de 20 Pulgadas";

// REEMPLAZAR TEXTO 

console.log(producto);
console.log(producto.replace('Pulgadas', ' " '));
console.log(producto.replace('Monitor', 'Monitor Curvo'));


console.log(producto.replace("Pulgadas", 'hps "'))

// .slice PARA CORTAR PARTES DE UNA STRING

console.log(producto.slice(0, 10));

// ALTERNATIVA A SLICE (no importa el orden del numero)

console.log(producto.substring(10, 0));

// PARA CORTAR 1 LETRA (estilo google acc)

console.log(producto.charAt(0));

