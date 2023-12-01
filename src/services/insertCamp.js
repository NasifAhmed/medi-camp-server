const { Camp } = require("../models/model");

async function insertCamp(campData) {
    if (campData._id) {
        const camp = {
            name: campData.name,
            img: campData.img,
            date: campData.date,
            venue: campData.venue,
            phone_number: campData.phone_number,
            desc: campData.desc,
            fees: campData.fees,
            purpose: campData?.purpose,
            benefits: campData?.benefits,
            target_audience: campData.target_audience,
            special_service: campData.special_service,
            doctors: campData?.doctors,
            participants: campData?.participants,
            feedbacks: campData?.feedbacks,
            rating: campData?.rating,
        };
        try {
            const response = await Camp.updateOne({ _id: campData._id }, camp);
            console.log("Camp saved successfully");
            console.log(response);
            return response;
        } catch (err) {
            console.log("Error saving camp", err);
        }
    } else {
        try {
            const camp = new Camp(campData);
            const response = await camp.save();
            console.log("Camp saved successfully");
            console.log(response);
            return response;
        } catch (err) {
            console.log("Error saving camp", err);
        }
    }
}

module.exports = insertCamp;
