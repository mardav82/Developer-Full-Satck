var express = require('express');
var router = express.Router();
// Carpeta /api y archivo api
const api = require('../api/api');

/* GET home page. */
router.get('/', async (req, res, next) => {
  // 1. Conseguir todos los libros
  const libros = await api.getBooks();

  // 2. Enviarle los libros a pages/index
  res.render('pages/index', {
    titulo: 'Blockbuster',
    libros
  });
});

router.get('/agregar', async (req, res) => {
  // Conseguir los autores
  const autores = await api.getAuthors();

  // Enviarselos al render
  res.render('pages/agregar', {
    titulo: 'Estás en agregar',
    autores
  });
});

router.get('/busqueda_proceso', async (req, res) => {
  // Levantar la info enviada por URL
  // req.query trae toda la data
  // Después de .query va el nombre del "name" que tiene el campo del formulario
  const termino = req.query.termino;
  const resultados = await api.search(termino);
  res.send(resultados);
});

// Si el método del form es POST entonces la ruta de Express tiene que usar .post
router.post('/agregar_proceso', (req, res) => {
  // req.body trae la data del formulario
  // en un objeto donde cada key es el name del input de cada campo
  console.log(req.body);
  res.send('Vas bien, estás en el POST');
});

// http://localhost:3000/test
router.get('/test', async (req, res) => {
  // Acá llamamos a getBooks
  // Promise <Pending> significa que falta un async await
  const todosLibros = await api.getBooks();
  // console.log(todosLibros);
  res.send(todosLibros);
});

router.get('/autores', async (req, res) => {
  const autores = await api.getAuthors();
  res.send(autores);
});

router.get('/libro/:id', async (req, res) => {
  const id = req.params.id;
  const libro = await api.getBookById(id);
  // res.send(libro);
  res.render('pages/book', {
    titulo: libro.titulo,
    autor: libro.autor.nombreCompleto,
    precio: libro.precio
  });
});

module.exports = router;
