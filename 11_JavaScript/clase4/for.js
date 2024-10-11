
var numeros = [345, 54, 'akñsdjf', 656, 87, 434];

// For clásico
/*
for (var i = 0; i < numeros.length; i++) {
    console.log("Vuelva número", i);
}
*/

// Opción 2, ~2016 ~forEach
// Guarda el contenido de cada compartimiento en una nueva variable (numero)

for (numero of numeros) {
    // Con este for no podemos saber el valor de i
    console.log("¡El número es!", numero);
}



// Opción 3 ~2016
// .map
// Objetos
numeros.map(numero => {
    console.log(numero);
});


