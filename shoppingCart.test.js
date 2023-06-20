const ShoppingCart = require('./shoppingCart');

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  test('addToCart should add items to the cart', () => {
    cart.addToCart('item1', 2);
    expect(cart.items).toEqual({ item1: 2 });

    cart.addToCart('item2', 3);
    expect(cart.items).toEqual({ item1: 2, item2: 3 });
  });

  test('removeFromCart should remove items from the cart', () => {
    cart.addToCart('item1', 2);
    cart.addToCart('item2', 3);

    cart.removeFromCart('item1', 1);
    expect(cart.items).toEqual({ item1: 1, item2: 3 });

    cart.removeFromCart('item2', 5);
    expect(cart.items).toEqual({ item1: 1 });
  });

  

});