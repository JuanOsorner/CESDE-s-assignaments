export class inicio{
    //Alparecer no es necesario definir los atributos aqui
    constructor(){
    }
    get Usuario(){
        return this._Usuario; //Debemos colocar los _ para que use el getter and setter de manera interna
    }
    //Vamos a hacer uso de dos funciones
    set Usuario(Usuario){
        this._Usuario = Usuario; 
    }
    get Clave(){
        return this._Clave;
    }
    set Clave(Clave){
        this._Clave = Clave;
    }
}