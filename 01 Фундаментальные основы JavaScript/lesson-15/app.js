/* eslint-disable func-names */
// function highOrder(value, callback) {
//   const arrFromStr = value.split(' ');
//   console.log(arrFromStr);
// }

// function myCallback(char) {}

// highOrder('Denis Mescheryakov');
(() => {
  function question(job) {
    const jobsDictionary = {
      developer: 'Что такое JS?',
      teacher: 'Какой предмет вы преподаете?',
    };

    return function (name) {
      return `${jobsDictionary[job]} ${name}`;
    };
  }

  const developerQustion = question('developer');
  console.log(developerQustion);
  console.log(developerQustion('Denis'));
})();


// Задание

// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки
(() => {
  const func = (arr, callback) => {
    let str = 'New value: ';
    for (let i = 0; i < arr.length; i++) {
      str += callback(arr[i]);
    }
    return str;
  };
  const callback1 = (el) => el[0].toUpperCase() + el.slice(1);
  const callback2 = (el) => `${el * 10}, `;
  const callback3 = (el) => `${el.name} is ${el.age}, `;
  const callback4 = (el) => `${[...el].reverse().join('')}, `;

  console.log(func(['my', 'name', 'is', 'Trinity'], callback1));
  console.log(func([10, 20, 30], callback2));
  console.log(func([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], callback3));
  console.log(func(['abc', '123'], callback4));
})();

// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.

// Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.
(() => {
  const func = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) { return false; }
    }
    return true;
  };
  const callback = (el) => {
    if (el <= 5) { return true; }
    return false;
  };

  console.log(func([6, 6, 8, 6, 6], callback));
  console.log(func([6, 6, 5, 6, 6], callback));
})();
