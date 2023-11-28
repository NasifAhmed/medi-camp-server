const insertRegistered = require("../services/insertRegistered");

async function postRegistered(req, res) {
    await insertRegistered(req.body).then((response) => {
        return res.send(response);
    });
}

module.exports = postRegistered;
