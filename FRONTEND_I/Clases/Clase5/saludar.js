//Hosting (VARIABLES Y FUNCIONES FLOTANTES)
/*Por buenas practicas lo recomendable es hacer todas las funciones  en el inicio del codigo*/

//Buenas practicas, reutilizar codigo (Llamar funciones)
//Solo las class con inicial en mayuscula son las clases


//Llamamos un metodo que no recibe parametros, este imprime HOLA cuando se llama

function saludar(){ //Aqui van los parametros
    console.log("HOLA 🤣")
}
saludar();//Aqui van los argumentos

function saludar1(nombre, edad){
    console.log(nombre+" "+edad);
}

nombre = prompt("Ingrese su nombre");
edad = prompt("Ingrese su edad");
saludar1(nombre,edad);