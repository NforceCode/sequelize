'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Book.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      author: {
        type: DataTypes.STRING(64),
        validate: {
          notNull: true,
          notEmpty: true,
          isAlpha: true
        }
      },
      pages: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          notEmpty: true,
          isNumeric: true,
          len: [1, 4],
          min: 1
        }
      },
      language: {
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
          isAlpha: true
        }
      },
      price: {
        type: DataTypes.DECIMAL(8, 2),
        validate: {
          notNull: true,
          notEmpty: true,
          min: 1
        }
      }
    },
    {
      sequelize,
      modelName: 'Book',
      tableName: 'books',
      underscored: true
    }
  );
  return Book;
};
