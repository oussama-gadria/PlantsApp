const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Password: String,
  Confirmed: {
    type: Boolean,
    default: false,
  },
  Orders: [
    {
      type: mongoose.Schema.Types.Object,
      ref: "Order",
    },
  ],
});
const User = mongoose.model("User", userSchema);
module.exports = User;
