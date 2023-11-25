const participant = require("../models/participant");

async function queryParticipant(filter) {
    const sortField = {};

    if (filter.sort) {
        if (filter.sort.startsWith("-")) {
            sortField[filter.sort.slice(1)] = -1;
        } else {
            sortField[filter.sort] = 1;
        }
        delete filter.sort;
    }
    const cursor = await participant.find(filter).sort(sortField);
    return cursor;
}

module.exports = queryParticipant;
