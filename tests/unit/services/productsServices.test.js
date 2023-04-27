const { expect } = require('chai');
const sinon = require('sinon');

const productsServices = require('../../../src/services/productsServices');
const productsModel = require('../../../src/models/productsModel');

const { productsMockServices, productIdMockServices } = require('./mocks/productsServices.mock');

describe('Verificando service de produtos', function () {
  afterEach(() => { sinon.restore() });

  it('retorna a lista completa dos produtos', async function () {
    // arrange
    sinon.stub(productsModel, 'listAll').resolves(productsMockServices);
    // act
    const result = await productsServices.findAll();
    // assert
    expect(result).to.be.equal(productsMockServices);
  });
    
  it('retorna um erro caso o produto não existe', async function () {
    // arrange
    sinon.stub(productsModel, 'listById').resolves(undefined);
    // act
    const result = await productsServices.findById(777); 
    // assert
    expect(result).to.be.equal();
  });
});

  