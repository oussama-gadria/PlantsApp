const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  Name: String,
  Price: Number,
  Size: [String],
  Description: String,
  Quantity: Number,
  Image:String,
  Category:{ 
    type:String, 
    enum:['Indoor Plants',"Outdoor plants","Sun requirements"], 
    default:""
  }, 
  Type:{ 
    type:String, 
    enum:["Bonsai","Cacti","Creepers","Succulents","Seeds","Gifts"], 
    default:""
  }, 
  rate:Number,
  NumberOfSell:{ 
    type:Number, 
    default:0
  }
});

const Plant = mongoose.model("Plant", plantSchema);
module.exports = Plant;