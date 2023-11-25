const mongoose = require("mongoose");

const participantScheme = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
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
    gender: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    requirements: {
        type: String,
        required: true,
    },
    attended_camps: {
        type: String,
        required: false,
    },
    registered_camps: {
        type: String,
        required: true,
    },
});

const Participants = mongoose.model("Participants", participantScheme);

module.exports = Participants;
