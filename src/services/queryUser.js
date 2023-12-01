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
    if (filter.count) {
        delete filter.count;
        const cursor = await User.countDocuments(filter);
        return { count: cursor };
    }
    const cursor = await User.find(filter)
        .sort(sortField)
        .populate("info.organized_camps")
        .populate("info.interested_camps")
        .populate("info.registered_camps")
        .populate("info.accepted_camps")
        .populate("info.attended_camps")
        .exec();
    return cursor;
}

module.exports = queryDoctor;
