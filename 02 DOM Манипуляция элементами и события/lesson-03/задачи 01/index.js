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

(() => {
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
})();

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
document.querySelector('ul ~ a').id = 'link';

// 3. На li через один (начиная с самого первого) установить класс “item”
document.querySelectorAll('li').forEach((item, i) => {
  if (i % 2 === 0) {
    item.classList.add('item');
  }
});

// 4. На все ссылки в примере установить класс “custom-link”
document.querySelector('a').classList.add('custom-link');

// Код для задач брать со слайда 4.


// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

(() => {
  const ul = document.querySelector('ul');
  const fragment = document.createDocumentFragment();
  const count = 5;
  for (let i = ul.childElementCount; i < ul.childElementCount + count; i++) {
    const li = document.createElement('li');
    li.classList.add('new-item');
    li.textContent = `item ${i + 1}`;
    fragment.append(li);
  }
  ul.append(fragment);
})();

// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).
document.querySelectorAll('ul a').forEach((item) => {
  const strong = document.createElement('strong');
  item.append(strong);
});

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
(() => {
  const img = document.createElement('img');
  img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/200px-Firefox_logo%2C_2019.svg.png';
  img.alt = 'лиса';
  document.body.prepend(img);
})();

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
const mark = document.querySelector('mark');
mark.insertAdjacentText('beforeend', ' green');
mark.classList.add('green');

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
const ul = document.querySelector('ul');
const fragment = document.createDocumentFragment();
const [...list] = document.querySelectorAll('ul li');

list.sort((a, b) => (a.textContent > b.textContent ? -1 : 1));
list.forEach((item) => {
  fragment.append(item);
});
ul.append(fragment);

