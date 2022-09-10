
Algoritmo matrices
	
	Definir may, men Como Entero;
	Dimension matriz[3,3];
	
	Para i=0 Hasta 2  Hacer
		Para j=0 Hasta 2 Hacer
			matriz[i,j] = azar(50);
			Escribir matriz[i,j];
		FinPara
	Fin Para
	
	may = matriz[0,0]
	men = matriz[0,0]
	
	Para i=0 Hasta 2  Hacer
		Para j=0 Hasta 2 Hacer
		
			Si may < matriz[i,j] Entonces
				may = matriz[i,j]
			Fin Si
			
			Si men > matriz[i,j]  Entonces
				men = matriz[i,j]
			Fin Si
			
		FinPara
	Fin Para
	
	Escribir "El elemento mayor es: ",may;
	Escribir "el elemento menor es: ",men;
	
	
	
FinAlgoritmo
