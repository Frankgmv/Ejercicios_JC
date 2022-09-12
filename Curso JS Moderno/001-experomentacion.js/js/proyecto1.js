/*  With Shell and Null
-agregar varios prompt al objeto  pendiente

// -crear un objeto con anidados que contengar arrays o viseverda
// -aplicar uso stricto
// -agregar varibles y eliminarlas
// -congelar o sellar objeto
// - aplicar destructuring(sacar, agregar, eliminar) a el objeto y los arrays
-copiar variables del objeto creado a uno nuevo de las dos formas
-utilizar la palabra this
-hacer un objeto contructor
-obtener todos los datos a parte como: llaves, valores y entradas
-sacar un array e iterarlo con el forEach y el map y que nos muestre su indice
-crear una function que nos haga tareas simples (exprecion - declaration functions) y que tenga sus respectivos valores por default
-utiza varias funciones que se llamen
-utiza varias funciones que retornen valores
-utilizar if, switch y el operador ternario
-Mostrar los diferentes dotos por pantalla iterando con for, while, do while, forEach, map, for of, for in de las dos manera
*/

'use strict';

var EstructuraEmpleados = {
    CEO: { nombre: 'Marcos', edad: 29, sueldo: 10000 },
    contador: { nombre: 'Maria', edad: 34, sueldo: 3000 },
    jefeDePersonal: { nombre: 'Mathias', edad: 24, sueldo: 4500 },
    ConductoresMaquinaria: {
        conductor1: { nombre: 'Jesús', edad: 54, sueldo: 2300 },
        conductor2: { nombre: 'Mateo', edad: 25, sueldo: 2500 },
        conductor3: { nombre: 'Nicolás', edad: 49, sueldo: 2100 },
    },
    EmpleadoFavor: { nombre: 'carlos', edad: 35, sueldo: 5000 },
}


EstructuraEmpleados.conductoresVolqueta = {
    conduct1: { nombre: 'fancisco', edad: 40, sueldo: 1600 },
    conduct2: { nombre: 'Gullermo', edad: 59, sueldo: 1800 },
    conduct3: { nombre: 'domingo', edad: 33, sueldo: 1490 },
}
var inventario = ['palas', 'guantes', 'sogas', 'limpiador', 'voquillas', ['llavePerica', 'desarmador', 'alicates', 'pinzas'], 'botasPantaneras'];

delete EstructuraEmpleados.EmpleadoFavor;

Object.seal(EstructuraEmpleados);

// destructuring

let { jefeDePersonal, ConductoresMaquinaria: { conductor1, conductor2, conductor3 }, conductoresVolqueta: { conduct1, conduct2, conduct3 } } = EstructuraEmpleados;


let [herr_1, , herr_3, [h_Repar1, ...T_h_Reparacion]] = inventario;
let prestamosActuales = [];


function Recoger (){
    document.getElementById('').value;
}









/*
Arrays xD
let prestamosActuales = [];
let nombres = [];
let totalHerramientas = [];
function PrestamoHerramientas(datos, herramient) {
    Object.keys(datos).forEach( i => {
        nombres.push(datos[i])
    })
    totalHerramientas.push(herramient)
    prestamosActuales.push(nombres.concat(totalHerramientas))
}
let Persona_herramientaPrestada = PrestamoHerramientas(jefeDePersonal, herr_1);
console.table(prestamosActuales);
*/
