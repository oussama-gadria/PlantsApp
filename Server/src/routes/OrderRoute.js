const express = require("express");
const { addOrder, getOrder, getOrderByUserId, getOrderById } = require("../controllers/OrderControlleur");
const router = express.Router();

router.post("/addOrder", addOrder);
router.get("/getAllOrder",getOrder);
router.post("/getOrderByUserId",getOrderByUserId);
router.get("/getOrderById/:orderId",getOrderById);
module.exports = router;
