const btnEl = document.querySelectorAll('button[data-action]');
const inputEl = document.querySelector('input');
const boxEl = document.querySelector('#boxes');
function createBoxes(amount) {
  const elements = [];
  let widthEl = 30;
  let heightEl = 30;
  const step = 10;
  for (let i = 0; i < amount; i++) {
    elements.push(document.createElement('div'));
    elements[i].style.width = widthEl + 'px';
    elements[i].style.height = heightEl + 'px';
    elements[i].style.backgroundColor = `#${Math.random()
      .toString(16)
      .substring(2, 8)}`;
    widthEl += step;
    heightEl += step;
  }
  boxEl.append(...elements);
}
function destroyBoxes() {
  boxEl.innerHTML = '';
}
btnEl.forEach(element => {
  if (element.dataset.action === 'render') {
    element.addEventListener('click', () => {
      destroyBoxes();
      createBoxes(inputEl.value);
    });
  } else {
    element.addEventListener('click', destroyBoxes);
  }
});

// const input = document.querySelector(`#controls input[type="number"]`);

// const createBtn = document.querySelector(
//   `#controls button[data-action="render"]`,
// );

// const removeBtn = document.querySelector(
//   `#controls button[data-action="destroy"]`,
// );

// const boxesContainer = document.querySelector(`#boxes`);

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// let width = 30;
// let height = 30;

// const createBoxes = amount => {
//   for (let i = 0; i < amount; i++) {
//     const newDiv = document.createElement(`div`);
//     newDiv.style.width = `${width}px`;
//     newDiv.style.height = `${height}px`;
//     width += 10;
//     height += 10;
//     boxesContainer.append(newDiv);
//     newDiv.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(
//       256,
//     )}, ${getRandomInt(256)})`;
//   }
// };

// const destroyBoxes = () => {
//   boxesContainer.innerHTML = ``;
//   width = 30;
//   height = 30;
// };

// createBtn.addEventListener(`click`, () => {
//   createBoxes(input.value);
// });

// removeBtn.addEventListener(`click`, () => {
//   destroyBoxes();
// });
