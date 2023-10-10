const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const Brands = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    validate: {
      max: 150,
    },
  },

  logo_Url: {
    type: DataTypes.STRING,
  },
});

sequelize.sync();

module.exports = Brands;
