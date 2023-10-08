const express = require("express");
const {
  confirmEmail,
  addUser,
  SignIn,
  getUserById,
  sendEmail,
  getUser,
} = require("../controllers/UserControlleur");
const router = express.Router();
router.get("/SignUp/:emailToken", confirmEmail);
router.post("/addUser", addUser);
router.post("/SignIn", SignIn);
router.get("/getUser/:userId", getUserById);
router.post("/sendEmail", sendEmail);
router.get("/getUsers", getUser);

module.exports = router;
