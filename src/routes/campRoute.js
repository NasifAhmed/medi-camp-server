const getCamp = require("../controllers/getCamp");
const morgan = require("morgan");

const router = require("express").Router();

router.get("/camp", morgan(`tiny`), getCamp);

module.exports = router;
