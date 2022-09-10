
#funcion con parametros 
def Sumar(n1, n2):
    print(n1 + n2)

Sumar(12,12)

def Potencias(n1, exponente):
    return n1**exponente

print(Potencias(2,3))

#funcion sin parametros 
def Saludar():
    print("hola extraño")

Saludar()

#funcion con parametros por defecto

def HacerCafe(Sabor="tradicional", cantidad=1):
    print(f"Haciendo {cantidad} de cafe  sabor {Sabor}")

HacerCafe("moringa", 2)