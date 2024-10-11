const express = require('express');
const app = express();

// Importar mi hermoso archivo de rutas
const rutas = require('./rutas');

// '/' puede ser /beta y que use esas rutas desde un /beta/contacto
app.use('/', rutas);

// Si no era ninguna de las rutas de arriba, entonces es un 404
app.use((req, res) => {
    // Siempre tengo que devolver el status correcto
    res.status(404).send('OH NO! 404');
});

// Método GET y Método POST
/*
app.get('/', (req, res) => {
    // req: request
    // res: response
    res.send('Hola mundo!');
});

app.get('/contacto', (req, res) => {
    res.send('Estás en /contacto');
});
*/

// 127.0.0.1:3000 ó localhost:3000
app.listen(3000, () => {
    // Estos console.logs se tiran en la terminal del servidor, no la del cliente/navegador
    console.log('Estoy felizmente corriendo el puerto 3000');
});
