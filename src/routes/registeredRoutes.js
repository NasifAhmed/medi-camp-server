const getRegistered = require("../controllers/getRegistered");
const morgan = require("morgan");
const postRegistered = require("../controllers/postRegistered");
const deleteRegistered = require("../controllers/deleteRegistered");

const router = require("express").Router();

router.get("/registered", morgan(`tiny`), getRegistered);
router.post("/registered", morgan(`tiny`), postRegistered);
router.delete("/registered", morgan(`tiny`), deleteRegistered);

module.exports = router;
