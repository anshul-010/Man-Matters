const express = require("express");
const { ProductModel } = require("../Model/ProductModel");
const querystring = require("querystring");
const nodemailer = require("nodemailer");
const { auth } = require("../middleWare/authMiddleware");

const productRoute = express.Router();

// post data
productRoute.post("/add-products", async (req, res) => {
  try {
    // for an array of objects
    const allProducts = req.body;
    await ProductModel.insertMany(allProducts);

    //// for a single data
    // const newProduct = new Product(req.body);
    // await newProduct.save();
    res.status(200).send({ msg: "product saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
});

productRoute.get("/products", async (req, res) => {
  try {
    const {
      title,
      category,
      rating,
      sort,
      order,
      page = 1,
      limit = 10,
    } = req.query;

    // Build the query object based on the provided parameters
    const query = {};
    if (title) query.title = new RegExp(title, "i"); // Case-insensitive title search
    if (category) query.category = new RegExp(category, "i");
    if (rating) query.rating = { $gte: rating }; // Filter products with rating less than or equal to the specified value

    // Sort based on the provided sort and order parameters
    const sortOptions = {};
    if (sort && ["asc", "desc"].includes(order)) {
      sortOptions[sort] = order === "asc" ? 1 : -1;
    }

    // Perform pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    results.totalCount = await ProductModel.countDocuments(query);
    if (endIndex < results.totalCount) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    results.results = await ProductModel.find(query)
      .sort(sortOptions)
      .skip(startIndex)
      .limit(limit);

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

// GET a single product by ID
productRoute.get("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});



// Sending mail to user for purchasing the product
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
  debug: true
});

productRoute.post("/products/email", auth, (req, res) => {
  const { _id, email } = req.user;

  try {
    console.log("email: " + email);

    // Calculate the date 4 days ahead
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 4);

    const mailOptions = {
      from: process.env.email,
      to: email,
      subject: 'Order Succeddful',
      html: `Your Order Will be delivered on ${futureDate.toDateString()}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send({ "msg": error });
      }
      res.status(200).send({ "msg": "Your Order Will be delivered" });
    });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
});



module.exports = { productRoute };
