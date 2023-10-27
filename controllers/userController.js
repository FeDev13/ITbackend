const User = require("../models/usersModel");

const getAllUsers = async (request, response) => {
  const user = await User.findAll();

  response.status(200).json(user);
};

const createUser = async (req, res) => {
  let data = {
    email: req.body.email,
    password: req.body.password,
    
  };
  const user = await User.create(data);
  res.status(200).send(user);
  console.log(user);
};
const getUserById = async (request, response) => {
  const user = await User.findOne({
    where: {
      id: request.params.id,
    },
  });

  response.status(200).json(user);
};

const patchUser = async (request, response) => {
  const user = await User.findOne({
    where: {
      id: request.params.id,
    },
  });

  await user.save();

  response.status(200).json(user);
};

const putUser = async (request, response) => {
  //"/product/:id"
  const user = await User.findOne({
    where: {
      id: request.params.id,
    },
  });

  const { email, password } = request.body;

  await user.set({
  
    email: email,
    password: password,
    
  });

  await user.save();

  response.status(200).json(user);
};

const deleteUser = async (request, response) => {
  //"/product/:id"
  const user = await User.findOne({
    where: {
      id: request.params.id,
    },
  });

  await user.destroy();

  response.status(204).json({});
};

module.exports = { getAllUsers, createUser, deleteUser, putUser, patchUser, getUserById };
