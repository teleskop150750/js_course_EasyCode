'use strict';

// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark

console.log(document.body.children[0]);
console.log(document.querySelector('mark'));
console.log(document.querySelector('mark').parentElement);

const isParent = (parent, child) => {
  let curentParent = child.parentElement;
  let Parent = false;
  while (curentParent) {
    Parent = parent === curentParent;
    if (Parent) {
      curentParent = null;
    } else {
      curentParent = curentParent.parentElement;
    }
  }
  return Parent;
};
// const isParent = (parent, child) => {
//   if (child === null) {
//     return false;
//   }
//   if (parent === child) {
//     return true;
//   }
//   return isParent(parent, child.parentElement);
// };
let res = isParent(document.querySelector('div'), document.querySelector('mark'));
console.log(res);

res = isParent(document.querySelector('ul'), document.querySelector('mark'));
console.log(res);
console.log('--------------------------------------------------------');

// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
const [...links] = document.querySelectorAll('a');
const arr = links.filter((item) => !item.closest('ul'));
console.log(...arr);
console.log('--------------------------------------------------------');

// 3. Найти элемент, который находится перед и после списка ul
const ul = document.querySelector('ul');
console.log(ul.previousElementSibling);
console.log(ul);
console.log(ul.nextElementSibling);
console.log('--------------------------------------------------------');

