const salesModel = require('../models/salesModel');
const productsModel = require('../models/productsModel');

const insertSalesProducts = async (sales) => {
  const listProducts = await productsModel.listAll();
  const verifica = sales.every((sale) => listProducts.some((l) => l.id === sale.productId));
  if (!verifica) {
    return {
      type: 'NOT FOUND',
    };
  } 
  const idProduct = await salesModel.insertSales();

  const insertDados = sales.map(async (s) => {
    const result = await salesModel.insertSalesProducts(idProduct, s.productId, s.quantity);
    return result;
  });

  await Promise.all(insertDados);
  const returnObj = { id: idProduct, itemsSold: sales };
  return { type: null, returnObj };
};

const findAllSales = async () => {
  const sales = await salesModel.listAllSales();
  if (!sales) return { type: 'NOT FOUND' };
  return sales;
};

const findByIdSales = async (id) => {
  const salesId = await salesModel.listByIdSales(id);
  if (!salesId || salesId.length < 1) return { type: 'NOT FOUND' };
  return salesId;
};

module.exports = {
  insertSalesProducts,
  findAllSales,
  findByIdSales,
};