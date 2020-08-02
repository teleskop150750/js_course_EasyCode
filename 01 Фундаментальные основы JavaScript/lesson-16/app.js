(() => {
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
})();

// Задачи
// 1 Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

(() => {
  const restamgle = {
    width: 4,
    height: 3,
    getSquare() {
      return this.width * this.height;
    },
  };
  console.log(restamgle.getSquare());
})();

// 2 Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5
(() => {
  const price = {
    price: 10,
    discount: '15%',
    getPrice() {
      return this.price;
    },
    getPriceWithDiscount() {
      console.log(parseInt(this.discount, 10));
      return ((this.price / 100) * (100 - parseInt(this.discount, 10)));
    },
  };
  console.log(price.getPriceWithDiscount());
})();

// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

(() => {
  const obj = {
    height: 10,
    h() {
      this.height++;
    },
  };
  console.log(obj.h());
})();

// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

(() => {
  const numerator = {
    value: 1,
    double() {
      this.value *= 2;
      return this;
    },
    plusOne() {
      this.value++;
      return this;
    },
    minusOne() {
      this.value--;
      return this;
    },
  };

  numerator.double().plusOne().plusOne().minusOne();
  const result = numerator.value;
  console.log(result);
})();


// 1  Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

(() => {
  const obj = {
    price: 50,
    count: 10,
    getAll() {
      return this.price * this.count;
    },
  };

  const obj2 = {
    price: 21,
    count: 5,
  };

  const getAll2 = (obj.getAll.bind(obj2))();
  console.log(getAll2);
})();

// 2  Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

// 3  Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

(() => {
  const sizes = {
    width: 5,
    height: 10,
  };
  const getSquare = () => this.width * this.height;
  const result = getSquare.call(sizes);
  console.log(result);
})();
