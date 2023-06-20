const ShoppingCart = require('./shoppingCart');

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  test('addToCart should add items to the cart', () => {
    cart.addToCart('item1', 2, 10); // Adding item1 with quantity 2 and price 10
    expect(cart.items).toEqual({ item1: { quantity: 2, price: 10 } });

    cart.addToCart('item2', 3, 5); // Adding item2 with quantity 3 and price 5
    expect(cart.items).toEqual({ item1: { quantity: 2, price: 10 }, item2: { quantity: 3, price: 5 } });
  });

  test('removeFromCart should remove items from the cart', () => {
    cart.addToCart('item1', 2, 10);
    cart.addToCart('item2', 3, 5);

    cart.removeFromCart('item1', 1);
    expect(cart.items).toEqual({ item1: { quantity: 1, price: 10 }, item2: { quantity: 3, price: 5 } });

    cart.removeFromCart('item2', 5);
    expect(cart.items).toEqual({ item1: { quantity: 1, price: 10 } });
  });

  test('calculateTotal should calculate the total cost', () => {
    cart.addToCart('item1', 2, 10);
    cart.addToCart('item2', 3, 5);

    const total = cart.calculateTotal();
    expect(total).toBe(35);
  });
});