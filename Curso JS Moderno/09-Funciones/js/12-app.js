const carrito = [
    {Nombre: "Arroz", precio: 2000},
    {Nombre: "Papa", precio: 3000},
    {Nombre: "Maíz", precio: 4000},
]



carrito.forEach((producto)=>{
    console.log(` ${producto.Nombre} vale ${producto.precio}`)
});


let precios_con_impuesto = carrito.map((producto) =>  `${producto.Nombre} ${producto.precio*1.19}`);

console.table(precios_con_impuesto);