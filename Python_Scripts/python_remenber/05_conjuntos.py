'''No hay valores duplicados'''

abajo = set()   #declarar un conjunto vacio
todos = {}   #declarar un conjunto vacio 2

arriba = {10, 20, 30,70, 80} #conjunto con elementos dentro

abajo.add(5) #agragar
abajo.add(10)
abajo.add(15)
abajo.add(20)

arriba.discard(70) #eliminar



# abajo.clear()
# arriba.clear()

El2esta = 10 in arriba
el21esta = 22 in abajo


todos = arriba | abajo
comunes = arriba & abajo
unicosDeArriba = arriba - abajo
unicosDeabajo =  abajo - arriba

NoComunes = abajo ^ arriba

print(todos," -- Tdos")
print(" ")
print(arriba," -- arriba ")
print(abajo," -- abajo ") 
print(" ")
print(comunes," -- Comunes")
print(" ")
print(unicosDeArriba," -- Unicos de arriba")
print(unicosDeabajo," -- Unicos de abajo")
print(" ")
print(NoComunes," -- Diferencia")
