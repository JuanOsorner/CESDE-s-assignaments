import { inicio } from "../Cajero/inicio.js";
export class registro extends inicio{
    constructor(){

    }
    get Correo(){
        return this._Correo = Correo;
    }
    set Correo(Correo){
        this._Correo = Correo;
    }
    get Identificacion(){
        return this._Identificacion = Identificacion;
    }
    set Identificacion(Identificacion){
        this._Identificacion = Identificacion;
    }
}