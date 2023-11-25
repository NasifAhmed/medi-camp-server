const getDoctor = require("../controllers/getDoctor");
const morgan = require("morgan");

const router = require("express").Router();

router.get("/doctor", morgan(`tiny`), getDoctor);

module.exports = router;
