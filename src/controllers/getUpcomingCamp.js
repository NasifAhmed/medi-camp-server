const queryUpcomingCamp = require("../services/queryUpcomingCamp");

async function getUpcomingCamp(req, res) {
    const filter = req.query;

    const allUpcomingCamp = await queryUpcomingCamp(filter);
    res.send(allUpcomingCamp);
}

module.exports = getUpcomingCamp;
