const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const Product = sequelize.define("Product", {
  id: {
    autoIncrement: true,
    type: DataTypes.NOW,
    primaryKey: true,
    allowNull: true,
    defaultValue: DataTypes.NOW,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    validate: {
      max: 150,
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
  img_Url: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
});

sequelize.sync();

module.exports = Product;
