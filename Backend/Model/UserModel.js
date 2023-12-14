const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    mobile:Number,
    email:String,
    password:String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
},{
    versionKey:false
})

const UserModel = mongoose.model('User',userSchema)

module.exports = {UserModel}