/* eslint-disable prefer-rest-params */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const plus = (x = 0, y = 0) => x + y;
const plusRes = plus(1, 2);

const withoutArgs = () => console.log('Hello world');
const singleArg = (x) => x * 2;
const moreActions = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b;
};
const returnObj = (str = '') => ({
  value: str,
  length: str.length,
});

function plusFoo(x, y) {
  console.log(arguments);
  return x + y;
}

// plusFoo(1, 2, 3, 'hello');

const obj = {
  firstName: 'Denis',
  age: 30,
  getFirstName() {
    console.log(this);
  },
  getAgeArrow: null,
  getAge() {
    // this.getAgeArrow = () => console.log(this);
    setTimeout(() => console.log(this));
  },
};

obj.getAge();
// obj.getAgeArrow();


// Задачи
// 1  Переделать функция с использованием функции-стрелки (в методе reduce тоже использовать arrow functiion)
// function sum() {
//   const params = Array.prototype.slice.call(arguments);

//   if (!params.length) return 0;

//   return params.reduce(function (prev, next) { return prev + next; });
// }

// sum(1, 2, 3, 4); // 10
// sum(); // 0

(() => {
  function sum(...array) {
    console.log(array);
    if (!array.length) {
      return 0;
    }
      return array.reduce((prew, next) => prew + next, 0);
  }
  let result = sum(1, 2, 3, 4);
  console.log(result);
  result = sum();
  console.log(result);
})();
