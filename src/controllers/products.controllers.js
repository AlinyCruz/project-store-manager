const { productsService } = require('../services/products.services');

const listProducts = async (_req, res) => {
  const product = await productsService.findAll2();

  // if (!product) return res.status(404).json({ message: 'Product not found' });

  res.status(200).json(product);
};

module.exports = {
  listProducts,
};