Algoritmo Pares_E_impares
	
	Definir sexo, i Como Entero
	Escribir "Eres mujer == 1 // Eres hombre == 2";
	Leer sexo;
	i=0;
	
	Si sexo == 1 Entonces
		Mientras i <= 100 Hacer
			
			Si i%2==1 Entonces
				Escribir i;
			Fin Si
			i=i+1;
		Fin Mientras
	SiNo
		
		Mientras i <= 100 Hacer
			
			Si i%2==0 Entonces
				Escribir i;
			Fin Si
			i=i+1;
		Fin Mientras
	Fin Si
	
	
	
	
FinAlgoritmo
