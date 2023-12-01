const insertCamp = require("../services/insertCamp");

async function postCamp(req, res) {
    try {
        await insertCamp(req.body).then((response) => {
            return res.send(response);
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = postCamp;
