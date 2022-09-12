/*
alt + click pata multiples cursores y shift + control + alt + (flecha abajo o arriba)
 alt + shift + flechas, para copiar lineas rapidamente

*/


//se puede cambiar los valores de objetos, pero no agrgar ni eliminar propiedades
// Object.seal(servicio) 

let CostosDeBoletos = {
    Medellin: 100,
    Bogota: 126,
    CHoco: 80,
}


Object.seal(CostosDeBoletos)

CostosDeBoletos.Cartagena = 200;

delete CostosDeBoletos.Medellin;

CostosDeBoletos.Bogota = 110;

console.log(CostosDeBoletos);
