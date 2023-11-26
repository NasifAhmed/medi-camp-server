const { Schema, model } = require("mongoose");

// Define User Schema
const userSchema = new Schema({
    role: {
        type: String,
        enum: ["organizer", "participant", "doctor"],
        required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    info: { type: Schema.Types.Mixed },
});

// Define Camp Schema
const campSchema = new Schema(
    {
        name: { type: String, required: true },
        img: { type: String, required: true },
        date: { type: String, required: true },
        venue: { type: String, required: true },
        desc: { type: String, required: true },
        fees: { type: String, required: true },
        purpose: { type: String, required: true },
        benefits: { type: String, required: true },
        target_audience: { type: String, required: true },
        phone_number: { type: String, required: true },
        doctors: [{ type: Schema.Types.ObjectId, ref: "Doctor" }],
        participants: [{ type: Schema.Types.ObjectId, ref: "Participant" }],
        feedbacks: [{ type: String }],
        rating: { type: Number, required: false },
    },
    {
        timestamps: true,
    }
);

// // Define Organizer Schema
// const organizerSchema = new Schema({
//     organized_camps: [{ type: Schema.Types.ObjectId, ref: "Camp" }],
//     feedbacks: [{ type: String }],
//     ...userSchema.obj, // Include User Schema fields
// });

// // Define Doctor Schema
// const doctorSchema = new Schema({
//     speciality: { type: String, required: true },
//     certification: { type: String, required: true },
//     interested_camps: [{ type: Schema.Types.ObjectId, ref: "Camp" }],
//     accepted_camps: [{ type: Schema.Types.ObjectId, ref: "Camp" }],
//     ...userSchema.obj, // Include User Schema fields
// });

// // Define Participant Schema
// const participantSchema = new Schema({
//     age: { type: Number, required: true },
//     gender: { type: String, required: true },
//     address: { type: String, required: true },
//     requirments: { type: String, required: false },
//     attended_camps: [{ type: Schema.Types.ObjectId, ref: "Camp" }],
//     registered_camps: [{ type: Schema.Types.ObjectId, ref: "Camp" }],
//     ...userSchema.obj, // Include User Schema fields
// });

// Define UpcomingCamp Schema
const upcomingCampSchema = new Schema(
    {
        doctors_interested: [{ type: Schema.Types.ObjectId, ref: "Doctor" }],
        doctors_accepted: [{ type: Schema.Types.ObjectId, ref: "Doctor" }],
        participants_registered: [
            { type: Schema.Types.ObjectId, ref: "Participant" },
        ],
        participants_accepted: [
            { type: Schema.Types.ObjectId, ref: "Participant" },
        ],
        ...campSchema.obj, // Include Camp Schema fields
    },
    {
        timestamps: true,
    }
);

// Create Mongoose models
const User = model("User", userSchema);
const Camp = model("Camp", campSchema);
// const Organizer = model("Organizer", organizerSchema);
// const Doctor = model("Doctor", doctorSchema);
// const Participant = model("Participant", participantSchema);
const UpcomingCamp = model("UpcomingCamp", upcomingCampSchema);

module.exports = { User, Camp, UpcomingCamp };
