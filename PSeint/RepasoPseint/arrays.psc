Algoritmo arrays
	//Algoritmo para sacar el promedio de cada estudiante.
	
	//declarar arrays
	Definir num_notas, contador, acomulador Como Entero
	Escribir "Numero de notas"
	Leer num_notas
	dimension Number[num_notas];
	
	//leer arrays
	contador<-0;
	acomulador<-0;
	
	Para i<-0 Hasta num_notas-1 Con Paso 1 Hacer
		Escribir "Nota ",i;
		Leer  Number[i];
	Fin Para
	
	
	// Proceso del array
	
	Para i<-0 Hasta num_notas-1 Con Paso 1 Hacer
		acomulador <- acomulador + Number[i];
		contador<-contador + 1;
	Fin Para
	
	Promedio <- acomulador / contador;
	
	Escribir "El promedio del estudiante es: ",Promedio;
	
	
FinAlgoritmo
