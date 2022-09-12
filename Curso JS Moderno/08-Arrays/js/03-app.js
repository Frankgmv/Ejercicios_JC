const productos = [ "atún", 'peces', 'cuido', 'pastel', 'sal', 'pastas', 10]


// for (let i = 0; i < productos.length; i++) {

    // console.log(productos[i]);
    // }

console.table(productos)

productos.forEach((Value, index) => {
    console.log(` ${index} : ${Value} `);    
});

