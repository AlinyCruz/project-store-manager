const productsModel = require('../models/productsModel');

const findAll = async () => {
  const products = await productsModel.listAll();
  return products;
};

const findById = async (productId) => {
  const productsId = await productsModel.listById(productId);
  return productsId;
};

module.exports = {
  findAll,
  findById,
};