const express = require("express");
const {
  updatePlant,
  deletePlant,
  getPlants,
  getPlantByName,
  filterByCategory,
  filterByPrice,
  filterByType,
  filterPlant,
  getPlantById,
  addPlant,
} = require("../controllers/PlantControlleur");
const router = express.Router();
const multer = require("multer");

//configuration de multer 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage })

//Routes 
router.post("/addPlant", upload.single('file'),addPlant);
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
