const removeRegistered = require("../services/removeRegistered");

async function deleteRegistered(req, res) {
    await removeRegistered(req.query).then((response) => {
        return res.send(response);
    });
}

module.exports = deleteRegistered;
