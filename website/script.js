function registerUser() {
    // Perform client-side validation
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        displayMessage('Please fill in all fields.');
        return;
    }

    // You would typically send this data to the server for further processing
    const message = `User registered: ${JSON.stringify({ username, email, password })}`;
    console.log(message);
    displayMessage(message);
}

function loginUser() {
    // Perform client-side validation
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    if (!loginUsername || !loginPassword) {
        displayMessage('Please fill in all fields.');
        return;
    }

    // You would typically send this data to the server for login authentication
    const message = `User logged in: ${JSON.stringify({ loginUsername, loginPassword })}`;
    console.log(message);
    displayMessage(message);
}

function displayMessage(message) {
    const messageDisplay = document.getElementById('message-display');
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    messageDisplay.appendChild(newMessage);
}
