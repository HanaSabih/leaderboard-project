import './style.css';
import addScores from './modules/addScores.js';
import getScores from './modules/getScores.js';
import displayScores from './modules/displayScores.js';
import {
  form,
  warningLabel,
  refreshScores,
  scoreInput,
  nameInput,
} from './modules/variables.js';

const apiId = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/giiuGUIYGuhhHIUDIHuhiuh/scores/';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nameInput.value === '' || scoreInput.value === '') {
    warningLabel.style.display = 'block';
  } else if (nameInput.value !== '' || scoreInput.value !== '') {
    warningLabel.style.display = 'none';
    addScores(apiId);
  }
});

refreshScores.addEventListener('click', () => {
  document.querySelector('.tableBody').innerHTML = '';
  getScores(apiId).then((data) => displayScores(data.result));
});

window.onload = getScores(apiId).then((data) => displayScores(data.result));
