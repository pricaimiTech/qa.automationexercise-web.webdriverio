const Home = require('../pageobjects/home.page')
const LoginPage = require('../pageobjects/login.page')
const RegisterPage = require('../pageobjects/register.page')
const homePage = new Home();
const generateNewFakeUser = require('../../src/data/userData')
const NotificationPage = require('../pageobjects/notification.page')

describe('[TC-001] Test Case 1: Register User', () => {
    let userData;

    before(() => {
        homePage.open()
        userData = generateNewFakeUser()
    })

    it('3. Verify that home page is visible successfully ', async () => {
        await homePage.homeIsVisible()
    });

    it("4. Click on 'Signup / Login' button", async () => {
        await homePage.signUp()
    });

    it("5. Verify 'New User Signup!' is visible", async () => {
        await LoginPage.verifyNewUserSignupIsVisible()
    });

    it("6. Enter name and email address", async () => {
        await LoginPage.formRegisterNewUser(userData)
    });

    it("7. Click 'Signup' button", async () => {
        await LoginPage.registerNewUser()
    });

    it("8. Verify that 'ENTER ACCOUNT INFORMATION' is visible", async () => {
        await RegisterPage.verifyTitleAccountInformationIsVisible()
    });

    it("9. Fill details: Title, Name, Email, Password, Date of birth", async () => {
        await RegisterPage.formAccountInformation(userData)
    });

    it("10. Select checkbox 'Sign up for our newsletter!'", async () => {
        await RegisterPage.checkNewsletter()
    });

    it("11. Select checkbox 'Receive special offers from our partners!'", async () => {
        await RegisterPage.checkOffers()
    });

    it("12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", async () => {
        await RegisterPage.formAdressInformation(userData)
    });

    it("13. Click 'Create Account button'", async () => {
        await RegisterPage.createNewAccount()
    });

    it("14. Verify that 'ACCOUNT CREATED!' is visible", async () => {
        await NotificationPage.verifyTitleAccountCreatedIsVisible()
    });

    it("15. Click 'Continue' button", async () => {
        await NotificationPage.btnAccountCreatedContinue()
    });

    it("16. Verify that 'Logged in as username' is visible", async () => {
        await homePage.loggedIsVisible(userData.name)
    });

    it("17. Click 'Delete Account' button", async () => {
        await homePage.deleteAccount()
    });

    it("18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", async () => {
        await NotificationPage.verifyTitleDeleteAccountIsVisible()
        await NotificationPage.btnDeleteAccountContinue()
    });
});