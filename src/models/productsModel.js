// const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const listAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id ASC',
  );
  return result;
};

const listById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return product;
};
// const insert = async (products) => {
//   const columns = Object.keys(snakeize(products)).join(', ');

//   const placeholders = Object.keys(products)
//     .map((_key) => '?')
//     .join(', ');

//   const [{ insertId }] = await connection.execute(
//     `INSERT INTO products (${columns}) VALUE (${placeholders})`,
//     [...Object.values(products)],
//   );

//   return insertId;
// };

module.exports = {
  listAll,
  listById,
};