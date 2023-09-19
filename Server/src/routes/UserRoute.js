const express=require("express"); 
const { confirmEmail, addUser, SignIn, getUserById, sendEmail } = require("../controllers/UserControlleur");
const router=express.Router(); 
router.get("/SignUp/:emailToken",confirmEmail);
router.post("/addUser",addUser);
router.post("/SignIn",SignIn);
router.post("/getUser",getUserById);
router.post("/sendEmail",sendEmail)
module.exports=router;