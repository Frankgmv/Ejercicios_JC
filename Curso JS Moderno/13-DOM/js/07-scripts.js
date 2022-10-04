// const encabezado = document.querySelector("h1");

// console.log(encabezado.style.backgroundColor = "#aaa");
// console.log(encabezado.style.color  = "#000");
// console.log(encabezado.style.fontFamily = "Cursive");
// console.log(encabezado.style.textTransform = "uppercase");

// Agregar clases en js

const card = document.querySelector(".card");
card.classList.add("New-Class");
card.classList.add("FeaClase");
card.classList.add("ClaseFea");
card.classList.add("other-class", "More-class__");


// Eliminar clases en js

card.classList.remove("FeaClase", "ClaseFea");
console.log(card.classList);



// Seleccionar por nodos
const navegación = document.querySelector("nav.navegacion");

// console.log(navegación.childNodes);    //Retorna todo incluso hasta los espacios como elementos 
console.log(navegación.children[0]);    // Omita los espacios, solo trae elementos existente dentro
console.log(navegación.children[1]);    // Omita los espacios, solo trae elementos existente dentro
console.log(navegación.children[2]);    // Omita los espacios, solo trae elementos existente dentro
console.log(navegación.children[3]);    // Omita los espacios, solo trae elementos existente dentro




