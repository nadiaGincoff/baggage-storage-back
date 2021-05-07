const express = require('express');
const router = express.Router();

// Controllers 
const homeController = require('../database/controllers/homeController')
const userController = require('../database/controllers/userController')
const storageController = require('../database/controllers/storageController')

module.exports = function() {
    router.get('/', homeController)
    
    // Clients
    router.get('/clients', userController.getAllClients)
    router.post('/new-client', userController.newClient)

    // Storage
    router.post('/new-package', storageController.newPackage)
    // router.get('/view-storage', storageController)


    return router
}