import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta {
   constructor (numeroCuenta ,saldoInicial, interesesMensuales){
    super(numeroCuenta, saldoInicial)
    this.interesesMensuales = interesesMensuales;
    this.retirosDelMes = 0;
    this.limitesRetiros = 5;
   }

   retirar (monto){
    if (this.retirosDelMes >= this.limitesRetiros){
        alert("Limite de Retiriros Alcanzados. ");
        return false;
    }

    const exito = super.retirar(monto);
    if(exito){
        this.retirosDelMes++
    }

    return exito;
   }

   generarIntereses(){
    const intereses = this.saldo * this.interesesMensuales;
    this.consignar(intereses);
    this.registrarMovimiento("Intereses Generados.", intereses);
   }

}

