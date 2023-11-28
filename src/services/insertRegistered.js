const { RegisteredParticipant } = require("../models/model");

async function insertRegistered(userData) {
    let user;

    user = new RegisteredParticipant({
        name: userData.name,
        email: userData.email,
        emergency_phone_number: userData.emergency_phone_number,
        age: userData.age,
        gender: userData.gender,
        address: userData.address,
        requirments: userData.requirments,
        registered_camp: userData.registered_camp,
        payment_status: userData.payment_status,
        feedback: userData.feedback,
    });

    try {
        const response = await user.save();
        console.log("User saved successfully");
        console.log(response);
        return user;
    } catch (err) {
        console.log("Error saving user", err);
    }
}

module.exports = insertRegistered;
