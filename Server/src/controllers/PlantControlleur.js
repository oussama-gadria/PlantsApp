const Plant = require("../models/Plants");

const addPlant = async (req, res) => {
  try {
    const  plant = req.body;
    const newPlant = await Plant.create(plant);
    console.log(newPlant)
    res.status(201).json(newPlant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error!" });
  }
};

module.exports = { addPlant };