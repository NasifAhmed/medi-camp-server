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
        try {
            const cursor = await UpcomingCamp.countDocuments(filter);
            return { count: cursor };
        } catch (error) {
            console.log(error);
        }
    } else {
        if (filter.limit) {
            const limit = filter.limit;
            delete filter.limit;
            try {
                const cursor = await UpcomingCamp.find(filter)
                    .sort(sortField)
                    .limit(limit)
                    .populate("doctors_interested")
                    .populate("created_by")
                    .populate("participants_interested")
                    .exec();
                return cursor;
            } catch (error) {
                console.log(error);
            }
        }
        if (filter.populate) {
            delete filter.populate;
            try {
                const cursor = await UpcomingCamp.find(filter)
                    .sort(sortField)
                    .populate("doctors_interested")
                    .populate("created_by")
                    .populate("participants_interested")
                    .exec();
                return cursor;
            } catch (error) {
                console.log(error);
            }
        }

        try {
            const cursor = await UpcomingCamp.find(filter)
                .sort(sortField)
                .exec();
            return cursor;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = queryUpcomingCamp;
