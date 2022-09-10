'''Diccionarios, son como arrays asociativos, clave : valor'''

Dictionary = {"hola":"Hello", "adios":"bye", "Buenos dias": "Good morning", "Buenas noches": "good evening"}

despedirse = Dictionary["adios"]
Saludar = Dictionary["hola"]

# add and setting

Dictionary["adios"] = "Goodbye"
Dictionary["You're welcome"] = "De nada"

#delete
del(Dictionary["You're welcome"])


id_user = {}

id_user[111] = "Mario"
id_user[222] = "Frank"
id_user[333] = "Mateo"
id_user[444] = "Ana"
id_user[555] = "Sofia"

del(id_user[555])


resultado = id_user.get(999, "no hay cliente con ese id")
esta_frank = 111 in id_user

lista = id_user.keys()
lista2 = id_user.values()

print(esta_frank)

print(lista)
print(lista2)