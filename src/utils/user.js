function generateNewFakeUser() {
    const timestamp = Date.now(); // Para garantir um email único
    const userName = `TestUser${timestamp}`;
    const userEmail = `testuser${timestamp}@example.com`;

    return {
        userName,
        userEmail
    };
}

module.exports = generateNewFakeUser;