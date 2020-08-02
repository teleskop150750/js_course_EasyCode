/* eslint-disable prefer-object-spread */
const obj1 = {
  name: 'Denis',
  info: {
    skills: ['html', 'css'],
  },
};

const obj2 = {
  name: 'Ivan',
  age: 20,
};

let newObj = Object.assign({}, obj2, obj1); // let newObj = { ...obj2, ...obj1 };
newObj = Object.assign({}, obj1); // newObj = { ...obj1 };
newObj = JSON.parse(JSON.stringify(obj1));
console.log(newObj.info === obj1.info);

const keys = Object.keys(obj2);
console.log(keys);
const values = Object.values(obj2);
console.log(values);
const entries = Object.entries(obj2);
console.log(entries);
const fromEntries = Object.fromEntries([['a', 'value'], ['b', 'b_value']]);
console.log(fromEntries);
