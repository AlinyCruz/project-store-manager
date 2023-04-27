const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsServices = require('../../../src/services/productsServices');
const productsController = require('../../../src/controllers/productsControllers');

const { productsControllers } = require('./mocks/productsControllers.mock');

describe('Verificando controller products', function () {
  afterEach(function () { sinon.restore() });
  
  it('deve responder com 200 e os dados do banco quando existir', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productsServices, 'findAll')
        .resolves({ type: null, message: productsControllers });

      await productsController.listProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
    });

    it('deve responder com 404 quando os dados do banco não existir', async function () {
      const res = {};
      const req = {
        params: { id: 77 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productsServices, 'findById')
        .resolves({ type: 404, message: "Product not found" });

      await productsController.listProductId(req, res);

      expect(res.status).to.be.calledWith(404);
      expect(res.json).to.have.been.calledWith({message: "Product not found"});
    });

});