const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

let products = [];
let editingElement = null;

function renderProducts() {
  if (products.length === 0) {
    productList.innerHTML =
      '<li class="empty-message">No products added yet</li>';
    return;
  }

  productList.innerHTML = products
    .map(
      (product, index) => `
    <li class="product-item" data-index="${index}">
      <span class="product-name" contenteditable="false">${product}</span>
      <div class="product-actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    </li>
  `
    )
    .join("");
}

function addProduct() {
  const productName = productInput.value.trim();

  if (productName === "") {
    alert("Please enter a product name");
    return;
  }

  products.push(productName);
  productInput.value = "";
  renderProducts();
}

// Event delegation on parent ul
productList.addEventListener("click", (e) => {
  const productItem = e.target.closest(".product-item");
  if (!productItem) return;

  const index = parseInt(productItem.dataset.index);
  const productNameSpan = productItem.querySelector(".product-name");

  if (e.target.classList.contains("edit-btn")) {
    if (editingElement && editingElement !== productNameSpan) {
      saveEdit(editingElement);
    }

    productNameSpan.contentEditable = "true";
    productNameSpan.classList.add("editing");
    productNameSpan.focus();
    editingElement = productNameSpan;

    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(productNameSpan);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  if (e.target.classList.contains("delete-btn")) {
    products.splice(index, 1);
    renderProducts();
  }
});

function saveEdit(element) {
  if (!element) return;

  const productItem = element.closest(".product-item");
  const index = parseInt(productItem.dataset.index);
  const newValue = element.textContent.trim();

  if (newValue !== "") {
    products[index] = newValue;
  }

  element.contentEditable = "false";
  element.classList.remove("editing");
  editingElement = null;
  renderProducts();
}

// Auto-save when clicking outside
document.addEventListener("click", (e) => {
  if (editingElement && !e.target.closest(".product-item")) {
    saveEdit(editingElement);
  }
});

// Handle Enter key to save edit
productList.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && editingElement) {
    e.preventDefault();
    saveEdit(editingElement);
  }
});

addBtn.addEventListener("click", addProduct);

productInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addProduct();
  }
});

renderProducts();
