const { Sequelize } = require("sequelize");

/* const sequelize = new Sequelize(
  "bnofci2q2iyfzlg6ufnk",
  "uqktze0kixbjxzwp",
  "ZAKuccGfBMH1bN3kvhk0",
  {
    dialect: "mysql",
    host: "bnofci2q2iyfzlg6ufnk-mysql.services.clever-cloud.com",
  }
); */
const sequelize = new Sequelize("raquets", "root", "", {
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
