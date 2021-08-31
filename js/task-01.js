const ulEl = document.querySelectorAll('.item');
console.log(ulEl);
console.log(`В списке ${ulEl.length} категории `);

for (let i = 0; i < ulEl.length; i++) {
  let item = ulEl[i];
  console.log('Категория:', item.children[0].textContent);
  console.log('Количесвто элементов:', item.children[1].children.length);
}
