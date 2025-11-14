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
    if (password.length < 8) {
        console.error("Signup failed: Password must be at least 8 characters long.");
        return false;
    }
    
    const userExists = USERS.some(user => user.username === username);
    if (userExists) {
        console.error(`Signup failed: Username '${username}' is already taken.`);
        return false;
    }

    USERS.push({ username: username, password: password });
    console.log(`User ${username} signed up successfully.`);
    console.log("Current Users:", USERS);

    return true;
}