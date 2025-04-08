export class Datos{
    //Alparecer no es necesario definir los atributos aqui
    constructor(){
    }
    get Usuario(){
        return this._Usuario; //Debemos colocar los _ para que use el getter and setter de manera interna
    }
    set Usuario(Usuario){
        this._Usuario = Usuario; 
    }
    get Clave(){
        return this._Clave;
    }
    set Clave(Clave){
        this._Clave = Clave;
    }
    get Correo(){
        return this._Correo;
    }
    set Correo(Correo){
        this._Correo = Correo;
    }
    get Identificacion(){
        return this._Identificacion;
    }
    set Identificacion(Identificacion){
        this._Identificacion = Identificacion;
    }
}