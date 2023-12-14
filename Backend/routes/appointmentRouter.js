const express = require("express");
const { AppointmentModel } = require("../Model/AppointmentModel");
const { auth } = require("../middleWare/authMiddleware");
const { UserModel } = require("../Model/UserModel");
const config = require('../config/config');
const nodemailer = require("nodemailer");


const appointmentRoute = express.Router();


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: config.email,
    pass: config.password,
  },
  debug: true
});


appointmentRoute.post("/", auth, async (req, res) => {
  const { language, date, time } = req.body;
  const { _id,email } = req.user; 
  try {
    
    // Create a new appointment with user information
    const newAppointment = new AppointmentModel({
      language,
      date,
      time,
      user: _id
    });

    await newAppointment.save();

    const mailOptions = {
      from: config.email,
      to: email,
      subject: 'Appoinment Scheduled',
      html: `Your Appoinment Scheduled with Doctor on ${date} at ${time} in ${language} Language`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return res.status(500).send({ "msg": error });
          }
          res.status(200).send({ "msg": "Appoinment Scheduled email sent successfully" });
      });

  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

appointmentRoute.get("/",auth,async(req,res)=>{
    try {
        const data = await AppointmentModel.find({user:req.user._id}).populate("user")
        res.status(200).json({"data":data})
    } catch (error) {
        res.status(400).json({"msg":error.message})
    }
})

module.exports = { appointmentRoute };
