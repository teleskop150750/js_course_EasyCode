'use strict';

const form = document.querySelector('.form');
const button = document.querySelector('.button');
const container = document.querySelector('.container');

const cardTemplate = (post) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const title = document.createElement('h3');
  title.classList.add('card-title');
  title.textContent = post.title;
  const article = document.createElement('p');
  article.textContent = post.body;
  article.classList.add('card-text');
  cardBody.append(title);
  cardBody.append(article);
  card.append(cardBody);
  return card;
};

const renderPosts = (response) => {
    const fragment = document.createDocumentFragment();
    response.forEach((post) => {
      const card = cardTemplate(post);
      fragment.append(card);
    });
    container.append(fragment);
};

const getPosts = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    renderPosts(response);
  });

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send();
};

const createPosts = (body, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send(JSON.stringify(body));
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formCurrent = e.target;
  let formData = new FormData(formCurrent);
  formData.set('userId', 1);
  formData = {
    title: '34',
    body: '34',
    userId: 1,
  };
  createPosts(formData, (response) => {
    const card = cardTemplate(response);
    container.insertAdjacentElement('afterbegin', card);
  });
});
button.addEventListener('click', getPosts);
