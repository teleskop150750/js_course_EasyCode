/* eslint-disable no-unused-vars */
/* eslint-disable prefer-rest-params */
const user = {
  firstName: 'Denis',
  lastName: 'Mescheryakov',
  age: 25,
  info: {
    work: 'EasyCode',
    skills: ['html', 'css'],
  },
};

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { firstName: name, lastName, age: years = 30 } = user;
// const {
//   info: { work, skills },
// } = user;
// console.log(skills);

const colors = ['white', 'black', 'red', '#89432d'];
const [w, b, red, green = 'green'] = colors;
// console.log(w, b, red, green);
const names = ['Denis', 'Ivan', 'Maksim'];
const [name1, ...otherNames] = names;
console.log(name1, otherNames);
const nestedArr = ['hello world', ['key', 'value']];
const [, [key, value]] = nestedArr;
// console.log(key, value);
// const [...newNames] = names;
const newNames = [...names];
// console.log(...newNames);
const colorNames = ['some value', ...colors, ...names];
// console.log(colorNames);
const newUser = {
  ...user,
  age: 30,
};
console.log(newUser);
const {
  info: {
    skills: [html, css],
  },
} = newUser;

// console.log(html, css);

function myPerson({
  lastName = '&',
  firstName = '&',
  info: {
    skills,
  } = {},
} = {}) {
  console.log(skills);
  console.log(12);
}

myPerson(newUser);

function foo(x, y, ...others) {
  console.log(arguments);
  // console.log(Array.prototype.slice.call(arguments));
  const [...args] = arguments;
  console.log(others);
}

// foo(1, 2, 5, 6);
const numbers = [2, 3];

function foo2(x, y) {
  console.log(x, y);
}

foo2(...numbers);

// Задачи
// 1  Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) →
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

(() => {
  const func = (num1, ...arr) => ({
    first: `${num1}`,
    other: arr,
  });
  console.log(func('a', 'b', 'c', 'd'));
})();


// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

// const organisation = {
//   name: 'Google',
//   info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   }
// };
// getInfo(organisation); →
// Name: Google
// Partners: Microsoft Facebook

(() => {
  const organisation = {
    name: 'Google',
    info: {
      employees: ['Vlad', 'Olga'],
      partners: ['Microsoft', 'Facebook', 'Xing'],
    },
  };

  const getInfo = ({
    name = 'Unknown',
    info: {
      partners: [p1, p2],
    },
  }) => `Name: ${name}
Partners: ${p1} ${p2}`;
  const res = getInfo(organisation);
  console.log(res);
})();
