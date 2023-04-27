const productsService = require('../services/productsServices');

const listProducts = async (_req, res) => {
  const product = await productsService.findAll();

  if (product === undefined) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
};

const listProductId = async (req, res) => {
  const { id } = req.params;
  const productId = await productsService.findById(id);

  if (productId === undefined) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(productId);
};

const createNewProduct = async (req, res) => {
  const { name } = req.body;

  if (name === undefined) {
 return res.status(400)
    .json({ message: '"name" is required' }); 
}
  if (name.length < 5) {
 return res.status(422)
    .json({ message: '"name" length must be at least 5 characters long' }); 
}
  const newProduct = await productsService.createProduct(name);
  res.status(201).json(newProduct);
};

module.exports = {
  listProducts,
  listProductId,
  createNewProduct,
};