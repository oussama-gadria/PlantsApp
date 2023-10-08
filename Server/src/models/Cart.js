const mongoose = require("mongoose");
const Plant = require("./Plants");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  plants: [
    {
      plant: { type: Schema.Types.Object, ref: "Plant" },
      quantity: Number,
      size:String
    },
  ],
});
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
