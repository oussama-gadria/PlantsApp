const Cart = require("../models/Cart");
const Orders = require("../models/Orders");
const Plants = require("../models/Plants");
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

const reduceQunatityAfterBuying = async (plants) => {
  for (const p of plants) {
    const plant = await Plants.findById(p.plant._id.toString());
    plant.Quantity = plant.Quantity - p.quantity;
    await plant.save();
  }
};

const addOrder = async (req, res) => {
  try {
    const { userId, CartId, PriceTotal, ShippingAdresse } = req.body;
    const user = await User.findById(userId);
    const cart = await Cart.findById(CartId);
    await reduceQunatityAfterBuying(cart.plants);
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
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #e5e7eb;
            }
            .container {
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              padding: 5px;
              min-width: 100vw;
              background-color: #e5e7eb;
            }
            .card {
              max-width: 600px;
              padding: 20px;
              color: #374151;
              background-color: #fff;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              border-radius: 20px;
            }
            .title {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }
            th, td {
              padding: 10px;
              text-align: left;
              border-bottom: 1px solid #d1d5db;
            }
            .total-price {
              font-weight: bold;
              margin-top: 20px;
            }
            .shipping-address {
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="card">
              <h3 class="title">Order Details:</h3>
              <table>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>User First Name</th>
                    <th>User Last Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${newOrder.user._id}</td>
                    <td>${newOrder.user.FirstName}</td>
                    <td>${newOrder.user.LastName}</td>
                  </tr>
                </tbody>
              </table>
              <h4 class="title">Plants Info:</h4>
              <table>
                <thead>
                  <tr>
                    <th>Plant ID</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  ${newOrder.Plants.map(
                    (plant) => `
                    <tr>
                      <td>${plant._id.toString()}</td>
                      <td>${plant.quantity}</td>
                    </tr>
                  `
                  )}
                </tbody>
              </table>
              <p class="total-price">Price Total: ${newOrder.PriceTotal}</p>
              <p class="shipping-address">Shipping Address: ${
                newOrder.ShippingAdresse
              }</p>
            </div>
          </div>
        </body>
      </html>
    `,
    });
    res.status(200).json({ message: "order added succefully" });
  } catch (error) {
    res.status(500).json({ message: "Error on the Server !" });
  }
};

const getOrderByUserId = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    res.status(200).json(user.Orders);
  } catch (err) {
    res.status(500).json({ message: "Error on the Server !" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const orderId  = req.params.orderId;
    console.log("🚀 ~ file: OrderControlleur.js:176 ~ getOrderById ~ req.params.orderId:", orderId)
    const order = await Orders.findById(orderId);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: "Error on the server" });
  }
};

module.exports = {
  getOrderById,
  addOrder,
  getOrderByUserId,
  getOrder,
};
