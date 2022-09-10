'''Listas'''


# print(" ")
# print("Listas")
# lista = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, "Feo", "guay"]

# lista.append(11)
# lista.insert(0, 1)
# lista.remove("guay")
# lista.pop(-2)
# lista.sort(reverse=True)

# existe = 11 in lista

# print(lista.count(10))

# print(lista[2:6])
# # lista.clear()


# '''Tuplas'''
# print(" ")
# print("Tuplas")

# Tupla = ( "11", 22, 33, 44, "55", 66, "77", 88 , 99, "101")

# indice = Tupla.index("101")
# estaEl11 = "11" in Tupla
# ListaDeTupla = list(Tupla)

# print(Tupla[:6])
# print(ListaDeTupla[6:])


# '''Conjuntos'''
# print(" ")
# print("Conjuntos")

# conj11 = {1, 2, 3, 4, 5}
# conj22 = {1, 3, 5, 7}

# conj11.add(6)
# conj22.add(11)

# conj22.discard(8)
# conj11.discard(13)

# print(conj11,"  conjunto 1 ")
# print(conj22,"  conjunto 2 ")

# print(conj22-conj11,"  Solo del con 2")
# print(conj11-conj22,"  Solo del con 1")

# print(conj11&conj22,"  interseccion ")
# print(conj11^conj22,"  diferencias ")



# EstaHola = "Hola" in conj11


# '''Diccionarios'''
# print(" ")
# print("Diccionarios")


# Num_casa = {1:'12-40', 2:'13-43',3:'13-56', 4:'14-21'}
# Num_casa[5] = '14-26'
# Num_casa[11] = '14-12'
# Num_casa[2] = '12-41'

# del(Num_casa[11])

# esta13 = 13 in Num_casa
# getVal= Num_casa.get(7, "no se encuentra registrada")
# getVal2= Num_casa.get(4, "no se encuentra registrada")

# print(esta13)
# print(getVal)
# print(getVal2)


# print(Num_casa.keys())
# print(Num_casa.values())


'''Practica 2'''

# Listas




Nombres = ["Carlos", "Amara", "Yayo", "Pendejo"]

Nombres.append("Martin")
Nombres.append("Karen")
Nombres.append(" ")
Nombres.append(" ")
Nombres.append(" ")
Nombres.remove("Carlos")
Nombres.insert(0, "BOBIs")
Nombres.sort(reverse=True)
Nombres.pop(Nombres.index("Pendejo"))
ask = "jota" in Nombres

repetidos = Nombres.count(" ")
ancho = len(Nombres)


# Tuplas

Tpm  = tuple(Nombres)

esta123 = " " in Tpm

Index123 = Tpm.index(" ")


# Conjuntos

con1 = {12, 34,65, 0, 23}
con2 = {12, 34, 45, 12, 645}

con1.add(122)
con2.add(2312)

con1.discard(65)
con2.discard(45)

sumaC = con1 | con2
com = con1 & con2
un1 = con1 - con2
un2 = con2 - con1
diferencia = con2 ^ con1
es = con1.issubset(con2)


# diccionarios

dicc = {"Mario":43, "Ana": 22, "Juan":49}

dicc["Tito"] = 38
dicc["Gabriel"] = 18
dicc["Mario"] = 31
del(dicc["Mario"])

EstaGabriel = dicc.get("Gabriel", "Gabriel isn't this dictionary")

listaNombres= dicc.keys()
listaEdades = dicc.values()
estas = "Ana" in dicc
print(f"ana {estas}")
print(listaNombres)
print(listaEdades)


