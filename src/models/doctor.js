const mongoose = require("mongoose");

const doctorScheme = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    spciality: {
        type: String,
        required: true,
    },
    certification: {
        type: String,
        required: true,
    },
    interested_camps: {
        type: String,
        required: true,
    },
    accepted_camps: {
        type: String,
        required: true,
    },
});

const Doctors = mongoose.model("Doctors", doctorScheme);

module.exports = Doctors;
