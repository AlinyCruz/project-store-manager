const salesService = require('../services/salesServices');

const insertSalesProducts = async (req, res) => {
  const sales = req.body;

  const dados = await salesService.insertSalesProducts(sales);
  if (dados.type) {
    return res.status(404)
      .json({ message: 'Product not found' });
   }

  return res.status(201).json(dados.returnObj); 
};

module.exports = {
  insertSalesProducts,
};