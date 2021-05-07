const Sequelize = require('sequelize')
const db = require('../config/db')

const PackageTypes = db.define('packageTypes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(20),
    }
})

module.exports = PackageTypes;