const queryRegistered = require("../services/queryRegistered");

async function getRegistered(req, res) {
    const filter = req.query;

    const registered = await queryRegistered(filter);
    res.send(registered);
}

module.exports = getRegistered;
