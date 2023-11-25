const getDoctor = require("../controllers/getDoctor");
const morgan = require("morgan");

const router = require("express").Router();

router.get("/camp", morgan(`tiny`), getDoctor);

module.exports = router;
