Algoritmo prueba2matrices
	
	Definir filas, columnas Como Entero;
	columnas = 7
	filas = 5
	Dimension  mat[filas,columnas]
	Lunes=0
	Martes = 1
	Miercoles =2
	Jueves = 3
	viernes = 4
	sabado = 5
	Domingo = 6
	limite = 0
	Escribir  "Lu Ma Mi Ju Vi Sa Do";
	
	Para i=0 Hasta filas-1 Hacer
		Si i==4 Entonces
			limite = Miercoles
		SiNo
			limite = Domingo
		Fin Si
		
		Para j=0 Hasta limite Hacer
			Si i<>6 Entonces
				mat[i,j] = Aleatorio(7, 35);
			SiNo
				
				Si j < Miercoles Entonces
					mat[i,j] = Aleatorio(7,35);
				Fin Si
				
			Fin Si
			
			Si mat[i,j] < 10 Entonces
				
				Escribir " ",mat[i,j]," " Sin Saltar
				
			SiNo
				Escribir mat[i,j]," " Sin Saltar
			Fin Si
			
		Fin Para
		Escribir " "  
	Fin Para
	
	acomulador = 0
	contador = 0
	may = mat[0,0]
	men = mat[0,0]
	
	Para i=0 Hasta 4 Hacer
		Para j=0 Hasta 6 Hacer
			si mat[i,j] > 0 Entonces
				acomulador = acomulador + mat[i,j];
				contador=contador + 1
			FinSi
			
			Si may < mat[i,j] Entonces
				may = mat[i,j]
			Fin Si
			
			Si men > mat[i,j] y mat[i,j] <> 0 Entonces
				men = mat[i,j]
			Fin Si
			
			Si j == 6 Entonces
				Escribir "la temperatura mayor de la semana ",i+1," fue: ",may
				Escribir "la temperatura menor de la semana ",i+1," fue: ",men
				may = 0
				men = 39
				
			Fin Si
		Fin Para
	Fin Para
	promedio = acomulador / contador
	Escribir "El promedio de temperaturas fueron: ",promedio;
	
	
	
	
	
	
	
	
	
	
	
	
	
FinAlgoritmo
