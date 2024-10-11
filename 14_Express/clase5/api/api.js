const db = require('../models');

// Crear una ruta /libro/:id DONE!
// Se muestre un JSON con los datos de ESE libro

const getBookById = async (id) => {
    const libro = await db.libro.findByPk(id, {
        include: db.autor
    })
                    .then(resultado => {
                        return resultado
                    });
    return libro;
}

const getAuthors = async () => {
    const autores = await db.autor.findAll()
                    .then(resultados => {
                        return resultados
                    });
    return autores;
}

const getBooks = async () => {
    const libros = await db.libro.findAll({
        include: db.autor
    }).then(
        resultados => {
            return resultados
        }
    );
    return libros;
}

module.exports = {
    getAuthors,
    getBooks,
    getBookById
}
