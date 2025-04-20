const quizzes = [
  {
    id: 1,
    title: 'HTML Quiz',
    questions: [
      {
        question: 'What does HTML stand for?',
        answers: [
          'HyperText Markup Language',
          'HighText Machine Language',
          'Hyperlink and Text Markup Language',
        ],
        correctAnswer: 0,
      },
      {
        question:
          'Which element is responsible for the content structure of a web page?',
        answers: ['HTML', 'CSS', 'JavaScript'],
        correctAnswer: 0,
      },
      {
        question: 'Which of the following is used to add images in a webpage?',
        answers: ['Image source', 'HTML image', 'Image element'],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: 2,
    title: 'CSS Quiz',
    questions: [
      {
        question: 'Which property is used to change text color?',
        answers: ['color', 'font-color', 'text-color'],
        correctAnswer: 0,
      },
      {
        question: 'Which symbol is used for an ID selector?',
        answers: ['#', '.', '*'],
        correctAnswer: 0,
      },
      {
        question: 'What does CSS stand for?',
        answers: [
          'Cascading Style Sheets',
          'Creative Style Syntax',
          'Colorful Style Sheets',
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: 3,
    title: 'JavaScript Quiz',
    questions: [
      {
        question: 'Which symbol is used for comments in JavaScript?',
        answers: ['//', '##', '--'],
        correctAnswer: 0,
      },
      {
        question: 'What is the result of 3 + "3" in JavaScript?',
        answers: ['33', '6', 'Error'],
        correctAnswer: 0,
      },
      {
        question: 'Which method parses a JSON string into an object?',
        answers: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()'],
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
