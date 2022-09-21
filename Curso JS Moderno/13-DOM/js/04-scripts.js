// actúa muy similar a getElementById pero permite seleccionar hasta clases

const card = document.querySelector('.card')

console.log(card);

const info = document.querySelector('.contenido-hero.contenedor')

console.log(info);

// querySelector permite usar la misma sintaxis para los selectores en CSS

const card2 = document.querySelector('section.hospedaje .contenedor-cards .card:nth-child(2)')

console.log(card2);


