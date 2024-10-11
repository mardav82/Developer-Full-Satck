
// spread operator (...)
function sumar (...numeros) {
    // Suma es un acumulador, se suma a si mismo un número variables
    var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }

    return suma;
}

console.log(sumar(20, 76, 50, 65));

// Contadores y acumuladores

/* 
    Contadores ( i )
        Se suman 1 a si mismos
        i++
        i = i + 1

    Acumuladores ( acu/acumulador/suma )
        Se suman un valor variable
        acu = acu + variable

*/
