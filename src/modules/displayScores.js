// import { cardsContainer } from "./variables.js";
// import { arrBooks } from "./storage.js";
// tableBody
const tableBody = document.querySelector('.tableBody');

const displayScores = (arr) => {
  const displayScores = arr.map(
    (item) => `
          <tr id="tr${item.id}" class="trIndex">
          <td ><span>${item.name} : ${item.score}</span></td>
        </tr>`,
  );
  tableBody.innerHTML = displayScores.join(' ');
};
export default displayScores;
