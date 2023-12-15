const mongoose = require('mongoose');

const appointmentShema = mongoose.Schema({
    title:String,
    language:String,
    date:String,
    time:{
        type:String,
        default:"10:10"
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
},{
    versionKey:false
})

const AppointmentModel = mongoose.model('Appointment',appointmentShema)

module.exports = {AppointmentModel}