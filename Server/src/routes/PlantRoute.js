const express=require("express"); 
const { addPlant } = require("../controllers/PlantControlleur");
const router=express.Router(); 
 
router.post("/addPlant",addPlant); 

module.exports=router;