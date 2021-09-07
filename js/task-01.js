// const ulEl = document.querySelectorAll('.item');
// console.log(ulEl);
// console.log(`В списке ${ulEl.length} категории `);

// Первый вариант
// for (let i = 0; i < ulEl.length; i++) {
//   let item = ulEl[i];
//   console.log('Категория:', item.children[0].textContent);
//   console.log('Количесвто элементов:', item.children[1].children.length);
// }

// Второй вариант
// for (let i = 0; i < ulEl.length; i++) {
//   let item = ulEl[i];
//   console.log('Категория:', item.firstElementChild.textContent);
//   console.log('Количесвто элементов:', item.lastElementChild.children.length);
// }

// ++++++Вариант 3, от ментора++++
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

const items = document.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);

items.forEach(item => {
  const h2 = item.querySelector('h2');
  const li = item.querySelectorAll('li');
  console.log(
    `Категория: ${h2.textContent} (количество элементов: ${li.length})`,
  );
});
