const inputEl = document.querySelector('#validation-input');
inputEl.classList.add('valid');
inputEl.classList.add('invalid');
console.log(inputEl);
const valueLength = inputEl.getAttribute('data-length');
console.log(valueLength);

inputEl.addEventListener('blur', () => {
  if (inputEl.value.length == valueLength) {
    inputEl.className = 'valid';
    console.log(inputEl);
  } else {
    inputEl.className = 'invalid';
    console.log(inputEl);
  }
});

// Либо через - const valueLength = Number(inputEl.getAttribute('data-length'));
// if (inputEl.value.length === valueLength)
