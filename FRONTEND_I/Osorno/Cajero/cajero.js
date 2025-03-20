//Login
function registro(ide,usu,cor,con){
    let V = [];
    V.push(ide);
    V.push(usu);
    V.push(cor);
    V.push(con);
    return V;
}
//inicio
console.log("-----------------------------------------------------------")
let dato1 = prompt("Ingrese 1 si tiene cuenta, de lo contrario ingrese 0")
console.log("-----------------------------------------------------------")
if(dato1 != 1){
    console.log("-------------------------------------------------")
    let ide1 = prompt("\nIngrese su numero de identificacion(CC): ");
    let usu1 = prompt("\nIngrese un nombre de usuario: ");
    let cor1 = prompt("\nIngrese su correo electronico");
    console.log("--------------------------------------------------")
    while(true){
        console.log("------------------------------------------------------")
        let con1 = prompt("\nIngrese su contraseña (Maximo 5 caracteres):  ");
        console.log("------------------------------------------------------")
        if(con1.length>5){
            console.log("---------------------")
            console.log("\nIngrese lo solicitado")
            console.log("----------------------")
        }else{
            let con2 = prompt("Confirme su contraseña: ")
            if(con1 != con2){
                console.log("----------------------------")
                console.log("No coinciden las contraseñas")
                console.log("-----------------------------")
            }else{
                console.log(registro(ide1,usu1,cor1,con1));
                break;
            }
        }
    }
}