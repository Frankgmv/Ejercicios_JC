/*
var canasta = []

function Cosa (nombre, precio , cantidad, caducación) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.caducación = caducación;
}

let producto1 = new Cosa ('espaguetti', 3000, 3, 12_04_23)
let producto2 = new Cosa ('salsa', 4000, 5, 12_05_24)
let producto3 = new Cosa ('sal', 2900, 3, 25_09_21)
let producto4 = new Cosa ('azúcar', 3000, 8, 12_12_34)

var canastaCompleta =  [...canasta, producto1, producto2, producto3, producto4]




// console.log(canastaCompleta)

const [ _0, , _2, ...resto  ] = canastaCompleta





console.log(_0)
console.log(_2)
// console.log(...resto)
console.log()  */

const casas = [12, 21, 23, 32, 43, 34, 54, 45, 56, 54 ]

// casas[0] = 13

// casas.push(1)
// casas.unshift(2)
var [ uno, ,dos, , cuatro  ] = casas

for(let i = 0; i < casas.length ; i++){
    console.log(`a`)
}





console.log(casas)