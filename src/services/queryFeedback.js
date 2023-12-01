const { Feedback } = require("../models/model");

async function queryFeedback(filter) {
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
    const cursor = await Feedback.find(filter)
        .sort(sortField)
        .populate("owner")
        .populate("camp")
        .exec();
    return cursor;
}

module.exports = queryFeedback;
