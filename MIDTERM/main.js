// Page navigation
function showLanding() {
    document.getElementById('landing-page').classList.remove('hidden');
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('register-page').classList.add('hidden');
    document.getElementById('dashboard-page').classList.add('hidden');
}

function showLogin() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('login-page').classList.remove('hidden');
    document.getElementById('register-page').classList.add('hidden');
    document.getElementById('dashboard-page').classList.add('hidden');
}

function showRegister() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('register-page').classList.remove('hidden');
    document.getElementById('dashboard-page').classList.add('hidden');
}

function showDashboard(email) {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('register-page').classList.add('hidden');
    document.getElementById('dashboard-page').classList.remove('hidden');
    document.getElementById('user-email').textContent = email;
    document.getElementById('dashboard-email').textContent = email;
}

// Auth functionality
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorElement = document.getElementById('login-error');

    if (password.length < 6) {
        errorElement.textContent = 'Invalid credentials';
        errorElement.style.display = 'block';
        return;
    }

    // In a real app, you would make an API call here
    localStorage.setItem('user', email);
    showDashboard(email);
}

function handleRegister(event) {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const errorElement = document.getElementById('register-error');

    if (password.length < 6) {
        errorElement.textContent = 'Password must be at least 6 characters';
        errorElement.style.display = 'block';
        return;
    }

    // In a real app, you would make an API call here
    localStorage.setItem('user', email);
    showDashboard(email);
}

function handleLogout() {
    localStorage.removeItem('user');
    showLanding();
}

// Check if user is logged in on page load
window.addEventListener('load', () => {
    const user = localStorage.getItem('user');
    if (user) {
        showDashboard(user);
    }
});