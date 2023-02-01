const tableBody = document.querySelector('.tableBody');

const displayScores = (arr) => {
  tableBody.innerHTML = '';
  const displayScores = arr.map(
    (item) => `
          <tr class="trIndex">
          <td ><span>${item.user} : ${item.score}</span></td>
        </tr>`,
  );
  tableBody.innerHTML = displayScores.join(' ');
};
export default displayScores;
