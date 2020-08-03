'use strict';

const html = document.documentElement;
const body = document.body;
const div = body.querySelector('div');
const ul = body.querySelector('ul');
const li = body.querySelector('li');
const pause = 200;
// Capture
html.addEventListener('click', callback, true);
body.addEventListener('click', callback, true);
div.addEventListener('click', callback, true);
html.addEventListener('click', callback, true);
ul.addEventListener('click', callback, true);
li.addEventListener('click', callback, true);
// Bubble
html.addEventListener('click', callback, false);
body.addEventListener('click', callback, false);
div.addEventListener('click', callback, false);
html.addEventListener('click', callback, false);
ul.addEventListener('click', callback, false);
li.addEventListener('click', callback, false);

function callback(event) {
  const ms = (event.timeout = event.timeout + pause || 0);
  const target = event.currentTarget;

  setTimeout(() => {
    target.classList.add('highlight');
    setTimeout(() => {
      target.classList.remove('highlight');
    }, pause);
  }, ms);
}
