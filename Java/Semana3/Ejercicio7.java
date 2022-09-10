import java.util.Scanner;

interface Precios {
   int reloj = 50000, Gorra=20000, gafas = 35000 ;
}


public class Ejercicio7 implements Precios {
    public static void main (String[] args){
        Scanner tc = new Scanner(System.in);

        int  opcion, whilee =1 , opProd, cantidad, total, can_gorras=0, can_gafas=0, can_relojes=0, totalFinal=0, prec=0;

        do{

            MostrarMenu();
            opcion = tc.nextInt();
            if(opcion == 1){
                MostrarProductos();
                opProd = tc.nextInt();
                System.out.print("Cuánta cantidad desea pedir: ");
                cantidad = tc.nextInt();
                total = CalculatTotal(opProd, cantidad);
                switch (opProd){
                    case 1:
                        can_relojes+=cantidad;
                        break;
                    case 2:
                        can_gafas+=cantidad;
                        break;
                    case 3:
                        can_gorras+=cantidad;
                        break;
                    default:
                    System.out.println("Error en las opciones. ");
                        break;
                }

                System.out.println("Su total a pagar es de: "+total);
                totalFinal +=total;

            }else{
                whilee=0;
            }
           
        }while(whilee == 1);

        tc.close();

        prec = MostrarVentas(can_relojes, can_gafas, can_gorras);
        int descuentosHechos = prec - totalFinal;
        System.out.println("descuentos realizados: "+descuentosHechos+" Total: "+totalFinal+" \n ");
        System.out.println("Fin del día");
    }
    public static int MostrarVentas(int rel, int gaf, int gorr){
        int gorrass = gorr * Gorra;
        int gafass = gaf * gafas;
        int relojj = reloj * rel;
        int precioFinal = gorrass + gafass + relojj;

        System.out.println("Prod 1). "+rel+" Relojes - Subtotal: "+relojj);
        System.out.println("Prod 2). "+gaf+" Gafas - Subtotal de: "+gafass);
        System.out.println("Prod 3). "+gorr+" Gorras - Subtotal de: "+gorrass);
        System.out.println("Estimado: "+precioFinal);

        return precioFinal;
    }

    public static int CalculatTotal(int opcion, int cantidad){
        int A_Pagar=0, descuento=0;

        switch(opcion){
            //relojes
            case 1:
                A_Pagar = reloj * cantidad;
                    if(cantidad > 4){
                        descuento = (A_Pagar*10)/100;
                        A_Pagar -= descuento;
                    }
                break;
            case 2:
                A_Pagar = gafas * cantidad;
                    if(cantidad > 10){
                        descuento = (A_Pagar*20)/100;
                        A_Pagar -= descuento;
                    }
                break;
            default:
                A_Pagar = Gorra * cantidad;
                    if(cantidad > 5){
                        descuento = (A_Pagar*15)/100;
                        A_Pagar -= descuento;
                    }
                break;
        }

        return A_Pagar;
    }
    
    public static void MostrarProductos(){
        
        System.out.println("- - - - - - - - - - - - - - - - - -");
        System.out.println("-       Productos en venta.       -");
        System.out.println("- - - - - - - - - - - - - - - - - -");
        System.out.println("-  1. Relojes: 50.000.            -");
        System.out.println("-  2. Gafas: 35.000.              -");
        System.out.println("-  3. Gorras: 20.000.             -");
        System.out.println("- - - - - - - - - - - - - - - - -\n");
        System.out.print("           Digite opcion: "); 
    }

    public static void MostrarMenu(){
    
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
        System.out.println("-               Menu de operaciones.                -");
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
        System.out.println("-               1. Ingresar una nueva venta.        -");
        System.out.println("-               2. Cerrar el día.                   -");
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -\n");
        System.out.print("                   Digite opcion: ");
    }
   
}

/*Ejercicio 7:
Fernando está creando un nuevo negocio y requiere un sistema que le permita calcular las ventas
diarias de sus 3 MostrarProductos actuales que son Reloj precio 50.000, Gorra precio 20.000 y Gafas
precio 35.000, para ello él requiere:

● Cada vez que un cliente realice una compra se deberá indicar qué tipo de producto desea
registrar, si es Reloj, Gorra o Gafas, y la cantidad de producto que el cliente compró y
hacer el cálculo de precio final (Cantidad*precio) y mostrar un mensaje indicándonos al
cliente la cantidad que compró y el precio final.

● Adicionalmente si el cliente compra más de 4 Reloj tiene descuento del 10% o si compra
más de 5 Gorras descuento del 15% o si compra más de 10 Gafas descuento del 20%
sobre el precio final.

● Al finalizar el día si Fernando le indica al sistema la opción Cerrar Día, se deberá mostrar
un resumen de los MostrarProductos vendidos en el día por cada uno de los tipos de MostrarProductos
con el total de dinero vendido.

● El programa deberá estar activo siempre en el día es decir no se termina sino hasta que
Fernando le indica cerrar el día.

Para resolver este ejercicio tengan en cuenta lo siguiente crear un Menú con las opciones:
1. Ingresar Nueva Venta (Donde se solicite la cantidad del producto y se calcule el precio
final de acuerdo a si tiene descuentos o no) utilizar vectores
2. Cerrar Día: (realiza el cálculo de cuanto vendió en el día Fernando por cada producto,
para ello solo deberá sumar los arreglos) y muestre por cada producto lo vendido,
adicionalmente terminará el programa.*/
