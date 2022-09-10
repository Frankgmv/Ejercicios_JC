'''Una estructura que no se deja cambiar una vez definida'''



TuplaOriginal = (12, 23, 452, 54, 5432, ["Mateo", "Victor"], "Alex")

ultimo = TuplaOriginal[-1]
los3primeros =TuplaOriginal[:3]

# Buscar el index
BuscarIndece = TuplaOriginal.index("Alex")

# Preguntar si esta en la tupla
SaberSiEsta_El12  = 12 in TuplaOriginal
SaberSiEsta_Alex = "Alex" in TuplaOriginal

# Convertir tupla a una lista

Cov_to_list = list(TuplaOriginal)
Cov_to_list.append("JAJJAJAJA")
Cov_to_list.insert(0, "0cero")
Cov_to_list.remove("JAJJAJAJA")
Cov_to_list.remove("0cero")
Cov_to_list.pop()
Cov_to_list.pop()
Cov_to_list.sort()

#COnvertir de lista a tupla
TuplaOriginal = tuple(Cov_to_list)

# print(TuplaOriginal)

'''Practica'''

nameCustomers = ("Frank", "Carlos", "Alex", "Victor", "Clementina", "Diana", "Sofia")

DianaEsClienta = "Diana" in nameCustomers #true

NicolasEsClienta = "Nicolas" in nameCustomers #false

QuePuestoOcupaAlex =  nameCustomers.index("Alex")
QuePuestoOcupaVictor = nameCustomers.index("Victor")

mitad = len(nameCustomers)//2

QuienesSonPrimeros = nameCustomers[0:mitad]
QuienesSonultimos =  nameCustomers[mitad:-1]

clientes = list(nameCustomers)
clientes.append("Mariana")
clientes.append("angel")
clientes.insert(5, "Catalina")
clientes.pop(1)
clientes.remove("angel")

clientes = tuple(clientes)
print(clientes)

