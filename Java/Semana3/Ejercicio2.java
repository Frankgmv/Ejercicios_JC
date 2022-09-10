import java.util.*;

class Ejercicio2{
    public static void main (String[] args){
        Scanner Teclado = new Scanner (System.in);
        int i, j;
        String acc, save;
        String [][] Datos = new String [6][4];

        for(i=0; i<6;i++){
            for(j=0;j < 4;j++){
                switch (j) {
                    case 0:
                        acc = "Nombre";
                        break;
                    case 1:
                        acc = "Apellido";
                        break;
                    case 2:
                        acc = "Telefono";
                        break;
                    default:
                        acc = "Documento";
                        break;
                }
                System.out.println("Digite el "+acc+" de la casilla "+(i+1));
                save = Teclado.next();
                Datos[i][j]=save;
            }
        }

        
        for(i=0; i<6;i++){
            for(j=0;j < 4;j++){
                System.out.print(Datos[i][j]+" ");
            }
            System.out.println("");
        }


    }
}
