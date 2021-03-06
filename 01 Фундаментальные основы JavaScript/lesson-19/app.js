/* eslint-disable no-return-assign */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
(() => {
  function getFullName(firstName, lastName) {
    return function () {
      return `${firstName} ${lastName}`;
    };
  }

  const getname = getFullName('Denis', 'Mescheryakov');
  // console.log(getname());

  function updateValue(val = 0) {
    let x = val;
    return function (num = 0) {
      return (x += num);
    };
  }

  const updtVal = updateValue(2);
  const updtVal2 = updateValue(4);
  console.log(updtVal(1));
  console.log(updtVal(2));
  // console.log(updtVal2(2));
  // console.log(updtVal2(0));

  function checkCred() {
    const login = 'test';
    const password = 'somePassword';

    return {
      checkLogin(value) {
        return login === value;
      },
      checkPassword(value) {
        return password === value;
      },
    };
  }

  const check = checkCred();
  // console.log(check);
  // console.log(check.checkLogin('test'));

  function closureExample() {
    const arrOfFunc = [];
    let value = '';

    for (let i = 0; i < 10; i++) {
      value += i;
      arrOfFunc.push(() => {
        console.log(value, i);
      });
    }
    return arrOfFunc;
  }

  const res = closureExample();
  res[0]();
  res[5]();
})();

// 1  Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

(() => {
  const minus = (num1 = 0) => ((num2 = 0) => num1 - num2);
  let res = minus(10)(6);
  console.log(res);
  res = minus(5)(6);
  console.log(res);
  res = minus(10)();
  console.log(res);
  res = minus()(6);
  console.log(res);
  res = minus()();
  console.log(res);
})();


// 2  Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

(() => {
  const multiplyMaker = (num1) => ((num2) => num1 *= num2);
  const multiply = multiplyMaker(2);

  let res = multiply(2); // 4 (2 * 2)
  console.log(res);

  res = multiply(1); // 4 (4 * 1)
  console.log(res);

  res = multiply(3); // 12 (4 * 3)
  console.log(res);

  res = multiply(10); // 120 (12 * 10)
  console.log(res);
})();
