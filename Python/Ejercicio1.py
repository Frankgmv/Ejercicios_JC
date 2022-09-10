
import math


num = float(input("Digite un número decimal o entero: "))



print("   Menu de operación")
print("1  Raíz cuadrada")
print("2  Valor absoluto")
print("3  Logaritmo natural")
print("4  Exponencial")
print("5  Redondear numero a dos decimales")

operacion = int(input("Que operacion desea hacer: "))

if operacion == 1:
    result = math.sqrt(num)
    nom = "raíz"

if operacion == 2:
    result = abs(num)
    nom = "absoluto"

if operacion == 3:
    result = math.log(num)
    nom = "logaritmo natural"

if operacion == 4:
    result = num ** 2
    nom = "logaritmo exponencial"

if operacion == 5:
    result = round(num, 2)
    nom = "redondeo"

print(f" la operación - {nom} dio como resultado: {result}")
