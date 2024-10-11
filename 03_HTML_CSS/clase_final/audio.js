
// algo.classList.add / .toggle / .remove

reproducir.addEventListener("click", () => {
    // ... entonces:
    musica.play();
    // Des-ocultar el botón de pausar
    pausar.classList.remove("ocultar");
    // Oculto el botón de play
    reproducir.classList.add("ocultar");

    // pausar.style.display = 'block'
    // reproducir.style.display = 'none'
});

pausar.addEventListener("click", () => {
    musica.pause();
    pausar.classList.add("ocultar");
    reproducir.classList.remove("ocultar");
});
