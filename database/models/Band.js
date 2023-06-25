const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Band extends Model {}
Band.init({
  name:{
    type: DataTypes.STRING,
    allowNull: false
  },
  type:{
    type: DataTypes.STRING,
    allowNull: false
  },
}, { sequelize, modelName: 'band', timestamps: false })

module.exports = Band