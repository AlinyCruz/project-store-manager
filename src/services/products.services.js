const { productsModel } = require('../models');

const findAll2 = async () => {
  const products = await productsModel.findAll();
  return products;
};

module.exports = {
  findAll2,
};