function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  const discount = (this.price * percent) / 100;
  return this.price - discount;
};

Product.prototype.displayPrice = function (discountPercent) {
  const originalPrice = this.price;
  const discountedPrice = this.applyDiscount(discountPercent);

  console.log(`Product: ${this.name}`);
  console.log(`Original Price: Rs.${originalPrice}`);
  console.log(`Discount: ${discountPercent}%`);
  console.log(`Final Price: Rs.${discountedPrice.toFixed(2)}\n`);
};

const laptop = new Product("Dell Laptop", 45000);
const phone = new Product("iPhone 15", 79000);
const headphones = new Product("Sony Headphones", 8000);

laptop.displayPrice(15);
phone.displayPrice(10);
headphones.displayPrice(25);

console.log("Abstraction helps by:");
console.log("- Hiding discount calculation complexity");
console.log("- Reusing the same method for all products");
console.log("- Making code maintainable and clean");
