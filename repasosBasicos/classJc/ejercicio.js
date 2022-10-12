class lampara {

    tamaño;
    color_Luz;
    color_lampara;
    ConsumoElectrico;
    precio;
    intensidadLuminosa;
    estaIluminando;

    constructor(tamaño, color_Luz, color_lampara, capacidad_luminosa, ConsumoElectrico, precio) {
        this.tamaño = tamaño;
        this.color_Luz = color_Luz;
        this.color_lampara = color_lampara;
        this.capacidad_luminosa = capacidad_luminosa;
        this.ConsumoElectrico = ConsumoElectrico;
        this.precio = precio;
        this.estaIluminando = false;
        this.intensidadLuminosa = 0;
    }

    Encender() {
        if (this.estaIluminando) {
            console.log("Ya esta encendido");
        } else {
            this.estaIluminando = true;
            this.intensidadLuminosa += 1;
            console.log("encendiendo lámpara");
        }
    }

    Apagar() {
        if (this.estaIluminando == false) {
            console.log("Ya esta Apagado");
        } else {
            this.estaIluminando = false;
            this.intensidadLuminosa = 0;
            console.log("Apagando lámpara");
        }
    }

    RegularIntensidad(nivel) {

        if (this.estaIluminando) {
            if (nivel == "aumentar") {
                this.intensidadLuminosa += 1;
            } else {
                if (this.intensidadLuminosa > 0) {
                    this.intensidadLuminosa -= 1;
                }else{
                    console.log("Ya esta en la intensidad minima.");
                }
            }
            console.log("La intensidad actual es: ", this.intensidadLuminosa);
        } else {
            console.log("Enciende la lámpara primero.");
        }
    }

}

var lamparaNueva = new lampara("1/2 m", "blanca", "Negra", "20 lúmenes", "8 wh", "50 USD");

lamparaNueva.Encender();

lamparaNueva.RegularIntensidad("aumentar");
lamparaNueva.RegularIntensidad("aumentar");
lamparaNueva.RegularIntensidad("disminuir");

lamparaNueva.Apagar();
