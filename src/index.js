const express = require("express");
const morgan = require("morgan");
const globalErrorHandler = require("./utils/globalErrorHandler");
const connectDB = require("./utils/connectDB");
const applyMiddleware = require("./middlewares/applyMiddlewares");
const campRoute = require("./routes/campRoute");
const upcomingCampRoute = require("./routes/upcomingCampRoute");
const doctorRoute = require("./routes/doctorRoute");
const organizerRoute = require("./routes/organizerRoute");
const participantRoute = require("./routes/participantRoute");
const userRoute = require("./routes/userRoute");
const jwtRoute = require("./routes/jwtRoute");
const registeredRoute = require("./routes/registeredRoutes");
const feedbackRoute = require("./routes/feedbackRoutes");
const paymentRoute = require("./routes/paymentRoute");
const dataInitializer = require("./controllers/dataInitializer");

const app = express();
const port = process.env.PORT || 5000;

// Default routes and setup
app.get("/health", morgan(`tiny`), (req, res) => {
    res.send("Server is running............");
});

// Apply middleware
applyMiddleware(app);

// Routes
app.use(campRoute);
app.use(upcomingCampRoute);
app.use(doctorRoute);
app.use(organizerRoute);
app.use(participantRoute);
app.use(upcomingCampRoute);
app.use(userRoute);
app.use(registeredRoute);
app.use(feedbackRoute);
app.use(jwtRoute);
app.use(paymentRoute);

// Error handling
app.all("*", morgan(`tiny`), (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
});
app.use(globalErrorHandler);

const main = async function () {
    try {
        await connectDB();
    } catch (error) {
        console.log(`DB connection ERROR : ${error}`);
    }
    try {
        // await dataInitializer();
    } catch (error) {
        console.log(`DB data initialize ERROR : ${error}`);
    }
    app.listen(port, () => {
        console.log(`Server has started on port : ${port}`);
    });
};

main();
