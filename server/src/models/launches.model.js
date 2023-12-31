
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

launches.set(launch.flightNumber, launch); // set flightNumber as unique ID for flight

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

const findLaunch = (id) => {
    return launches.has(id);
}

const abortLaunch = (id) => {
    const abortedLaunch = launches.get(id);
    abortedLaunch.upcoming = false;
    abortedLaunch.success = false;
    return abortedLaunch;
    // return launches.delete(deletedLaunch); // to delete launch
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    findLaunch,
    abortLaunch
};