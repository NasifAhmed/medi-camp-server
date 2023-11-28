const insertCamp = require("../services/insertCamp");

async function postCamp(req, res) {
    await insertCamp(req.body).then((response) => {
        return res.send(response);
    });
}

module.exports = postCamp;
