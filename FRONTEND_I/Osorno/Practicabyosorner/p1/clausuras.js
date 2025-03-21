//Haremos uso de las famosas clausuras de js
/*
Preliminares: En js las funciones se tratan como cualquier otra variable (CIUDADANOS DE PRIMERA CLASE)
*/
function contar(contador){
    return contador += 1; 
}
function clausura(){
    let contardor1 = 0;
    return console.log(contar(contardor1));
}

