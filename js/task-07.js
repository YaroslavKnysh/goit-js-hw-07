const sizeControlEl = document.querySelector('#font-size-control');
console.log(sizeControlEl);
const textEl = document.querySelector('#text');
console.log(textEl.style);

sizeControlEl.oninput = () => {
  textEl.style.fontSize = sizeControlEl.value + 'px';
};
