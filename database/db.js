const { Sequelize } = require('sequelize')
const { config } = require('../config')

// const USER = encodeURIComponent(config.dbUser)
// const PASSWORD = encodeURIComponent(config.dbPassword)
// const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

// const sequelize = new Sequelize(URI, {
//   dialect: 'mysql',
//   logging: console.log,
// })

// module.exports = sequelize

//esta es otra forma de conectarnos a la DB
const sequelize = new Sequelize(`mysql://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`)

module.exports = sequelize
