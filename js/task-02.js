const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elements = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  return liEl;
});

console.log(elements);

const ulEl = document.querySelector('#ingredients');
ulEl.append(...elements);
console.log(ulEl);
