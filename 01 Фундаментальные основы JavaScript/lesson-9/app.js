/* eslint-disable dot-notation */
const user = {
  firstName: 'Denis',
  age: 30,
  isAdmin: true,
  email: 'test@test.com',
  'user-address': {
    city: 'Kharkiv',
  },
  skills: ['html', 'css', 'js'],
};

let value;
const prop = 'skills';

value = user.firstName;
value = user['isAdmin'];
value = user['user-address'];
value = user['user-address'].city;
value = user['user-address']['city'];
value = user[prop][0];

user.firstName = 'Den';

value = user.firstName;

user.info = 'Some info';

value = user.info;

user['user-address'].city = 'Kiev';
user['user-address'].country = 'Ukraine';

console.log(user.plan);
user.plan = {};
user.plan.basic = 'basic';

console.log(value);
console.log(user);


// Задание
// 1. Создать объект с полем product, равным ‘iphone’
const obj = {
  product: 'iphone',
};
// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
obj.prise = 1000;
obj.currency = 'dollar';
// 3. Добавить поле details, которое будет содержать объект с полями model и color
obj.details = {
  model: null,
  color: null,
};

console.log(obj);
