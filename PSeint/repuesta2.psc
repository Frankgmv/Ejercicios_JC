Funcion Prom <- Promediar(acu, cont)
	Prom = acu/cont;
Fin Funcion

Algoritmo repuesta2
	Definir precio_litro, tama�o, cont600 , acomulador, cont Como Entero;
	Definir prome Como Real;
	Escribir "Cu�ntas ventas desea realizar";
	Leer tama�o;
	Escribir "precio por litro";
	Leer precio_litro;
	acomulador=0
	cont600=0
	cont=0
	Dimension cod_articulos[tama�o];
	Dimension litros[tama�o];
	Dimension Precios[tama�o];
	para i=0 Hasta tama�o-1 Hacer
		Escribir "C�digo del articulo ",i+1;
		Leer cod_articulos[i];
		
		Escribir "Digite la cantidad de litros del articulo ",i+1;
		leer litros[i];
		
		Precios[i] = litros[i] * precio_litro;
		
		si Precios[i] > 600000 Entonces
			cont600= cont600+1;
		FinSi
		
		cont= cont+1;
		acomulador = acomulador + Precios[i];
	FinPara
	
	prome = Promediar(acomulador, cont);
	Escribir "Promedio de ventas: ",prome;
	Escribir cont600," superaron los 600.000 pesos. "
	
	Escribir " Facturas realizadas: ",cont;
	Escribir "precio por litro: ",precio_litro;
	
	para i =0 Hasta tama�o-1 Hacer
		Escribir " FACTURA N� ",i+1;
		Escribir "Cod: ",cod_articulos[i]," litros: ",litros[i]," total de pago:",Precios[i];
		Escribir " "
	FinPara
FinAlgoritmo



