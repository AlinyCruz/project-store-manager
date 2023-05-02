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

const updateService = async (id, productName) => {
  const productsId = await productsModel.listById(id);
  if (!productsId) return { type: 'NOT FOUND' };
  if (productName.length < 5) return { type: 'NAME INVALID' };
  await productsModel.updateProducts(id, productName);
  return { id, name: productName };
};

const deleteService = async (id) => {
  const productsId = await productsModel.listById(id);
  if (!productsId) return { type: 'NOT FOUND' };
  await productsModel.deleteProducts(id);
  return { type: null };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateService,
  deleteService,
};