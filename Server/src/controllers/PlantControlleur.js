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

const getPlantByName = async ( req,res)=> { 
  try{ 
    const plantName=req.params.plantName;
    const selectedPlant=await Plant.findOne({Name:plantName});
    res.status(200).json(selectedPlant);
  }catch(error){ 
    console.log(error) ;
    res.status(500).json({message : "Server Error !"});
  }
}

module.exports = { addPlant, updatePlant, getPlants, deletePlant,getPlantByName };
   

