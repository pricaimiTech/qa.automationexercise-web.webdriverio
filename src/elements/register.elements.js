const formRegister = {
    title: '#id_gender1',
    name: '#name',
    email: '#email',
    password: 'input[data-qa="password"]',
    daysDropdwon: 'select[data-qa="days"]',
    mothDropdown: 'select[data-qa="months"]',
    yearDropdwon: 'select[data-qa="years"]'
}

const checkBox = {
    newsletter: '#newsletter',
    offers: '#optin'
}

const adressRegister = {
    firstNameInput: 'input[data-qa="first_name"]',
    lastNameInput: 'input[data-qa="last_name"]',
    companyInput: 'input[data-qa="company"]',
    address1Input: 'input[data-qa="address"]',
    address2Input: 'input[data-qa="address2"]',
    countryDropdown: 'select[data-qa="country"]',
    stateInput: 'input[data-qa="state"]',
    cityInput: 'input[data-qa="city"]',
    zipcodeInpt: 'input[data-qa="zipcode"]',
    mobileNumberInput: 'input[data-qa="mobile_number"]'
}

const createNewAccount = {
    btnCreateNewAccount: 'button[data-qa="create-account"]'
}

const titleRegister = {
    titleAccountInformation: 'div[class="login-form"] h2:nth-child(1)',
    titleAdressInformation: 'form h2'
}

module.exports = {
    formRegister,
    checkBox,
    adressRegister,
    createNewAccount,
    titleRegister
}