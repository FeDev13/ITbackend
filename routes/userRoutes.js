const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/newUser", userController.createUser);

router.get("/allUsers", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.put("/:id", userController.putUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
