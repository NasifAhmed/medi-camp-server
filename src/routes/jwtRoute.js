const createCookie = require("../controllers/createCookie");
const deleteCookie = require("../controllers/deleteCookie");

const router = require("express").Router();

router.post("/get-token", createCookie);
router.post("/delete-token", deleteCookie);

module.exports = router;
