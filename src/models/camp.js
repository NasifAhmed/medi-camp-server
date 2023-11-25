const mongoose = require("mongoose");

const campSchema = new mongoose.Schema({
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
    special_service: {
        type: String,
        required: false,
    },
    phone_number: {
        type: String,
        required: true,
    },
    doctors: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: false,
    },
    participants: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: false,
    },
    feedbacks: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: false,
    },
    rating: {
        type: Number,
        required: false,
    },
});

const Camp = mongoose.model("Camp", campSchema);

module.exports = Camp;
