import { Cuenta } from "./Cuenta.js"; //TENER MUCHO CUIDADO CON ESTO

//INSTANCIAS
const cuenta = new Cuenta('Hola',1000,[]);

const botonSaldo = document.getElementById('btn-top-consultar');

//ACCEDER AL MODAL

const dlg = document.getElementById('dlg');

const dlg1 = document.getElementById('dlg1');

const botonRegistrar = document.getElementById('btn-top-registrar');

const botonMovimientos = document.getElementById('btn-top-movimientos');

const etiP = document.getElementById('p');

//CERRAR EL MODAL

document.getElementById('cerrar').addEventListener('click',()=> dlg.close());

document.getElementById('cerrar1').addEventListener('click',()=> dlg1.close());

//OTROS BOTONES

botonMovimientos.addEventListener('click',()=>{
    cuenta.consultarMovimientos();
});

botonRegistrar.addEventListener('click',()=>{
    cuenta.registrarMovimientos('Consignación',100);
});

botonSaldo.addEventListener('click',()=>{
    cuenta.consultarSaldo();
});