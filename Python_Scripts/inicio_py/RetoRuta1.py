c='aa2208bc'
n1=40
n2=50
n3=39
n4=76
n5=96

def nota_quices(cod, not1, not2, not3, not4, not5):
    n1=not1
    n2=not2
    n3=not3
    n4=not4
    n5=not5

    notaMenor = min(n1, n5, n2, n3, n4)
    Suma = sum((n1, n5, n2, n3, n4)) - notaMenor
    Promedio = round(((Suma/4)/2)/10, 2)

    return f"El promedio ajustado del estudiante {cod} es: {Promedio}"


print(nota_quices(c, n1, n2, n3, n4, n5))

