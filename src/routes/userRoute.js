const getUser = require("../controllers/getUser");
const morgan = require("morgan");
const postUser = require("../controllers/postUser");

const router = require("express").Router();

router.get("/user", morgan(`tiny`), getUser);
router.post("/user", morgan(`tiny`), postUser);

module.exports = router;
