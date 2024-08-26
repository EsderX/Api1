const db = require('../config/db.config.js');
const books = db.books;
exports.create = async (req, res) => {
    try {
      const { Codigo_Libro, Nombre_libro, Editorial, Autor, Genero, Pais, No_Pag, Anio, Precio } = req.body;
  
      if (!Codigo_Libro || !Nombre_libro || !Editorial || !Autor || !Genero || !Pais || !No_Pag || !Anio || !Precio) {
        return res.status(400).json({
          message: "Missing required fields",
        });
      }
  
      const newbooks = { Codigo_Libro, Nombre_libro, Editorial, Autor, Genero, Pais, No_Pag, Anio, Precio };
      const result = await books.create(newbooks);
  
      res.status(201).json({
        message: "Exito libro creado con el id = " + result.id,
        libro: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error :c",
        error: error.message,
      });
    }
  };
  exports.delete = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await books.destroy({ where: { id } });

        if (result === 0) {
            return res.status(404).json({
                message: "Libro no encontrado",
            });
        }

        res.status(200).json({
            message: "Libro eliminado con éxito",
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el libro",
            error: error.message,
        });
    }
};
exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;

        const book = await books.findOne({ where: { id } });

        if (!book) {
            return res.status(404).json({
                message: "Libro no encontrado",
            });
        }

        res.status(200).json({
            message: "Libro encontrado",
            libro: book,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al buscar el libro",
            error: error.message,
        });
    }
};
exports.findAll = async (req, res) => {
    try {
        const allBooks = await books.findAll();

        res.status(200).json({
            message: "Libros encontrados",
            libros: allBooks,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al buscar los libros",
            error: error.message,
        });
    }
};

  