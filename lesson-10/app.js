/* eslint-disable prefer-template */
/* eslint-disable eqeqeq */
/* eslint-disable no-self-compare */
// >, <, >=, <=, ==, ===, !=, !==

let value;

value = 1 > 2;
value = 2 <= 2;
value = 1 == 1;
value = 1 == '1';
value = 1 === '1';
value = 1 != '1';
value = 1 !== '1';
value = 'a' > 'ab';
value = 'A'.charCodeAt();

// console.log(value);

// if (условие) {
//   // actions
// } else {
//   // else actions
// }

value = 10;

// if (value !== 10) {
//   console.log('value: 10');
// } else {
//   console.log('else');
// }

// value = 100;

// if (value) {
//   console.log('some actions', value);
// } else {
//   console.log('else', value);
// }

// || && !
// value = null;

// if (!value) {
//   console.log(value);
// }

// value = [1];

// if (value.length) {
//   console.log(value);
// } else {
//   console.log('array is empty');
// }

// value = null

// if (Array.isArray(value)) {
//   console.log(value);
// } else {
//   console.log('array is empty');
// }


// let user = {
//   name: null
// };

// if (user.hasOwnProperty('name')) {
//   console.log(user.name);
// } else {
//   console.log('else');
// }

// || &&
// value = 0 || 0 || null;

// let age = 10;

// if (age < 16 || age > 65) {
//   console.log('some actions');
// } else {
//   console.log('else');
// }

// let serverNickname = '';
// let nickname = serverNickname || 'default nickname';

// console.log(nickname);

// value = 1 && 2 && 3;

// productPrice = 10;

// if (productPrice >= 5 && productPrice <= 20) {
//   console.log('беру');
// } else {
//   console.log('else');
// }

// console.log(value);

value = 10;

if (value < 10) {
  console.log('value < 10', value);
} else if (value >= 10) {
  console.log('value >= 10', value);
} else {
  console.log('else');
}

// Заданеи

// Чему равно а, почему?

let a = 0 || 'string';
console.log(a);
a = 1 && 'string';
console.log(a);
a = null || 25;
console.log(a);
a = null && 25;
console.log(a);
a = null || 0 || 35;
console.log(a);
a = null && 0 && 35;
console.log(a);

// Что отобразится в консоли. Почему?

console.log(12 + 14 + '12');
console.log(3 + 2 - '1');
console.log('3' + 2 - 1);
console.log(true + 2);
console.log(+'10' + 1);
console.log(undefined + 2);
console.log(null + 5);
console.log(true + undefined);

// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let variable = 'hidden';
if (variable === 'hidden') {
  variable = 'visible';
} else {
  variable = 'hidden';
}

// 2. Используя if, записать условие:
//   a.если переменная равна нулю, присвоить ей 1;
//   b.если меньше нуля - строку “less then zero”;
//   c.если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

variable = 0;
if (variable < 0) {
  variable *= 10;
} else if (variable > 0) {
  variable = 'less then zero';
} else {
  variable = 1;
}

// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
const car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false,
};

if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}

// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

const item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%',
};

const price = parseInt(item.price, 10);
const discount = parseInt(item.discount, 10);

if (!!price && !!discount) {
  item.priceWithDiscount = price * (1 - discount / 100);
  console.log(item.priceWithDiscount);
} else {
  console.log(item.price);
}
