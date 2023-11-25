const express = require("express");
const morgan = require("morgan");
const globalErrorHandler = require("./utils/globalErrorHandler");
const connectDB = require("./utils/connectDB");
const applyMiddleware = require("./middlewares/applyMiddlewares");
const Camp = require("./models/camp");
const campRoute = require("./routes/campRoute");

const app = express();
const port = process.env.PORT || 5000;

app.get("/health", morgan(`tiny`), (req, res) => {
    res.send("Server is running............");
});

applyMiddleware(app);

// Routes
app.use(campRoute);

app.all("*", morgan(`tiny`), (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
});
app.use(globalErrorHandler);

// const fakeData = new Camp({
//     name: "Summer Wellness Retreat",
//     img: "https://example.com/camp1.jpg",
//     date: "2023-07-15",
//     venue: "Green Valley Resort",
//     desc: "Join us for a rejuvenating experience in the lap of nature. This camp focuses on mental and physical well-being.",
//     fees: "$199.99",
//     purpose: "Wellness and Relaxation",
//     benefits:
//         "Yoga sessions, nature walks, meditation, healthy meals, and personalized wellness consultations.",
//     target_audience:
//         "Individuals seeking a break from the hustle and bustle of city life.",
//     special_service: "Free massage for the first 50 participants!",
//     phone_number: "+1234567890",
//     doctors: [],
//     participants: [],
//     feedbacks: [],
//     rating: null,
// });

// fakeData.save();

const main = async function () {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server has started on port : ${port}`);
    });
};

main();
