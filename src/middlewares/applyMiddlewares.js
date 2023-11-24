const cors = require("cors");
const express = require("express");
const { LOCAL_CLIENT, MAIN_CLIENT } = require("../config/getClient");

const applyMiddleware = (app) => {
    app.use(
        cors({
            origin: [LOCAL_CLIENT, MAIN_CLIENT],
            // credentials: true,
        })
    );
    app.use(express.json());
    // app.use(cookieParser());
};

module.exports = applyMiddleware;
