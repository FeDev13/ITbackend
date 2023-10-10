const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/newUser", userController.createUser);

router.get("/allUsers", userController.getAllUsers);

module.exports = router;
