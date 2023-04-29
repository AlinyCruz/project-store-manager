const connection = require('./connection');

const insertSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
  );
  return insertId;
};

const insertSalesProducts = async (saleId, productId, quantity) => {
  const [insertProduct] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?,?,?);',
    [saleId, productId, quantity],
  );
  return insertProduct;
};

const listAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT sale_id AS saleId, date, product_id AS productId, quantity 
    FROM StoreManager.sales AS s INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id ORDER BY id ASC`,
  );
  return sales;
};

const listByIdSales = async (id) => {
  const [sales] = await connection.execute(
    `SELECT date, product_id AS productId, quantity
    FROM StoreManager.sales AS s INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id  WHERE id = ? ORDER BY id ASC`,
    [id],
  );
  return sales;
};

module.exports = {
  insertSales,
  insertSalesProducts,
  listAllSales,
  listByIdSales,
};
