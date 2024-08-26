module.exports = (sequelize, Sequelize) => {
	const books = sequelize.define('books', {
	  Codigo_Libro: {
		type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
		allowNull: false,
	  },
	  Nombre_libro: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
	  Editorial: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
	  Autor: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
	  Genero: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
	  Pais: {
		type: Sequelize.STRING,
		allowNull: false,
	  },
      No_Pag:{
      type: Sequelize.INTEGER,
      allowNull: false,
      }, 
      Anio:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      Precio:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
	}, {
	  timestamps: false
	});
  
	return books;   
  };