const getFeedback = require("../controllers/getFeedback");
const morgan = require("morgan");
const postFeedback = require("../controllers/postFeedback");

const router = require("express").Router();

router.post("/feedback", morgan(`tiny`), postFeedback);
router.get("/feedback", morgan(`tiny`), getFeedback);

module.exports = router;
