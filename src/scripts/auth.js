function switchTab(tabId) {
  document
    .querySelectorAll('.tab')
    .forEach((tab) => tab.classList.remove('active'));
  document
    .querySelectorAll('.form-container')
    .forEach((form) => form.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

function handleRegister(event) {
  event.preventDefault();
  const username = document.getElementById('registerUsername').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  const users = JSON.parse(localStorage.getItem('users') || '{}');

  if (users[email]) {
    showMessage('registerMessage', 'Email already registered.', 'error');
    return;
  }

  users[email] = { username, password };
  localStorage.setItem('users', JSON.stringify(users));
  showMessage('registerMessage', 'Registration successful!', 'success');
  event.target.reset();
}

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  const adminEmail = 'admin@quiz.com';
  const adminPassword = 'admin123';

  if (email === adminEmail && password === adminPassword) {
    localStorage.setItem('loggedInUser', email);
    window.location.href = './pages/dashboard.html';
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '{}');

  if (users[email] && users[email].password === password) {
    showMessage(
      'loginMessage',
      `Welcome back, ${users[email].username}!`,
      'success'
    );
    localStorage.setItem('loggedInUser', email);
  } else {
    showMessage('loginMessage', 'Invalid email or password.', 'error');
  }

  event.target.reset();
}

function showMessage(id, text, type) {
  const messageDiv = document.getElementById(id);
  messageDiv.textContent = text;
  messageDiv.className = `message ${type}`;
}
window.addEventListener('DOMContentLoaded', () => {
  const loggedInEmail = localStorage.getItem('loggedInUser');
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (loggedInEmail && users[loggedInEmail]) {
    alert(`You are logged in as ${users[loggedInEmail].username}`);
  }
});
