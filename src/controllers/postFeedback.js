const insertFeedback = require("../services/insertFeedback");

async function postFeedback(req, res) {
    try {
        await insertFeedback(req.body).then((response) => {
            return res.send(response);
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = postFeedback;
