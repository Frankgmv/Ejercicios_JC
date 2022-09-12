// functions with return   . funciones con retorno

// código más avanzado

let total = 0;

function AgregarCanasta(precio){
    return total += precio 
}

console.log(AgregarCanasta(1));
console.log(AgregarCanasta(1));
console.log(AgregarCanasta(1));
console.log(AgregarCanasta(3));

function impuesto(total){
  return total * 1.19
}

let TotalPagar = impuesto(total);

console.log(`El total a pagar es de: ${TotalPagar}`)


forEach
