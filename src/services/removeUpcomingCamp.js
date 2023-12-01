const { UpcomingCamp } = require("../models/model");

async function removeUpcomingCamp(id) {
    try {
        const response = await UpcomingCamp.deleteOne({
            _id: `${id}`,
        });
        console.log("Removed successfully");
        console.log(response);
        return response;
    } catch (err) {
        console.log("Error removing data", err);
    }
}

module.exports = removeUpcomingCamp;
