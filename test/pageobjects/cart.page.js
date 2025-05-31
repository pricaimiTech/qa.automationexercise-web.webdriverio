const {
  cartPage
} = require('../elements/cart.elements');

class CartPage {

  async verifyProductsInCart(qtd) {
    const items = await $$(cartPage.cartItems);
    expect(items).toBeElementsArrayOfSize(qtd);
  }

  verifyCartDetails() {
     const items = $$(cartPage.cartItems);

    items.forEach(item => {
      const price = parseFloat(item.$(cartPage.cartPrice).getText().replace('$', ''));
      const quantity = parseInt(item.$(cartPage.cartQuantity).getText());
      const total = parseFloat(item.$(cartPage.cartTotal).getText().replace('$', ''));

      expect(total).toBeCloseTo(price * quantity, 2);
    });
  }
}

module.exports = new CartPage();