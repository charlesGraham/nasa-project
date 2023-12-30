const express = require("express");

const { httpGetAllLaunches } = require("../controllers/launches.controller");
const launchesRouter = express.Router();


launchesRouter.get("/launches", httpGetAllLaunches);

module.exports = launchesRouter;