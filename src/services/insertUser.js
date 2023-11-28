const { User, Organizer } = require("../models/model");

async function insertUser(userData) {
    let user;

    if (userData._id) {
        if (userData.role === "organizer") {
            user = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                phone_number: userData.phone_number,
                role: userData.role,
                info: {
                    organizedCamps: userData.info.organizedCamps,
                    feedbacks: userData.info.feedbacks,
                },
            };
        } else if (userData.role === "doctor") {
            user = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                phone_number: userData.phone_number,
                role: userData.role,
                info: {
                    speciality: userData.info.speciality,
                    certification: userData.info.certification,
                    interestedCamps: userData.info.interestedCamps,
                    acceptedCamps: userData.info.acceptedCamps,
                },
            };
        } else if (userData.role === "participant") {
            user = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                phone_number: userData.phone_number,
                role: userData.role,
                info: {
                    age: userData.info.age,
                    gender: userData.info.gender,
                    attendedCamps: userData.info.attendedCamps,
                    registeredCamps: userData.info.registeredCamps,
                },
            };
        }
    } else {
        if (userData.role === "organizer") {
            user = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                phone_number: userData.phone_number,
                role: userData.role,
                info: {
                    organizedCamps: userData.organizedCamps,
                    feedbacks: userData.feedbacks,
                },
            };
        } else if (userData.role === "doctor") {
            user = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                phone_number: userData.phone_number,
                role: userData.role,
                info: {
                    speciality: userData.speciality,
                    certification: userData.certification,
                    interestedCamps: userData.interestedCamps,
                    acceptedCamps: userData.acceptedCamps,
                },
            };
        } else if (userData.role === "participant") {
            user = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                phone_number: userData.phone_number,
                role: userData.role,
                info: {
                    age: userData.age,
                    gender: userData.gender,
                    attendedCamps: userData.attendedCamps,
                    registeredCamps: userData.registeredCamps,
                },
            };
        }
    }

    try {
        const response = await User.updateOne({ email: userData.email }, user, {
            upsert: true,
        });
        console.log("User saved successfully");
        console.log(response);
        return user;
    } catch (err) {
        console.log("Error saving user", err);
    }
}

module.exports = insertUser;
