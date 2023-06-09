const express = require('express');
const productsController = require('./controllers/productsControllers');
const salesController = require('./controllers/salesControllers');
const salesMiddle = require('./middlewares/salesMiddlewares');
const productsMiddle = require('./middlewares/productMiddlewares');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.listProducts);

app.get('/products/:id', productsController.listProductId);

app.post('/products', productsController.createNewProduct);

app.post('/sales', salesMiddle, salesController.insertSalesProducts);

app.get('/sales', salesController.listProductsSales);

app.get('/sales/:id', salesController.listProductIdSales);

app.put('/products/:id', productsMiddle, productsController.updateController);

app.delete('/products/:id', productsController.deleteController);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
