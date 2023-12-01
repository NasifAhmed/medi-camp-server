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
    info: {
        organized_camps: [{ type: Schema.Types.ObjectId, ref: "Camp" }],
        feedbacks: [{ type: String }],
        speciality: { type: String },
        certification: { type: String },
        interested_camps: [{ type: Schema.Types.ObjectId, ref: "Camp" }],
        accepted_camps: [{ type: Schema.Types.ObjectId, ref: "Camp" }],
        age: { type: String },
        gender: { type: String },
        address: { type: String },
        attended_camps: [{ type: Schema.Types.ObjectId, ref: "Camp" }],
        registered_camps: [{ type: Schema.Types.ObjectId, ref: "Camp" }],
    },
});

const registeredParticipantSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    emergency_phone_number: { type: String, required: true },
    age: { type: String },
    gender: { type: String },
    address: { type: String },
    requirments: { type: String },
    registered_camp: { type: Schema.Types.ObjectId, ref: "Camp" },
    price: { type: Number },
    payment_status: { type: Boolean },
    confirmation_status: { type: Boolean },
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
        created_by: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        purpose: { type: String, required: false },
        benefits: { type: String, required: false },
        target_audience: { type: String, required: true },
        special_service: { type: String, required: true },
        phone_number: { type: String, required: true },
        doctors: [{ type: Schema.Types.ObjectId, ref: "User" }],
        participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
    {
        timestamps: true,
    }
);

const feedbackScheme = new Schema(
    {
        owner: { type: Schema.Types.ObjectId, ref: "User" },
        camp: { type: Schema.Types.ObjectId, ref: "Camp" },
        text: { type: String },
        img: { type: String },
        rating: { type: Number },
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
        doctors_interested: [{ type: Schema.Types.ObjectId, ref: "User" }],
        participants_interested: [{ type: Schema.Types.ObjectId, ref: "User" }],
        ...campSchema.obj, // Include Camp Schema fields
    },
    {
        timestamps: true,
    }
);

// Create Mongoose models
const User = model("User", userSchema);
const Camp = model("Camp", campSchema);
const Feedback = model("Feedback", feedbackScheme);
const RegisteredParticipant = model(
    "RegisteredParticipant",
    registeredParticipantSchema
);
// const Organizer = model("Organizer", organizerSchema);
// const Doctor = model("Doctor", doctorSchema);
// const Participant = model("Participant", participantSchema);
const UpcomingCamp = model("UpcomingCamp", upcomingCampSchema);

module.exports = { User, Camp, UpcomingCamp, RegisteredParticipant, Feedback };
