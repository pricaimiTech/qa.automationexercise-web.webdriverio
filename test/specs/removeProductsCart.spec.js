const Home = require('../pageobjects/home.page')
const { menuLinks } = require('../elements/home.elements')
const Product = require('../pageobjects/product.page')
const CartPage = require('../pageobjects/cart.page')
const homePage = new Home();


describe('[TC-013] Test Case 13: Verify Product quantity in Cart', () => {
    let productId = 1
    let quantity = 1

    before(() => {
        homePage.open()
    })

    it('3. Verify that home page is visible successfully ', async () => {
        await homePage.homeIsVisible()
    });

    it("4. Add products to cart", async () => {
        await Product.viewProduct(productId)
        await Product.increaseProductQuantity(quantity)
        await Product.btnAddProductToCart();
        await Product.clickContinueShopping();
    });

    it("5. Click 'Cart' button", async () => {
        await homePage.chooseMenu(menuLinks.cartLink);
    });

    it("6. Verify that cart page is displayed", async () => {
        await CartPage.verifyCartPageIsVisible();
    });

    it("7. Click 'X' button corresponding to particular product", async () => {
        await CartPage.removeProductsInCart();
    });

    it("8. Verify that product is removed from the cart", async () => {
        await CartPage.verifyEmptyCartMessage();
    });

});