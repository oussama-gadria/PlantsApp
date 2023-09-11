const Cart = require("../models/Cart");
const Plant = require("../models/Plants");
const pattern = /new ObjectId\("(\w+)"\)/;

const addCart = async (req, res) => {
  try {
    const cart = req.body;
    const newCart = await Cart.create(cart);
    console.log(cart);
    res.status(200).json({ data: { newCart } });
  } catch (error) {
    console.log(error);
  }
};

const deleteCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const deletedCart = await Cart.findByIdAndDelete(cartId);
    res.status(200).json({ message: "cart deleted !" });
  } catch (error) {
    res.status(500).message("error on server ! ");
  }
};

const addPlantToCart = async (req, res) => {
  try {
    const { cartId, plantId, quantity } = req.body;
    const cart = await Cart.findById(cartId);
    const plant = await Plant.findById(plantId);
    var exist = false;
    const plantToBuy = { plant, quantity };
    for (let i = 0; i < cart.plants.length; i++) {
      if (cart.plants[i].plant._id.toString() === plantId) {
        exist = true;
      }
    }
    if (!exist) {
      cart.plants.push(plantToBuy);
    }
    await cart.save();
    res.status(200).json({ data: { cart } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error on server !" });
  }
};

const deletePlantFromCart = async (req, res) => {
  try {
    const { cartId, plantId } = req.params;
    const cart = await Cart.findById(cartId);
    for (let i = 0; i < cart.plants.length; i++) {
      if (cart.plants[i].plant._id.toString() === plantId) {
        console.log("here");
        cart.plants.splice(i, 1);
      }
    }
    await cart.save();
    res.status(200).json({ data: { cart } });
  } catch (error) {
    res.status(500).json({ message: "Error on server!" });
  }
};

const updateQuantityOfPlants = async (req, res) => {
  try {
    const { cartId, plantId, newQuantity } = req.body;
    const cart = await Cart.findById(cartId);
    for (let i = 0; i < cart.plants.length; i++) {
      if (cart.plants[i].plant._id.toString() === plantId) {
        cart.plants[i].quantity = newQuantity;
      }
    }
    await cart.save();
    res.status(200).json({ message: "quantity updated !" });
  } catch (error) {
    res.status(500).json({ message: "Error on server!" });
  }
};

const getCartInfo = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const cart = await Cart.findById(cartId);
    res.status(200).json(cart.plants);
  } catch (error) {
    res.status(500).json({ message: "Error on the server !" });
  }
};

module.exports = {
  addCart,
  deleteCart,
  addPlantToCart,
  getCartInfo,
  deletePlantFromCart,
  updateQuantityOfPlants,
};
