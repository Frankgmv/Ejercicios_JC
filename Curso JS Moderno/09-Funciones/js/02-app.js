1// declaración de función (function declaration)
restar();

function restar () {
    console.log( 22 - 12)
}
/* las funciones declaradas se pueden llamar antes de inicializarla
pero las expresiones de funciones no, por que es una variable
*/

2// expresión de función (function expression)


const restar2 = function() {
    console.log( 10 - 5 )
}

restar2();