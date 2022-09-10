Algoritmo multiplesArreglos
	Dimension array1[10], array2[10], array3[10];
	
	Para i<-0 Hasta 9 Con Paso 1 Hacer
		array1[i]=i+3;
		array2[i]=i+9;
		
//		Escribir array1[i];
//		Escribir array2[i];
		
	Fin Para
	
	Escribir " "
	
	Para i<-0 Hasta 9 Con Paso 1 Hacer
		array3[i]=array1[i] +array2[i];
		
		Escribir array3[i];
	Fin Para
	
	
FinAlgoritmo
