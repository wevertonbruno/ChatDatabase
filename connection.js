const Sequelize = require('sequelize')
const connection = new Sequelize('chatdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection