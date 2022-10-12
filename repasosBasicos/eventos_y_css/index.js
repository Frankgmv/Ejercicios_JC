addEventListener('load', iniciar_Eventos);

function iniciar_Eventos (){
    document.querySelector('#yoyo').addEventListener('click', press)
}


function press (){
    document.querySelector('button').innerHTML = "Ya se envío"
 alert("Te estoy escuchando");
}