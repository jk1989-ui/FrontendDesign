const userModel = require('../models/user-management-model')

const registerUser = async (req, res) => {
    try {
        const {name, email, password, address} = req.body;
        const docToCreate = new userModel({
            name,
            email,
            password,
            address
        })

        const docToSave = await docToCreate.save();
        res.json({
            message:'data saved successfully',
            data:true,
            result:docToSave
        })
    } catch (error) {
        res.json({
            message: error.message,
            data: false,
            result: null
        })
    }
}

module.exports = {
    registerUser
}