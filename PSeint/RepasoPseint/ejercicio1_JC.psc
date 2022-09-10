Algoritmo ejercicio1_JC
	Definir size, camb, acomulador, cont, max, men Como Entero
	Definir promedio Como Real
	Escribir "Tamaño del array";
	Leer size;
	Dimension array[size];
	
	Para i<-0 Hasta size-1 Con Paso 1 Hacer
		Escribir "Digite la posición ",i," con un numero de 1 A 10";
		Leer camb
		Si camb<11 y camb > 0 Entonces
			array[i]<-camb
		SiNo
			Escribir "El numero está fuera de rango";
			i<-i-1
		Fin Si
	
	Fin Para
	acomulador <-0;
	cont<-0;
	max<-array[0];
	men<-array[0];
	
	Para i<-0 Hasta size-1 Con Paso 1 Hacer
		acomulador = acomulador+array[i];
		cont <- cont + 1;
		
		//		Mayor
		Si max < array[i] Entonces
			max<-array[i];
		Fin Si
		
		//		menor
		Si men > array[i] Entonces
			men<-array[i]
		Fin Si
		Escribir  array[i];
	
	Fin Para
	
	promedio <- acomulador / cont;
	
	
	Escribir "El promedio es: ", promedio;
	Escribir "El mayor es: ", max
	Escribir "El menor es: ", men;

FinAlgoritmo
