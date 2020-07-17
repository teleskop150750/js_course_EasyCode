function getThis() {
  console.log(this);
}
// getThis();
// window.getThis();
// console.log(window.getThis);

function getPrice(currency = '$') {
  console.log(currency + this.price);
  return this;
}

function getName() {
  console.log(this.name);
  return this;
}

const prod1 = {
  name: 'Intel',
  price: 100,
  getPrice,
  getName() {
    console.log(this.name);
  },
  info: {
    information: ['2.3ghz'],
    getInfo() {
      console.log(this);
    },
  },
};
// prod1.getPrice();
// prod1.info.getInfo();
// prod1.getName();

const prod2 = {
  name: 'AMD',
  price: 50,
  getPrice,
};

prod2.getName = prod1.getName;
// prod2.getPrice();

// prod2.getName();

const str = 'Hello world';
const reversStr = str
  .split('') // ['H', 'e'...]
  .reverse() // ['d', 'l'...]
  .join(''); // 'dlrow olleH'
// console.log(reversStr);

const prod3 = {
  name: 'ARM',
  price: 200,
  getPrice,
  // getName,
};

// getPrice.call(prod3, '*');
// getPrice.apply(prod3, ['*']);

// prod3
//   .getName() // prod3
//   .getPrice(); // prod3.getPrice()

const getPriceBind = prod3.getPrice.bind(prod3, '*');
console.log(getPriceBind);
setTimeout(getPriceBind, 1000);
