const User = require("../models/usersModel");

const getAllUsers = async (request, response) => {
  const user = await User.findAll();

  response.status(200).json(user);
};

const createUser = async (req, res) => {
  let data = {
    email: req.body.email,
    password: req.body.password,
    isAutenticated: req.body.isAutenticated,
  };
  const user = await User.create(data);
  res.status(200).send(user);
  console.log(user);
};

module.exports = { getAllUsers, createUser };
