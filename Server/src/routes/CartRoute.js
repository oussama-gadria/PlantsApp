const express = require("express");
const {
  addCart,
  deleteCart,
  addPlantToCart,
  deletePlantFromCart,
  updateQuantityOfPlants,
  getCartInfo,
} = require("../controllers/CartControlleur");

const router = express.Router();
router.post("/addCart", addCart);
router.delete("/deleteCart/:cartId", deleteCart);
router.post("/addPlantToCart", addPlantToCart);
router.delete("/deletePlantFromCart/:cartId/:plantId", deletePlantFromCart);
router.put("/updateQuantity", updateQuantityOfPlants);
router.get("/getCartInfo/:cartId",getCartInfo);

module.exports = router;
