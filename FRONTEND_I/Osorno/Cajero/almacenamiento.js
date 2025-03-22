import { registro } from "../Cajero/registro.js";
export class almacenamiento extends registro{
    #fila = [];
    constructor(){
        super();
    }
    almacenar(Identificacion,Usuario,Correo,Clave){
        return this.#fila(Identificacion,Usuario,Correo,Clave); //Podemos retornar valores privados
    }
}