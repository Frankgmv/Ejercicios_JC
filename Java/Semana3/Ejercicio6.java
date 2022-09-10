import java.util.*;


interface VariablesGlobales{

    String [] Product = new String [1];
    List<String> Productos = new ArrayList<>(Arrays.asList(Product));
    
}
public class Ejercicio6 implements VariablesGlobales {
    
    public static void main (String[] args){
        Scanner tc = new Scanner(System.in);
        
        int opcion, continuar = 1;
        String nomProduc;
        do{

            Menu();
            opcion = tc.nextInt();
        
            switch(opcion){
                case 1: 
                    System.out.print("Ingrese el nombre: ej: porta_plumas");
                    nomProduc = tc.next();
                    Productos.add(nomProduc);
                    break;
                case 2: 
                    System.out.print("Consulta de productos. ");
                    ConsultaProductos();
                    break;
                case 3: 
                    System.out.println("Conteo de productos. ");
                    ContarProductos();

                    break;
                case 4: 
                    System.out.println("Cierre del día. ");
                    continuar = 0;
                    break;
                default:
                System.out.println("Operación fuera de rango");
                    break;
            }
            System.out.println("");
            
        }while(continuar == 1);
        
        System.out.println(" Operaciones terminadas ");
        
        tc.close();
    }
    public static void Menu(){
    
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
        System.out.println("-               Menu de operaciones.                -");
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
        System.out.println("-               1. Ingresar nuevo producto.         -");
        System.out.println("-               2. Consultar productos.             -");
        System.out.println("-               3. Numero de productos.             -");
        System.out.println("-               4. Salir.                           -");
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -\n");
        System.out.print("Digite opcion: \n");
    }

    public static void  ConsultaProductos (){
        int size, i;
        String content;
        size = Productos.size();
        for(i=0;i<size;i++){
            
            content = Productos.get(i);
            if(content == null){
                System.out.println(" ");
            }else{
                System.out.println(content+" ");
            }
        }
    }

    public static void ContarProductos (){
        int size;
        size = Productos.size();
        System.out.println("Hay "+size+" productos. ");
    }
}