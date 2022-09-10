#Variables


from cmath import sqrt


Nombre1 = "Daniel"
edad1 = 17
estatura1 = 1.80

Nombre2 = "Frank"
edad2 = 18
estatura2 =1.76

Suma_estatura = estatura1 + estatura2
Restar_edad= edad1-edad2
Potencia_edad1= edad1**2
division = estatura1 / edad1
division_entera = estatura1 // edad1
raiz = sqrt(edad2)
raiz = edad2**(1/2)

if edad1 < edad2:
    restar = edad1 - edad2
else:
    restar = edad2 - edad1

print(f"El resultado es: {restar}")
