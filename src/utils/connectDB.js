const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async function () {
    let uri = process.env.DB_URL.replace(
        "<username>",
        process.env.DB_USER
    ).replace("<password>", process.env.DB_PASSWORD);
    await mongoose.connect(uri, { dbName: process.env.DB_NAME });
    console.log("Conntected to database !");
};

module.exports = connectDB;
