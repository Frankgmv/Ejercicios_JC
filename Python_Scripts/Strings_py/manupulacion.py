'''
Manupulación de string con las distintos métodos y funciones de python
'''

'''tipos de datos'''
TipoDato = type(int('12'))
TipoDato = type('12')
print(TipoDato)

'''convertir letras'''
# Convertir en mayúscula
may = "a-e-i-o-u"
print(f"mayusculas: {may.upper()}")


# Convertir en minúscula
min = may.upper()
print(f"minusculas: {min.lower()}")


''' encontrar indices en una string'''

text = "  hola, soy frank muriel y trabajo en programación    "

# Encontrar indice de 

index = text.find('frank')
print(index)

# imprima solo frank
index = text.find('frank')
print(text[index:index+5])

'''quitar los espacios'''

tex = "   hola    "
print(tex)
print(tex.strip())

'''Preguntar si contiene una palabra'''

tex = "hi, my name is Mateo."
print(tex.startswith("h"))
print(tex.endswith("."))

if tex.lower().startswith('h'):
    print("empieza con H ")
else:
    print("No empieza con H ")



email = 'escribenos al correo enanitoslocos@insert-web.com'

PosicionEmail = email.find('@')
espacio = email.find('.')
print(email[PosicionEmail:espacio])

'''buscar y contar cuantas veces aparece una palabra en un string'''

ha="i i i i i i'm development"

cuantasVecesEstaI = ha.count("i")
cuantasVecesEstaIHasta10 = ha.count("i",5)
cuantasVecesEstaIDesde2A6 = ha.count("i",2,6)

print(cuantasVecesEstaIDesde2A6)


'''remplazar una palabra por otra'''

textGrosero = "hola hijo de puta, como anda la puta, pagan putas, comen putas, se ven del putas"

# cambia todas
print(textGrosero.replace("put","*$&%"))

#cambia un numero limitado
print(textGrosero.replace("put","*$&%", 2))














hola = "ha ha ga asd hola soy frank"

print(hola.upper())
print(hola.lower())
print(hola.find("ha ga"))
print(hola.split())
print(hola.startswith(ha))
print(hola.count("ha"))
print(hola.replace("ha", "ja"))
