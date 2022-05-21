const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activities', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    id:{
        type: DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    dificultad:{
        type: DataTypes.ENUM("1","2","3","4","5"),
        allowNull: false
    },
    duracion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    temporada: {
        type: DataTypes.ENUM('verano', 'otoño','invierno','primavera'),
        allowNull:false
    }
  });
};
