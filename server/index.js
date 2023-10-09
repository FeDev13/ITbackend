const express = require("express");
const { sequelize, connectToDb } = require("./config/db");
const body_parser = require("body-parser");
const router = require("./routes/routes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/products", router);

app.use("/images", express.static("./images"));

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connectToDb();
});
