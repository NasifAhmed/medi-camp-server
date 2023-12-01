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
app.use(doctorRoute);
app.use(organizerRoute);
app.use(participantRoute);
app.use(upcomingCampRoute);
app.use(userRoute);
app.use(registeredRoute);
app.use(feedbackRoute);
app.use(jwtRoute);
app.use(paymentRoute);

// // Stripe test
// // This is your test secret API key.
// const stripe = require("stripe")(
//     "sk_test_51OHqShGuqXTOXnr2wgnZHoSTlMkjH6UqQKejVtV1ZuFgyvx3DU6KWMewQTYdRrCIAWLaS7wlOMDdVT1BcfnuhInh00dkisYY4U"
// );
// const express = require("express");
// const app = express();
// app.use(express.static("public"));

// const YOUR_DOMAIN = "http://localhost:3000";

// app.post("/create-checkout-session", async (req, res) => {
//     const session = await stripe.checkout.sessions.create({
//         ui_mode: "embedded",
//         line_items: [
//             {
//                 // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//                 price: "{{PRICE_ID}}",
//                 quantity: 1,
//             },
//         ],
//         mode: "payment",
//         return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
//     });

//     res.send({ clientSecret: session.client_secret });
// });

// app.get("/session-status", async (req, res) => {
//     const session = await stripe.checkout.sessions.retrieve(
//         req.query.session_id
//     );

//     res.send({
//         status: session.status,
//         customer_email: session.customer_details.email,
//     });
// });

// app.listen(4242, () => console.log("Running on port 4242"));

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
