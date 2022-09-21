
const encabezado = document.querySelector('.contenido-hero h1');
const cambiar_title = document.querySelector('.hospedaje>h2').innerHTML;

console.log(cambiar_title);


console.log(encabezado); 
console.log(encabezado.innerHTML); // se trae la etiquetas que halle dentro
console.log(encabezado.textContent); // Traerá todo lo que se encuentre.
console.log(encabezado.innerText); // si el CSS tiene visibility: hidden; no lo seleccionar


const encabezadoSimple = document.querySelector('.contenido-hero h1').textContent;
document.querySelector('.hospedaje>h2').innerHTML = 'Hospedaje de pendejos';

document.querySelector('.contenido-hero h1').textContent = 'Mi compa guele';