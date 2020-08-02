// while, do while, for, for of, for in

// let i = 10;
// while(i--) {
//   console.log(i);
// }

// do {
//   console.log('action');
// } while(i > 0);

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   if (i === 6) {
//     continue;
//   }
//   console.log(i);
// }

// let str = 'Hello';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   res += str[i] + '*';
// }

// console.log(res);

// let colors = ['white', 'black', 'yellow', 'orange'];

// for (let i = 0; i < colors.length; i++) {
//   colors[i] = colors[i].toUpperCase();
// }

// console.log(colors);

const users = [
  {
    name: 'Denis',
    age: 30,
  },
  {
    name: 'Oleg',
    age: 12,
  },
  {
    name: 'Maks',
    age: 25,
  },
  {
    name: 'Olga',
    age: 2,
  },
];

const usersObj = {};

for (let i = 0; i < users.length; i++) {
  usersObj[users[i].name] = users[i];
}

// console.log(usersObj['Denis']);

// const user = {
//   name: 'Denis',
//   age: 30
// };

// for (let key in usersObj) {
//   console.log(key);
//   console.log(usersObj[key]);
// }

// eslint-disable-next-line no-restricted-syntax
for (const value of users) {
  console.log(value);
}

// Задание

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.

(() => {
  const str1 = 'i am in the easycode';
  let str2 = '';

  for (let i = 0; i < str1.length; i++) {
    if (i === 0) {
      str2 += str1[i].toUpperCase();
      // eslint-disable-next-line no-continue
      continue;
    }
    if (str1[i] === ' ') {
      str2 += str1[i];
      str2 += str1[i + 1].toUpperCase();
      i++;
    } else {
      str2 += str1[i];
    }
  }
  console.log(str2);
})();


// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
(() => {
  const str1 = 'tseb eht ma i';
  let str2 = '';

  for (let i = str1.length - 1; i >= 0; i--) {
    str2 += str1[i];
  }
  console.log(str2);
})();

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

(() => {
  let f = 1;
  for (let i = 1; i <= 5; i++) {
    f *= i;
  }
  console.log(f);
})();

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
(() => {
  const str1 = 'JavaScript is a pretty good language';
  let str2 = '';

  for (let i = 0; i < str1.length; i++) {
    if (i === 0) {
      str2 += str1[i].toUpperCase();
      // eslint-disable-next-line no-continue
      continue;
    }
    if (str1[i] === ' ') {
      str2 += str1[i + 1].toUpperCase();
      i++;
    } else {
      str2 += str1[i];
    }
  }
  console.log(str2);
})();

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
(() => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // for (const value of array) {
  //   if (value % 2 !== 0) {
  //     console.log(value);
  //   }
  // }
  array.forEach((item) => {
    if (item % 2 !== 0) {
      console.log(item);
    }
  });
})();

// 6. Дан объект:
// let list = {
//      name: ‘denis’,
//      work: ‘easycode’,
//      age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

(() => {
  const list = {
    name: 'denis',
    work: 'easycode',
    age: 29,
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const key in list) {
    if (typeof list[key] === 'string') {
      list[key] = list[key].toUpperCase();
    }
  }
  console.log(list);
})();
