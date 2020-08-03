'use strict';

// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
const head = document.head;
console.log(head);

// 2. body
const body = document.body;
console.log(body);

// 3. все дочерние элементы body и вывести их в
// консоль.
console.log(3);
const childrenBody = Array.prototype.slice.call(document.body.children);
childrenBody.forEach((child) => {
  console.log(child);
});

// 4. первый div и все его дочерние узлы
console.log(4);
const firstDiv = document.querySelector('div');
console.log(firstDiv);
// а) вывести все дочерние узлы в консоль
console.log('А');
const childreFirstDiv = Array.prototype.slice.call(firstDiv.children);
childreFirstDiv.forEach((child) => {
  console.log(child);
});
// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
console.log('Б');
const childreFirstDiv2 = Array.prototype.slice
  .call(firstDiv.children).slice(1, -1);

childreFirstDiv2.forEach((child) => {
  console.log(child);
});
// Для навигации по DOM использовать методы,
// которые возвращают только элементы

