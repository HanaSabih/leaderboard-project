import './style.css';
import Score from './modules/scores';
import displayScores from './modules/displayScores';

const form = document.querySelector('#form');
const scoreInput = document.querySelector('#scoreInput');
const nameInput = document.querySelector('#nameInput');
const warningLabel = document.querySelector('.warningLabel');

// array
const arrScores = [];

const clearInputs = () => {
  scoreInput.value = '';
  nameInput.value = '';
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let idScore = arrScores.length;
  if (nameInput.value === '' || scoreInput.value === '') {
    warningLabel.style.display = 'block';
  } else if (nameInput.value !== '' || scoreInput.value !== '') {
    warningLabel.style.display = 'none';

    const score = new Score(idScore, nameInput.value, scoreInput.value);
    idScore += 1;

    arrScores.push(score);
    displayScores(arrScores);
    clearInputs();
  }
});
