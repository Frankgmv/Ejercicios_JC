var num = parseInt(prompt("Inserte un número."));


function factorial (num){
    if(num <= 1) return 1;
    return num * factorial(num-1);
}

var result =  factorial(num)


alert(`El resultado es: ${result}`)
