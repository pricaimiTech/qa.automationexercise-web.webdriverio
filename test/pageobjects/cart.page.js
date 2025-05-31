const {
  cartPage
} = require('../elements/cart.elements');

class CartPage {

  async verifyProductsInCart(qtd) {
    const items = await $$(cartPage.cartItems);
    expect(items).toBeElementsArrayOfSize(qtd);
  }

  async verifyCartDetails() {
    const items = await $$(cartPage.cartItems);

    items.forEach(item => {
      const price = parseFloat(item.$(cartPage.cartPrice).getText().replace('$', ''));
      const quantity = parseInt(item.$(cartPage.cartQuantity).getText());
      const total = parseFloat(item.$(cartPage.cartTotal).getText().replace('$', ''));

      expect(total).toBeCloseTo(price * quantity, 2);
    });
  }

  async verifyProductsInCart(qtd) {
    const item = await $$(cartPage.cartItems);
    expect(item).toBeElementsArrayOfSize(1);
    const quantity = await item.$(cartPage.cartQuantity).getText();
    expect(quantity).toBe(qtd);
  }

}

module.exports = new CartPage();