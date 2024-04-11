document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    const Username = 'user';
    const Password = 'password';

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === '' || password === '') {
            errorMessage.textContent = 'Please enter both username/email and password.';
        } else if (username !== Username || password !== Password) {
            errorMessage.textContent = 'Invalid username/email or password.';
        } else {
            window.location.href = 'index.html';
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var displayDiv = document.getElementById('displayData');
    displayDiv.innerHTML = '<h3>Entered Data:</h3>' +
        '<p><strong>Name:</strong> ' + name + '</p>' +
        '<p><strong>Email:</strong> ' + email + '</p>' +
        '<p><strong>Message:</strong> ' + message + '</p>';
    document.getElementById('contactForm').reset();
});

