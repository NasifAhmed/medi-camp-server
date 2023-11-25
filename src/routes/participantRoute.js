const getParticipant = require("../controllers/getParticipant");
const morgan = require("morgan");

const router = require("express").Router();

router.get("/participant", morgan(`tiny`), getParticipant);

module.exports = router;
