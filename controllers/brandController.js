const Brand = require("../models/brands");

const getAllBrands = async (request, response) => {
  const brands = await Brand.findAll();

  response.status(200).json(brands);
};

const AddBrand = async (req, res) => {
  let data = {
    name: req.body.name,
    logo_Url: req.body.filename,
  };

  const product = await Brand.create(data);
  res.status(200).send(data);
  console.log(data);
};

const getBrandbyId = async (request, response) => {
  const brand = await Brand.findOne({
    where: {
      id: request.params.id,
    },
  });

  response.status(200).json(brand);
};

const patchBrand = async (request, response) => {
  const brand = await Brand.findOne({
    where: {
      id: request.params.id,
    },
  });

  await brand.save();

  response.status(200).json(brand);
};

const putBrand = async (request, response) => {
  const brand = await Brand.findOne({
    where: {
      id: request.params.id,
    },
  });

  const { name, logo_Url } = request.body;

  await product.set({
    name: name,

    logo_Url: logo_Url,
  });

  await brand.save();

  response.status(200).json(brand);
};

const deleteBrand = async (request, response) => {
  const brand = await Brand.findOne({
    where: {
      id: request.params.id,
    },
  });

  await brand.destroy();

  response.status(204).json({});
};

module.exports = {
  getAllBrands,
  getBrandbyId,
  deleteBrand,
  patchBrand,
  putBrand,
  AddBrand,
};
