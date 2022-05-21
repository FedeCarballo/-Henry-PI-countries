const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Indefinido"
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Indefinido"
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false, 
      defaultValue: "Indefinido"
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    poblacion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    googleMaps:{
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};
