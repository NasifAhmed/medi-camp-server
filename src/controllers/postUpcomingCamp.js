const insertUpcomingCamp = require("../services/insertUpcomingCamp");

async function postUpcomingCamp(req, res) {
    try {
        await insertUpcomingCamp(req.body).then((response) => {
            return res.send(response);
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = postUpcomingCamp;
