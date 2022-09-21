
// lecciones de Jacobo Graces

addEventListener('load', iniciar);

function iniciar() {

    document.querySelector("#escuchar").addEventListener('mousedown', mousePresionado);
    document.querySelector("#escuchar2").addEventListener('mouseup', soltarMouse);
    document.querySelector("#escuchar3").addEventListener('click', click);
    document.querySelector("#escuchar4").addEventListener('touchstart', touchstart);
    document.querySelector("#escuchar5").addEventListener('touchend', touchend);
    document.querySelector("#keydown").addEventListener('keydown', keydown);
    document.querySelector("#submit").addEventListener('submit', submit);

}
function submit(e) {
    e.preventDefault();
    console.log("enviaste el formulario");
}

function keydown(e) {
    console.log("Presionaste: " + e.code);
}

function touchend() {
    console.log("Dejaste de tocar la pantalla");
}
function touchstart() {
    console.log("Me tocas");
}

function click() {
    console.log("me presionas");
}

function mousePresionado() {
    console.log("Por que me pisas");
}

function soltarMouse() {
    console.log("Por que me sueltas");
}

var clients = [];


clients.push({nombre: "frank", edad:15})
clients.push({nombre: "Mateo", edad:13})
clients.push({nombre: "Nacho", edad:17})

console.log(clients);


var nombres = clients.map( product => product.nombre+ " amigo");
var edades = clients.map( product => product.edad);


console.table(nombres);
console.table(edades);


// es como un array asociativo
var map = new Map();


map.set("1", 1)
map.set("a", 'a')
map.set("precio", 200)

console.log(map.get('a'))
console.log(map.get('1'))
console.log(map.get('precio'))
console.log(map.size)
console.log(map);
console.log(map.delete('a'))



var myConjunto = new Set();

myConjunto.add(1)
myConjunto.add(2)
myConjunto.add(2)

myConjunto.delete(2)
console.log(myConjunto.has(1));


console.log(myConjunto);