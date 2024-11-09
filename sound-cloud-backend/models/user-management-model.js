const mongoose = require('mongoose');
const bcrypt = require('bcrypt');   //secure-Password
const saltRounds = 10; //hashes and convert mix strings


const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required:true},
    address: { type: String, required:true},
    saltString: { type:String}
},{timestamps:true})


userSchema.pre('save', async function (next) { // (pre) means Creating Before AdminRegisterSchema provided by mongoose 1st argument is save inbuilt
    try {
        const salt = await bcrypt.genSalt(saltRounds); //bcrypt SaltRounds
        const hashedPassword = await bcrypt.hash(this.password, salt); //bcrypt.hash take two arguments Password and Salt and then mix up and create 
        this.password = hashedPassword; // now this.Password = HashedPassword
        this.saltString = salt;         // and then this.SaltString = Salt
        next();
    } catch (error) {
        return ({
            message: error.message,
            data: false,
            result: null
        }) 
    }
});
//End Block Schema Creating

//Exporting The Schema
module.exports = mongoose.model('UserManagementCollection',userSchema);
