const Storage = require('../models/Storage')

// add new user
const newPackage = async (req, res) => {
    const { userId, packageTypeId } = req.query
    try {
        const package = await Storage.create({
            inStorage: 1,
            userId,
            packageTypeId,
        })
        console.log('Add new package succesfully')
        // res.redirect('/clients')
        return res.status(200).json({
            success: true,
            data: package,
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
    newPackage,
    // getAllClients
};