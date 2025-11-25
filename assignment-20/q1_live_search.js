$(document).ready(function () {
  let searchTimeout;
  let allProducts = [];

  loadAllProducts();

  $("#searchInput").on("keyup", function () {
    const query = $(this).val().trim().toLowerCase();
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(function () {
      filterProducts(query);
    }, 300);
  });

  function loadAllProducts() {
    $("#loading").show();

    $.ajax({
      url: "http://localhost:3001/products",
      method: "GET",
      success: function (products) {
        allProducts = products;
        $("#loading").hide();
        displayProducts(products);
      },
      error: function () {
        $("#loading").hide();
        $("#results").html(
          '<div class="no-results">Error loading products. Make sure JSON Server is running on port 3001.</div>'
        );
      },
    });
  }

  function filterProducts(query) {
    if (!query) {
      displayProducts(allProducts);
      return;
    }

    const filtered = allProducts.filter(function (product) {
      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    });

    displayProducts(filtered);
  }

  function displayProducts(products) {
    $("#results").empty();

    if (products.length === 0) {
      $("#results").html('<div class="no-results">No products found</div>');
      return;
    }

    products.forEach(function (product) {
      const card = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <div class="product-name">${product.name}</div>
          <div class="product-price">Rs.${product.price}</div>
        </div>
      `;
      $("#results").append(card);
    });
  }
});
