const Users = require('../models/Users')

// add new user
const newClient = async (req, res) => {
    const client = req.query
    try {
        const newClient = await Users.create(client)
        console.log('Add new client succesfully')
        // res.redirect('/clients')
        return res.status(200).json({
            success: true,
            data: newClient,
        })
    } catch (error) {
       console.log(error)
       res.redirect('/') 
    }
}

const getAllClients = async (req, res) => {
    try {
        const clients = await Users.findAll()
        return res.status(200).json({
            success: true,
            data: clients,
        })
    } catch (error) {
       console.log(error)
       res.redirect('/')
    }
}

module.exports = {
    newClient,
    getAllClients
};