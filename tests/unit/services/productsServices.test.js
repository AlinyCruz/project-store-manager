const { expect } = require('chai');
const sinon = require('sinon');

const productsServices = require('../../../src/services/productsServices');
const productsModel = require('../../../src/models/productsModel');

const { productsMockService } = require('./mocks/productsServices.mock');

describe('Verificando service de produtos', function () {
    it('Retorna a lista completa dos produtos', async function () {
      // arrange
      sinon.stub(productsModel, 'listAll').resolves(productsMockService);

      // act
      const result = await productsServices.findAll();

      // assert
      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(productsMockService);
    });
});

describe('Busca de um produto', function () {
  it('Retorna um erro caso receba um ID inválido', async function () {
    // act
    const result = await productsServices.findById('a');

    // assert
    expect(result.type).to.equal('INVALID_VALUE');
    expect(result.message).to.equal('"id" must be a number');
  });

  it('retorna um erro caso o produto não existe', async function () {
    // arrange
    sinon.stub(productsModel, 'listById').resolves(undefined);

    // act
    const result = await productsServices.findById(1);

    // assert
    expect(result.type).to.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.equal('Product not found');
  });

  it('retorna um produto caso ID existente', async function () {
    // arrange
    sinon.stub(productsModel, 'listById').resolves(productsMockService[0]);

    // act
    const result = await productsServices.findById(1);

    // assert
    expect(result.type).to.equal(null);
    expect(result.message).to.deep.equal(productsMockService[0]);
  });
});