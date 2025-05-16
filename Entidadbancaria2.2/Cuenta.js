export class Cuenta{
    constructor(numeroCuenta,saldoInicial = 0){
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldoInicial;
        this.movimiento= [];
    }

    consignar(monto){
        this.saldo += monto;
        this.registrarMovimiento("Consignacion", monto)
    }

    retirar(monto){
        if (this.saldo >= monto){
            this.saldo -= monto;
            this.registrarMovimiento("Retiro", monto);
            return true;
        }else{
            alert("Saldo insuficiente. ");
            return false;
        }

    }

    registrarMovimiento(tipo, monto){
        const movimiento = {
            tipo,
            monto,
            fecha: new Date().toLocaleDateString()
        };
        this.movimiento.push(movimiento);

    }

    obtenerSaldo(){
        return this.saldo;
    }

    obtenerMovimiento(){
        return this.movimiento;
    }

    realizarTransferencia(destinCuenta,monto){
        if(this.retirar(monto)){
            destinCuenta.consignar(monto);
            this.registrarMovimiento("Transferencia Enviada Exitosamente", monto);
            destinCuenta.registrarMovimiento("Transferencia recibida", monto);
            return true;
        }

        return false;
    }

}