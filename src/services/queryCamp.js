const { Camp } = require("../models/model");

async function queryCamp(filter) {
    const sortField = {};

    if (filter.sort) {
        if (filter.sort.startsWith("-")) {
            sortField[filter.sort.slice(1)] = -1;
        } else {
            sortField[filter.sort] = 1;
        }
        delete filter.sort;
    }
    const cursor = await Camp.find(filter).sort(sortField);
    // console.log(`Query camp : ${cursor}`);
    return cursor;
}

module.exports = queryCamp;