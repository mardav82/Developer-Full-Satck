
// console.log(usuario, clave);

// Evento focus... Cuando algo tiene foco / está activo
// () => { ENTONCES

/*
usuario.addEventListener("focus", () => {
    alert("Hiciste clic!!!!");
});
*/

// keyup o keydown para verificación constante
clave.addEventListener("blur", () => {
    // Queremos saber cuántos caractéres tiene eso que escribió
    // En value encuentro lo que se tipeó en el campo
    console.log(clave.value);
    console.log(clave.value.length);

    // Si la cantidad de caracteres es menor o igual a 6 mostrar un ALERT
    if (clave.value.length <= 6) {
        console.log('ESTO NO SE HACE SEÑOR. Use más caracteres por favor.');
    }
});

