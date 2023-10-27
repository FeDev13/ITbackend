const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    validate: {
      max: 150,
    },
  },
  password: {
    type: DataTypes.STRING,
  },
});

sequelize.sync();
module.exports = User;
