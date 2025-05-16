import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";
import { CuentaAhorro } from "./cuentaAhorro.js";
import { cuentaCorriente } from "./cuentaCorriente.js";

let clientes = [];
let clienteActual = null;

function reconstruirClienteDesdeJSON(json){
    const cliente = new Cliente(
        json.nombre,
        json.apellido,
        json.direccion,
        json.telefono,
        json.Identificacion,
        json.id,
        json.password
    );

    json.cuenta.forEach(c =>{
        let cuenta
        if (c.numeroCuenta.startsWith("AH-")){
            cuenta = new CuentaAhorro(c.numeroCuenta, c.saldo,c.interesesMensuales);
        }else if(c.numeroCuenta.startsWith("CC-")){
            cuenta= new cuentaCorriente(c.numeroCuenta, c.saldo,c.cupo);
        } 

        cuenta.movimiento = c.movimiento.map(m => ({
            tipo: m.tipo,
            monto: m.monto,
            fecha: m.fecha
        }));

        cliente.agregarCuenta(cuenta);
    })

    return cliente;
}




window.registrar = function() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const Identificacion = document.getElementById("Identificacion").value.trim();
    const id = document.getElementById("id").value.trim();
    const password = document.getElementById("password").value.trim();
    const tipoCuenta = document.getElementById("tipoCuenta").value;


    const cliente = new Cliente(nombre, apellido, direccion,telefono,Identificacion, id, password);
   const cuentahorro = new CuentaAhorro ("AH-" + Math.floor(Math.random() * 1000000), 0, 0.01);
   const cuentacorriente = new cuentaCorriente ("CC-" + Math.floor(Math.random() * 1000000), 0, 1000000)

    cliente.agregarCuenta(cuentahorro);
    cliente.agregarCuenta(cuentacorriente);
    clientes.push(cliente);
    

    localStorage.setItem("clientes",JSON.stringify(clientes));
    //localStorage.setItem("clienteActual",JSON.stringify(cliente));
    clienteActual = reconstruirClienteDesdeJSON(cliente);

    mostrarDashboard();
};

window.iniciarSesion = function() {
    const id = document.getElementById("login-id").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const cliente = clientes.find(c => c.id === id && c.password === password);

    if (cliente) {

        clienteActual = reconstruirClienteDesdeJSON(cliente);
        document.getElementById(".card").style.display = "none";
        document.getElementById("dashboard").classList.remove("hidden")


        localStorage.setItem("clienteActual" , JSON.stringify(cliente));
        mostrarDashboard();
      
        
    } else {
        alert("ID o contraseña incorrectos");
    }
};
//mostramos la dasboad en despues de registarse o iniciar sesiosn 
function mostrarDashboard() {
    document.getElementById("formulario-registro").classList.add("hidden");
    document.getElementById("formulario-login").classList.add("hidden");
    //document.querySelector('.tabs').classList.add('hidden');
    document.getElementById("dashboard").classList.remove("hidden");

    document.getElementById("cliente-nombre").textContent = `${clienteActual.nombre} ${clienteActual.apellido}`;
    document.getElementById("nombre-completo").textContent = `${clienteActual.nombre} ${clienteActual.apellido}`;
    document.getElementById("info-identificacion").textContent = clienteActual.Identificacion;
    document.getElementById("info-direccion").textContent = clienteActual.direccion;
    document.getElementById("info-telefono").textContent= clienteActual.telefono

    const cuentasSelect = document.getElementById("cuentas");
    cuentasSelect.innerHTML= "";
    clienteActual.cuenta.forEach(c =>{
        const option = document.createElement("option");
        option.value = c.numeroCuenta;
        option.textContent = c.numeroCuenta;
        cuentasSelect.appendChild(option);

    })

    actualizarDashboard();
    cuentasSelect.onchange = actualizarDatosCuenta;
}

function actualizarDatosCuenta(){
    const numeroCuenta = document.getElementById("cuentas").value;
    const cuenta = clienteActual.cuenta.find(c => c.numeroCuenta === numeroCuenta);

    if (cuenta ){
        document.getElementById("saldo-actual").textContent= `$${cuenta.obtenerSaldo()}`;
        const movimiento = cuenta.obtenerMovimiento();
        const listas = document.getElementById("movimiento");
        listas.innerHTML = "";
        movimiento.forEach(m => {
            const li = document.createElement("li");
            li.textContent = `${m.tipo} - $${m.monto} -  ${m.fecha}`;
            listas.appendChild(li);
        }) 
    }
}


window.realizarOperacion = function() {
    const tipo = document.getElementById("tipo-operacion").value;
    const monto = parseFloat(document.getElementById("monto").value);
    const numeroCuenta = document.getElementById("cuentas").value;
    const cuenta = clienteActual.cuenta.find(c => c.numeroCuenta === numeroCuenta);

    if (!cuenta || isNaN(monto) || monto <= 0) {
        alert("Datos inválidos");
        return;
    }

    switch (tipo) {
        case "Consignar":
            cuenta.consignar(monto);
            break;

        case "retirar":
            cuenta.retirar(monto);
            break;

        case "intereses":
            if (cuenta instanceof CuentaAhorro) {
                cuenta.generarIntereses();
            } else {
                alert("Esta cuenta no genera intereses.");
            }
            break;

        case "transferencia":
            const destinoNum = document.getElementById("cuenta-destino").value;

            if (numeroCuenta === destinoNum){
                alert("No se puede transferir a la misma cuenta")
                return;
            }

            let cuentaDestino = null;
            // creamos un for para buscan entre todos los cliente 

            for ( const cliente of clientes){
                cuentaDestino = cliente.cuenta.find(c=> c.numeroCuenta === destinoNum);
                if (cuentaDestino) break;
            }

            if (!cuentaDestino){
                alert("cuneta destino no encontrada.");
                return;
            }

            cuenta.realizarTransferencia(cuentaDestino, monto)
            break;
    }

    localStorage.setItem("clientes", JSON.stringify(clientes));
    localStorage.setItem("clienteActual" ,JSON.stringify(clienteActual));
    datosGuardados();
    actualizarDatosCuenta();
    actualizarDashboard();
};

function actualizarDashboard() {
    const numeroCuenta = document.getElementById("cuentas").value;
    const cuenta = clienteActual.cuenta.find(c => c.numeroCuenta === numeroCuenta);
    if (!cuenta) return;

    document.getElementById("saldo-actual").textContent = `$${cuenta.obtenerSaldo()}`;

    const movimientosList = document.getElementById("movimientos");
    movimientosList.innerHTML = "";
    cuenta.obtenerMovimiento().forEach(m => {
        const li = document.createElement("li");
        li.textContent = `${m.fecha} - ${m.tipo}: $${m.monto}`;
        movimientosList.appendChild(li);
    });
}

window.cerrarSesion = function() {
    clienteActual = null;
    //localStorage.removeItem("clienteActual");
    document.getElementById("formulario-registro").classList.remove("hidden");
    document.getElementById("formulario-login").classList.remove('hidden');
    document.getElementById("dashboard").classList.add("hidden")
    //mostrarFormulario('login');
};

function datosGuardados(){
    const index = clientes.findIndex ( c => c.id === clienteActual.id);
    clientes[index] = clienteActual;
    localStorage.setItem("clientes", JSON.stringify(clientes))
}

window.mostrarFormulario = function(tipo) {
    document.getElementById("formulario-registro").classList.toggle("hidden", tipo !== "registro");
    document.getElementById("formulario-login").classList.toggle("hidden", tipo !== "login");
    
    document.getElementById("tab-registro").classList.toggle("active", tipo === "registro");
    document.getElementById("tab-login").classList.toggle("active", tipo === "login");
};






document.addEventListener ('DOMContentLoaded', function(){
    const clienteSesion = localStorage.getItem("clienteActual");

    if(clienteSesion){
        clienteActual = reconstruirClienteDesdeJSON(JSON.parse(clienteSesion));

        const datosGuardados = localStorage.getItem("clientes");
        if(datosGuardados){
            const jsonClientes = JSON.parse(datosGuardados);
            clientes = jsonClientes.map(c=> reconstruirClienteDesdeJSON(c));
        }
        mostrarDashboard();
    }else {
        mostrarFormulario('registro');
    }
});