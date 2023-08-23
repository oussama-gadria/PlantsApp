const express=require("express"); 
const { addPlant, updatePlant, deletePlant, getPlants } = require("../controllers/PlantControlleur");
const router=express.Router(); 
 
router.post("/addPlant",addPlant); 
router.put("/updatePlant/:plantId",updatePlant);
router.get("/getPlants",getPlants); 
router.delete("/deletePlant/:plantId",deletePlant)
module.exports=router;