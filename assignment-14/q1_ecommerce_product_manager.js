class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percentage) {
    if (percentage > 0 && percentage <= 100) {
      this.price = this.price - (this.price * percentage / 100);
      console.log(`${percentage}% discount applied to ${this.name}`);
    } else {
      console.log('Invalid discount percentage');
    }
  }

  displayDetails() {
    return `Product ID: ${this.id}\nName: ${this.name}\nPrice: Rs.${this.price.toFixed(2)}\nCategory: ${this.category}\n`;
  }
}

const products = [
  new Product(1, 'Laptop', 55000, 'Electronics'),
  new Product(2, 'Smartphone', 25000, 'Electronics'),
  new Product(3, 'Headphones', 800, 'Accessories'),
  new Product(4, 'Keyboard', 1500, 'Accessories')
];

console.log('All Products:');
products.forEach(product => console.log(product.displayDetails()));

// Apply discount
console.log('\nApplying Discount:');
products[0].applyDiscount(10);

// Filter products with price > 1000
console.log('\nProducts with price > Rs.1000:');
const expensiveProducts = products.filter(product => product.price > 1000);
expensiveProducts.forEach(product => console.log(product.displayDetails()));

console.log(`Total expensive products: ${expensiveProducts.length}`);
