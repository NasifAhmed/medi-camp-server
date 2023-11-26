const insertUser = require("../services/insertUser");

async function postUser(req, res) {
    if (req.query.email) {
    }
    await insertUser(req.body).then((response) => {
        return res.send(response);
    });
}

module.exports = postUser;
