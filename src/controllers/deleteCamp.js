const removeCamp = require("../services/removeCamp");

async function deleteCamp(req, res) {
    await removeCamp(req.query._id).then((response) => {
        return res.send(response);
    });
}

module.exports = deleteCamp;
