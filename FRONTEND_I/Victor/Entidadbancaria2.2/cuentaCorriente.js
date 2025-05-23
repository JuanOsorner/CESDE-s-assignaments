import { Cuenta  } from "./Cuenta.js";


export class cuentaCorriente extends Cuenta{
    constructor(numeroCuenta, saldoInicial, sobregiro){
        super(numeroCuenta, saldoInicial);
        this.sobregiro = sobregiro;
    }

    retirar(monto){
        if(this.saldo + this.sobregiro >= monto){
            this.saldo -= monto;
            this.registrarMovimiento("Retiro", monto);
            return true;
        }else {
            alert ("Fondos Insuficientes (Incluyendo Sobre Giro). ");
            return false;
        }
    }
    
}