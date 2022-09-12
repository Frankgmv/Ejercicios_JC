numero = 15;

for(let i = 1; i<=70;i++){
    if(i % numero == 0){
        console.log(i,"es Múltiplo de :",numero)
        continue;
    }
    console.log(i);
}