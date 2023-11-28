const { Camp } = require("../models/model");

async function removeCamp(id) {
    try {
        const response = await Camp.deleteOne({
            _id: `${id}`,
        });
        console.log("Removed successfully");
        console.log(response);
        return response;
    } catch (err) {
        console.log("Error removing data", err);
    }
}

module.exports = removeCamp;
