const menu = [
  { id: 1, name: "Burger", price: 150 },
  { id: 2, name: "Pizza", price: 300 },
  { id: 3, name: "Pasta", price: 200 },
  { id: 4, name: "Fries", price: 80 },
  { id: 5, name: "Coke", price: 50 },
];

function calculateBill(orderItems) {
  const prices = orderItems.map((itemName) => {
    const item = menu.find((m) => m.name === itemName);

    if (!item) {
      throw new Error(
        `Invalid item: "${itemName}" is not available on the menu`
      );
    }

    return item.price;
  });

  const total = prices.reduce((sum, price) => sum + price, 0);

  return total;
}

console.log("=== Order 1 (Valid) ===");
try {
  const order1 = ["Burger", "Coke", "Fries"];
  const total1 = calculateBill(order1);
  console.log(`Items: ${order1.join(", ")}`);
  console.log(`Total Bill: Rs.${total1}\n`);
} catch (error) {
  console.log(`Error: ${error.message}\n`);
}

console.log("=== Order 2 (Valid) ===");
try {
  const order2 = ["Pizza", "Pasta", "Coke"];
  const total2 = calculateBill(order2);
  console.log(`Items: ${order2.join(", ")}`);
  console.log(`Total Bill: Rs.${total2}\n`);
} catch (error) {
  console.log(`Error: ${error.message}\n`);
}

console.log("=== Order 3 (Invalid Item) ===");
try {
  const order3 = ["Burger", "Sandwich", "Coke"];
  const total3 = calculateBill(order3);
  console.log(`Items: ${order3.join(", ")}`);
  console.log(`Total Bill: Rs.${total3}\n`);
} catch (error) {
  console.log(`Error: ${error.message}\n`);
}
