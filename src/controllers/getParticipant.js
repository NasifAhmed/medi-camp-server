const queryParticipant = require("../services/queryParticipant");

async function getParticipant(req, res) {
    const filter = req.query;

    const allParticipant = await queryParticipant(filter);
    res.send(allParticipant);
}

module.exports = getParticipant;
