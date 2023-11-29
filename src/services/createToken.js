const jwt = require("jsonwebtoken");
require("dotenv").config();
const createToken = (user) => {
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    return token;
};

module.exports = createToken;
