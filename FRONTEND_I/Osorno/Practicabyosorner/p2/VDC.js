//Verificador de contraseñas: CONTRASEÑA POR DEFECTO 123
function verificar(texto){
    let contraseña = "123";
    let valor;
    (contraseña == texto) ? valor = true : valor = false;
    return console.log(valor);
}
let text = prompt("Ingrese su contraseña: ");
verificar(text);