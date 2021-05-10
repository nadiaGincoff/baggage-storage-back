const Sequelize = require('sequelize')
const db = require('../config/db')
const Passengers = require('./Passengers')

const Baggages = db.define('baggages', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    inStorage: {
        type: Sequelize.BOOLEAN,
    },
    type: {
        type: Sequelize.INTEGER,
    }
})

Baggages.belongsTo(Passengers)

module.exports = Baggages;