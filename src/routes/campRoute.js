const getCamp = require("../controllers/getCamp");
const morgan = require("morgan");
const postCamp = require("../controllers/postCamp");
const deleteCamp = require("../controllers/deleteCamp");

const router = require("express").Router();

router.post("/camp", morgan(`tiny`), postCamp);
router.delete("/camp", morgan(`tiny`), deleteCamp);
router.get("/camp", morgan(`tiny`), getCamp);

module.exports = router;
