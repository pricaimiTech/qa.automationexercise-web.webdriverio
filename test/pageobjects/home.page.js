const {
    browser
} = require('@wdio/globals')
const {
    homeElements,
    menuElements,
    userLogged
} = require('../elements/home.elements')

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class Home {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    open(path) {
        return browser.url(`https://automationexercise.com/${path}`)
    }

    async homeIsVisible() {
        const elem = await $(homeElements.pageLogo)
        await expect(elem).toBeDisplayed()
    }

    async signUp() {
        const elem = await $(menuElements.signupButton)
        await expect(elem).toBeDisplayed()
        elem.click()
    }

    async loggedIsVisible(username) {
        const menus = await $$(menuElements.menu);

        // Verifique se 'menus' contém elementos
        if (menus.length === 0) {
            throw new Error('Nenhum elemento "menu" encontrado.');
        }

        const lastMenu = menus.slice(-1)[0];

        // Verifique se o lastMenu é definido
        if (!lastMenu) {
            throw new Error('Falha ao obter o último menu.');
        }

        // Obtém o texto e verifica se está correto
        const text = await lastMenu.getText();
        await expect(text).toContain(`Logged in as ${username}`);
    }

    async deleteAccount() {
        const elem = await $(menuElements.deleteAccount)
        await expect(elem).toBeDisplayed()
        elem.click()
    }
}

module.exports = Home;