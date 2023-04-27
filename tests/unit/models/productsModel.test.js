const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const connection = require('../../../src/models/connection');

const { productsMockModel, productIdMockModel } = require('./mocks/productsModels.mock');

describe('Testes de unidade do model de produtos', function () {
  afterEach(() => { sinon.restore() });
  it('recuperando a lista de produtos', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([productsMockModel]);
    // Act
    const result = await productsModel.listAll();
    // Assert
    expect(result).to.be.deep.equal(productsMockModel);
  });

  it('recuperando um produto a partir do seu id', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[productIdMockModel]]);
    // Act
    const result = await productsModel.listById(1);
    // Assert
    expect(result).to.deep.equal(productIdMockModel);
  });
});
