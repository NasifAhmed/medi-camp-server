const getOrganizer = require("../controllers/getOrganizer");
const morgan = require("morgan");

const router = require("express").Router();

router.get("/organizer", morgan(`tiny`), getOrganizer);

module.exports = router;
