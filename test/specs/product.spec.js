const Home = require('../pageobjects/home.page')
const { menuLinks } = require('../elements/home.elements')
const Product = require('../pageobjects/product.page')
const homePage = new Home();

describe('[TC-009] Test Case 9: Search Product', () => {

    let productName = 'bue';
    before(() => {
        homePage.open()
    })

    it('3. Verify that home page is visible successfully ', async () => {
        await homePage.homeIsVisible()
    });

    it("4. Click on 'Products' button", async () => {
        await homePage.chooseMenu(menuLinks.productsLink);
    });

    it("5. Verify user is navigated to ALL PRODUCTS page successfully", async () => {
        await Product.titleIsVisible('ALL PRODUCTS');
    });

    it("6. Enter product name in search input and click search button", async () => {
        await Product.searchProduct(productName)
    });

    it("7. Verify 'SEARCHED PRODUCTS' is visible", async () => {
        await Product.titleIsVisible('SEARCHED PRODUCTS');
    });

    it("8. Verify all the products related to search are visible", async () => {
        await Product.searchResultIsVisible(productName);
    });
});