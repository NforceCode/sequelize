'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('credit_cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      holder: {
        type: Sequelize.STRING(128)
      },
      cardNumber: {
        field: 'card_number',
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
      },
      ccv: {
        type: Sequelize.DECIMAL(3,0),
        allowNull:false
      },
      expirationDate: {
        type: Sequelize.DATEONLY
      },
      emitter: {
        type: Sequelize.STRING(128),
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('credit_cards');
  }
};