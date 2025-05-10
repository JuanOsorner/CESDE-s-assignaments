function Sumar(num1, num2){
    let suma;
    if(num1 == null || num2 == null){
        suma = 0;
    }else{
        suma = num1 + num2;
    }
    return suma;
}
function Multiplicar
//Toca crear una funcion que tome los datos y los retorne
function SumarDatos(){
    let x = Number(document.getElementById('nro1').value);
    let y = Number(document.getElementById('nro2').value);
    alert(Sumar(x,y));
    let result = document.getElementById('resultado');
    result.textContent  = "El resultado de la suma es: " + Sumar(x,y); 
}

