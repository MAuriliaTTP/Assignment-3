class ShoppingCart {
  constructor() {
    this.items = {};
  }

  addToCart(item, quantity, price) {
    const itemId = item;
    if (this.items[itemId]) {
      this.items[itemId].quantity += quantity;
    } else {
      this.items[itemId] = { quantity, price };
    }
  }

  removeFromCart(item, quantity) {
    const itemId = item;
    if (this.items[itemId]) {
      this.items[itemId].quantity -= quantity;
      if (this.items[itemId].quantity <= 0) {
        delete this.items[itemId];
      }
    }
  }

  calculateTotal() {
    let total = 0;
    for (const itemId in this.items) {
      const { quantity, price } = this.items[itemId];
      total += price * quantity;
    }
    return total;
  }
}

module.exports = ShoppingCart;