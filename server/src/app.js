const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets.router");

const app = express();

app.use(cors({
    orign: "http:127.0.0.1:3000"
}));
app.use(express.json());
app.use(planetsRouter);

module.exports = app;