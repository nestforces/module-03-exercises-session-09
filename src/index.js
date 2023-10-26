const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env"),
});

// const db = require("./models");
// db.sequelize.sync({alter: true});

const PORT = process.env.PORT || 8080;

const app = new express();

app.use(bodyParser.json());
app.use(
    cors({
        origin: [
            process.env.WHITELISTED_DOMAIN && 
            process.env.WHITELISTED_DOMAIN.split(" "),
        ],
    })
);

const twitterRouter = require("./routes/twitterRouter");
const tweetsRouter = require("./routes/tweetsRouter");


app.use("/twitter", twitterRouter);
app.use("/tweets", tweetsRouter)

app.listen(PORT, (req, res) => {
    console.log(`Server started on port ${PORT}`);
});