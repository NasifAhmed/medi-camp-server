const getUpcomingCamp = require("../controllers/getUpcomingCamp");
const morgan = require("morgan");

const router = require("express").Router();

router.get("/upcomingCamp", morgan(`tiny`), getUpcomingCamp);

module.exports = router;
