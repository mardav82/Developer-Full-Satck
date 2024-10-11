
boton.addEventListener("click", () => {
    buscarClima(ciudad.value);
});

function buscarClima (ciudad) {
    console.log('Recibí:', ciudad);

    var url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=0df39b4b9d9ed1e00543bfc269eb773f&lang=es&units=metric`;
    
    fetch(url)
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    console.log(data);
                    contenido.innerHTML = `La temperatura en la ciudad de ${data.name} es de ${Math.round(data.main.temp)}°C`;
                });
            } else {
                console.log(res.status);
                // Vacío contenido por las dudas
                contenido.innerHTML = "";
                // Error del usuario, esa ciudad no existe
                if (res.status === 404) {
                    mensajeError.innerHTML = "No tengo tengo disponible esa ciudad";
                }
                // Error mio, de autenticación con la API
                if (res.status === 401) {
                    mensajeError.innerHTML = "Oops, algo me mandé, perdón, probá más tarde."
                }
            }
        })
        .catch(error => {
            console.error("Oh, no!", error);
        });

} // Cierra función
