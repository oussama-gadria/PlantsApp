const express = require("express");
const { addOrder, getOrder } = require("../controllers/OrderControlleur");
const router = express.Router();

router.post("/addOrder", addOrder);
router.get("/getAllOrder",getOrder);
module.exports = router;
