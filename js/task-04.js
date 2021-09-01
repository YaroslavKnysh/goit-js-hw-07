let counterValue = 0;
const decrementButton = document.querySelector('[data-action=decrement]');
const incrementButton = document.querySelector('[data-action=increment]');
const value = document.querySelector('#value');
console.log(decrementButton);
console.log(incrementButton);
console.log(value);

decrementButton.addEventListener('click', () => {
  value.textContent = counterValue -= 1 && !counterValue <= 0;
});
incrementButton.addEventListener('click', () => {
  value.textContent = counterValue += 1;
});
