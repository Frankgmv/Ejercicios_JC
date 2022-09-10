Algoritmo Comisiones_Durante_10_dias
	Definir  ComisionDia, Comisiones Como Real
	
	Dimension Ventas[10];
	
	Para i<-0 Hasta 9 Con Paso 1 Hacer
		Escribir "Digite las ventas del día ",i+1;
		leer Ventas[i];
	Fin Para
	
	Comisiones = 0;
	Para i<-0 Hasta 9 Con Paso 1 Hacer
		
		Si Ventas[i] > 1000 Entonces
			ComisionDia = Ventas[i] *5 /100 ;
			Comisiones = Comisiones + ComisionDia;
		SiNo
			ComisionDia = Ventas[i] *3 /100 ;
			Comisiones = Comisiones + ComisionDia;
		Fin Si
		
		Escribir "Ventas: ",Ventas[i]," || comisión: ",ComisionDia;
		
	Fin Para
	
	
	Escribir " ";
	Escribir "Total de comisiones: ",Comisiones;
	
	
	
	
	
	
	
FinAlgoritmo
