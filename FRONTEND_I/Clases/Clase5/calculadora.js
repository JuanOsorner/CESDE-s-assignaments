function calcular(y,num1,num2){ //LA FUNCION ACEPTA CUALQUIER TIPO DE VALOR
    let valor;
    switch(y){ //AQUI SE PIDEN CARACTERES NUMERICOS
        case 1:
            valor = num1 + num2;
            break;
        case 2:
            valor = num1 - num2;
            break;
        case 3: 
            valor = num1*num2;
            break;
        case 4:
            if(num2 == 0){
                valor = "ERROR DIVISION POR CERO";
            }else{
                valor = num1/num2;
            }
            break;
        default:
            valor = "NO SE INGRESARON LOS DATOS";
            break;
    }
    return console.log(valor);
}
//(**) EN JAVASCRIPT SI NO SE PARSEA POR DEFECTO LAS VARIABLES SON TIPO STRING;
let x = Number(prompt("Ingrese 1 si desea sumar, 2 si desea restar, 3 si desea multiplicar, 4 si desea dividir"));
let nume1 = Number(prompt("Ingrese un numero: "));
let nume2 = Number(prompt("Ingrese otro numero: "));
calcular(x,nume1,nume2);