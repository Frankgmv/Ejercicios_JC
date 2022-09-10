Funcion MostrarMenu ()
	Escribir "---  Menu  ---";
	Escribir "1. consultar productos registrados.";
	Escribir "2. Peso promedio de todos los productos ingresados .";
	Escribir "3. Valor total por cada producto.";
	Escribir "4. Salir.";
	Escribir "Digite opción" Sin Saltar;
	
	
Fin Funcion

Funcion mensaje <- PasarDato (j)
	Segun j Hacer
		0:
			mensaje = "Peso: ";
		1:
			mensaje = "Precio: ";
		2:
			mensaje = "tamaño: ";
		3:
			mensaje = "cantidad: ";
	Fin Segun
	
FinFuncion

Funcion Prom <- Promediar(acu, cont)
	Prom = acu/cont;
Fin Funcion
//nombre, peso, precio, tamaño, cantidad
Algoritmo respuesta3
	Definir filas, col, opc Como Entero;
	Definir mensaje Como Caracter;
	col =5;
	Escribir "Cuántos productos desea ingresar: " sin saltar;
	Leer filas;
	Dimension Productos[filas,col];
	Dimension Nombres[filas];
	
	Para i=0 Hasta filas-1 Hacer
		Escribir "Digite nombre del producto: ",i+1;
		leer Nombres[i];
		
		Para  j=0 Hasta  col-1 Hacer
			Segun j Hacer
				0:
					mensaje = "Peso del producto: ";
				1:
					mensaje = "Precio del producto: ";
				2:
					mensaje = "tamaño del producto: ";
				3:
					mensaje = "cantidad del producto: ";
				4:
					Productos[i,j]=Productos[i,2] * Productos[i,4];
			Fin Segun
			Escribir "Digite ",mensaje," ",i+1;
			leer Productos[i,j];
		FinPara
	FinPara
	
	Definir continuar, acoPeso, contPeso, acoCantidades Como Entero;
	continuar = 0;
	Repetir
	MostrarMenu();
	leer opc;
	
	Segun opc Hacer
		1:
			Para i=0 Hasta filas-1 Hacer
				Escribir "Nombres ",nombres[i]," " Sin Saltar;
				
				Para  j=0 Hasta  col-2 Hacer
					mensaje = PasarDato(j);
					Escribir mensaje,Productos[i,j]," " sin saltar;
				FinPara
				Escribir " ";
			FinPara
		2:
			Escribir "Peso promedio de los productos. "
			para i =0 Hasta filas-1 Hacer
				para j=0 Hasta col-1 Hacer
					cont=cont+1;
					acoPeso = acoPeso+ Productos[i,0];
					acoCantidades= acoCantidades +Productos[i,3];
					
				FinPara
			FinPara
			Escribir "Promedio total: " Sin Saltar;
			Escribir  Promediar((acoPeso*acoCantidades),cont);
			
		3:
			Escribir "Valor total de cada uno de los los productos"
			para i=0 Hasta filas-1 Hacer
				Escribir "Nombres ",nombres[i]," Total: " Sin Saltar;
//				Para  j = 0 Hasta col-4 Hacer
					Escribir ,Productos[i,3]*Productos[i,0]," " ;					
//				FinPara
				Escribir " ";
			FinPara
			
		De Otro Modo:
			continuar = 1;
	Fin Segun
		
	Mientras Que continuar == 0;
	
	
	
	
	
FinAlgoritmo


