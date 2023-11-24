import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/health", (req, res) => {
    res.send("Server is running............");
});

app.all("*", (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    res.status(404);
    next(error);
});

const main = function () {
    // TODO Connect DB
    app.listen(port, () => {
        console.log(`Server has started on port : ${port}`);
    });
};

main();
