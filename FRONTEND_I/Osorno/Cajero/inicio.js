export class inicio{
    #Usuario = "";
    #Clave = "";
    constructor(){
    }
    getUsuario(){
        return this.#Usuario;
    }
    setUsuario(Usuario){
        this.#Usuario = Usuario;
    }
    getClave(){
        return this.#Clave;
    }
    setClave(){
        this.#Clave = Clave;
    }
}