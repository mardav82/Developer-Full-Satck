
// fetch(URL)
// Trabaja con promesas (then y catch)
fetch('paises.json')
    .then(res => {
        // if (res.ok === true) es lo mismo que:
        if (res.ok) {
            // Convertir la respuesta a JSON
            res.json()
                .then(paises => {
                    mostrar(paises);
                    // console.log(paises);
                });
        } else {
            console.error('Oops', res.statusText);
        }
    })
    .catch(error => {
        // Solo errores ~500
        console.error('Oops.', error);
    });

function mostrar (paises) {
    console.log('Recibí', paises);
    // Un li por cada país con la información de ese país

    for (pais of paises) {
        // console.log(pais.nombre);

        var item = document.createElement('li');
        item.innerHTML = `
            <strong>Nombre:</strong> ${pais.nombre}<br>
            <strong>Población:</strong> ${pais.poblacion}<br>
            <strong>Colores:</strong> ${pais.colores}
        `;
        lista.appendChild(item);


    }
}
