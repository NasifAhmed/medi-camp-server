const removeUpcomingCamp = require("../services/removeUpcomingCamp");

async function deleteUpcomingCamp(req, res) {
    await removeUpcomingCamp(req.query._id).then((response) => {
        return res.send(response);
    });
}

module.exports = deleteUpcomingCamp;
