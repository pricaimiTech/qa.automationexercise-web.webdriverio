const { viewProduct } = require("../pageobjects/product.page")

const titleInPage = {
    product: 'div[class="features_items"] h2[class="title text-center"]'
}

const searchProduct = {
    searchInput: 'input#search_product',
    searchButton: 'button#submit_search',
    searchResult: 'div[class="features_items"]',
    listProductsName: 'div[class="features_items"] div[class="productinfo text-center"] p'
}

const productsPageHome = {
    listProducts: 'div[class="features_items"] div[class="product-image-wrapper"]',
    addhoverProduct: 'div.product',
    continueShoppingButton: 'button[class="btn btn-success close-modal btn-block"]',
    viewProduct: 'div[class="features_items"] div[class="product-image-wrapper"] a[href*="/product_details/"]'
}

const productPage = {
    inputQuantity: '#quantity',
    buttonAddToCart: 'button[class="btn btn-default cart"]',
}

module.exports = {
    titleInPage,
    searchProduct,
    productsPageHome,
    productPage
}