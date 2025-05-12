import { Cuenta } from "./Cuenta.js";
import { Cliente } from "./Cliente.js"; //TENER MUCHO CUIDADO CON ESTO

//INSTANCIAS
const cuenta = new Cuenta("Hola", 1000, []);

const botonSaldo = document.getElementById("btn-top-consultar");

//ACCEDER AL MODAL

const dlg = document.getElementById("dlg");

const dlg1 = document.getElementById("dlg1");

const botonRegistrar = document.getElementById("btn-top-registrar");

const botonMovimientos = document.getElementById("btn-top-movimientos");

const etiP = document.getElementById("p");

//CERRAR EL MODAL

document.getElementById("cerrar").addEventListener("click", () => dlg.close());

document
  .getElementById("cerrar1")
  .addEventListener("click", () => dlg1.close());

//OTROS BOTONES

botonMovimientos.addEventListener("click", () => {
  cuenta.consultarMovimientos();
});

botonRegistrar.addEventListener("click", () => {
  cuenta.registrarMovimientos("Consignación", 100);
});

botonSaldo.addEventListener("click", () => {
  cuenta.consultarSaldo();
});

////////////////////////////////////////////// APORTE LUIS ANGEL RAMIREZ

const loginSection = document.getElementById("login-section");
const registerSection = document.getElementById("register-section");
const atm = document.getElementById("atm");

const loginIdInput = document.getElementById("login-identificacion");
const loginPasswordInput = document.getElementById("login-password");
const loginErrorDiv = document.getElementById("login-error");

const regNombreInput = document.getElementById("reg-nombre");
const regApellidoInput = document.getElementById("reg-apellido");
const regDireccionInput = document.getElementById("reg-direccion");
const regIdInput = document.getElementById("reg-identificacion");
const regPasswordInput = document.getElementById("reg-password");
const registerErrorDiv = document.getElementById("register-error");

const btnLogin = document.getElementById("btn-login");
const btnRegister = document.getElementById("btn-register");
const toRegisterLink = document.getElementById("to-register");
const toLoginLink = document.getElementById("to-login");

// Estado
const clientes = [];
const bloqueados = new Set();
const intentosLogin = new Map(); // id ------------------> intentos

// Cambiar de vistas
toRegisterLink.addEventListener("click", () => {
  loginSection.classList.remove("active");
  registerSection.style.display = "flex";
  loginSection.style.display = "none";
  registerErrorDiv.style.display = "none";
  clearRegisterForm();
});

toLoginLink.addEventListener("click", () => {
  registerSection.style.display = "none";
  loginSection.style.display = "flex";
  loginSection.classList.add("active");
  loginErrorDiv.style.display = "none";
  clearLoginForm();
});

// Limpiar formularios
function clearLoginForm() {
  loginIdInput.value = "";
  loginPasswordInput.value = "";
  loginErrorDiv.textContent = "";
  loginErrorDiv.style.display = "none";
}

function clearRegisterForm() {
  regNombreInput.value = "";
  regApellidoInput.value = "";
  regDireccionInput.value = "";
  regIdInput.value = "";
  regPasswordInput.value = "";
  registerErrorDiv.textContent = "";
  registerErrorDiv.style.display = "none";
}

// Validar campos registro mínimos
function validarRegistro() {
  if (!regNombreInput.value.trim()) return "Nombre es requerido.";
  if (!regApellidoInput.value.trim()) return "Apellido es requerido.";
  if (!regDireccionInput.value.trim()) return "Dirección es requerida.";
  if (!regIdInput.value.trim()) return "Identificación es requerida.";
  if (!regPasswordInput.value.trim()) return "Contraseña es requerida.";
  if (regPasswordInput.value.length < 6)
    return "La contraseña debe tener al menos 6 caracteres.";
  if (clientes.some((c) => c.identificacion === regIdInput.value.trim())) {
    return "Ya existe un cliente registrado con esta identificación.";
  }
  return null;
}

btnRegister.addEventListener("click", () => {
  console.log("Botón de registro clickeado"); // Para verificar si se dispara el evento
  const error = validarRegistro();
  if (error) {
    console.log("Error de validación:", error); // Para verificar errores de validación
    registerErrorDiv.textContent = error;
    registerErrorDiv.style.display = "block";
    return;
  }

  import("./Cliente.js").then(({ Cliente }) => {
    const nuevoCliente = new Cliente(
      regNombreInput.value.trim(),
      regApellidoInput.value.trim(),
      regDireccionInput.value.trim(),
      regIdInput.value.trim()
    );
    // Guardar contraseña (en memoria, acceder a este campo privado no es posible)
    // Para demo guardamos plain password en una propiedad pública (solo demo)
    nuevoCliente.password = regPasswordInput.value.trim();

    clientes.push(nuevoCliente);

    console.log('Clientes registrados:', clientes);

    alert("Registrado exitosamente. Por favor, inicia sesión.");

    clearRegisterForm();
    registerSection.style.display = "none";
    loginSection.style.display = "flex";
    loginSection.classList.add("active");
  });
});

// Login
btnLogin.addEventListener("click", () => {
  const id = loginIdInput.value.trim();
  const pass = loginPasswordInput.value.trim();
  console.log("ID ingresado:", id);
  console.log("Contraseña ingresada:", pass);
  if (!id || !pass) {
    loginErrorDiv.textContent = "Complete ambos campos.";
    loginErrorDiv.style.display = "block";
    return;
  }
  if (bloqueados.has(id)) {
    loginErrorDiv.textContent =
      "Cuenta bloqueada por múltiples intentos fallidos.";
    loginErrorDiv.style.display = "block";
    return;
  }
  const cliente = clientes.find((c) => c.identificacion === id);
  console.log("Cliente encontrado:", cliente);
  if (!cliente || cliente.password !== pass) {
    const intentos = intentosLogin.get(id) || 0;
    const nuevosIntentos = intentos + 1;
    intentosLogin.set(id, nuevosIntentos);
    if (nuevosIntentos >= 3) {
      bloqueados.add(id);
      loginErrorDiv.textContent = "Cuenta bloqueada tras 3 intentos fallidos.";
      loginErrorDiv.style.display = "block";
    } else {
      loginErrorDiv.textContent = `Error de identificación o contraseña. Intento ${nuevosIntentos} de 3.`;
      loginErrorDiv.style.display = "block";
    }
    return;
  }
  // Login exitoso
  loginErrorDiv.style.display = "none";
  intentosLogin.delete(id);
  // Ocultar login y registro, mostrar cajero
  loginSection.style.display = "none";
  registerSection.style.display = "none";
  atm.style.display = "flex";
  // Guardar cliente activo para usarlo en cajero (pasar referencia)
  window.clienteActivo = cliente;

  // Aquí puedes inicializar tu instancia Cuenta con window.clienteActivo.cuenta y seguir con el cajero
  // ...
});

// Opcional: botón cerrar sesión
document.getElementById("btn-cerrar-sesion").addEventListener("click", () => {
  // Limpiar datos y ocultar cajero, mostrar login
  window.clienteActivo = null;
  atm.style.display = "none";
  loginSection.style.display = "flex";
  loginSection.classList.add("active");
  clearLoginForm();
});
