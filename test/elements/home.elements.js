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


module.exports = {
    homeElements,
    menuElements,
    userLogged
}