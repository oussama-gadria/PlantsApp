const Plant = require("../models/Plants");

const addPlant = async (req, res) => {
  try {
    const plant = req.body;
    const newPlant = await Plant.create(plant);
    console.log(newPlant);
    res.status(201).json(newPlant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error!" });
  }
};

const updatePlant = async (req, res) => {
  try {
    const plantId = req.params.plantId;
    const newPlant = req.body;
    const updatedPlant = await Plant.findByIdAndUpdate(plantId, newPlant);
    res.status(200).json(updatedPlant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const getPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.status(200).json(plants);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error !" });
  }
};

const deletePlant = async (req, res) => {
  try {
    const plantId = req.params.plantId;
    const deletedPlant = await Plant.findByIdAndDelete(plantId);
    res.status(200).json(deletedPlant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error !" });
  }
};

const getPlantByName = async (req, res) => {
  try {
    const plantName = req.params.plantName;
    const selectedPlant = await Plant.findOne({ Name: plantName });
    res.status(200).json(selectedPlant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error !" });
  }
};

const filterByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const plantsFiltred = await Plant.find({ Category: category });
    res.status(200).json(plantsFiltred);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error !" });
  }
};

const filterByPrice = async (req, res) => {
  try {
    const minPrice = req.params.minPrice;
    const maxPrice = req.params.maxPrice;
    const plants = await Plant.find();
    const filtredPlants = plants.filter((plant) => {
      return plant.Price >= minPrice && plant.Price <= maxPrice;
    });
    res.status(200).json(filtredPlants);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error !" });
  }
};

const filterByType = async (req, res) => {
  try {
    const type = req.params.type;
    const plantsFiltred = await Plant.find({ Type: type });
    res.status(200).json(plantsFiltred);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Server Error !" });
  }
};

const filterPlant = async (req, res) => {
  try {
    const filters = req.body;
    const query = {};
    if (filters.type) {
      query.Type = filters.type;
    }
    if (filters.category) {
      query.Category = filters.category;
    }
    if (filters.minPrice) {
      query.Price = { $gt: filters.minPrice };
    }
    if (filters.maxPrice) {
      query.Price = { ...query.Price, $lt: filters.maxPrice };
    }
    const plantsFiltered = await Plant.find(query);
    return res.status(200).json(plantsFiltered);
  } catch (error) {}
};

module.exports = {
  addPlant,
  updatePlant,
  getPlants,
  deletePlant,
  getPlantByName,
  filterByCategory,
  filterPlant,
  filterByPrice,
  filterByType,
};
