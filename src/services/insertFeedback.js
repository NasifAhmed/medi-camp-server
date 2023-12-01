const { Feedback } = require("../models/model");

async function insertFeedback(data) {
    let feedback;

    feedback = {
        owner: data.owner,
        camp: data.camp,
        text: data.text,
        img: data.img,
        rating: data.rating,
    };

    try {
        const feedbackData = new Feedback(feedback);
        const response = await feedbackData.save();
        console.log("Feedback saved successfully");
        console.log(response);
        return response;
    } catch (err) {
        console.log("Error saving feedback", err);
    }
}

module.exports = insertFeedback;
