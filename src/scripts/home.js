const loggedInEmail = localStorage.getItem('loggedInUser');
const users = JSON.parse(localStorage.getItem('users') || '{}');

const isAdmin = loggedInEmail === 'admin@quiz.com';

if (!loggedInEmail) {
  window.location.href = 'index.html';
} else {
  const username = isAdmin
    ? 'Admin'
    : users[loggedInEmail]?.username || loggedInEmail;

  const welcomeElement = document.getElementById('welcomeMessage');
  if (welcomeElement) {
    welcomeElement.textContent = `Welcome, ${username}!`;
  }
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';
}
