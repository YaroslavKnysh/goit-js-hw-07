const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
console.log(inputEl.attributes);
console.log(spanEl.attributes);

inputEl.oninput = () => {
  if (inputEl.value == '') {
    spanEl.textContent = 'незнакомец';
  }
  spanEl.textContent = inputEl.value;
};

// Либо второй вариант
// inputEl.oninput = () => {
//   if (inputEl.value == '') {
//     spanEl.innerHTML = 'незнакомец';
//   }
//   spanEl.innerHTML = inputEl.value;
// };
