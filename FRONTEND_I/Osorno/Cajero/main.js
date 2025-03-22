import { inicio } from "../Cajero/inicio.js"; //Debemos importar la clase (!!IMPORTAR DE LA MANERA CORRECTA!!)
const ini = new inicio(); //Instanciamos
while(true){
    console.log("------------------------------------------------");
    console.log("Ingrese 1 si posee cuenta y 0 si no posee cuenta");
    console.log("------------------------------------------------");
    let Scuenta = prompt();
    switch(Scuenta){
        case "1":
            console.log("\n-----------------");
            console.log("Ingrese su usuario");
            console.log("------------------");
            let usu = prompt("Usuario");
            ini.Usuario = usu;
            console.log("\n------------------");
            console.log("Ingrese su contraseña");
            console.log("------------------");
            let con = prompt("Contraseña");
            ini.Clave = con;
            break;
        case "0":
            break;
        default:
            console.log("\n--------------------------------");
            console.log("ERROR NO SE INGRESO LO REQUERIDO");
            console.log("-----------------------------------");
            break;
    }
    console.log(ini.Usuario + ini.Clave);
}