Algoritmo L
	definir peso,estatura,imc como real;
	definir masa como car�cter;
	Escribir "Ingresa tu peso en kilogramos";
	Leer peso;
	Escribir "Ingresa tu estatura en metros";
	Leer estatura;
	imc = peso/ (estatura*estatura);
	Si imc <= 18.5 Entonces
		masa = "estas delgado";
	SiNo 
		Si imc >=18.5 Y imc <=24.5  Entonces
			masa = "tiene peso normal";
			Si imc >=25 Y imc <=30 Entonces
				masa = "estas en sobre peso";
			SiNo
				Si. >30 Entonces
					masa = "usted tiene obesidad";
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	
	Escribir "Tu �ndice de masa es: " , imc , masa ;
	
FinAlgoritmo
