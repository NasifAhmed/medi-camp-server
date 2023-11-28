const { RegisteredParticipant } = require("../models/model");

async function queryRegistered(filter) {
    const sortField = {};

    if (filter.sort) {
        if (filter.sort.startsWith("-")) {
            sortField[filter.sort.slice(1)] = -1;
        } else {
            sortField[filter.sort] = 1;
        }
        delete filter.sort;
    }
    const cursor = await RegisteredParticipant.find(filter)
        .sort(sortField)
        .populate("registered_camp");
    return cursor;
}

module.exports = queryRegistered;
