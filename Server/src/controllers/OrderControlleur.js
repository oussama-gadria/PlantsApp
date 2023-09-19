const Cart = require("../models/Cart");
const Orders = require("../models/Orders");
const User = require("../models/User");
require("dotenv").config();
const nodemailer = require("nodemailer");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//creating transporter (the sender of the email verification)
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const getOrder = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error on server !" });
  }
};

const addOrder = async (req, res) => {
  try {
    const { userId, CartId, PriceTotal, ShippingAdresse } = req.body;
    const user = await User.findById(userId);
    const cart = await Cart.findById(CartId);
    const Plants = cart.plants;
    const newOrder = {
      user,
      Plants,
      PriceTotal,
      ShippingAdresse,
    };

    const order = await Orders.create(newOrder);
    user.Orders.push(order);
    await user.save();
    transporter.sendMail({
      to: "oussamagadria1@gmail.com",
      subject: "New order",
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Tailwind CSS Simple Email Template Example</title>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
          <div class="flex items-center justify-center min-h-screen p-5 bg-blue-100 min-w-screen">
            <div class="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
              <h3 class="text-2xl">Order Details :</h3>
              <p>User ID :${newOrder.user._id}</p>
              <p>User FirstName :${newOrder.user.FirstName}</p>
              <p>User LastName :${newOrder.user.LastName}</p>
              <p>Plants Info :</p>
              {${newOrder.Plants.map(
                (plant) =>
                  `<p>Plant Id : ${plant._id.toString()}</p>
                   <p>Quantity : ${plant.quantity}</p>`
              )}}
              <p>Price Total :${newOrder.PriceTotal}</p>
              <p>Shipping Adresse :${newOrder.ShippingAdresse}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    });
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: "Error on the Server !" });
  }
};

const getOrderByUserId = async (req, res) => {
  try {
    const {userId} = req.body;
    const user = await User.findById(userId);
    res.status(200).json(user.Orders);
  } catch (err) {
    res.status(500).json({ message: "Error on the Server !" });
  }
};

module.exports = {
  addOrder,
  getOrderByUserId,
  getOrder,
};
