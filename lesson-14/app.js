(() => {
  const numArr = [2, 32, 1234, 54, 323];

  let value;

  value = numArr.length;
  // numArr.length = 0;
  // numArr.length = 100;

  value = Array.isArray(numArr);
  value = numArr[2];
  numArr[2] = 12;
  value = numArr.indexOf(32);

  value = numArr.push(100);
  value = numArr.pop();
  value = numArr.unshift(111);
  value = numArr.shift();
  value = numArr.slice(0, 2);
  value = numArr.splice(1, 0, 'one', 'two');
  value = numArr.reverse();
  value = numArr.concat(1, 2);
  value = numArr.join(' ');
  value = 'hello world'.split(' ');
  console.log(value, numArr);
})();
// Задание

// 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
// Данное задание выполните после того как познакомитесь с методами массивов.
(() => {
  const getArray = (n) => {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  };
  console.log(getArray(10));
})();

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива. Данное задание выполните после того как познакомитесь с методами массивов:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]
(() => {
  const arr = [1, 2, 3];
  const doubleArray = (ar) => ar.concat(ar);
  console.log(doubleArray(arr));
})();

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений. Данное задание выполните после того как познакомитесь с методами массивов:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
(() => {
  const changeCollection = (...arr) => {
    arr.forEach((arrayInner) => {
      arrayInner.splice(0, 1);
    });
    return arr;
  };
  console.log(changeCollection([1, 2, 3], ['a', 'b', 'c']));
})();

// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
// Данное задание выполните после того как познакомитесь с методами массивов
// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

(() => {
  const users = [
    { name: 'Denis', age: '29', gender: 'male' },
    { name: 'Ivan', age: '20', gender: 'male' },
    { name: 'Vasd', age: '65', gender: 'sdf' },
  ];
  const funcGetUsers = (arr, index, value) => arr.filter(
    (user) => user[index] === value,
  );
  console.log(funcGetUsers(users, 'gender', 'male'));
})();
