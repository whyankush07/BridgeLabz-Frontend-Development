function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function() {
  console.log(`Car: ${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log("Car 1 details:");
car1.getDetails();

console.log("\nCar 2 details:");
car2.getDetails();

console.log("\nMethod sharing via prototype:");
console.log("car1.getDetails === car2.getDetails:", car1.getDetails === car2.getDetails);
console.log("Both objects share the same method from the prototype.");
