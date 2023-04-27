const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const connection = require('../../../src/models/connection');

const { productsMockModel } = require('./mocks/productsModels.mock');

describe('Testes de unidade do model de produtos', function () {
  it('Recuperando a lista de produtos', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([productsMockModel]);
    // Act
    const result = await productsModel.listAll();
    // Assert
    expect(result).to.be.deep.equal(productsMockModel);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[productsMockModel[0]]]);
    // Act
    const result = await productsModel.findById(1);
    // Assert
    expect(result).to.be.deep.equal(productsMockModel[0]);
  });
});
