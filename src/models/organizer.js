const mongoose = require("mongoose");

const organizerScheme = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    organized_camps: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: true,
    },
    feedbacks: {
        type: [String],
        required: true,
    },
});

const Organizers = mongoose.model("Organizers", organizerScheme);

module.exports = Organizers;
