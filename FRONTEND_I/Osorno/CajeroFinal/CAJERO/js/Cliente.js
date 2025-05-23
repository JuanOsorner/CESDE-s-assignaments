// cliente.js
import { Cuenta } from "./Cuenta.js";

export class Cliente {
    #nombre;
    #apellido;
    #direccion;
    #identificacion;
    #cuenta;

    constructor(nombre, apellido, direccion, identificacion) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#direccion = direccion;
        this.#identificacion = identificacion;
        this.#cuenta = new Cuenta(this.generarNumeroCuenta(), 0, []);
    }

    get identificacion() {
        return this.#identificacion;
    }

    generarNumeroCuenta() {
        // Genera un número de cuenta aleatorio (puedes personalizar esto)
        return 'CUENTA-' + Math.floor(Math.random() * 1000000);
    }

    get cuenta() {
        return this.#cuenta;
    }

    // Métodos adicionales para obtener información del cliente
    getNombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`;
    }
}
