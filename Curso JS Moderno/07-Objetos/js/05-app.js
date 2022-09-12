let Familia={
    Madre:{
        Nombre : 'Diana',
        Trabajo : 'electricista',
        Edad : 38,
    },
    Hermano:{
        Nombre: 'Mateo',
        Trabajo: 'vagar',
        Edad: '16',
    },
    Prima:{
        Nombre: 'Sofia',
        Trabajo: 'Ayudar',
        Edad: '13',
    },
}

Familia.Padre = {
    Nombre : 'Nicolás',
    Trabajo : 'Ayudante',
    Edad : '47',
    Suelto: 940000, 
}

console.log(Familia);

let { Madre:{Nombre}, Hermano:{Trabajo}, Prima:{Edad}, Padre:{Suelto}} = Familia;

console.log(Nombre);
console.log(Trabajo);
console.log(Edad);
console.log(Suelto);