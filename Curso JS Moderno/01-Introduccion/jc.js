
ConvertirMoney = (cantidad, precioUnidad) => cantidad * precioUnidad;


Iniciar_conversion = () =>{
    
    PrecioFijo = document.querySelector("#Valor").value;
    cantidad = document.querySelector("#cantidad").value;
    recibo = ConvertirMoney(cantidad ,PrecioFijo);
    document.querySelector("#resultado").innerHTML = recibo;
}





