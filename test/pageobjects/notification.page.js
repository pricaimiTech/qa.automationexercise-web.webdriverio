const {
    $,
    expect
} = require('@wdio/globals')
const {
    deleteAccount,
    registerAccount
} = require('../elements/notification.elements')

class NotificationPage {

    async verifyTitleAccountCreatedIsVisible() {
        const elem = $(registerAccount.title)
        await expect(elem).toBeDisplayed();
        await expect(elem).toHaveText('ACCOUNT CREATED!')
    }

    async btnAccountCreatedContinue() {
        const elem = await $(registerAccount.btnContinue)
        await expect(elem).toBeDisplayed()
        elem.click()
    }

    async verifyTitleDeleteAccountIsVisible() {
        const elem = $(deleteAccount.title)
        await expect(elem).toBeDisplayed();
        await expect(elem).toHaveText('ACCOUNT DELETED!')
    }

    async btnDeleteAccountContinue() {
        const elem = await $(deleteAccount.btnContinue)
        await expect(elem).toBeDisplayed()
        elem.click()
    }
}

module.exports = new NotificationPage();