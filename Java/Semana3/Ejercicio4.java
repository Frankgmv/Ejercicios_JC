/*
Realice una aplicación que permita
- el ingreso de 4 notas de 5 estudiantes y 
al final muestre las notas ingresadas con el promedio final, utilizando matrices,
 debe ingresar el nombre del alumno, el documento y las 4 notas.
*/
import java.util.Scanner;

class Ejercicio4 {
    public static void main (String[] args){

        Scanner teclado = new Scanner(System.in);

        int i,h , j, cont;
        double acomulador;
        String [][] Datos = new String [2][2];
        int [][] Notas = new int [2][4];
        
        // leer datos de los estudiantes
        for(i=0;i<2;i++){
            for(h=0;h<1;h++){
                System.out.println("Nombre del estudiante "+(i+1));
                Datos[i][h]= teclado.nextLine();
                System.out.println("Numero de documento del estudiante "+(i+1));
                Datos[i][h+1]= teclado.nextLine();
            }
        }  
        

        for(i=0;i<2;i++){
            for(j=0;j<4;j++){
                System.out.print("Nota "+(j+1)+" de "+Datos[i][0]+" : ");
                Notas[i][j]=teclado.nextInt();
            }
            System.out.println(" ");
        }
        
        for(i=0;i<2;i++){
            for(h=0;h<1;h++){
                System.out.print((i+1)+"). Nombre: "+Datos[i][h]+" - Ti: "+Datos[i][h+1]+" Notas = ");                
            }
            acomulador=0;
            cont=0;

            for(j=0;j<4;j++){
                System.out.print(Notas[i][j]+", ");
                acomulador+=Notas[i][j];
                cont++;
            }
            
            
            System.out.print(" promedio: "+(acomulador/cont));
            System.out.println(" ");
        }           
    }
}