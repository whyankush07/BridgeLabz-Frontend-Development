class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function () {
  console.log("=== TICKET ===");
  console.log(`Movie: ${this.movieName}`);
  console.log(`Seat: ${this.seatNo}`);
  console.log(`Price: Rs.${this.price}`);

  if (this.convenienceFee !== undefined) {
    console.log(`Convenience Fee: Rs.${this.convenienceFee}`);
    console.log(`Total Amount: Rs.${this.getTotalAmount()}`);
  }

  console.log("============================\n");
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const regularTicket = new MovieTicket("Inception", "A12", 250);
const onlineTicket1 = new OnlineTicket("Interstellar", "B15", 300, 50);
const onlineTicket2 = new OnlineTicket("The Dark Knight", "C8", 280, 45);

console.log("=== Regular Ticket ===");
regularTicket.printTicket();

console.log("=== Online Ticket 1 ===");
onlineTicket1.printTicket();

console.log("=== Online Ticket 2 ===");
onlineTicket2.printTicket();

console.log("=== Prototype Chain Demo ===");
console.log(
  "OnlineTicket has printTicket method:",
  onlineTicket1.hasOwnProperty("printTicket")
);
console.log(
  "Inherited from prototype:",
  typeof onlineTicket1.printTicket === "function"
);
console.log("Prototype chain working correctly!\n");
