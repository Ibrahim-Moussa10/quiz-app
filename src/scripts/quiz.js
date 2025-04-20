const params = new URLSearchParams(window.location.search);
const quizId = parseInt(params.get('id'));
const quizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');
const quiz = quizzes.find((q) => q.id === quizId);
const loggedInEmail = localStorage.getItem('loggedInUser');

if (!loggedInEmail) {
  window.location.href = 'index.html';
}

if (!quiz) {
  document.getElementById('quizTitle').textContent = 'Quiz not found!';
} else {
  document.getElementById('quizTitle').textContent = quiz.title;
  displayQuiz(quiz);
}

function displayQuiz(quiz) {
  const container = document.getElementById('quizContainer');
  quiz.questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.classList.add('question-block');
    const questionEl = document.createElement('p');
    questionEl.textContent = `${index + 1}. ${q.question}`;
    div.appendChild(questionEl);
    q.answers.forEach((answer, i) => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="radio" name="q${index}" value="${i}"> ${answer}`;
      div.appendChild(label);
    });
    container.appendChild(div);
  });
}

function submitQuiz() {
  const resultDiv = document.getElementById('result');
  let score = 0;
  quiz.questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.correctAnswer) {
      score++;
    }
  });
  resultDiv.innerHTML = `<h3>You scored ${score} out of ${quiz.questions.length}</h3>`;
  saveUserScore(loggedInEmail, quiz.id, score);
}

function saveUserScore(email, quizId, score) {
  let userScores = JSON.parse(localStorage.getItem('userScores') || '{}');
  if (!userScores[email]) {
    userScores[email] = {};
  }
  userScores[email][quizId] = score;
  localStorage.setItem('userScores', JSON.stringify(userScores));
}
