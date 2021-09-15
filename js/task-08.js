const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('button[data-action="render"]');
const removeBtnEl = document.querySelector('button[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');
console.log(inputEl);
console.log(createBtnEl);
console.log(removeBtnEl);
console.log(boxesEl);
let width = 30;
let height = 30;
const step = 10;

createBtnEl.addEventListener('click', () => {
  createDiv(inputEl.value);
});

removeBtnEl.addEventListener('click', () => {
  removeDiv();
});

function randomCount(max) {
  return Math.floor(Math.random() * max);
}

function createDiv(el) {
  for (let i = 0; i < el; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
    width += step;
    height += step;
    boxesEl.insertAdjacentElement('beforeend', newDiv);
    newDiv.style.backgroundColor = `rgb(${randomCount(256)}, ${randomCount(
      256,
    )}, ${randomCount(256)})`;
  }
}
function removeDiv() {
  inputEl.value = '';
  boxesEl.innerHTML = '';
  width = 30;
  height = 30;
}
