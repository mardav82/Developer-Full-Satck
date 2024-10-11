const express = require('express');
const ruta = express.Router();

ruta.get('/', (req, res) => {
    res.send('Estás en la home')
});
ruta.get('/nosotros', (req, res) => {
    res.send('Estás en /nosotros');
});
ruta.get('/contacto', (req, res) => {
    res.send('Estás en /contacto');
});
ruta.get('/producto/:id', (req, res) => {
    // req tiene información del request (parámetros y demás)
    // Se levantan con params cuando se envían por ruta
    console.log(req.params.id);
    let id = req.params.id;
    res.send(`Estás en /producto ${id}`);
});
ruta.get('/busqueda', (req, res) => {
    // Qué recibo a través de ?
    // busqueda?tipo=alquiler&precioMin=345345&precioMax=34545656
    console.log(req.query);

    let { tipo, precioMin, precioMax } = req.query;

    /* 
    let tipo =      req.query.tipo;
    let precioMin = req.query.precioMin;
    let precioMax = req.query.precioMax;
    */

    // Si alguno de los valores no se envió
    // OR = ||
    if (!tipo || !precioMin || !precioMax) {
        res.send('Oops, faltó algún dato');
    } else {
        res.send(`
            Yay! Estás buscando:<br>
            Tipo: ${tipo}<br>
            Precio Mínimo: $${precioMin}<br>
            Precio Máximo: $${precioMax}
        `);
    }
});

module.exports = ruta;
