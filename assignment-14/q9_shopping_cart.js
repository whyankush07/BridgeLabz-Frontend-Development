class Cart {
  constructor() {
    this.items = [];
    this.discount = 0;
    this.couponApplied = null;
  }

  addItem() {
    const nameInput = document.getElementById("itemName");
    const priceInput = document.getElementById("itemPrice");
    const qtyInput = document.getElementById("itemQuantity");

    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    const quantity = parseInt(qtyInput.value);

    if (!name || !price || !quantity) {
      alert("Please fill all fields");
      return;
    }

    const item = {
      id: Date.now(),
      name: name,
      price: price,
      quantity: quantity,
    };

    this.items.push(item);
    console.log(`Added to cart: ${name} x${quantity} @ Rs.${price}`);

    nameInput.value = "";
    priceInput.value = "";
    qtyInput.value = "1";

    this.render();
  }

  removeItem(id) {
    const item = this.items.find((i) => i.id === id);
    this.items = this.items.filter((i) => i.id !== id);
    console.log(`Removed: ${item.name}`);
    this.render();
  }

  getSubtotal() {
    return this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  getTotal() {
    const subtotal = this.getSubtotal();
    const discountAmount = subtotal * (this.discount / 100);
    return subtotal - discountAmount;
  }

  applyCoupon() {
    const couponInput = document.getElementById("couponCode");
    const coupon = couponInput.value.trim().toUpperCase();
    const errorDiv = document.getElementById("couponError");
    const successDiv = document.getElementById("couponSuccess");

    const couponRegex = /^(SAVE|DISC)(\d{1,2})$/;

    errorDiv.classList.remove("show");
    successDiv.classList.remove("show");

    if (!coupon) {
      errorDiv.textContent = "Please enter a coupon code";
      errorDiv.classList.add("show");
      return;
    }

    const match = couponRegex.exec(coupon);

    if (match) {
      const discountPercent = parseInt(match[2]);

      if (discountPercent > 0 && discountPercent <= 100) {
        this.discount = discountPercent;
        this.couponApplied = coupon;

        successDiv.textContent = `Coupon "${coupon}" applied! ${discountPercent}% discount`;
        successDiv.classList.add("show");

        console.log(`Coupon applied: ${coupon} (${discountPercent}% off)`);

        couponInput.value = "";
        this.render();
      } else {
        errorDiv.textContent = "Discount must be between 1-100%";
        errorDiv.classList.add("show");
      }
    } else {
      errorDiv.classList.add("show");
      console.log(`Invalid coupon: ${coupon}`);
    }
  }

  render() {
    const cartItemsDiv = document.getElementById("cartItems");
    const totalSectionDiv = document.getElementById("totalSection");

    if (this.items.length === 0) {
      cartItemsDiv.innerHTML =
        '<div class="empty-cart">Your cart is empty</div>';
    } else {
      cartItemsDiv.innerHTML = this.items
        .map(
          (item) => `
        <div class="cart-item">
          <div class="item-info">
            <div class="item-name">${item.name}</div>
            <div class="item-details">
              Rs.${item.price.toFixed(2)} × ${item.quantity}
            </div>
          </div>
          <div class="item-total">Rs.${(item.price * item.quantity).toFixed(
            2
          )}</div>
          <button class="remove-btn" onclick="cart.removeItem(${
            item.id
          })">Remove</button>
        </div>
      `
        )
        .join("");
    }

    const subtotal = this.getSubtotal();
    const discountAmount = subtotal * (this.discount / 100);
    const total = this.getTotal();

    let totalHTML = `
      <div class="total-row">
        <span>Subtotal:</span>
        <span>Rs.${subtotal.toFixed(2)}</span>
      </div>
    `;

    if (this.discount > 0) {
      totalHTML += `
        <div class="total-row discount">
          <span>Discount (${this.discount}%):</span>
          <span>-Rs.${discountAmount.toFixed(2)}</span>
        </div>
      `;
    }

    totalHTML += `
      <div class="total-row final">
        <span>Total:</span>
        <span>Rs.${total.toFixed(2)}</span>
      </div>
    `;

    totalSectionDiv.innerHTML = totalHTML;
  }
}

const cart = new Cart();
cart.render();
