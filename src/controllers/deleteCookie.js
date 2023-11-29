const deleteCookie = (req, res) => {
    const user = req.body;
    console.log("Logging out :", user);
    res.clearCookie("token", { maxAge: 0 }).send({ success: true });
};

module.exports = deleteCookie;
