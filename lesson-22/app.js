/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-undef */
const car = {
  brand: 'Audi',
  year: 2019,
  get age() {
    return `Мышина выпущена в ${this.year}`;
  },
  set age(value) {
    this.year = value;
  },
};

// Object.defineProperty(car, 'age', {
//   // configurable: false,
//   // enumerable: false,
//   // writable: false,
//   get: function() {
//     return `Мышина выпущена в ${this.year}`;
//   },
// });

Object.defineProperty(window, 'globalVar', {
  set(value) {
    console.log(value);
    debugger;
  },
});

function foo() {
  globalVar = 10;
}

foo();
