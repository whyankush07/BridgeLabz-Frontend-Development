const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 45000, stock: 5 },
  { id: 2, name: "Mouse", category: "Electronics", price: 500, stock: 50 },
  { id: 3, name: "Keyboard", category: "Electronics", price: 1200, stock: 8 },
  { id: 4, name: "T-Shirt", category: "Clothing", price: 800, stock: 3 },
  { id: 5, name: "Jeans", category: "Clothing", price: 2000, stock: 15 }
];

function getLowStockProducts() {
  const lowStockThreshold = 10;
  return products.filter(product => product.stock < lowStockThreshold);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((total, product) => {
    return total + (product.price * product.stock);
  }, 0);
}

function groupByCategory() {
  return products.reduce((grouped, product) => {
    const category = product.category;
    
    if (!grouped[category]) {
      grouped[category] = [];
    }
    
    grouped[category].push(product);
    return grouped;
  }, {});
}

console.log("=== Low Stock Products ===");
const lowStock = getLowStockProducts();
lowStock.forEach(p => {
  console.log(`${p.name} - Stock: ${p.stock}`);
});

console.log("\n=== Products Sorted by Price ===");
const sorted = sortProductsByPrice();
sorted.forEach(p => {
  console.log(`${p.name} - Rs.${p.price}`);
});

console.log("\n=== Total Inventory Value ===");
const totalValue = calculateTotalInventoryValue();
console.log(`Rs.${totalValue}`);

console.log("\n=== Products Grouped by Category ===");
const grouped = groupByCategory();
for (const category in grouped) {
  console.log(`\n${category}:`);
  grouped[category].forEach(p => {
    console.log(`  - ${p.name} (${p.price})`);
  });
}
