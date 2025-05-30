const {
    $,
    expect
} = require('@wdio/globals')
const {
    formRegister,
    titleRegister,
    adressRegister,
    checkBox,
    createNewAccount
} = require('../elements/register.elements')

class RegisterPage {

    async verifyTitleAccountInformationIsVisible() {
        const elem = $(titleRegister.titleAccountInformation)
        await expect(elem).toBeDisplayed();
        await expect(elem).toHaveText('ENTER ACCOUNT INFORMATION')
    }

    async formAccountInformation(userData) {
        await $(formRegister.title).click();

        const nameFieldAccountInfo = $(formRegister.name)
        await expect(nameFieldAccountInfo).toHaveValue(userData.name)
        const emailFieldAccountInfo = $(formRegister.email)
        await expect(emailFieldAccountInfo).toHaveValue(userData.email)

        await $(formRegister.password).setValue(userData.password);

        await $(formRegister.daysDropdwon).selectByAttribute('value', userData.birth_date);
        await $(formRegister.mothDropdown).selectByVisibleText(userData.birth_month);
        await $(formRegister.yearDropdwon).selectByAttribute('value', userData.birth_year);

    }

    async checkNewsletter() {
        const elem = await $(checkBox.newsletter)
        await expect(elem).toBeDisplayed()
        elem.click()
    }

    async checkOffers() {
        const elem = await $(checkBox.offers)
        await expect(elem).toBeDisplayed()
        elem.click()
    }

    async formAdressInformation(userData) {
        await $(adressRegister.firstNameInput).setValue(userData.firstname);
        await $(adressRegister.lastNameInput).setValue(userData.lastname);
        await $(adressRegister.companyInput).setValue(userData.company);
        await $(adressRegister.address1Input).setValue(userData.address1);
        await $(adressRegister.address2Input).setValue(userData.address2);

        await $(adressRegister.countryDropdown).selectByAttribute('value', userData.country);

        await $(adressRegister.stateInput).setValue(userData.state);
        await $(adressRegister.cityInput).setValue(userData.city);
        await $(adressRegister.zipcodeInpt).setValue(userData.zipcode);
        await $(adressRegister.mobileNumberInput).setValue(userData.mobile_number);
    }

    async createNewAccount() {
        const createAccountButton = $(createNewAccount.btnCreateNewAccount);
        await expect(createAccountButton).toBeDisplayed();
        await expect(createAccountButton).toBeClickable();
        await createAccountButton.click();
    }
}

module.exports = new RegisterPage();