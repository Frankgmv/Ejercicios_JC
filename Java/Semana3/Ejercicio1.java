import java.util.Scanner;

class Ejercicio1 {
    public static void main(String[] args) {
        int i, j, size;
        Scanner Teclado = new Scanner (System.in);
        System.out.println("Digite el tamano de la matriz");
        size = Teclado.nextInt();
        
        int [][] matrix = new int [size][size];

        for(i=0;i<size;i++){
            for(j=0;j<size;j++){
                System.out.println("Digite posicion "+i+" "+j+" :");
                matrix[i][j] = Teclado.nextInt();
            }
        }
        
        for(i=0;i<size;i++){
            for(j=0;j<size;j++){
                System.out.print(matrix[i][j]+" ");
            }
            System.out.println(" ");
        }
        
    }
}





