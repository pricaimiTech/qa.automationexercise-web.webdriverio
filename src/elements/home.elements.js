const homeElements = {
    pageLogo: 'img[alt="Website for automation practice"]'
}

const menuElements = {
    menu: 'ul[class="nav navbar-nav"] li a',
    signupButton: 'a[href="/login"]', 
    logout: 'a[href="/logout"]',
    deleteAccount: 'a[href="/delete_account"]'
}

const userLogged = {
    isLogged: 'ul[class="nav navbar-nav"] a'
}

const menuTitle = {
    homeTitle: 'Home',
    productsTitle: 'Products',
    cartTitle: 'Cart',
    signupTitle: 'Signup / Login',
    testCasesTitle: 'Test Cases',
    apiTestingTitle: 'API Testing',
    videoTutorialsTitle: 'Video Tutorials',
    contactUsTitle: 'Contact Us',
}

const menuLinks = {
    homeLink: '/',
    productsLink: '/products',
    cartLink: '/view_cart',
    signupLink: '/login',
    testCasesLink: '/test_cases',
    apiTestingLink: '/api_list',
    videoTutorialsLink: '/https://www.youtube.com/c/AutomationExercise?themeRefresh=1',
    contactUsLink: '/contact_us',
}



module.exports = {
    homeElements,
    menuElements,
    userLogged,
    menuTitle,
    menuLinks
}