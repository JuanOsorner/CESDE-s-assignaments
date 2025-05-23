import { Cuenta } from './Cuenta.js';

export class Cliente {
    constructor(nombre, apellido, direccion, identificacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.identificacion = identificacion;
        this.cuenta = new Cuenta(this.generarNumeroCuenta());
    }

    generarNumeroCuenta() {
        return Math.floor(Math.random() * 1000000000).toString();
    }
}
