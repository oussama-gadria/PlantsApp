const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  user: {
    type: Schema.Types.Object,
    ref: "User",
  },
  Plants: [
    {
      type: Schema.Types.Object,
      ref: "Plants",
    },
  ],
  PriceTotal:Number, 
  ShippingAdresse:String,
});
const Orders=mongoose.model("Orders",orderSchema); 
module.exports=Orders;
