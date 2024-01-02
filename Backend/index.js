require("dotenv").config();
const mongoURL = process.env.mongoURL;
const PORT = process.env.PORT || 8080;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const { userRoute } = require("./routes/userRouter");
const { appointmentRoute } = require("./routes/appointmentRouter");
const { productRoute } = require("./routes/productRouter");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Other Routes
app.use("/user", userRoute);
app.use("/appointment", appointmentRoute);
app.use("/product", productRoute);

// Home Route
app.get("/", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "/index.html"));
  } catch (error) {
    res.status(501).json({ msg: "Home Route Error", error });
  }
});

// Connection
app.listen(8080, async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log(`Connection Successfull, Server running on Port: ${PORT}.`);
  } catch (error) {
    console.log("Connection Error:-", error);
  }
});
