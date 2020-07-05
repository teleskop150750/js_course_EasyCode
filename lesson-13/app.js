
(function (msg) {
  console.log(msg);
  function sayHello(firstName = 'Default', lastName = 'Default') {
    console.log(firstName, lastName);
    console.log('Hello world');
    return `Hello ${firstName} ${lastName}`;
  }

  // let res = sayHello("Denis", "Mescheryakov");
  // let res2 = sayHello("Dima", "Mescheryakov") + "!";
  // let res3 = sayHello();
  // console.log(res3);

  // let x = 10;

  // function foo(x) {
  //   x = 20;
  //   console.log(x);
  //   return x;
  // }

  // foo();

  // console.log(x);

  // const user = {
  //   name: "Denis",
  //   age: 30
  // };

  // function getObj(obj) {
  //   obj.name = "Den";
  // }

  // getObj(user);
  // console.log(user);

  const square = function (x) {
    return x * x;
  };
}('Hello world'));

// Задания
// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

(() => {
  const multiplication = (...arr) => {
    let a;
    if (arr.length === 0) {
      a = 0;
    } else {
      a = 1;
    }
    arr.forEach((val) => {
      a *= val;
    });
    return a;
  };

  console.log(multiplication());
})();

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
(() => {
  const revers = (str) => [...str].reverse().join('');
  console.log(revers('test'));
})();

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText(‘hello’) // “104 101 108 108 111”
// подсказка: для получения кода используйте специальный метод
(() => {
  const getCodeStringFromText = (str) => [...str].map((i) => `${i.charCodeAt()} `).join('');
  console.log(getCodeStringFromText('test'));
})();


// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
(() => {
  const rndFunc = (n) => {
    if (n >= 1 && n <= 2) {
      const rnd = Math.floor(1 + Math.random() * (2 + 1 - 1));
      if (n === rnd) {
        return 'Вы выиграли';
      }
      return `Вы не угадали ваше число ${n} а выпало число ${rnd}`;
    }
    return 'ошибка';
  };
  console.log(rndFunc(2));
})();
