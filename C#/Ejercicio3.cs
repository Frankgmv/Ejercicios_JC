/*
Realice una aplicación que permita a un usuario capturar enteros positivos y negativos en una
matriz de 6 filas por 3 columnas e imprimir la suma de cada fila y cada columna. Los datos
ingresados se imprimirán en 5 filas y 2 columnas, el resultado de la suma se imprimirá en la
fila 6 y la columna 3.

*/
using System;

class Ejercicio3 {

    public static void main(String[] args) {
        int i, j, sumaFilas, sumaColumnas, SumaCOlyFil=0;
        int [,] Datos = new int [6,3];
        
        //Leer 
        for(i=0;i<5;i++){
            for(j=0;j<2;j++){
                Console.Write("Digite un numero entero: ");
                Datos[i,j]= Convert.ToInt32(Console.ReadLine());
            }
            Console.WriteLine(" ");
        }

        //Sumar filas
        for(i=0;i<5;i++){
            sumaFilas=0;
            for(j=0;j<2;j++){
                sumaFilas+=Datos[i,j];
            }
            Datos[i,2] = sumaFilas; 
            SumaCOlyFil+=sumaFilas;
        }
            
        // Suma columnas
        for(j=0;j<2;j++){
            sumaColumnas=0;
            for(i=0;i<5;i++){
                sumaColumnas+=Datos[i,j]; 
            }
            Datos[5,j] = sumaColumnas; 
            SumaCOlyFil+=sumaColumnas;
        }

        Datos[5,2]=SumaCOlyFil;
        
        // imprimir 
        for(i=0;i<6;i++){
            for(j=0;j<3;j++){
                if(Datos[i,j] < 10){

                    Console.Write("  "+Datos[i,j]+" ");
                }else if(Datos[i,j] < 100  && Datos[i,j] > 9){
                    
                    Console.Write(" "+Datos[i,j]+" ");
                }else{
                    Console.Write(Datos[i,j]+" ");
                }
            }
            Console.WriteLine(" ");
        }
        
    }
}
