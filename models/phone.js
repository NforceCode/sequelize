'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Phone.init({
    brand: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    model: {
      type :DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    price: {
      type :DataTypes.DECIMAL(10,2),
      validate: {
        notNull: true,
        notEmpty: true,
        isNumeric: true,
        min: 1
      }
    },
    cpu: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    battery: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        notEmpty: true,
        isNumeric:true,
        min: 1
      }
    }
  }, {
    sequelize,
    modelName: 'Phone',
    tableName: 'phones',
    underscored: true
  });
  return Phone;
};