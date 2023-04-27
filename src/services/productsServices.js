const productsModel = require('../models/productsModel');

const findAll = async () => {
  const products = await productsModel.listAll();
  return products;
};

const findById = async (productId) => {
  const productsId = await productsModel.listById(productId);
  return productsId;
};

const createProduct = async (name) => {
  const id = await productsModel.insert(name);
  return { id, name };
};

module.exports = {
  findAll,
  findById,
  createProduct,
};