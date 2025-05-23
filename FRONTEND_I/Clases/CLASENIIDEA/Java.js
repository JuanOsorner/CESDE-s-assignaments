const carlos = document.getElementById('usuario');
const boton1 = document.getElementById('btnGuardar');
const boton2 = document.getElementById('btnMostrar');
const itemP = document.getElementById('resultado');

boton1.addEventListener('click',function(){
    //EL TRIM LE QUITA LOS ESPACIOS (ESTO ES BUENA PRACTICA)
    const nombre = carlos.value.trim();
    if(nombre !== ""){
        //ESTAMOS ALMACENANDO VARIABLE EN MEMORIA 
        localStorage.setItem('usuario',nombre);
        carlos.value = "";
    }
});

boton2.addEventListener('click',function(){
    //MUESTRA
    const guardado = localStorage.getItem('usuario');
    resultado.itemP = guardado ? "Bienvenido"+guardado : "No hay nombres ";
});