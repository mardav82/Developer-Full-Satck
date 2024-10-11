
cargar.addEventListener('click', llamarArchivo);

function llamarArchivo () {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        console.log('Ready state:', xhr.readyState);
        console.log('Estado HTTP:', xhr.status);

        // Si el readyState es 4 y el estado es 200 significa que el archivo está ok y que terminó de cargar
        if (xhr.status === 200 && xhr.readyState === 4) {
            // Muestro la respuesta de la solicitud
            contenido.innerHTML = xhr.responseText;
        }
    });

    //     Método /  URL del archivo / async
    xhr.open('GET', 'texto.txt', true);
    // Terminar de ejecutar la llamada
    xhr.send();
} // Cierra función
