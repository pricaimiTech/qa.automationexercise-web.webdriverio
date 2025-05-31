cartPage = {
    cartTitle: 'ol[class="breadcrumb"] li[class="active"]',
    cartItems: '#cart_info_table tbody tr',
    cartQuantity: 'td[class="cart_quantity"]',
    cartPrice: 'td[class="cart_price"]',
    cartTotal: 'td[class="cart_total"]',
    cartDelete: 'td[class="cart_delete"] a'
}

emptyCart = {
    emptyCartMessage: 'span[id="empty_cart"] p',
}

module.exports = {
    cartPage,
    emptyCart
};