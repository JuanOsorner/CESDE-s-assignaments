export class Cuenta {
    constructor(numero, saldo = 0) {
        this.numero = numero;
        this.saldo = saldo;
        this.movimientos = [];
    }

    consultarSaldo() {
        return this.saldo;
    }

    registrarMovimiento(tipo, monto) {
        const fecha = new Date();
        this.movimientos.push({ tipo, monto, fecha });
    }

    consultarMovimientos() {
        return this.movimientos;
    }
}
