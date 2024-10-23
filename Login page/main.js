document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const viewPasswordIcon = document.getElementById('viewPasswordIcon');
    const forgotPasswordLink = document.querySelector('.forgot-password-link');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Username validation
        if (!username) {
            document.getElementById('usernameError').textContent = 'Please enter your username.';
            return;
        }

        // Password validation
        if (!password) {
            document.getElementById('passwordError').textContent = 'Please enter your password.';
            return;
        }

        // Perform form submission logic (e.g., send login data to server)
        // ...

        // For example, redirect to another page after successful login
        window.location.href = 'products-list.html';
    });

    viewPasswordIcon.addEventListener('click', function() {
        const passwordType = passwordInput.getAttribute('type');
        if (passwordType === 'password') {
            passwordInput.setAttribute('type', 'text');
            viewPasswordIcon.classList.remove('fa-eye');
            viewPasswordIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.setAttribute('type', 'password');
            viewPasswordIcon.classList.remove('fa-eye-slash');
            viewPasswordIcon.classList.add('fa-eye');
        }
    });

    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'forgot-password.html';
    });
});