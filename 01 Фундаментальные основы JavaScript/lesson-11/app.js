/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
const a = 1;
let b = 0;

// if (a > 0) {
//   b = a;
// } else {
//   b += 1;
// }

// выражение ? если true : если false;
// выражение ? если true : выражение ? если true : если false;
b = a > 0 ? a : b + 1;

b = a > 0 ? 2 : a < 0 ? 3 : 0;


// console.log(`b: ${b}`);
const color = 'yellow';

switch (color) {
  case 'yellow':
  case 'red':
    console.log('Color is red || yellow');
    break;
  default:
    console.log('Default');
}

// Задание

// Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

const a1 = 'block';

switch (a1) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  default:
    console.log('other');
    break;
}

// Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.
