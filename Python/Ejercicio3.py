Arreglo1 = [1,2,3,4,5,6,7,8,9,10]
Arreglo2 = [10,20,30,40,50,60,70,80,90,100]
resultado = []

for i in range(10):
    rest = Arreglo1[i] * Arreglo2[i]
    resultado.append(rest)

print(resultado)
