// Dynamic Discount Evaluator

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

let totalPrice = 0;
let discountedTotal = 0;

console.log("Cart Items:");
for (let i = 0; i < cart.length; i++) {
  const product = cart[i];
  let itemPrice = product.price;

  // Apply category discount
  if (product.category === "electronics") {
    itemPrice = itemPrice - itemPrice * 0.1;
    console.log(
      product.item + ": Rs." + product.price + " (10% off) = Rs." + itemPrice
    );
  } else if (product.category === "fashion") {
    itemPrice = itemPrice - itemPrice * 0.05;
    console.log(
      product.item + ": Rs." + product.price + " (5% off) = Rs." + itemPrice
    );
  } else {
    console.log(product.item + ": Rs." + product.price + " (No discount)");
  }

  totalPrice += product.price;
  discountedTotal += itemPrice;
}

// Check for extra discount if total > 50000
let finalTotal = discountedTotal;
if (totalPrice > 50000) {
  finalTotal = discountedTotal - discountedTotal * 0.05;
  console.log("\nExtra 5% discount applied (cart > Rs.50000)");
}

console.log("\nOriginal Total: Rs." + totalPrice);
console.log("After Category Discounts: Rs." + discountedTotal);
console.log("Final Total: Rs." + finalTotal.toFixed(2));
