const Sequelize = require('sequelize')
const config = require('./config')
const connection = new Sequelize(config.dbname, config.user, config.password, {
    host: config.host,
    dialect: config.dbtype
})

module.exports = connection