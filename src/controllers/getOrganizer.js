const queryOrganizer = require("../services/queryOrganizer");

async function getOrganizer(req, res) {
    const filter = req.query;

    const allOrganizer = await queryOrganizer(filter);
    res.send(allOrganizer);
}

module.exports = getOrganizer;
