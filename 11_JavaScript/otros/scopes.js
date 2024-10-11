
// Scopes

// var: Function scope
// Si se declara dentro de una función existe solamente en ese lugar
// Si se declara por fuera existe desde X línea de código hacia abajo
function saludar () {
    var nombre = "Eva";
    // var permite re-declarar variables
    var nombre = "ñlkasdjf";
    console.log("Hola " + nombre);
}

// saludar();
// console.log(nombre);

// --------------------------------
// let: block scope
// {}

let pepe = "Hola, soy Pepe";
if (pepe !== "sarasa") {
    // No puedo re-declarar variables que se declararon usando let
    let jose = "Hola soy José";
    jose = "hola mundo";
    // console.log("Es distinto", jose);
}

// console.log(jose);

// const
// const: Block scope (~let)
// const: Tampoco permite re-declararla
// No se puede cambiar el contenido

const maria = "María Peréz";
// maria = "María Josefa";

console.log(maria);

// var, let, const
// Mathias Bynens... const
