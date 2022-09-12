//sumas
var n1 = 22;
var n2 = 33;
var n3 = -18
let n4 = 2

var texto = "resultado: ";

var sumas = n1 + n2;

console.log( texto + sumas );

//Restas

let resta = n3 - n1;
console.log( texto + resta );

let division = n1 / n2;
console.log( texto + division );

//multiplicaccion
let multiplicacion = n1 * n2;
console.log( texto + multiplicacion );



function M (g){
    console.log(g)
}

function Estaciones (nombre, horas, conductores){
    this.nombre = nombre;
    this.horas = horas;
    this.conductores = conductores;
}

Estaciones('madera', 30, 'antonio' )

var Estacion1 = new Estaciones('madera', 30, 'antonio' ) 


var arreglo = [12, 22, 34, 55]

arreglo.unshift(Estacion1) 

arreglo.push(Estacion1)
arreglo[0] = 211

let [uno, dos, tres, cuatro]= arreglo

M(arreglo)

