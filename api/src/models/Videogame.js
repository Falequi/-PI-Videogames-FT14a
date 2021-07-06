const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
    },
    rating: {
      type: DataTypes.STRING,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
