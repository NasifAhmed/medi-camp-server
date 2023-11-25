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
        type: [mongoose.SchemaTypes.ObjectId],
        required: true,
    },
    accepted_camps: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: true,
    },
});

const Doctor = mongoose.model("Doctor", doctorScheme);

module.exports = Doctor;
