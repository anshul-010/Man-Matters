const express = require("express");
const { UserModel } = require("../Model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const randomString = require("randomstring");

const userRoute = express.Router();

// Register routes
userRoute.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, mobile } = req.body;
  try {
    const isUser = await UserModel.findOne({ email });
    if (isUser) {
      return res.status(200).send({ msg: "this email is already used" });
    }
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.send({ msg: err });
      } else {
        const newUser = new UserModel({
          firstName,
          lastName,
          mobile,
          email,
          password: hash,
        });
        await newUser.save();
        res.status(200).send({ msg: "New user has been registered" });
      }
    });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

// get users 

userRoute.get("/getusers", async(req,res)=>{
  try {
    const allUsers = await UserModel.find()
    res.status(200).json({"allUsers":allUsers})
  } catch (error) {
    res.status(500).json({error: error})
  }
})

// delete user

userRoute.delete("/delete-user/:id",  async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Successfully deleted user." });
  } catch (error) {
      res.status(400).send({"mse":error.message});    
  }
});


// login Route
userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: user._id, user: user },
            "jwt_secret_key",
            { expiresIn: "12h" }
          );
          res
            .status(200)
            .send({
              msg: "login Successful",
              Name: user.firstName,
              email: user.email,
              mobile: user.mobile,
              token,
            });
        }
      });
    } else {
      res.status(200).send({ msg: "wrong credential" });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

// forgot password

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

userRoute.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(200).send({ msg: "User not found" });
    }
    const resetToken = randomString.generate();

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000;

    await user.save();

    const resetLink = `https://man-matters-drab.vercel.app/reset-password?token=${resetToken}`;
    const mailOptions = {
      from: process.env.email,
      to: email,
      subject: "Password Reset Request",
      html: `Click the following link to reset your password: <a href="${resetLink}">${resetLink}</a>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send({ msg: error });
      }
      res.status(200).send({ msg: "Password reset email sent successfully" });
    });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

// reset password
userRoute.post("/reset-password", async (req, res) => {
  const { newPassword } = req.body;
  const token = req.query.token;
  try {
    const user = await UserModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).send({ msg: "Invalid or expired reset token" });
    }

    bcrypt.hash(newPassword, 5, async (err, hash) => {
      if (err) {
        return res.status(500).send({ msg: "error hashing password" });
      }

      user.password = hash;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;

      await user.save();

      res.status(200).send({ msg: "Password reset successful" });
    });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

module.exports = { userRoute };
