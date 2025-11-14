function login(username, password) {
    const userFound = USERS.find(user => 
        user.username === username && user.password === password
    );

    if (userFound) {
        console.log(`User ${username} logged in successfully.`);
        return true;
    } else {
        console.error("Login failed: Invalid username or password.");
        return false;
    }
}

function signup(username, password) {
    console.warn("Signup is currently disabled or uses basic external storage.");
}