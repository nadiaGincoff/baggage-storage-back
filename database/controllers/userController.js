const Users = require('../models/Users')

// add new user
const newPassenger = async (req, res) => {
    const passenger = req.query
    try {
        const newPassenger = await Users.create(passenger)
        console.log('Add new client succesfully')
        // res.redirect('/clients')
        return res.status(200).json({
            success: true,
            data: newPassenger,
        })
    } catch (error) {
       console.log(error)
       res.redirect('/') 
    }
}

const getAllPassengers = async (req, res) => {
    try {
        const passengers = await Users.findAll()
        return res.status(200).json({
            success: true,
            data: passengers,
        })
    } catch (error) {
       console.log(error)
       res.redirect('/')
    }
}

module.exports = {
    newPassenger,
    getAllPassengers
};