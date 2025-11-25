// fetch products from API
async function fetchProducts() {
  try {
    console.log("Fetching products from Fake Store API...\n");
    
    const response = await fetch("https://fakestoreapi.com/products");
    
    if (!response.ok) {
      throw new Error("Failed to load products. Please try again.");
    }
    
    const products = await response.json();
    
    products.forEach(product => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}\n`);
    });
    
    return products;
    
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

// create html product cards in DOM
function createProductCards(products) {
  const container = document.getElementById("product-container");
  
  if (!container) {
    console.log("Product container not found in DOM");
    return;
  }
  
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    
    const title = document.createElement("h3");
    title.textContent = product.title;
    
    const price = document.createElement("p");
    price.className = "price";
    price.textContent = `$${product.price}`;
    
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    
    container.appendChild(card);
  });
}

fetchProducts()
  .then(products => {
    if (typeof document !== "undefined") {
      createProductCards(products);
    }
  })
  .catch(error => {
    console.log("Error occurred while fetching products");
  });
