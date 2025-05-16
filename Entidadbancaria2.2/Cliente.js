export class Cliente {
    constructor ( nombre , apellido , direccion,telefono ,Identificacion, id, password ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.Identificacion = Identificacion;
        this.id = id;
        this.password = password
        this.cuenta = [];
    }

    agregarCuenta(cuenta){
       this.cuenta.push(cuenta);
    }

    obtenerCuenta(){
        return this.cuenta;
    }

   
}

