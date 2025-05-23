import { Cuenta } from './Cuenta.js';

export class CuentaAhorros extends Cuenta {
    constructor(numero, saldo = 0, interesMensual = 0.01, limiteRetirosMensuales = 3) {
        super(numero, saldo);
        this.interesMensual = interesMensual;
        this.limiteRetirosMensuales = limiteRetirosMensuales;
        this.retirosEsteMes = 0;
    }

    realizarRetiro(monto) {
        if (this.retirosEsteMes >= this.limiteRetirosMensuales) {
            return false; // Límite de retiros alcanzado
        }
        if (this.saldo >= monto) {
            this.saldo -= monto;
            this.registrarMovimiento('Retiro', monto);
            this.retirosEsteMes++;
            return true;
        }
        return false; // Fondos insuficientes
    }

    realizarConsignacion(monto) {
        this.saldo += monto;
        this.registrarMovimiento('Consignacion', monto);
    }

    realizarTransferencia(destino, monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            this.registrarMovimiento('Transferencia Enviada', monto);
            destino.realizarConsignacion(monto);
            destino.registrarMovimiento('Transferencia Recibida', monto);
            return true;
        }
        return false; // Fondos insuficientes
    }

    aplicarInteres() {
        const interes = this.saldo * this.interesMensual;
        this.saldo += interes;
        this.registrarMovimiento('Interés Mensual', interes);
    }

    resetearContadorRetiros() {
        this.retirosEsteMes = 0;
    }
}
