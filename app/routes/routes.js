let express = require('express');
let router = express.Router();
const nose = require('../controllers/controller.js');

// Ruta para crear un nuevo libro
router.post('/api/create', nose.create);

// Ruta para eliminar un libro por ID
router.delete('/api/delete/:id', nose.delete);

// Ruta para buscar un libro por ID
router.get('/api/book/:id', nose.findOne);

// Ruta para buscar todos los libros
router.get('/api/books', nose.findAll);

module.exports = router;
