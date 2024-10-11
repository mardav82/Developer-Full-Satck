var express = require('express');
var router = express.Router();

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

module.exports = router;
