const Sequelize = require('sequelize');
const db = require('../config/config');

const Unidad = db.define('unidades',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement:true
    },
    nombre: {
        type: Sequelize.STRING
    }
})
module.exports = Unidad ;
