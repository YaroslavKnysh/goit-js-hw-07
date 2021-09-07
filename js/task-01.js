const ulEl = document.querySelectorAll('.item');
console.log(ulEl);
console.log(`В списке ${ulEl.length} категории `);

for (let i = 0; i < ulEl.length; i++) {
  let item = ulEl[i];
  console.log('Категория:', item.firstElementChild.textContent);
  console.log('Количесвто элементов:', item.lastElementChild.children.length);
}

// Привет! Таск_1
// Когда ты начнаешь использовать firstElementChild или astElementChild.children. ты что-то делаешь не так. Задумайся.

// const list = document.querySelector('#categories');
// const items = list.querySelectorAll('.item');
// console.log(`В списке ${items.length} категории:`);
// items.forEach(node => {
// const h2 = node.querySelector('h2');
// const nodeItems = node.querySelectorAll('li');
// console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
// });
