const { User } = require("../models/model");

async function queryDoctor(filter) {
    const sortField = {};

    if (filter.sort) {
        if (filter.sort.startsWith("-")) {
            sortField[filter.sort.slice(1)] = -1;
        } else {
            sortField[filter.sort] = 1;
        }
        delete filter.sort;
    }
    const cursor = await User.find(filter).sort(sortField);
    return cursor;
}

module.exports = queryDoctor;
