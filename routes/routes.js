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
