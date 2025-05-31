const {
    titleInPage,
    searchProduct,
    productsPageHome,
    productPage
} = require('../elements/products.elements')


class Product {

    async titleIsVisible(text) {
        const elem = await $(titleInPage.product)
        await expect(elem).toBeDisplayed()

        const elemText = await elem.getText();
        await expect(elemText).toContain(text);
    }

    async searchProduct(product) {
        const search = await $(searchProduct.searchInput)
        const searchButton = await $(searchProduct.searchButton)
        await expect(search).toBeDisplayed()
        await expect(searchButton).toBeDisplayed()

        await search.setValue(product)
        await searchButton.click()
    }

    async searchResultIsVisible(product) {
        const productsName = await $$(searchProduct.listProductsName);

        try {
            await expect(productsName).toBeDisplayed();
        } catch (error) {
            throw new Error(`No products found for the search term: ${product}`);
        }

        await expect(productsName.length).toBeGreaterThan(0);

        for (const elem of productsName) {
            const text = await elem.getText();
            await expect(text).toContain(product);
        }
    }

    async addProductToCart(productIndex) {
        const productHover = await $(`${productsPageHome.listProducts}:nth-child(${productIndex})`);
        const addToCartButton = await $(`${searchProduct.searchResult} div[class="overlay-content"]  a[data-product-id="${productIndex}"`);

        await productHover.moveTo();
        await expect(addToCartButton).toBeDisplayed();
        await addToCartButton.click();
    }

    async clickContinueShopping() {
        const continueButton = await $(productsPageHome.continueShoppingButton);
        await expect(continueButton).toBeDisplayed();
        await continueButton.click();
    }

    async viewProduct(productIndex) {
        const viewProductButton = await $(`${productsPageHome.viewProduct}:nth-child(${productIndex})`);

        await expect(viewProductButton).toBeDisplayed();
        await viewProductButton.click();
    }

    async increaseProductQuantity(quantity) {
        const inputQuantity = await $(productPage.inputQuantity);
        await expect(inputQuantity).toBeDisplayed();
        await inputQuantity.setValue(quantity);

    }

    async btnAddProductToCart() {
        const addToCartButton = await $(productPage.buttonAddToCart);
        await expect(addToCartButton).toBeDisplayed();
        await addToCartButton.click();
    }
}

module.exports = new Product();