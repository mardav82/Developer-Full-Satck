
// Mostrar los números del 1 al 10

for (var i = 1; i <= 10; i++) {
    console.log('El número es:', i);
}

// Array

var perritos = ['Golden', 'Doberman', 'Dalmata', 'Velga', 'Boxer', 'Galgo'];

// Cantidad de elementos en un array
console.log(perritos.length);

// perrito[2]
// Debe empezar en 0 y no en 1 porque sino nos salteamos el primer item del array
for (var p = 0; p < perritos.length; p++) {
    // Utilizamos la variable p como índice del array
    console.log('Una raza es: ', perritos[p]);
}



