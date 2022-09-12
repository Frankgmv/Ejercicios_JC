
// como acceder a los valores de un object

const barriosDelNorte={
    barrio1: 'Bello',
    barrio2: 'Machado',
    barrio3: 'Zamora',
    barrio4: 'Paris',
    barrio5: 'Madera'
}

// sintaxis de puntos


let {barrio1, barrio2} = barriosDelNorte;

console.log(barriosDelNorte.barrio1);
console.log(barriosDelNorte.barrio2);
console.log(barriosDelNorte.barrio3);
console.log(barriosDelNorte.barrio4);

console.log(`el barrio numero 5 es ${barriosDelNorte.barrio5}`)

// corchetes

console.log(barriosDelNorte['barrio2'])

console.log(barrio1)