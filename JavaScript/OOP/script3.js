class Driver {
    constructor(name, car, licenseNumber, isAvailable = true) {
        this.name = name;
        this.car = car;
        this.licenseNumber = licenseNumber;
        this.isAvailable = isAvailable;
    }
}

class Ride {
    constructor(userName, pickupLocation, destination, driver, status) {
        this.userName = userName;
        this.pickupLocation = pickupLocation;
        this.destination = destination;
        this.driver = driver;
        this.status = status;
    }

    startRide() {
        this.status = "Started";
    }

    endRide() {
        this.status = "Completed";
    }
}

class RideService {
    constructor(drivers, rides) {
        this.drivers = [];
        this.rides = [];
    }

    addDriver(driver) {
        this.drivers.push(driver);
    }

    bookRide(userName, pickup, destination) {
        for(let driver of this.drivers) {
            if (driver.isAvailable) {
                this.rides.push(driver);
                return;
            }
        }
    }

    listAvailableDrivers() {
        console.log("🚗 List of Available Driver:");
        
        this.drivers.forEach(function(driver) {
            if (driver.isAvailable) {
                console.log("============================");
                console.log(`Driver Name: ${driver.name}`);
                console.log(`Car: ${driver.car}`);
                console.log(`License Number: ${driver.licenseNumber}`);
                console.log("============================");
            }
        });
    }

    showRideHistory() {
        
    }
}





// 🚫 No available driver at the moment.
// ✅ Ride booked for ${userName} with driver ${driver.name}



const driver1 = new Driver("Ramesh", "Tesla", 3480436, true);
const rideServiceCreator = new RideService();
rideServiceCreator.addDriver(driver1);
rideServiceCreator.listAvailableDrivers();

// const ride = new Ride("Shubhajit Paul", "Cooch Behar", "Siliguri", )