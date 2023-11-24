import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/health", (req, res) => {
    res.send("Server is running............");
});

const main = function () {
    // TODO Connect DB
    app.listen(port, () => {
        console.log(`Server has started on port : ${port}`);
    });
};

main();
