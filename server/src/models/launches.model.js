
const launches = new Map();

// to increment flight numbers when adding launches
let latestFlightNumber = 100;

// launch model
const launch = {
    flightNumber: 100,
    mission: "Kepler Exploration X",
    rocket: "Explorer IS1",
    launchDate: new Date("December 27, 2030"),
    destination: "Kepler-442 B",
    customers: ["NASA", "SpaceX"],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

const getAllLaunches = () => {
    return Array.from(launches.values());
}

const addNewLaunch = (launch) => {
    latestFlightNumber++;
    launches
        .set(latestFlightNumber,
            Object.assign(launch, {
                flightNumber: latestFlightNumber,
                upcoming: true,
                customers: ["NASA", "SpaceX"],
                success: true
            }));
}

module.exports = {
    getAllLaunches,
    addNewLaunch
};