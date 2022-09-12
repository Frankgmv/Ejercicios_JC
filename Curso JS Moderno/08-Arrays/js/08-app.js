let meses = [ "Enero", "febrero", "Marzo", "Abril", "Mayo", "otro", "basura", "nada"]

let [mes1, mes2, mes3, mes4, mes5, , ...todos] = meses;


console.table(meses);

console.log(mes1);
console.log(mes2);
console.log(mes3);
console.log(mes4);
console.log(mes5);
console.log(todos);