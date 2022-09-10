Algoritmo Cuantos_hoy_repetidos
	
	Definir size, contador Como Entero
	Escribir "Tamaño del vector"
	leer size;
	Dimension Datos[size];
	
	Para i<-0 Hasta size-1 Con Paso 1 Hacer
		Escribir "Dato ",i+1;
		leer Datos[i];
	Fin Para
	contador=0;
	
	Para i<-0 Hasta size-1 Con Paso 1 Hacer
		Para j<-i+1 Hasta size-1 Con Paso 1 Hacer
			Si Datos[i] == Datos[j] y i <> j Entonces
				contador=contador+1;
			SiNo
				//nada
			Fin Si
		Fin Para
		
		Escribir Datos[i]
	Fin Para
	
	Si contador > 0 Entonces
		Escribir "Se repitio ",contador," veces los valores";
	SiNo
		Escribir "No se repitieron valores";
	Fin Si
	
	
	
	
	
	
	
	
	
	
	
	
FinAlgoritmo
