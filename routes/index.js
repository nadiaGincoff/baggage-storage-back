const express = require('express');
const router = express.Router();

// Controllers 
const passengerController = require('../database/controllers/passengerController')
const baggageController = require('../database/controllers/baggageController')

module.exports = function() {
    // Passengers
    router.get('/passengers', passengerController.getAllPassengers)
    router.post('/new-passenger', passengerController.newPassenger)
    router.get('/get-passenger/:id', passengerController.getPassengerById)
    router.post('/edit-passenger/:id', passengerController.editPassenger)
    router.post('/delete-passenger/:id', passengerController.deletePassenger)

    // Baggages
    router.get('/baggages', baggageController.getAllBaggages)

    return router
}