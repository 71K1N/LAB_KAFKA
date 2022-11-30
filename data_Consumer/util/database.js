const Sequelize = require('sequelize')

const db = new Sequelize("kafka_sample", "root", "root", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = db