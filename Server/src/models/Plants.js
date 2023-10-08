const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  Name: String,
  Price: Number,
  Size: [String],
  Description: String,
  Quantity: Number,
  Image:{
        type:String, 
        default:"https://crawfordroofing.com.au/wp-content/uploads/2018/04/No-image-available-2.jpg"
        },
  Category:{ 
    type:String, 
    enum:['Indoor Plants',"Outdoor plants","Sun requirements"], 
    default:"Indoor Plants"
  }, 
  Type:{ 
    type:String, 
    enum:["Bonsai","Cacti","Creepers","Succulents","Seeds","Gifts"], 
    default:"Bonsai"
  }, 
  rate:Number,
  NumberOfSell:{ 
    type:Number, 
    default:0
  },
  Orders: [
    {
      type: Schema.Types.Object,
      ref: "Orders",
    },
  ],
});

const Plants = mongoose.model("Plants", plantSchema);
module.exports = Plants;