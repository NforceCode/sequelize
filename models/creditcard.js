'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreditCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  CreditCard.init(
    {
      holder: {
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      cardNumber: {
        field: 'card_number',
        type: DataTypes.TEXT,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      ccv: { type: DataTypes.DECIMAL(3, 0) },
      expirationDate: {
        field: 'expiration_date',
        type: DataTypes.DATEONLY,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      emitter: {
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true
        }
      }
    },
    {
      sequelize,
      modelName: 'CreditCard',
      
    }
  );
  return CreditCard;
};
