
productos  = []
Condicion = True

while Condicion == True:
    print("1. Ingresar nuevo producto ")
    print("2. Consultar Productos ")
    print("3. consultar número de productos en el inventario")
    print("4. SALIR ")

    accion = int(input("Entrada Menú: "))

    if accion == 1:
        nomb = input("Nombre del producto: ")
        productos.append(nomb)
    
    if accion == 2:
        for i in productos:
            print(f" N°{productos[productos.index(i)]} -- {i}")
    
    if accion == 3:
        print(f"Número de productos: {len(productos)}")
    
    if accion == 5:
        Condicion = False
    


    


