const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsServices = require('../../../src/services/productsServices');
const productsController = require('../../../src/controllers/productsControllers');

const { productsControllers } = require('./mocks/productsControllers.mock');

describe('Verificando controller products', function () {
  describe('Listando produtos', function () {
    it('é chamado o status com o código 200', async function () {
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

    it('é chamado o json com a lista de produtos', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productsServices, 'findAll')
        .resolves({ type: null, message: productsControllers });

      await productsController.listProducts(req, res);

      expect(res.json).to.have.been.calledWith(productsControllers);
    });

    it('deve responder com 200 e os dados do banco quando existir', async function () {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productsServices, 'findById')
        .resolves({ type: null, message: productsControllers });

      await productsController.listProductId(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productsControllers);
    });
  });
});