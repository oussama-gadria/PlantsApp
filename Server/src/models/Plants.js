const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  Type: String,
  Name: String,
  Price: Number,
  Size: String,
  Description: String,
  Quantity: Number
});

const Plant = mongoose.model("Plant", plantSchema);
module.exports = Plant;