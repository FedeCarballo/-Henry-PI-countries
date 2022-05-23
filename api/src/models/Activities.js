const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dificultad:{
        type: DataTypes.ENUM("1","2","3","4","5"),
        allowNull: false
    },
    duracion:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    temporada: {
        type: DataTypes.ENUM('verano', 'otoño','invierno','primavera'),
        allowNull:false
    },
    imagen:{
        type: DataTypes.STRING,
        allowNull: true,
    }
  });
};
