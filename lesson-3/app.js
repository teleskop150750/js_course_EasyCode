// однострочный комментарий
/*
  Многострочные комментарии
*/
/**
 * JSDoc комментарии
 */

/**
 * Типы данных:
 * 1. Примитивные
 * - Number: 2019, 1.5, NaN, Infinity
 * - String: 'Hello', "Hello", `Hello`
 * - Boolean: true, false
 * - Null: null
 * - Undefined: undefined,
 * - Symbol()
 */
console.log(2019, 1.5);
console.log(20 * 'asdasd');
console.log(1 / 0);

console.log('Hello', 'Hello', 'Hello');

console.log(true, false);

console.log(null);

console.log(undefined);

// eslint-disable-next-line symbol-description
console.table(Symbol());

/**
* Типы данных:
* 2. Объекты. (Reference type) Передаються по ссылке.
* - Object: { name: 'Denis', age: 30 }
*  * Array: [1, 2, 3]
*  * Function: function foo() {}
*  * Date: new Date()
*  ....
*/

console.table({ name: 'Denis', age: 30 });
console.log([1, 2, 3, 4]);

/**
* Особености:
* 1. JS динамически типизированный язык
* 2. Одна и та же переменная может хранить в себе любой тип данных
* 3. Нам не нужно определять тип данных при создании переменных
* 4. Если мы хотим использовать статическую типизацию мы можем использовать TypeScript или Flow
*/



// Задачи

// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
console.log(+Math.PI.toFixed(2));

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
console.log(+Math.random().toFixed(2));
// Math.floor(min + Math.random() * (max + 1 - min));
console.log(Math.floor(0 + Math.random() * (10 + 1 - 0)));

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
console.log(+(0.6 + 0.7).toFixed(2));

// 5. Получить число из строки ‘100$’
console.log(parseFloat('100$'));
