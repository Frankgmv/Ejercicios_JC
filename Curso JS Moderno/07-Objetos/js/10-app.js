// unir dos objetos  spread operator

var cliente1 = {
    Nombre: 'juan',
    Edad: 28,
}

var casa_clienta1 = {
    Direcion: "Cr e4 # 21-34",
    costo : 12333,
}


// let TodosLosClientes = Object.assign(cliente2, cliente1); //spread operator

// let collar = { cliente1, cliente2 };

let TodosLosClientes = { ...cliente1, ...casa_clienta1 }; // rest operator

console.log(TodosLosClientes);
