const {
    $,
    expect
} = require('@wdio/globals')
const {
    signUpElements,
    formLogin
} = require('../elements/login.elements')
const Home = require('../pageobjects/home.page')

class LoginPage extends Home {

    async verifyNewUserSignupIsVisible() {
        const elem = $(signUpElements.signupText)
        await expect(elem).toBeDisplayed();
        await expect(elem).toHaveText('New User Signup!')
    }

    async formRegisterNewUser(userLoginData) {
        await $(formLogin.nameInput).setValue(userLoginData.name);
        await $(formLogin.emailInput).setValue(userLoginData.email);
    }

    async registerNewUser() {
        const signUpButton = $(formLogin.signUpButton);
        await expect(signUpButton).toBeDisplayed();
        await expect(signUpButton).toBeClickable();
        await signUpButton.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();