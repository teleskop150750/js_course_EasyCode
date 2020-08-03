'use strict';

// 1. Найти параграф и получить его текстовое содержимое (только текст!)
const paragraph = document.querySelector('p');
console.log(paragraph.textContent);
console.log('------------------------------------------------------');

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
const getInfo = (node) => {
  console.dir(node);
  console.log(node.nodeType);
  console.log(node.childElementCount);
};
getInfo(paragraph);
console.log('------------------------------------------------------');

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

const ul = document.querySelector('ul');

const getTextFromUl = (node) => {
  const array = [];
  const links = node.querySelectorAll('a');
  console.log(links);
  links.forEach((item) => array.push(item.textContent));
  return array;
};
console.log(getTextFromUl(ul));
console.log('------------------------------------------------------');

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

const p = document.querySelector('p').childNodes;
p.forEach((item) => {
  if (item.nodeType === 3) {
    item.textContent = '-text-';
  }
});


// 1. Найти в коде список ul и добавить класс “list”
document.querySelectorAll('ul').forEach((item) => item.classList.add('lisr'));

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
const e = document.querySelector('ul').nextElementSibling;
console.log(e);

// 3. На li через один (начиная с самого первого) установить класс “item”
// 4. На все ссылки в примере установить класс “custom-link”

// Код для задач брать со слайда 4.
