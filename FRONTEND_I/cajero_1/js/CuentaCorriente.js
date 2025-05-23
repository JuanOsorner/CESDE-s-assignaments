import { Cuenta } from './Cuenta.js';

export class CuentaCorriente extends Cuenta {
    constructor(numero, saldo = 0, sobregiro = 500000) {
        super(numero, saldo);
        this.sobregiro = sobregiro;
    }

    realizarRetiro(monto) {
        if (this.saldo + this.sobregiro >= monto) {
            this.saldo -= monto;
            this.registrarMovimiento('Retiro', monto);
            return true;
        }
        return false;
    }

    realizarConsignacion(monto) {
        this.saldo += monto;
        this.registrarMovimiento('Consignacion', monto);
    }
}

