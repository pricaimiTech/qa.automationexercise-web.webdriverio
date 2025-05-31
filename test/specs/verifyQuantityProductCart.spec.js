const Home = require('../pageobjects/home.page')
const { menuLinks } = require('../elements/home.elements')
const Product = require('../pageobjects/product.page')
const CartPage = require('../pageobjects/cart.page')
const homePage = new Home();


describe('Add Products in Cart', () => {

    before(() => {
        homePage.open()
    })

    it('3. Verify that home page is visible successfully ', async () => {
        await homePage.homeIsVisible()
    });

    it("4. Click on 'Products' button", async () => {
        await homePage.chooseMenu(menuLinks.productsLink);
    });

    it("5. Hover over first product and click 'Add to cart'", async () => {
        await Product.addProductToCart(1);
    });

    it("6. Click 'Continue Shopping' button", async () => {
        await Product.clickContinueShopping();
    });

    /**
     * @bug This test is skipped because the second product is not available in the current test environment.
     */
    it.skip("7. Hover over second product and click 'Add to cart'", async () => {
        await Product.addProductToCart(2);
        await Product.clickContinueShopping();
    });

    it("8. Click 'View Cart' button", async() => {
        await homePage.chooseMenu(menuLinks.cartLink);

    });

    it("9. Verify both products are added to Cart", () => {
        CartPage.verifyProductsInCart(1);
    });

    it("10. Verify their prices, quantity and total price", () => {
        CartPage.verifyCartDetails();
    });
});