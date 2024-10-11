var express = require('express');
var router = express.Router();
// Carpeta /api y archivo api
const api = require('../api/api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { titulo: 'Blockbuster' });
});

router.get('/agregar', (req, res) => {
  res.render('pages/agregar', { titulo: 'Estás en agregar' });
});

router.get('/busqueda_proceso', (req, res) => {
  // Levantar la info enviada por URL
  // req.query trae toda la data
  // Después de .query va el nombre del "name" que tiene el campo del formulario
  console.log(req.query.termino);
  res.send('Vas bien!');
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
  res.send(libro);
});

module.exports = router;
