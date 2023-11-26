const queryUser = require("../services/queryUser");

async function getDoctor(req, res) {
    const filter = req.query;

    const allUser = await queryUser(filter);
    res.send(allUser);
}

module.exports = getDoctor;
