const Sequelize = require('sequelize')
const db = require('../config/db')
const Users = require('./Users')
const PackageTypes = require('./PackageTypes')
const PackageStatuses = require('./PackageStatuses')

const Storage = db.define('storage', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    inStorage: {
        type: Sequelize.BOOLEAN,
    }
})

Storage.belongsTo(Users)
Storage.belongsTo(PackageTypes)

module.exports = Storage;