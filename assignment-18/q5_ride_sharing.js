class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Rating: ${this.rating}`);
  }
}

class Driver extends User {
  constructor(name, rating, vehicleType, vehicleNumber) {
    super(name, rating);
    this.vehicleType = vehicleType;
    this.vehicleNumber = vehicleNumber;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Vehicle: ${this.vehicleType} (${this.vehicleNumber})`);
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null) {
      throw new Error("Distance not provided");
    }

    if (this.distance < 0) {
      throw new Error("Distance cannot be negative");
    }

    if (this.distance === 0) {
      throw new Error("Distance must be greater than zero");
    }

    const baseFare = 50;
    const perKmRate = 12;
    const fare = baseFare + (this.distance * perKmRate);
    
    return fare;
  }

  bookTrip() {
    console.log(`\nTrip from ${this.fromLocation} to ${this.toLocation}`);
    console.log(`Distance: ${this.distance} km`);
    
    try {
      const fare = this.calculateFare();
      console.log(`Fare: Rs.${fare}`);
      console.log("Trip booked successfully!\n");
    } catch (error) {
      console.log(`Error: ${error.message}`);
      console.log("Trip booking failed!\n");
    }
  }
}

const driver1 = new Driver("Suresh Kumar", 4.5, "Sedan", "DL-01-AB-1234");
const passenger1 = new User("Neha Sharma", 4.8);

console.log("=== Driver Info ===");
driver1.displayInfo();

console.log("\n=== Passenger Info ===");
passenger1.displayInfo();

console.log("\n=== Trip Scenarios ===");

const trip1 = new Trip("Connaught Place", "Airport", 15);
trip1.bookTrip();

const trip2 = new Trip("Nehru Place", "Gurgaon", -5);
trip2.bookTrip();

const trip3 = new Trip("Dwarka", "Noida", null);
trip3.bookTrip();

const trip4 = new Trip("Karol Bagh", "Lajpat Nagar", 8);
trip4.bookTrip();
