import java.util.Scanner;
import java.util.Random;


public class Ejercicio5 {
    public static void main(String[] args){


        Scanner teclado = new Scanner (System.in);

        double resultado, numero;
        String NombreOperacion, numString;
        int opcion, pregunta=0;
        
        do{
            Menu();
            System.out.print("Digite opción menu: "); 
            opcion = teclado.nextInt();
            
            System.out.print("Digite el numero: "); 
            numero = teclado.nextFloat();

            // convertir opcion a string
            numString = opcion+"";

            NombreOperacion = PedirNombreOperacion(numString);
            resultado = EjecutarOperacion(opcion, numero);
            if(NombreOperacion == " El redondeo "){

                System.out.println("El resultado de "+NombreOperacion+" es: "+ (int) Math.round(resultado)+" \n");     
            }else{
                System.out.println("El resultado de "+NombreOperacion+" es: "+resultado+" \n");     
            }

            System.out.print("continuar Y:1 || N:0 -> ");
            pregunta = teclado.nextInt();

        }while(pregunta == 1); 

        System.out.println("Fin de operaciones. ");
        teclado.close();

    }
    
    public static void Menu(){
    
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
        System.out.println("-               Menu de operaciones.                -");
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
        System.out.println("-               1. Raiz cuadrada.                   -");
        System.out.println("-               2. Valor absoluto.                  -");
        System.out.println("-               3. Logaritmo natural.               -");
        System.out.println("-               4. Exponencial.                     -");
        System.out.println("-               5. Redondeo.                        -");
        System.out.println("- Nota: Fuera de rango arrojara un numero al azar.  -"); 
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -\n");
    }
    
    static double EjecutarOperacion(int op, double num){

        double result;
       int op1 = (int) Math.round(op);

       Random random = new Random();

        switch(op1){
           case 1: 
               result = Math.sqrt(num);
               break;
           case 2:
               result =Math.round(Math.abs(num));                
               break;
           case 3:
               result = Math.log(num);     
               break;
           case 4:
               result = Math.pow(num, 2);     
               break;
           case 5:
               result = Math.round(num);     
               break;
           default:
               result = random.nextInt(1000);     
               break;
           }
       return result;
    }

    static String PedirNombreOperacion( String num){

        String result;
        int numer;
        numer = Integer.parseInt(num);

         switch(numer){
            case 1: 
                result = " la raiz cuadrada ";
                break;
            case 2:
                result =" el numero absoluto ";    
                break;
            case 3:
                result = " el logaritmo natural";     
                break;
            case 4:
                result = " La potencia ";     
                break;
            case 5:
                result = " El redondeo ";     
                break;
            default:
                result = " Numero al azar ";     
                break;
            }
        return  result;
    }
}

