const getUpcomingCamp = require("../controllers/getUpcomingCamp");
const morgan = require("morgan");
const postUpcomingCamp = require("../controllers/postUpcomingCamp");
const deleteUpcomingCamp = require("../controllers/deleteUpcomingCamp");

const router = require("express").Router();

router.post("/upcomingcamp", morgan(`tiny`), postUpcomingCamp);
router.delete("/upcomingcamp", morgan(`tiny`), deleteUpcomingCamp);
router.get("/upcomingCamp", morgan(`tiny`), getUpcomingCamp);

module.exports = router;
