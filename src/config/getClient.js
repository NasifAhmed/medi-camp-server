require("dotenv").config();

const config = {
    LOCAL_CLIENT: process.env.LOCAL_CLIENT,
    MAIN_CLIENT: process.env.MAIN_CLIENT,
};

module.exports = Object.freeze(config);
