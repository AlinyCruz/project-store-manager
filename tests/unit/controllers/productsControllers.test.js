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
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsServices, 'findAll')
      .resolves(undefined);

    await productsController.listProducts(req, res);

    expect(res.status).to.be.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
  
  it('deve responder com 200 e o Id quando existir', async function () {
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
  });

  it('deve responder com 404 quando o Id não existir', async function () {
      const res = {};
      const req = {
        params: { id: 77 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productsServices, 'findById')
        .resolves(undefined);

      await productsController.listProductId(req, res);

      expect(res.status).to.be.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
});