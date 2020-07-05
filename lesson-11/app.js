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
