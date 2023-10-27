const { Sequelize } = require("sequelize");


 const sequelize = new Sequelize("countries", "root", "", {
  dialect: "mysql",
  host: "localhost",
}); 

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("connection to db successfull");
  } catch (error) {
    console.log(error);
  }
};



module.exports = { sequelize, connectToDb };
