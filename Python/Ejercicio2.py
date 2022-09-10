

notas = []
intentos = 0

while intentos < 15:
     nota = float(input(f"Introduce la nota {intentos+1} "))
     notas.append(nota)
     intentos+=1

    
cont = 0
for i in notas:
    if notas[notas.index(i)] >= 3:
        cont +=1
porc = round((cont * 100) / 15,2)

print(f"El porcentaje de aprobados es: {porc}%")


     