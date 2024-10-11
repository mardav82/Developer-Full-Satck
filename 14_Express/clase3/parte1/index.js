// Cargamos el framework
// <script src="jquery.js"></script>
const express = require('express');
// Creo una nueva aplicación
const app = express();

// Configurar el template engine
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
// Acá le contamos a express que tenemos una carpeta llamada /public para archivos estáticos
app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send('Hola mundo, esto funciona!');
    // Template
    res.render('pages/index.ejs', {
        titulo: 'Saludos desde el server'
    });
});

app.get('/quienes_somos', (req, res) => {
    // res.send('Estas en quienes somos');
    res.render('pages/quienes_somos.ejs', {
        titulo: 'Quienes somos'
    });
});

app.get('/contacto', (req, res) => {
    // res.send('Estas en contacto');
    res.render('pages/contacto.ejs', {
        titulo: 'Contacto'
    });
});

// http://localhost:3000/producto/223
app.get('/producto/:id', (req, res) => {
    const id = req.params.id;
    // Conexión a una DB para conseguir los datos del producto WHERE id = id
    res.render('producto.ejs', {
        id,
        titulo: 'Harry Potter 1',
        descripcion: 'Libro nuevo súper cool',
        precio: 600
    });
});

app.get('/bucles', (req, res) => {
    const numeros = [234, 452, 56, 983, 47];
    const paises = [
        {
            nombre: 'Argentina',
            idioma: 'Español'
        },
        {
            nombre: 'Colombia',
            idioma: 'Español'   
        },
        {
            nombre: 'Alemania',
            idioma: 'Alemán'
        }
    ];
    res.render('bucles.ejs', {
        numeros,
        paises
    });
    // res.send('Vas bien, estás en /bucles');
});

app.listen(3000, () => {
    console.log('Estoy corriendo en el puerto 3000');
});
