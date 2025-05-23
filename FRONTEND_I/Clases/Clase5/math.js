function suma(){
    let num1 = 5;
    let num2 = 10;
    let suma = num1 + num2;
    console.log(num1+"+"+num2+"="+suma);
}
suma();
/*PODEMOS CREAR UNA FUNCION QUE TOME UNA VALOR FIJO Y VARIE EL PARAMETRO DEPENDIENDO
DEL ARGUMENTO*/
function calcular(x,pi = 3.1416){
    return x + pi;
}

console.log("Valor "+calcular(10,3));
console.log("Valor "+calcular(10,y));