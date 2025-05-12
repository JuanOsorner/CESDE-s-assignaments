import { Datos } from "../Cajero/Datos.js"; //Debemos importar la clase (!!IMPORTAR DE LA MANERA CORRECTA!!)
const datos = new Datos(); //Instanciamos
import { AlmaRetona } from "../Cajero/AlmaRetona.js";
const almare = new AlmaRetona();
import { RELOJ } from "../Cajero/RELOJ.js";
import { Mensajes } from "../Cajero/Mensajes.js";
const mensajes = new Mensajes();
import { saldosYmovimientos } from "../Cajero/saldosYmovimientos.js";
const saldosMovimientos = new saldosYmovimientos();
let X = [];
let contador = 0;
let estado = false;
//FUNCIONABILIDAD
while(true){
    const rel = new RELOJ();
    mensajes.AAMensajePrincipal();
    let Sinicio = prompt();
    //INICIO Y REGISTRO
    switch(Sinicio){
        case "1":
            mensajes.AIngresoSesion();
            mensajes.AIngresoUsuario();
            let usu = prompt();
            datos.Usuario = usu;
            mensajes.AIngresoClave();
            let cla = prompt();
            datos.Clave = cla;
            X.push(datos.Usuario,datos.Clave);
            //Tomaremos los datos en la posicion 1 y 2 de los vectores que retornan los metodos
            if(almare.inicioDatos().length==0){ //Para verificar que el vector este vacio v.length == 0
                mensajes.ErrorRegistro();
            }else if(almare.inicioDatos()[0] != X[0] || almare.inicioDatos()[1] != X[1]){
                    mensajes.ErrorDatos();
                    contador++;
                    mensajes.ErrorIntentos(contador);
                    if(contador == 3){
                        mensajes.ErrorBloqueo();
                        contador = rel._bloqueo();
                    }
            }else{
                estado = true;
            }
            break;
        case "0":
            almare._Vector = [];
            almare._Vector1 = [];
            mensajes.BRegistro();
            mensajes.BRegistroIdentificacion();
            let ide = prompt();
            datos._Identificacion = ide;
            mensajes.BregistroUsuario();
            let nusu = prompt();
            datos._Usuario = nusu;
            mensajes.BregistroCorreo();
            let correo = prompt();
            datos._Correo = correo.toLowerCase(); //Para que el texto sea completamente en minusculas
            while(true){
                mensajes.BregistroClave();
                let con1 = prompt();
                datos._Clave = con1;
                mensajes.BregistroConfirmarClave();
                let con2 = prompt();
                if(con1 != con2){
                    mensajes.ErrorNoCoincidencia();
                }else{
                    almare.almacenarDatos(datos._Identificacion,datos._Usuario,datos._Correo,datos._Clave);
                    break;
                }
            }
            contador = 0;
            break;
        default:
            mensajes.ErrorNoIngresoDatos();
            break;
    }
    //ADENTRO
    while(estado){
        console.log(almare._Vector);
        mensajes.CadentroInicio();
        mensajes.CadentroEleccion();
        let Sentrada = prompt();
        switch(Sentrada){
            case "1":
                mensajes.CadentroRetirar();
                let valor1 = Number(prompt());
                mensajes.ZCUADROS(); 
                console.log(saldosMovimientos.retirar(valor1));
                mensajes.ZCUADROS();
                break;
            case "2":
                mensajes.ZCUADROS();
                console.log(saldosMovimientos.consultarSaldo());
                mensajes.ZCUADROS();
                break;
            case "3":
                mensajes.CadentroConsignar();
                let valor2 = Number(prompt());
                mensajes.ZCUADROS(); 
                console.log(saldosMovimientos.consignar(valor2));
                mensajes.ZCUADROS();
                break;
            case "4":
                //table para imprimir matrices
                console.table(saldosMovimientos.retornarSaldosMovimientos());
                break;
            case "5":
                mensajes.ZCUADROS();
                console.log("TUS DATOS SON: \n")
                console.log(almare._Vector);
                mensajes.ZCUADROS();
                mensajes.DcambiarDatos();
                let cambio = prompt();
                if(cambio == "1"){
                    mensajes.DcambiarIdentificacion();
                    let ide1 = prompt();
                    datos._Identificacion = ide1;
                    mensajes.DcambiarUsuario();
                    let usu1 = prompt();
                    datos._Usuario = usu1;
                    mensajes.DcambiarCorreo();
                    let correo1 = prompt();
                    datos._Correo = correo1;
                    let cont1 = "1", cont2 = "2";
                    while(cont1 != cont2){
                        mensajes.ErrorNoIngresoClave();
                        mensajes.DcambiarClave1();
                        cont1 = prompt();
                        datos._Clave = cont1;
                        mensajes.DcambiarClave2();
                        cont2 = prompt();
                    }
                    mensajes.DcambiarGuardarCambios();
                    let guardar = prompt();
                    if(guardar == "1"){
                        almare.almacenarDatos(datos.Identificacion,datos._Usuario,datos._Correo,datos._Clave)
                        mensajes.DcambiarSeActualizo();
                    }
                }else{
                    mensajes.DcambiarNoSeActualizo();
                }
                break;
            case "6":
                mensajes.CadentroPrestamo();
                let valor3 = Number(prompt());
                mensajes.ZCUADROS();
                console.log(saldosMovimientos.realizarPrestamos(valor3));
                mensajes.ZCUADROS(); 
                break;
        }
        if(Sentrada == "7"){
            mensajes.CentroSalir();
            estado = false;
            break;
        }
    }
    X = [];
}