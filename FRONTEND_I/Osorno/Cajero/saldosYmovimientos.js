export class saldosYmovimientos{
    constructor(){
        this._Saldo = 0;
        this._ValorR;
        this._ValorC;
        this._ValorP;
        this._Valor;
        this._Concepto;
        this._Fila = [];
        this._Matriz = [];
        this._Matriz.push(["CONCEPTO","VALOR","SALDO"]);
    }
    consultarSaldo(){
        let mensajeSaldo = "\nTU SALDO ACTUAL ES: "+this._Saldo;
        return mensajeSaldo;
    }
    consultarSaldosMovimientos(Concepto,valor,saldo){
        this._Fila = [];
        this._Saldo = saldo;
        this._Concepto = Concepto;
        this._Valor = valor;
        this._Fila.push(this._Concepto,this._Valor,this._Saldo);
        this._Matriz.push(this._Fila);
    }
    retornarSaldosMovimientos(){
        return this._Matriz;
    }
    retirar(ValorR){
        let mensajeR = "";
        this._ValorR = ValorR;
        if(this._Saldo==0){
            mensajeR = "\nERROR NO EXISTE DINERO EN LA CUENTA";
        }else if(this._Saldo>0){
            this._Saldo = this._Saldo - this._ValorR;
            this.consultarSaldosMovimientos("Retiro",this._ValorR,this._Saldo);
            mensajeR = "\nRETIRO EXITOSO" + "\nSaldo Actual: "+this._Saldo;
        }else{
            mensajeR = "\nDEUDA EXISTENTE"+"\nPAGAR DEUDA";
        }
        return mensajeR;
    }
    consignar(ValorC){
        let mensajeC = "";
        this._ValorC = ValorC;
        if(this._Saldo==0){
            mensajeC = "\nERROR NO EXISTE DINERO EN LA CUENTA";
        }else if(this._Saldo>0){
            this._Saldo = this._Saldo - this._ValorC;
            this.consultarSaldosMovimientos("Consignacion",this._ValorC,this._Saldo);
            mensajeC = "\nConsignacion con exito" + "\nSaldo Actual: "+this._Saldo;
        }else{
            mensajeC = "\nDEUDA EXISTENTE"+"\nPAGAR DEUDA";
        }
        return mensajeC;
    }
    realizarPrestamos(ValorP){
        this._ValorP = ValorP;
        this._Saldo = this._Saldo + this._ValorP;
        this.consultarSaldosMovimientos("Prestamo",this._ValorP,this._Saldo);
        let mensajeP = "\nSU PRESTAMOS DE "+ValorP+"\nA actualizado su saldo de: "+this._Saldo;
        return mensajeP;
    }
}