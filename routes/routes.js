const productController = require("../controllers/controllers");

const router = require("express").Router();

router.post(
  "/addProduct",
  productController.AddProduct,
  productController.upload
);

router.get("/allProducts", productController.getAllProducts);

router.get("/:id", productController.getProductById);

router.put("/:id", productController.putProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;

/* const Product = require("../models/models");

const getAllProducts = async (request, response) => { //"/products"
  const products = await Product.findAll();

  response.status(200).json(products);
};

const AddProduct = async (request, response) => {  //"/products"
  const { id, name, description, imgUrl, price } = request.body;

  const newProduct = Product.build({
    id: id,
    name: name,
    description: description,
    imgUrl: imgUrl,
    price: price,
  });

  try {
    await newProduct.save();

    response.status(201).json(newProduct);
  } catch (error) {
    response.json(error);
  }
};

const getProductById = async (request, response) => { //"/product/:id"
  const product = await Product.findOne({
    where: {
      id: request.params.id,
    },
  });

  response.status(200).json(product);
};

const patchProduct =  async (request, response) => { //"/product/:id"
  const product = await Product.findOne({
    where: {
      id: request.params.id,
    },
  });

  await product.save();

  response.status(200).json(product);
};

const putProduct = async (request, response) => { //"/product/:id"
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

const deleteProduct = async (request, response) => { //"/product/:id"
  const product = await Product.findOne({
    where: {
      id: request.params.id,
    },
  });

  await product.destroy();

  response.status(204).json({});
};

module.exports = {AddProduct, getAllProducts, getProductById, deleteProduct, patchProduct, putProduct}; */
