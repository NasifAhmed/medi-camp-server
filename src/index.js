const express = require("express");
const morgan = require("morgan");
const globalErrorHandler = require("./utils/globalErrorHandler");
const connectDB = require("./utils/connectDB");
const applyMiddleware = require("./middlewares/applyMiddlewares");
const campRoute = require("./routes/campRoute");
const doctorRoute = require("./routes/doctorRoute");
const organizerRoute = require("./routes/organizerRoute");
const participantRoute = require("./routes/participantRoute");
const upcomingCampRoute = require("./routes/upcomingCampRoute");

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
app.use(doctorRoute);
app.use(organizerRoute);
app.use(participantRoute);
app.use(upcomingCampRoute);

// Error handling
app.all("*", morgan(`tiny`), (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
});
app.use(globalErrorHandler);

const main = async function () {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server has started on port : ${port}`);
    });
};

main();
