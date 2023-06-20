class ShoppingCart {
  constructor() {
    this.items = {};
  }

  addToCart(item, quantity) {
    if (this.items[item]) {
      this.items[item] += quantity;
    } else {
      this.items[item] = quantity;
    }
  }

  removeFromCart(item, quantity) {
    if (this.items[item]) {
      this.items[item] -= quantity;
      if (this.items[item] <= 0) {
        delete this.items[item];
      }
    }
  }

  calculateTotal() {
    
  }
}

module.exports = ShoppingCart;