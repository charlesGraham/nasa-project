const { getAllLaunches, addNewLaunch, findLaunch, abortLaunch } = require("../models/launches.model");


const httpGetAllLaunches = (req, res) => {
    return res.status(200).json(getAllLaunches());
}

const httpAddNewLaunch = (req, res) => {
    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.destination) {
        return res.status(400).json({
            error: "Missing launch property."
        });
    }

    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: "Invalid launch date"
        });
    }

    addNewLaunch(launch);

    return res.status(201).json(launch);
}

const httpAbortLaunch = (req, res) => {
    const launchId = parseInt(req.params.id);

    if (!findLaunch(launchId)) {
        return res.status(404).json({
            error: "Launch not found"
        });
    }

    const abortedLaunch = abortLaunch(launchId);
    return res.status(200).json(abortedLaunch);

    // deleteLaunch(flightNum); // to delete launch

}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
};