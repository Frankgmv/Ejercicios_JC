const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = [ "agosto" , "septiembre", "octubre", "noviembre", "diciembre"];

let mesesCompletos = meses1.concat(meses2, "MesInventado")

console.table(mesesCompletos);



// se puede usar el spread operator pero tiene que ser un array, ejemplo de lo que no se debe hacer
let newMes = "mesInventado";
let mesesCompletos2 = [...meses1, ...meses2, ...newMes]

console.table(mesesCompletos2);


/* 
.includes()
.some()
.findIndex()
.reduce()
.filter()
.find()
.every()
.concat()
*/

