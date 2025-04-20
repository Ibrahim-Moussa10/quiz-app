const params = new URLSearchParams(window.location.search);
const quizId = parseInt(params.get('id'));

const allQuizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');
const quiz = allQuizzes.find((q) => q.id === quizId);

if (!quiz) {
  document.getElementById('quizTitle').textContent = 'Quiz not found!';
} else {
  document.getElementById('quizTitle').textContent = quiz.title;
  displayQuiz(quiz);
}

function displayQuiz(quiz) {
  const quizContainer = document.getElementById('quizContainer');
  quiz.questions.forEach((q, qIndex) => {
    const div = document.createElement('div');
    const questionText = document.createElement('p');
    questionText.textContent = q.question;
    div.appendChild(questionText);

    q.answers.forEach((answer, aIndex) => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="radio" name="question${qIndex}" value="${aIndex}"> ${answer}
      `;
      div.appendChild(label);
    });

    quizContainer.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  quiz.questions.forEach((q, index) => {
    const selected = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selected && parseInt(selected.value) === q.correctAnswer) {
      score++;
    }
  });

  const result = document.getElementById('result');
  result.innerHTML = `<p>You got ${score} out of ${quiz.questions.length} correct.</p>`;
}
