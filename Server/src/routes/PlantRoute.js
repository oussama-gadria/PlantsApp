const express = require("express");
const {
  addPlant,
  updatePlant,
  deletePlant,
  getPlants,
  getPlantByName,
  filterByCategory,
  filterByPrice,
  filterByType,
  filterPlant,
  getPlantById,
} = require("../controllers/PlantControlleur");
const router = express.Router();

router.post("/addPlant", addPlant);
router.put("/updatePlant/:plantId", updatePlant);
router.get("/getPlants", getPlants);
router.delete("/deletePlant/:plantId", deletePlant);
router.get("/getPlantByName/:plantName", getPlantByName);
router.get("/filterByCategory/:category", filterByCategory);
router.get("/filterByprice/:minPrice/:maxPrice", filterByPrice);
router.get("/filterByType/:type", filterByType);
router.post("/filter", filterPlant);
router.get("/getPlantById/:plantId", getPlantById);

module.exports = router;
