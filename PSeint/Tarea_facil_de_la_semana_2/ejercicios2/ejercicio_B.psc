Algoritmo Sacar_promedio_de_estudiantes
	

	
	Definir  P_practica, p_problemas, p_teorica, resultados Como Real
	Definir  nomb Como Caracter
	Dimension notas[3]
	
	p_problemas = 0.40
	p_teorica = 0.10
	P_practica = 0.50
	
	Escribir "Digite el nombre del estudiante";
	Leer  nomb
	Escribir "La nota es de 0 a 10"
	
	Para i=0 Hasta 2 Con Paso 1 Hacer 
		Repetir
			
			Escribir "Digite la nota ",i+1;
			Leer  notas[i]
		Mientras Que !notas[i] >= 0 y !notas[i] <= 10;
		
	FinPara
	
	resultados = (notas[0]*P_practica) + notas[1]*(p_problemas)+notas[2]*p_teorica;
	Escribir "El promedio de ",nomb," es: ",resultados;
	
FinAlgoritmo