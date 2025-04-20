const loggedInEmail = localStorage.getItem('loggedInUser');
const users = JSON.parse(localStorage.getItem('users') || '{}');

if (!loggedInEmail) {
  window.location.href = 'index.html';
}

const isAdmin = loggedInEmail === 'admin@quiz.com';
const username = isAdmin
  ? 'Admin'
  : users[loggedInEmail]?.username || loggedInEmail;

document.getElementById('welcomeMessage').textContent = `Welcome, ${username}!`;

const quizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');
const quizList = document.getElementById('quizList');

if (quizzes.length === 0) {
  quizList.innerHTML = '<li>No quizzes available.</li>';
} else {
  quizzes.forEach((quiz) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `quiz.html?id=${quiz.id}`;
    link.textContent = quiz.title;
    li.appendChild(link);
    quizList.appendChild(li);
  });
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';
}
