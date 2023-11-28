const { RegisteredParticipant } = require("../models/model");

async function removeRegistered(filter) {
    try {
        const response = await RegisteredParticipant.deleteMany(filter);
        console.log("Removed successfully");
        console.log(response);
        return response;
    } catch (err) {
        console.log("Error removing data", err);
    }
}

module.exports = removeRegistered;
