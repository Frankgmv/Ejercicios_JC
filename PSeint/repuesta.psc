Funcion Prom <- Promediar(acu, cont)
	Prom = acu/cont;
Fin Funcion

Algoritmo repuesta
	Definir  num, acomulador, contador Como Entero;
	Definir  promedio como real;
	Dimension  datos[10];	
	contador =0
	Para i=0 Hasta 9 Hacer
		Escribir "Digite el dato ",i+1;
		Leer num;
		datos[i] = num;
		acomulador=acomulador+num;
		contador=contador+1;
	FinPara
	promedio = Promediar(acomulador, contador);
	Escribir "El promedio es: ",promedio;
FinAlgoritmo


