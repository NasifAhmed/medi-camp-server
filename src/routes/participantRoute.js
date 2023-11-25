const getParticipant = require("../controllers/getParticipant");
const morgan = require("morgan");

const router = require("express").Router();

router.get("/camp", morgan(`tiny`), getParticipant);

module.exports = router;
