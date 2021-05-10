const Sequelize = require('sequelize')
const db = require('../config/db')

const Passengers = db.define('passengers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {
                message: 'Please enter a name'
            }
        }
    },
    flightNumber: {
        type: Sequelize.STRING(60),
              allowNull: false,
        validate: {
            notEmpty: {
                message: 'Please enter a flight number'
            }
        }
    },
})

module.exports = Passengers;