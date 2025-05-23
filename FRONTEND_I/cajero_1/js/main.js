import { Cliente } from './Cliente.js';
import { CuentaCorriente } from './CuentaCorriente.js';
import { CuentaAhorros } from './CuentaAhorros.js';

console.log("Se está ejecutando.")

let clientes = [];
let currentUser = null;
let loginAttempts = 0;
const maxLoginAttempts = 3;

// Elementos UI
const loginDiv = document.getElementById('login');
const cajeroDiv = document.getElementById('cajero');
const loginMessage = document.getElementById('loginMessage');
const identificacionInput = document.getElementById('identificacion');
const passwordInput = document.getElementById('password'); // Este no se usa realmente pero dejamos para UI

// Crear botones
const consignarBtn = document.getElementById('consignarBtn');
const retirarBtn = document.getElementById('retirarBtn');
const transferirBtn = document.getElementById('transferirBtn');
const consultarSaldoBtn = document.getElementById('consultarSaldoBtn');
const consultarMovimientosBtn = document.getElementById('consultarMovimientosBtn');
const logoutBtn = document.getElementById('logoutBtn');

const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', login);
registerBtn.addEventListener('click', showRegisterForm);
logoutBtn.addEventListener('click', logout);
consignarBtn.addEventListener('click', consignar);
retirarBtn.addEventListener('click', retirar);
transferirBtn.addEventListener('click', transferir);
consultarSaldoBtn.addEventListener('click', mostrarSaldo);
consultarMovimientosBtn.addEventListener('click', mostrarMovimientos);

// -----------------------
// Funciones de login e interfaz
// -----------------------
function login() {
    const identificacion = identificacionInput.value.trim();
    // No se valida contraseña real, solo identificacion para esta demo
    if (!identificacion) {
        loginMessage.textContent = 'Por favor, ingrese número de identificación';
        return;
    }
    const cliente = clientes.find(c => c.identificacion === identificacion);
    if (!cliente) {
        loginAttempts++;
        if (loginAttempts >= maxLoginAttempts) {
            loginMessage.textContent = 'Número máximo de intentos alcanzado. Intente más tarde.';
            loginBtn.disabled = true;
            return;
        }
        loginMessage.textContent = `Usuario no encontrado. Intentos restantes: ${maxLoginAttempts - loginAttempts}`;
        return;
    }
    currentUser = cliente;
    loginMessage.textContent = '';
    loginDiv.style.display = 'none';
    cajeroDiv.style.display = 'block';
    limpiarCamposLogin();
    alert(`Bienvenido ${currentUser.nombre} ${currentUser.apellido}!`);
}

function logout() {
    currentUser = null;
    loginAttempts = 0;
    loginBtn.disabled = false;
    loginDiv.style.display = 'block';
    cajeroDiv.style.display = 'none';
    loginMessage.textContent = '';
    limpiarCamposLogin();
}

// Para limpiar inputs en login
function limpiarCamposLogin() {
    identificacionInput.value = '';
    passwordInput.value = '';
}

// -----------------------
// Registro de nuevo usuario
// -----------------------
function showRegisterForm() {
    // Solicitar los datos al usuario
    let nombre = prompt("Ingrese su nombre:");
    if (!nombre) { alert("Nombre es obligatorio."); return; }

    let apellido = prompt("Ingrese su apellido:");
    if (!apellido) { alert("Apellido es obligatorio."); return; }

    let direccion = prompt("Ingrese su dirección:");
    if (!direccion) { alert("Dirección es obligatoria."); return; }

    let identificacion = prompt("Ingrese su número de identificación (único):");
    if (!identificacion) { alert("Identificación es obligatoria."); return; }
    
    // Confirmar que no exista la identificación
    if (clientes.some(c => c.identificacion === identificacion)) {
        alert("Identificación ya registrada. Intente iniciar sesión.");
        return;
    }

    // Solicitar la contraseña
    let password = prompt("Ingrese una contraseña:");
    if (!password) { alert("Contraseña es obligatoria."); return; }

    // Preguntar tipo de cuenta
    let tipoCuenta = prompt("Tipo de cuenta:\n1 - Cuenta Corriente\n2 - Cuenta de Ahorros\nIngrese 1 o 2");
    if (tipoCuenta !== '1' && tipoCuenta !== '2') {
        alert("Tipo de cuenta inválido.");
        return;
    }

    let clienteNuevo;
    if (tipoCuenta === '1') {
        // Crear cuenta corriente
        const numeroCuenta = generarNumeroCuenta();
        const cuenta = new CuentaCorriente(numeroCuenta);
        clienteNuevo = new Cliente(nombre, apellido, direccion, identificacion, password); // Se incluye la contraseña
        clienteNuevo.cuenta = cuenta;
    } else {
        // Crear cuenta de ahorros
        const numeroCuenta = generarNumeroCuenta();
        const cuenta = new CuentaAhorros(numeroCuenta);
        clienteNuevo = new Cliente(nombre, apellido, direccion, identificacion, password); // Se incluye la contraseña
        clienteNuevo.cuenta = cuenta;
    }

    clientes.push(clienteNuevo);
    alert(`Usuario registrado con éxito. Su número de cuenta es: ${clienteNuevo.cuenta.numero}`);
}

// Función para generar un número de cuenta aleatorio
function generarNumeroCuenta() {
    return Math.floor(100000000 + Math.random() * 900000000).toString();
}


// -----------------------
// Funciones operación bancarias
// -----------------------
function consignar() {
    if (!currentUser) return alert("Debe iniciar sesión.");
    let montoStr = prompt("Ingrese el monto a consignar:");
    if (!montoStr || isNaN(montoStr)) return alert("Monto inválido.");
    let monto = parseFloat(montoStr);
    if (monto <= 0) return alert("El monto debe ser mayor que cero.");
    currentUser.cuenta.realizarConsignacion(monto);
    alert(`Consignación exitosa. Nuevo saldo: \$${currentUser.cuenta.consultarSaldo().toFixed(2)}`);
}

function retirar() {
    if (!currentUser) return alert("Debe iniciar sesión.");
    let montoStr = prompt("Ingrese el monto a retirar:");
    if (!montoStr || isNaN(montoStr)) return alert("Monto inválido.");
    let monto = parseFloat(montoStr);
    if (monto <= 0) return alert("El monto debe ser mayor que cero.");
    let exito = currentUser.cuenta.realizarRetiro(monto);
    if (exito) {
        alert(`Retiro exitoso. Nuevo saldo: \$${currentUser.cuenta.consultarSaldo().toFixed(2)}`);
    } else {
        alert("Fondos insuficientes o límite de sobregiro excedido.");
    }
}

function transferir() {
    if (!currentUser) return alert("Debe iniciar sesión.");
    
    let destinoId = prompt("Ingrese la identificación del destinatario:");
    if (!destinoId) return alert("Destinatario inválido.");
    if (destinoId === currentUser.identificacion) {
        alert("No puede transferirse a sí mismo.");
        return;
    }

    // Aquí no verificamos si el cliente destino existe, se puede hacer de forma sencilla.
    let clienteDestino = clientes.find(c => c.identificacion === destinoId);
    
    let montoStr = prompt("Ingrese el monto a transferir:");
    if (!montoStr || isNaN(montoStr)) return alert("Monto inválido.");
    let monto = parseFloat(montoStr);
    if (monto <= 0) return alert("El monto debe ser mayor que cero.");

    console.log("Vamos bien")

    // Intentar transferencia
    let exito = currentUser.cuenta.realizarTransferencia(clienteDestino.cuenta, monto);
    if (exito) {
        alert(`Transferencia exitosa. Monto: \$${monto.toFixed(2)} a la cuenta con ID: ${clienteDestino.identificacion}.`);
    } else {
        alert("Fondos insuficientes para realizar la transferencia.");
    }
}


function mostrarSaldo() {
    if (!currentUser) return alert("Debe iniciar sesión.");
    alert(`Su saldo actual es: \$${currentUser.cuenta.consultarSaldo().toFixed(2)}`);
}

function mostrarMovimientos() {
    if (!currentUser) return alert("Debe iniciar sesión.");
    const movimientos = currentUser.cuenta.consultarMovimientos();
    if (!movimientos.length) {
        alert("No hay movimientos registrados.");
        return;
    }

    // Crear la tabla si no existe
    let tabla = document.getElementById('tablaMovimientos');
    if (!tabla) {
        tabla = document.createElement('table');
        tabla.id = 'tablaMovimientos';
        tabla.style.width = '100%';
        tabla.style.borderCollapse = 'collapse';

        // Crear cabecera de la tabla
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        const thTipo = document.createElement('th');
        thTipo.textContent = 'Tipo';
        thTipo.style.border = '1px solid black';
        const thMonto = document.createElement('th');
        thMonto.textContent = 'Monto';
        thMonto.style.border = '1px solid black';
        const thFecha = document.createElement('th');
        thFecha.textContent = 'Fecha';
        thFecha.style.border = '1px solid black';

        tr.appendChild(thTipo);
        tr.appendChild(thMonto);
        tr.appendChild(thFecha);
        thead.appendChild(tr);
        tabla.appendChild(thead);

        // Crear cuerpo de la tabla
        const tbody = document.createElement('tbody');
        tabla.appendChild(tbody);

        // Agregar la tabla al body de la página (o a un contenedor específico)
        document.body.appendChild(tabla);
    }

    // Limpiar cualquier contenido previo en el cuerpo de la tabla
    const tbody = tabla.querySelector('tbody');
    tbody.innerHTML = '';

    // Agregar los movimientos a la tabla
    movimientos.forEach(mov => {
        const tr = document.createElement('tr');

        const tdTipo = document.createElement('td');
        tdTipo.textContent = mov.tipo;
        tdTipo.style.border = '1px solid black';

        const tdMonto = document.createElement('td');
        tdMonto.textContent = `$${mov.monto.toFixed(2)}`;
        tdMonto.style.border = '1px solid black';

        const tdFecha = document.createElement('td');
        tdFecha.textContent = new Date(mov.fecha).toLocaleString();
        tdFecha.style.border = '1px solid black';

        tr.appendChild(tdTipo);
        tr.appendChild(tdMonto);
        tr.appendChild(tdFecha);

        tbody.appendChild(tr);
    });
}


