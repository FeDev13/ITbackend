const { sequelize } = require("../config/db");
const { Sequelize } = require("sequelize");

const Product = sequelize.define("Product", {
  id: {
    allowNull: false,
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    validate: {
      max: 150,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  img_Url: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
});

sequelize.sync();

module.exports = Product;
