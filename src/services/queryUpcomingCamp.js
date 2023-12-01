const { UpcomingCamp } = require("../models/model");

async function queryUpcomingCamp(filter) {
    const sortField = {};

    if (filter.sort) {
        if (filter.sort.startsWith("-")) {
            sortField[filter.sort.slice(1)] = -1;
        } else {
            sortField[filter.sort] = 1;
        }
        delete filter.sort;
    }
    if (filter.count) {
        delete filter.count;
        const cursor = await UpcomingCamp.countDocuments(filter);
        return { count: cursor };
    }
    const cursor = await UpcomingCamp.find(filter).sort(sortField);
    return cursor;
}

module.exports = queryUpcomingCamp;
