const express=require("express"); 
const { addPlant, updatePlant, deletePlant, getPlants, getPlantByName, filterByCategory, filterByPrice, filterByType } = require("../controllers/PlantControlleur");
const router=express.Router(); 

router.post("/addPlant",addPlant); 
router.put("/updatePlant/:plantId",updatePlant);
router.get("/getPlants",getPlants); 
router.delete("/deletePlant/:plantId",deletePlant)
router.get("/getPlantByName/:plantName",getPlantByName);
router.get("/filterByCategory/:category",filterByCategory);
router.get("/filterByPrice/:minPrice/:maxPrice",filterByPrice); 
router.get("/filterByType/:type",filterByType);
module.exports=router;