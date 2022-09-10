

import java.util.Scanner;

class Ejercicio3 {

    public static void main(String[] args) {
        int i, j, sumaFilas, sumaColumnas, SumaCOlyFil=0;
        int [][] Datos = new int [6][3];
        
        Scanner teclado = new Scanner (System.in);
        
        //Leer 
        for(i=0;i<5;i++){
            for(j=0;j<2;j++){
                System.out.print("Digite un numero entero: ");
                Datos[i][j]= teclado.nextInt();
            }
            System.out.println(" ");
        }
        teclado.close();

        //Sumar filas
        for(i=0;i<5;i++){
            sumaFilas=0;
            for(j=0;j<2;j++){
                sumaFilas+=Datos[i][j];
            }
            Datos[i][2] = sumaFilas; 
            SumaCOlyFil+=sumaFilas;
        }
            
        // Suma columnas
        for(j=0;j<2;j++){
            sumaColumnas=0;
            for(i=0;i<5;i++){
                sumaColumnas+=Datos[i][j]; 
            }
            Datos[5][j] = sumaColumnas; 
            SumaCOlyFil+=sumaColumnas;
        }

        Datos[5][2]=SumaCOlyFil;
        
        // imprimir 
        for(i=0;i<6;i++){
            for(j=0;j<3;j++){
                if(Datos[i][j] < 10){

                    System.out.print("  "+Datos[i][j]+" ");
                }else if(Datos[i][j] < 100  && Datos[i][j] > 9){
                    
                    System.out.print(" "+Datos[i][j]+" ");
                }else{
                    System.out.print(Datos[i][j]+" ");
                }
            }
            System.out.println(" ");
        }
    }
}
