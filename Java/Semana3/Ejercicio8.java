import java.util.Scanner;

public class Ejercicio8 {
        
    public static void main(String[] args) {
        Scanner tc = new Scanner (System.in);
        int password, N_cuenta, disponible, opc ,repetir = 0;
        MostrarMenu1();
        System.out.print("Digite su numero de cuenta: ");
        N_cuenta = tc.nextInt();
        System.out.println(" ");
        System.out.print("Digite su pin de cuenta.");
        password = tc.nextInt();
        System.out.println("Digite su saldo inicial.");
        disponible = tc.nextInt();
        do{
            
            MostrarMenu2();
            opc = tc.nextInt();
            System.out.println("Digite su contraseña nuevamente: ");
            int newPass = tc.nextInt();
         
            if(newPass == password){

                switch(opc){
                    case 1:
                        System.out.print("Digite el total a consignar :");
                        int recar = tc.nextInt();
                        disponible+=recar;
                        System.out.println("Consignación exitosa: "+recar);
                            break;
                    case 2:
                        System.out.println("Saldo actual: "+disponible);
                            break;
                    case 3:
                        System.out.print("Cuanto dinero desea retirar: ");
                        int retiro = tc.nextInt();
                        int vaar = ComprobarSaldo(retiro, disponible);
                        if(vaar == 1){
                            disponible-=retiro;
                            System.out.println("Retiro exitoso. ");
                        }else{
                            System.out.println("Saldo insuficiente. ");
                        }
                            break;
                    case 4:
                        repetir = 1;
                            break;
                    default:
                        System.out.println("Operación fuera de rango. ");
                            break;
                    }
                }else{
                    System.out.println("Contraseña incorrecta. ");
                }
            }while(repetir == 0);
            System.out.println("Cierre exitoso del la cuenta "+N_cuenta);
                
                tc.close();
            }
    public static int ComprobarSaldo(int retir, int saldo){
        if(saldo >= retir){
            return 1;
        }else{
            return 0;
        }
    }
    
    public static void MostrarMenu1(){
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
        System.out.println("-               Crear cuenta.                       -");
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
        System.out.println("-               1. Numero de cuenta.                -");
        System.out.println("-               2. pin de cuenta                    -");
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -\n");
    }
    
    public static void MostrarMenu2(){
    
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
        System.out.println("-               Menu de operaciones.                -");
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
        System.out.println("-               1. Consignar dinero.                -");
        System.out.println("-               2. Consultar dinero.                -");
        System.out.println("-               3. Retirar dinero.                  -");
        System.out.println("-               4. Cerrar cuenta.                   -");
        System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - -\n");
        System.out.print("                   Digite opcion: ");
    }
}
