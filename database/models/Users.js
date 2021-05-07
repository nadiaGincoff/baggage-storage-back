const Sequelize = require('sequelize')
const db = require('../config/db')

const Users = db.define('users', {
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
    baggage: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
    }
})

module.exports = Users;