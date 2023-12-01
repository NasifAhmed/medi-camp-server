const { RegisteredParticipant } = require("../models/model");

async function insertRegistered(userData) {
    let registered = {
        name: userData.name,
        email: userData.email,
        emergency_phone_number: userData.emergency_phone_number,
        age: userData.age,
        gender: userData.gender,
        address: userData.address,
        requirments: userData.requirments,
        registered_camp: userData.registered_camp,
        price: userData.price,
        payment_status: userData.payment_status,
        confirmation_status: userData.confirmation_status,
        feedback: userData.feedback,
    };

    if (userData._id) {
        try {
            const response = await RegisteredParticipant.updateOne(
                { _id: userData._id },
                registered,
                {
                    upsert: true,
                }
            );
            console.log("User saved successfully");
            console.log(response);
            return response;
        } catch (err) {
            console.log("Error saving user", err);
        }
    } else {
        try {
            const registeredData = new RegisteredParticipant(registered);
            const response = await registeredData.save();
            console.log("User saved successfully");
            console.log(response);
            return response;
        } catch (err) {
            console.log("Error saving user", err);
        }
    }
}

module.exports = insertRegistered;
