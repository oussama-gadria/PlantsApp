const express=require("express"); 
const { confirmEmail, addUser, SignIn, getUserById } = require("../controllers/UserControlleur");
const router=express.Router(); 
router.get("/SignUp/:emailToken",confirmEmail);
router.post("/addUser",addUser);
router.post("/SignIn",SignIn);
router.post("/getUser",getUserById);

module.exports=router;