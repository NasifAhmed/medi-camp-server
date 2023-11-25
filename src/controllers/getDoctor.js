const queryDoctor = require("../services/queryDoctor");

async function getDoctor(req, res) {
    const filter = req.query;

    const allDoctor = await queryDoctor(filter);
    res.send(allDoctor);
}

module.exports = getDoctor;
