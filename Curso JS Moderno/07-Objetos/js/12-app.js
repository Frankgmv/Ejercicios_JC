
function Cliente (nombre , edad , sueldo ){
    this.nombre = nombre;
    this.edad = edad;
    this.sueldo = sueldo;
}


let cliente1 = new Cliente('Juan', 20, 10000);
let cliente2 = new Cliente('Mateo', 31, 9000);
let cliente3 = new Cliente('Sofia', 19, 2100);
let cliente4 = new Cliente('Maria', 21, 600);


let arry = [];

arry.push(cliente1);
arry.push(cliente2);
arry.push(cliente3);
arry.push(cliente4);



arry.forEach((clave)=>{
    console.log(clave)
})

