import { inicio } from "../Cajero/inicio.js"; //Debemos importar la clase (!!IMPORTAR DE LA MANERA CORRECTA!!)
const ini = new inicio(); //Instanciamos
while(true){
    console.log("------------------------------------------------");
    console.log("🧞​ Ingrese 1 si posee cuenta o 0 si no posee cuenta 🧞​");
    console.log("------------------------------------------------");
    let Scuenta = prompt();
    switch(Scuenta){
        case "1":
            console.log("\n---------------------");
            console.log("👽​ INICIO DE SESION 👽​");
            console.log("-----------------------");
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
            console.log("\n------------");
            console.log("👹 REGISTRO 👹​");
            console.log("---------------");
            console.log("\n-----------------------");
            console.log("Ingrese su identificacion");
            console.log("-------------------------");
            let ide = prompt();
            console.log("\n--------------------------");
            console.log("Ingrese un nombre de usuario");
            console.log("----------------------------");
            let nusu = prompt();
            console.log("\n---------------------------");
            console.log("Ingrese su correo electronico");
            console.log("-----------------------------");
            let correo = prompt();
            while(true){
                console.log("\n---------------------------");
                console.log("Ingrese una contraseña");
                console.log("-----------------------------");
                let con1 = prompt();
                console.log("\n---------------------------");
                console.log("Confirme su contraseña");
                console.log("-----------------------------");
                let con2 = prompt();
                if(con1 != con2){
                    console.log("\n---------------------------------------");
                    console.log("⚠️​​ ERROR LAS CONTRASEÑAS NO COINCIDEN ⚠️​​")
                    console.log("-----------------------------------------");
                }else{
                    break;
                }
            }
            break;
        default:
            console.log("\n--------------------------------");
            console.log("ERROR NO SE INGRESO LO REQUERIDO");
            console.log("-----------------------------------");
            break;
    }
}