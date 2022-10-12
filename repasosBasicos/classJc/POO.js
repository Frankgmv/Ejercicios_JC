
class Ventilador {
    // Propiedades
    color;
    numeroAspas;
    tamaño;
    consumoElectricidad;
    velocidades;
    peso;
    Estado;
    estaRotando;

    constructor(color, numeroAspas, tamaño, velocidades, peso) {
        this.color = color;
        this.numeroAspas = numeroAspas;
        this.tamaño = tamaño;
        this.Estado = "Apagado";
        this.consumoElectricidad = "30 kvh";
        this.velocidades = velocidades;
        this.peso = peso;
        this.Estado = "Apagado";
        this.estaRotando = false;
    }

    // Métodos
    Apagar() {
        this.Estado = "Apagado";
        this.velocidades = 0;
        console.log("El ventilador esta: ", this.Estado);
    }
    
    Encender() {
        this.Estado = "Encendido";
        this.velocidades = 1;
        console.log("El ventilador esta: ", this.Estado);
    }

    Rotar() {
        if(this.estaRotando){
            console.log("El ventilador esta rotando");
            this.estaRotando = true;
        }else{
            console.log("El ventilador no esta rotando");
            this.estaRotando = false;
        }
    }

    cambiarVelocidad(aumentar) {

        if (aumentar == "aumentar") {

            if (this.velocidades == 0) {
                this.Encender();
                this.velocidades = 1;
                console.log("Se encendió el ventilador");
            }
            this.velocidades += 1;

        } else {

            if (this.velocidades > 0) {
                this.velocidades -= 1;
            } else {
                this.Apagar();
                this.velocidades = 0;
                console.log("Se apagó el ventilador");
            }
        }

        console.log("La velocidad actual es:", this.velocidades);
    }

    ObtenerInformacion() {
        let info = {
            color: this.color,
            numeroAspas: this.numeroAspas,
            tamaño: this.tamaño,
            consumoElectricidad: this.consumoElectricidad,
            velocidades: this.velocidades,
            peso: this.peso,
            Estado: this.Estado,
            estaRotando: this.estaRotando,
        }
        return info;
    }

}
var VentiladorNuevo = new Ventilador("negro", 4, "1m", 3, "1 kg")

VentiladorNuevo.Encender();

VentiladorNuevo.cambiarVelocidad("aumentar");
VentiladorNuevo.cambiarVelocidad("aumentar");

VentiladorNuevo.cambiarVelocidad("disminuir");

VentiladorNuevo.Rotar(true);
VentiladorNuevo.Apagar();

console.log(VentiladorNuevo.ObtenerInformacion());
