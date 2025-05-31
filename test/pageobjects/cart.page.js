const {
  cartPage
} = require('../elements/cart.elements');

class CartPage {

  async verifyCartPageIsVisible() {
    const elem = $(cartPage.cartTitle)
    await expect(elem).toBeDisplayed();
    await expect(elem).toHaveText('Shopping Cart')
  }

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

  async verifyProductsInCart(expectedQuantity) {
    const items = await $$(cartPage.cartItems);
    expect(items).toBeElementsArrayOfSize(1);

    const quantityText = await items[0].$(cartPage.cartQuantity).getText();
    const actualQuantity = parseInt(quantityText, 10);

    expect(actualQuantity).toBe(expectedQuantity);
  }

  async removeProductsInCart() {
    const items = await $$(cartPage.cartItems);
    expect(items).toBeElementsArrayOfSize(1);

    await items[0].$(cartPage.cartDelete).click();
  }

  async verifyEmptyCartMessage() {
    const emptyCartMessage = await $(emptyCart.emptyCartMessage);
    await expect(emptyCartMessage).toBeDisplayed();
    const text = await emptyCartMessage.getText();
    await expect(text).toContain('Cart is empty!');
  }

}

module.exports = new CartPage();