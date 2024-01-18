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
    // const allProducts = req.body;
    // await ProductModel.insertMany(allProducts);

    //// for a single data
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(200).send({ msg: "product added successfully" });
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
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

// Update product Route
productRoute.patch("/update/:id",async(req,res)=>{
  const {id} = req.params
  try {
    await ProductModel.findByIdAndUpdate({_id:id},req.body)
    res.status(200).send({"msg":"item has been updated successfully"})
  } catch (error) {
    res.status(400).send({"msg":error.message})
  }
})



// Delete product Route
productRoute.delete("/delete/:id",async(req,res)=>{
  const {id} = req.params
  try {
    await ProductModel.findByIdAndDelete({_id:id})
    res.status(200).send({"msg":"item has been deleted"})
  } catch (error) {
    res.status(400).send({"msg":error.message})
  }
})

// Sending mail to user for purchasing the product
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

// Checkout Payment Route
productRoute.post("/checkout_payment", auth, async (req, res) => {
  try {
    const { _id, email, firstName, mobile, lastName } = req.user;
    const { address, purchasedItems, total, discount, subTotal } = req.body;

    // Delivery Date
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 4);

    // Mail Notification for Developer
    const developerNotification = {
      from: "ManWell",
      to: process.env.email,
      subject: `${firstName} ${lastName} visited ManWell.`,
      html: `
      <div>
      <p>ID : ${_id}</p>
      <p>Name : ${firstName} ${lastName}</p>
      <p>Email : ${email}</p>
      <p>Address : ${address}</p>
      <p>Mobile : ${mobile}</p>
      </div>
      `,
    };
    transporter.sendMail(developerNotification, (error, info) => {
      if (error) {
        console.log("Nodemailer Error:-", error);
        return res.status(500).json({ msg: "Nodemailer Error", error });
      }
    });

    // Mail Notification for Users
    const userNotification = {
      from: "ManWell",
      to: email,
      subject: "✅ Order Confirmed!",
      html: `
     <div>
      <p>Thanks for shopping with ManWell,</p>
      <p>
        Your order is successfully placed and is expected to be delivered on
        ${futureDate.toDateString()}.
      </p>

      <div>
        <h3
          style="
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
              'Lucida Sans', Arial, sans-serif;
            text-decoration: none;
            text-align: center;
          "
        >
          Ordered Items :
        </h3>
        <div style=" flex-direction: column; gap: 15px; width: fit-content">
          ${purchasedItems?.map((item) => {
            return `
          <div
            style="
             display: flex;
              gap: 15px;
              width: 100%;
              border: 1px solid #22548a;
              padding: 8px;
              border-radius: 8px;
              height: fit-content;
            "
          >
          <p style="font-size: 14px; padding: 0; margin: 0px 15px 0px 0px; color: grey">${item.itemQty}x</p>
            <img
              src="${item.image}"
              alt="${item.title}"
              style="width: 40px; height: 40px"
            />
            <div style="margin-left:15px; flex-direction: column; gap: 5px">
              <a
                style="font-size: 16px; text-decoration: none"
                href="${item.link}"
                target="_blank"
                >${item.title}</a
              >
              <h4 style="font-size: 14px; padding: 0; margin: 0">
                ${item.price}
              </h4>
            </div>
          </div>
          `;
          })}
        </div>
      </div>
      <div style="flex-direction: column; gap: 5px">
        <h3
          style="
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
              'Lucida Sans', Arial, sans-serif;
            text-decoration: none;
            text-align: center;
          "
        >
          Delivery Details :
        </h3>
        <p style="margin: 0">Name : ${firstName} ${lastName}</p>
        <p style="margin: 0">Address : ${address}</p>
        <p style="margin: 0">Email : ${email}</p>
        <p style="margin: 0">Phone No. : ${mobile}</p>
        <p style="margin: 0"><b>Total : ${total}</b></p>
        <p style="margin: 0"><b>Discount : ${discount}</b></p>
        <p style="margin: 0">
          <b style="font-size: 18px">Subtotal : ${subTotal}</b>
        </p>
      </div>
      <h4
        style="
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
            'Lucida Sans', Arial, sans-serif;
          text-decoration: none;
          text-align: center;
          margin: 10px auto;
        "
      >
        -: 🔬 Developed by :-
      </h4>
      <div
        style="
          display: flex;
          width: fit-content;
          margin: 5px auto;
          gap: 20px;
          font-size: 16px;
        "
      >
        <a
          style="
            text-decoration: none;
            font-size: 16px;
            border: 1px solid #22548a;
            padding: 4px 6px;
            border-radius: 6px;
            height: fit-content;
          "
          href="https://anshul-010.github.io/"
          target="_blank"
          >Anshul Kushwah</a
        >
        <a
          style="
            text-decoration: none;
            font-size: 16px;
            border: 1px solid #22548a;
            padding: 4px 6px;
            border-radius: 6px;
            height: fit-content;
          "
          href="https://prateekshuklaps0.github.io/"
          target="_blank"
          >Prateek Shukla</a
        >
      </div>
      <div
        style="
          display: flex;
          width: fit-content;
          margin: 5px auto;
          gap: 20px;
          font-size: 16px;
        "
      >
        <a
          style="
            text-decoration: none;
            font-size: 16px;
            border: 1px solid #22548a;
            padding: 4px 6px;
            border-radius: 6px;
            height: fit-content;
          "
          href="https://niteshchandrakar.github.io/"
          target="_blank"
          >Nitesh Chandrakar</a
        >
        <a
          style="
            text-decoration: none;
            font-size: 16px;
            border: 1px solid #22548a;
            padding: 4px 6px;
            border-radius: 6px;
            height: fit-content;
          "
          href="https://shashi310.github.io/"
          target="_blank"
          >Shashikant Yadav</a
        >
      </div>
    </div>
     `,
    };
    transporter.sendMail(userNotification, (error, info) => {
      if (error) {
        console.log("Nodemailer Error:-", error);
        return res.status(500).json({ msg: "Nodemailer Error", error });
      }
      res.status(200).json({ msg: "Order Placed Successfully!" });
    });
  } catch (error) {
    console.log("Checkout Payment Error", error);
    res.status(500).json({ msg: "Checkout Payment Error", error });
  }
});

module.exports = { productRoute };
