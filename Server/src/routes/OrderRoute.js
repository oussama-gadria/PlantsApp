const express = require("express");
const { addOrder, getOrder, getOrderByUserId } = require("../controllers/OrderControlleur");
const router = express.Router();

router.post("/addOrder", addOrder);
router.get("/getAllOrder",getOrder);
router.post("/getOrderByUserId",getOrderByUserId);
module.exports = router;
