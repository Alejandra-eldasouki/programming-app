const languageSuggestions = [
  {
    language: 'Ruby',
    questions: [
      'Do you enjoy writing elegant code?',
      'Do you want to learn about a vibrant open-source community ',
    ],
    answers: ['yes', 'yes'],
  },
  {
    language: 'c#',
    questions: [
      'Do you want to learn a remarkably scalable and easy to maintain programming language',
      'Are you interested in learning a language that its syntax resembles human language',
    ],
    answers: ['yes', 'yes'],
  },
  {
    language: 'JavaScript',
    questions: [
      'Do you want to learn a object-oriented, functional, and imperative styles of programming',
      'Are you interested in front-end development',
    ],
    answers: ['yes', 'yes'],
  },
];

const form = document.getElementById('surveyForm');
const resultsCnt = document.getElementById('results-container');
const results = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  resultsCnt.style.display = 'none';
  results.textContent = '';
  form.reset();

  const suggestions = calculateSuggestion();
  results.textContent = suggestions;
  resultsCnt.style.display = 'block';
});
