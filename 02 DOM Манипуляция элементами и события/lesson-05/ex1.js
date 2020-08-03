'use strict';

const html = document.documentElement;
const body = document.body;
const div = body.querySelector('div');
const ul = body.querySelector('ul');
const li = body.querySelector('li');
const pause = 200;

const callback = (event) => {
  event.timeout = event.timeout + pause || 0;
  const ms = event.timeout;
  const target = event.currentTarget;

  setTimeout(() => {
    target.classList.add('highlight');
    setTimeout(() => {
      target.classList.remove('highlight');
    }, pause);
  }, ms);
};

// Capture
html.addEventListener('click', callback, true);
body.addEventListener('click', callback, true);
div.addEventListener('click', callback, true);
ul.addEventListener('click', callback, true);
li.addEventListener('click', callback, true);
// Bubble
html.addEventListener('click', callback);
body.addEventListener('click', callback);
div.addEventListener('click', callback);
ul.addEventListener('click', callback);
li.addEventListener('click', callback);


