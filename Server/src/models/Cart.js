const mongoose = require("mongoose");
const Plant = require("./Plants");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  plants: [
    {
      plant: { type: mongoose.Schema.Types.Object, ref: "Plant" },
      quantity: Number,
    },
  ],
});
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
