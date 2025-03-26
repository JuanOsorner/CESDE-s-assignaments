import { Datos } from "../Cajero/Datos.js";
export class AlmaRetona extends Datos{
    constructor(){
        super();
        this._Vector = [];
        this._Vector1 = [];
    }
    almacenarDatos(Identificacion,Usuario,Correo,Clave){
        this._Vector = [];
        this._Vector1 = [];
        this._Vector.push(Identificacion,Usuario,Correo,Clave);
        this._Vector1.push(Usuario,Clave);
    }
    inicioDatos(){
        return this._Vector1;
    }
}