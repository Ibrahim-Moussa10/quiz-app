const quizzes = [
  {
    id: 1,
    title: 'JavaScript Basics',
    questions: [
      {
        question: 'What is the output of 2 + 2?',
        answers: ['3', '4', '5', '6'],
        correctAnswer: 1,
      },
      {
        question: 'Which method is used to parse JSON?',
        answers: ['JSON.parse()', 'JSON.stringify()', 'parseJSON()', 'parse()'],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: 2,
    title: 'CSS Basics',
    questions: [
      {
        question: 'Which property changes the text color?',
        answers: ['color', 'background', 'text-color', 'font-color'],
        correctAnswer: 0,
      },
      {
        question: 'What does CSS stand for?',
        answers: [
          'Cascading Style Sheets',
          'Computer Style Sheets',
          'Colorful Style Sheets',
          'Creative Style Sheets',
        ],
        correctAnswer: 0,
      },
    ],
  },
];

function saveQuizzesToLocalStorage() {
  if (!localStorage.getItem('quizzes')) {
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
    console.log('Quizzes saved to localStorage');
  } else {
    console.log('Quizzes already exist in localStorage');
  }
}

saveQuizzesToLocalStorage();
