Algoritmo ejercicio_A
	
	Definir  w, dw , sumadorFor, sumadorWhile, sumadorDoWhile Como Entero
	
//	for
	Para i<-0 Hasta 99 Con Paso 1 Hacer
		sumadorFor = sumadorFor + i;
	Fin Para
	
	//	while
	w=0;
	Mientras w < 100 Hacer
		sumadorWhile = sumadorWhile + w
		w= w+1;
	Fin Mientras
	
	
	//	Do while
	dw=0;
	Repetir
		sumadorDoWhile = sumadorDoWhile +dw;
		dw=dw+1;
	Mientras Que dw < 100
	
	
	Escribir "Suma del Para: ",sumadorFor;
	Escribir "Suma del mientras: ",sumadorWhile;
	Escribir "Suma del Repetir: ",sumadorDoWhile;
	
FinAlgoritmo
