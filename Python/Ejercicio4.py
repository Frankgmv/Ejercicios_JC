sexo = input("Digite si es: \n Femenino - F \n Masculino - M \n :: ").lower()
edad = int(input("Digite su edad: "))

if sexo == "m" and edad > 18:
    print(f"Caballero próximamento podrá votar")

if sexo == "f" and edad > 19:
     print(f"señorita próximamento podrá votar")
    