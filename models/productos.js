const Sequelize = require('sequelize');
const db = require('../config/config');

const Producto = db.define('productos',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement:true
    },
    nombre: {
        type: Sequelize.STRING
    }
})
module.exports = Producto ;
