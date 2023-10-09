const Product = require("../models/models");
const multer = require("multer");
const path = require("path");

const getAllProducts = async (request, response) => {
  //"/products"
  const products = await Product.findAll();

  response.status(200).json(products);
};

const AddProduct = async (req, res) => {
  /* let info = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    img_Url: req.body.filename,
    price: req.body.price,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
  console.log(product); */
  try {
    if (req.file === null) {
      return res.status(400).send({ message: "No file was uploaded" });
    }
    console.log(req.body);
    const url = req.protocol + "://" + req.get("host");
    const urlImage = url + "/images/" + req.body.filename;
    const modelData = {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      image: urlImage,
      price: req.body.price,
    };
    const response = await Product.create(modelData)
      .then((data) => {
        const res = { error: false, data: data, message: "Product Created" };
        return res;
      })
      .catch((e) => {
        if (
          e.name == "SequelizeUniqueConstraintError" ||
          e.name == "SequelizeValidationError"
        ) {
          return { error: true, message: e.errors.map((err) => err.message) };
        } else if (e.name == "SequelizeForeignKeyConstraintError") {
          return { error: true, message: ["The category does not exist"] };
        }
        return { error: true, message: e };
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

const getProductById = async (request, response) => {
  //"/product/:id"
  const product = await Product.findOne({
    where: {
      id: request.params.id,
    },
  });

  response.status(200).json(product);
};

const patchProduct = async (request, response) => {
  //"/product/:id"
  const product = await Product.findOne({
    where: {
      id: request.params.id,
    },
  });

  await product.save();

  response.status(200).json(product);
};

const putProduct = async (request, response) => {
  //"/product/:id"
  const product = await Product.findOne({
    where: {
      id: request.params.id,
    },
  });

  const { id, name, description, imgUrl, price } = request.body;

  await product.set({
    id: id,
    name: name,
    description: description,
    imgUrl: imgUrl,
    price: price,
  });

  await product.save();

  response.status(200).json(product);
};

const deleteProduct = async (request, response) => {
  //"/product/:id"
  const product = await Product.findOne({
    where: {
      id: request.params.id,
    },
  });

  await product.destroy();

  response.status(204).json({});
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

module.exports = {
  AddProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  patchProduct,
  putProduct,
  upload,
};
