const createToken = require("../services/createToken");

const createCookie = (req, res, next) => {
    try {
        const user = req.body;
        const token = createToken(user);

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        }).send({ success: true });
    } catch (err) {
        next(err);
    }
};

module.exports = createCookie;
