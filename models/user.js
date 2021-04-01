'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        field: 'first_name',
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      lastName: {
        field: 'last_name',
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      password: {
        field: 'password_hash',
        type: DataTypes.TEXT,
        allowNull: false,
        validate : {
          notNull: true,
          notEmpty: true
        }
      },
      birthday: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true
        }
      },
      isMale: {
        field: 'is_male',
        type: DataTypes.BOOLEAN
      }
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
