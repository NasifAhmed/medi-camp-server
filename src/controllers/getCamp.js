const queryCamp = require("../services/queryCamp");

async function getCamp(req, res) {
    const filter = req.query;

    const allCamp = await queryCamp(filter);
    // console.log(`Get Camp : ${allCamp}`);
    res.send(allCamp);
}

module.exports = getCamp;
