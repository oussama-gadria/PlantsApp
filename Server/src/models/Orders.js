const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  Plants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Plants",
    },
  ],
  PriceTotal:Number, 
  ShippingAdresse:String,
});
const Orders=mongoose.model("Orders",orderSchema); 
module.exports=Orders;
