Algoritmo Cajero_electrónico
	
	Definir Numero_cuenta, Saldo_disponible, Operacion, Monto Como Entero
	Definir password, contra Como Caracter
	Definir estado Como Logico
	//	Crear la cuenta y hacer el deposito
	Escribir "Cree su numero de cuenta "
	leer Numero_cuenta
	Escribir "Digite su contraseña "
	Leer password
	Escribir "Inserte el deposito inicial "
	Leer Saldo_disponible
	
	Repetir
		
		Escribir "     Menú de operaciones";
		Escribir  "1 para Consignaciones";
		Escribir  "2 para Retiros";
		Escribir  "3 para Consultas";
		Escribir  "4 para salir de cuenta"
		Leer  Operacion;
		
		Segun Operacion Hacer
			1:
				//Consignaciones
				Escribir "Cuanto deseas consignar a tu cuenta";
				Leer Monto
				Saldo_disponible = Saldo_disponible + Monto;
				Escribir "Su saldo actual es: ",Saldo_disponible;
			2:
				//Retiros
				Escribir "Cuanto desea retirar de su cuenta"
				Leer Monto
				Si Monto <= Saldo_disponible Entonces
					
					Escribir "Digite su contraseña nuevamente";
					Leer contra;
					
					si contra == password Entonces
						Saldo_disponible = Saldo_disponible - Monto;
						Escribir "Su saldo actual es: ",Saldo_disponible;
					FinSi
				SiNo
					Escribir "El monto es mayor al disponible, no se puede efectuar el retiro"
					Escribir "Su saldo actual es: ",Saldo_disponible;
				Fin Si
			3:
				//Consultas
				Escribir "Su saldo actual es: ",Saldo_disponible;
				
			De Otro Modo:
				Escribir "Saliste de tu cuenta";
				estado = Verdadero;
		Fin Segun
//	Mientras Que 1 == 1;
	Mientras Que estado == falso;
	
	
FinAlgoritmo
