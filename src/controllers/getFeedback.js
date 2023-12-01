const queryFeedback = require("../services/queryFeedback");

async function getFeedback(req, res) {
    const filter = req.query;

    const allFeedback = await queryFeedback(filter);
    res.send(allFeedback);
}

module.exports = getFeedback;
