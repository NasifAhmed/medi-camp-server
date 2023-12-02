const router = require("express").Router();
const stripeGateway = require("../controllers/stripeGateway");
const postPayment = require("../controllers/postPayment");
const getPayment = require("../controllers/getPayment");
const morgan = require("morgan");

router.post("/create-payment-intent", morgan(`tiny`), stripeGateway);
router.post("/payment", morgan(`tiny`), postPayment);
router.get("/payment", morgan(`tiny`), getPayment);

module.exports = router;
