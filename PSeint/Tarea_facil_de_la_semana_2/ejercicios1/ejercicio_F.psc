Algoritmo ejercicio_F
	
	Definir  operacion, suma, mult, j  Como Entero
	Repetir
		Escribir "Digite un tamaño mínimo de 5 y  máximo de 10";
		leer size;
	Mientras Que size < 5 o size > 10;
	
	Dimension Datos[size];
	
	Para i<-0 Hasta size-1 Con Paso 1 Hacer
		Escribir "Digite el valor ",i+1;
		leer Datos[i]
	Fin Para
	
	Repetir
		Escribir "Que operación deseas realizar con los datos ingresados";
		Escribir " Suma --1 // multiplicación -- 2 "
		Leer  operacion;
	Mientras Que !operacion > 0 y !operacion < 4 
	
	suma=0;
	mult=1;
	
	Segun operacion Hacer
		1:
			Para i<-0 Hasta size-1 Con Paso 1 Hacer
				suma = suma + Datos[i];
			Fin Para
			
			Escribir "La suma es: ",suma;
		2:
			Para i<-0 Hasta size-1 Con Paso 1 Hacer
				mult = mult *  Datos[i];
			Fin Para
			
			Escribir "La multiplicación es: ",mult;
		De Otro Modo:
			Escribir "Operación fuera de alcance";
	Fin Segun
	
FinAlgoritmo
