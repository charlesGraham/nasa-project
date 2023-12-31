require('dotenv').config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const planetsRouter = require("./routes/planets.router");
const launchesRouter = require("./routes/launches.router");

const app = express();

app.use(cors({
    orign: "http:127.0.0.1:3000"
}));

app.use(morgan("combined"));
app.use(express.json());
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);

module.exports = app;