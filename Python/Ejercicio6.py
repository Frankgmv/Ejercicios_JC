Condicion = True


Precios = {"gorras":20000, "gafas":35000, "relojes":50000}
Ventas = {"gorras":0, "gafas":0, "relojes":0}

while Condicion:
    print("Productos  \n Gorras. \n Gafas.\n Relojes\n ")

    print("     Menú de opciones")
    print("1. Ingresar nueva venta")
    print("2. Cerrar día")
    accion = int(input("Número: "))

    # ingresar venta
    if accion == 1:
        Nom = input("Ingrese nombre de producto: ").lower()
        cant = int(input("Ingrese la cantidad: "))

        if Nom == "gorra":
            Ventas["gorras"] +=1
            if cant > 5:
                descuento = (Precios["gorras"]*cant)*0.15
                pricioFinal = Precios["gorras"]*cant-descuento
                print(f"Precio final con descuento de las {cant} Gorras: {pricioFinal}")
            else:
                pricioFinal = Precios["gorras"]*cant
                print(f"Precio final de las {cant} Gorras: {pricioFinal}")
            
        if Nom=="reloj":
            Ventas["relojes"] +=1
            if cant > 4:
                descuento = (Precios["relojes"] *cant)*0.10
                pricioFinal = Precios["relojes"]*cant-descuento
                print(f"Precio final con descuento de los {cant} Gorras: {pricioFinal}")
            else:
                pricioFinal = Precios["relojes"]*cant
                print(f"Precio final de los {cant} relojes: {pricioFinal}")

        if Nom=="gafas":
            Ventas["gafas"]+=1
            if cant > 10:
                descuento = (Precios["gafas"] *cant)*0.20
                pricioFinal = Precios["gafas"]*cant-descuento
                print(f"Precio final con descuento de las {cant} Gafas: {pricioFinal}")
            else:
                pricioFinal = Precios["gafas"]*cant
                print(f"Precio final de las {cant} Gafas: {pricioFinal}")
                
    # Cerrar día
    if accion == 2:
        Condicion = False
        print(f"      Resumen de ventas")
        print(f"PRODUCTO - CANTIDAD - TOTAL")
        total = 0
        for i in Ventas:
            tSolo = Ventas[i] * Precios[i]
            print(f"{Ventas[i].keys()} - {Ventas[i]} - {tSolo}")
            total+=tSolo

        print(f"\n El total de todos los productos es: {total}")        