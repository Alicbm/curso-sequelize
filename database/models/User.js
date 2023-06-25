const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class User extends Model{}
User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'The username is require'
      },
      isAlpha: {
        args: true,
        msg: 'The username only contain letters'
      },
      len: {
        args: [3, 255],
        msg: "The username must be between 3 and 255 characters"
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        args: true,
        msg: "The email must be a valid email"
      }
    }
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt:{
        args: true,
        msg: 'The age must be a number'
      },
      min: {
        args: true,
        msg: 'The age must be major or equal than 10'
      },
      max: {
        args: true,
        msg: 'The age must be less or equal than 120'
      }, 
      esPar(value){
        if(value % 2 == 0){
          throw new Error('La edad debe ser un numeor par')
        }
      }
    }
  },

  // si es 0 es user normal, si es 1 es admin
  role: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'user', timestamps: false })

module.exports = User

