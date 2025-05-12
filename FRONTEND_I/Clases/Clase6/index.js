//funciones anonimas (*)Estas funciones no sufren de hotsting
let saludo = function(){
    return console.log("Hola soy una funcion anonima");
}
//Como toda funcion tenemos que llamarla
let suma = function(num1,num2){
    return console.log(Number(num1)+Number(num2));
}
//Las funciones solo devuelven un tipo de valor
let sumaMulti = function(num1,num2){ //Pueden haber n parametros
    let suma = Number(num1)+Number(num2);
    let multi = Number(num1)*Number(num2);
    let V = [];
    V.push(suma);
    V.push(multi);
    return console.log(V);
}
//Las funciones flecha son condicionales en toda la forma 
/*Ejemplo: 
    let saludo = (premisas)nombre =>(conclusiones)"saludo" + nombre
    (Parametros)(Premisas) => (conclusiones)(retorno)
*/
let saludo1 = (nombre) => console.log("Hola soy "+nombre);
let suma1 = (num1,num2) => console.log("La suma es: "+ (Number(num1)+Number(num2)));
suma1(2,3);
saludo1("Carlos");
sumaMulti(1,2);
suma(1,2);
saludo();