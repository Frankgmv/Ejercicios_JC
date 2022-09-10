# Arrays o listas




nombres = ["Frank", "Mateo", "Sofia", "Diana"]
edades = [18, 17, 13, 39]
peso = [62, 62, 46, 56]


datos_Generales = [[nombres[0], edades[0], peso[0]],[nombres[1], edades[1], peso[1]],[nombres[2], edades[2], peso[2]],]
General_data = nombres[:] + edades[:] + peso[:]
OtroMetodo = nombres + edades + peso


LosDosPrimeros = nombres[0:2]
DelDosAlUltimo = nombres[2:]
DelCeroAlDos = nombres[:2]
ElUltimo = nombres[-1]

# Saber tamaño
SizeLista = len(edades)
# agregar 
nombres.append("Maria")

peso.append(32)
edades.insert(0,28)

# Eliminar
edades.pop()
peso.pop(3)
nombres.remove("Sofia")

# Limpar lista
ListaLLena = [nombres + edades]
''' ListaLLena.clear() '''

# Preguntar si esta en la lista
respuesta =  "Frank" in ListaLLena


#contar cuantas veces se repite

repeticione62 = peso.count(62)

# rodernar la lista 

nombres.sort()
peso.sort()

# al revez
edades.sort(reverse=True)

# print(edades," ok")


'''Practicando lo aprendido'''

Employes = [["Carlos", 19, 2000], ["Ana", 23, 3100], ["Mateo", 24, 2398]]

Customers = [["Maria", 34, 8000], ["Juanes", 43, 23000], ["Carlitos", 54, 42100]]

TotalPeople = Customers + Employes
Numbers = [123,345,45623,233,2,43,123,3423,23,43]

TotalPeople.append(["Alice", 64, 38106])
TotalPeople.pop(0)
Numbers.remove(123)

Customers.clear()
repetidos = Numbers.count(123)
ancho = len(Numbers)


Numbers.sort(reverse=True)

Numbers.sort()

Numbers.insert(1, 5000)

print(Numbers)

