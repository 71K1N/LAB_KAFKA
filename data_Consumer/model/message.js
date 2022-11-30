const {DataTypes} = require('sequelize')
const db = require('../util/database')

const message = db.define('message',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true        
    },
    name:{
        type: DataTypes.STRING,     
        allowNull:false,     
    },
    description:{
        type: DataTypes.STRING,     
        allowNull:false,     
    }
})

module.exports = message