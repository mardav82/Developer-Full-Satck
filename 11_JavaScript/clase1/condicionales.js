// condicionales.js

var numero = 20;
var nombre = 'Josefa';

// ==  valida solo contenido de la variable
// === valida contenido y tipo de dato
if (numero === '20') {
    console.log('Es igual a 20');
} else {
    console.log('Es distinto a 20');
} 


// Preguntar si el nombre es... Josefa
// Un igual (=) se usa para asignar un valor a una variable, para COMPARAR variables tengo que usar == o ===
if (nombre === 'Josefa') {
    console.log('JOSEFFAAA, Cómo va?!');
} else {
    console.log('No te conozzzco');
}



// Preguntar si es mayor o igual a 25
// Los condicionales devuelven booleanos (verdadero / falso)
if (numero >= 25) {
    // Qué sucede si la condición se cumple
    console.log('El número es mayor a 25');
} else {
    // Qué sucede si la condición no se cumple
    console.log('El número no es mayor a 25');
}
