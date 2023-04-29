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

const listProductsSales = async (_req, res) => {
  const sales = await salesService.findAllSales();

  if (sales.type) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(sales);
};

const listProductIdSales = async (req, res) => {
  const { id } = req.params;
  const salesId = await salesService.findByIdSales(id);

  if (salesId.type) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(salesId);
};

module.exports = {
  insertSalesProducts,
  listProductsSales,
  listProductIdSales,
};