
var url = "https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=0df39b4b9d9ed1e00543bfc269eb773f&lang=es&units=metric";

fetch(url)
    .then(res => {
        if (res.ok) {
            res.json()
                .then(data => {
                    console.log(data);

                    ciudad.innerHTML = data.name;
                    contenido.innerHTML = `La temperatura en la ciudad de ${data.name} es de ${Math.round(data.main.temp)}°C`;
                });
        } else {
            // Mostrar mensaje de error por si algo falla
            // 401 (Unauthorized) o 404 (Error en la ciudad)
            console.error("Oops, algo falló", res.statusText);
        }
    })
    .catch(error => {
        // Si se cae el servidor de OpenWeatherMap
        console.error("Oops, algo falló", error);
    });
