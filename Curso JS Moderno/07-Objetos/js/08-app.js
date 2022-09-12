// evitar que modifiquen tus objetos

"use strict";


let servicio ={
    reparación: "Daño de extractor",
    materiales: "estractor nuevo y mano de obra ",
    costo: 1000,
    manoDeObra: 1000
}

servicio.costo/=20;

servicio.horasExtras= 40;

let { costo,reparación, manoDeObra, horasExtras } = servicio ;

let precioTotal = manoDeObra + costo;

precioTotal += 4000 ; //añade algun valor  al valor actual

//(congelador de objetos)
Object.freeze( servicio )  

console.log ( `la reparación del ${reparación} tiene un precio de: ${precioTotal} 
mas horas extras ${horasExtras} ` ) 
  
//no se ejecuta por el  object.freeze();
servicio.horasExtras = 50 ;  


