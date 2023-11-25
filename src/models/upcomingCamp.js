const mongoose = require("mongoose");

const upcomingCampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    fees: {
        type: String,
        required: true,
    },
    purpose: {
        type: String,
        required: true,
    },
    benefits: {
        type: String,
        required: true,
    },
    target_audience: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    doctors_interested: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: false,
    },
    doctors_accepted: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: false,
    },
    participants_registered: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: false,
    },
    participants_accepted: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: false,
    },
});

const UpcomingCamp = mongoose.model("UpcomingCamp", upcomingCampSchema);

module.exports = UpcomingCamp;
