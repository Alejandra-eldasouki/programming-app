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

const form = document.getElementById('survey-form');
const resultsCnt = document.getElementById('results-container');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const suggestion = calculateAnswer();

  result.textContent = suggestion;
  resultsCnt.classList.remove('d-none');
  form.reset();
});

window.addEventListener('load', function () {
  addQuestions();
});

function addQuestions() {
  for (const question of languageSuggestions) {
    for (let i = 0; i < question.questions.length; i++) {
      const input = document.createElement('input');
      const label = document.createElement('label');
      input.name = `question${i + 1}`;
      input.id = `${question.language}${i + 1}`;
      label.textContent = question.questions[i];
      label.htmlFor = `${question.language}${i + 1}`;
      form.appendChild(label);
      form.appendChild(input);
    }
  }
}

function calculateAnswer() {
  let matches = 0;
  for (const suggestion of languageSuggestions) {
    for (let i = 0; i < suggestion.questions.length; i++) {
      const answer = document.getElementById(
        `${suggestion.language}${i + 1}`
      ).value;
      if (answer === suggestion.answers[i]) {
        matches++;
      }
    }
    if (matches === suggestion.questions.length) {
      return suggestion.language;
    }
  }
}
