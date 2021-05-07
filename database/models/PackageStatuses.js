const Sequelize = require('sequelize')
const db = require('../config/db')

const PackageStatuses = db.define('packageStatuses', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(20),
    }
})

module.exports = PackageStatuses;