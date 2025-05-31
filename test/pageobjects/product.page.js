const {
    titleInPage,
    searchProduct,
    productsPage
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
        const productHover = await $(`${productsPage.listProducts}:nth-child(${productIndex})`);
        const addToCartButton = await $(`${searchProduct.searchResult} div[class="overlay-content"]  a[data-product-id="${productIndex}"`);

        await productHover.moveTo();
        await expect(addToCartButton).toBeDisplayed();
        await addToCartButton.click();
    }

    async clickContinueShopping() {
        const continueButton = await $(productsPage.continueShoppingButton);
        await expect(continueButton).toBeDisplayed();
        await continueButton.click();
    }
}

module.exports = new Product();