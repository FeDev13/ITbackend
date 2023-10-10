const brandController = require("../controllers/brandController");

const router = require("express").Router();

router.post("/addBrand", brandController.AddBrand);

router.get("/allBrands", brandController.getAllBrands);

router.get("/:id", brandController.getBrandbyId);

router.put("/:id", brandController.putBrand);

router.delete("/:id", brandController.deleteBrand);

module.exports = router;
