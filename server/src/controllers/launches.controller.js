const { launches } = require("../models/launches.model");


const getAllLaunches = (req, res) => {
    return res.status(200).json(launches);
}

module.exports = {
    getAllLaunches
};