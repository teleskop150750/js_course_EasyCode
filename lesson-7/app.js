/* eslint-disable prefer-template */
const firstName = 'Denis';
const lastName = 'Mescheryakov';
const age = 30;
const str = 'Hello my name is Denis';

let value;

value = firstName + lastName;
value = firstName + ' ' + lastName;
value += ' I am ' + age;

value = firstName.length;
value = firstName[2];
value = firstName[4];
value = lastName[lastName.length - 1];
value = firstName[firstName.length - 1];

value = firstName.toUpperCase();
value = firstName.concat(' ', lastName);

value = str.indexOf('n', 10);
value = str.indexOf('!');
value = str.includes('DENIS');

value = str.slice(0, 5);
value = str.slice(0, -3);

value = str.replace('Denis', 'Den');


console.log(value);

// Задание
const str1 = 'далеко-далеко за словесными горами';
// 1. Получить первую и последнюю буквы строки
console.log(str1[0]);
console.log(str1[str1.length - 1]);

// 2. Сделать первую и последнюю буквы в верхнем регистре
console.log(
  str1[0].toUpperCase()
+ str1.slice(1, -1)
+ str1[str1.length - 1].toUpperCase(),
);

// 3. Найти положение слова ‘string’ в строке
console.log(str1.indexOf('за'));

// 4. Найти положение второго пробела (“вручную” ничего не считать)
console.log(str1.indexOf(' ', str1.indexOf('') + 1));

// 5. Получить строку с 5-го символа длиной 4 буквы
console.log(str1.slice(4, 8));

// 6. Получить строку с 5-го по 9-й символы
console.log(str1.slice(4, 9));

// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)
console.log(str1.slice(0, -6));

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”
const a = 20;
const b = 16;
console.log(`${a}${b}`);
