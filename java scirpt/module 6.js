//* ========== МЕТОД BIND. ==========
// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}`);
// }
// const user = {
//   username: "Mango",
//   room: 111,
// };
// const newString = greet.bind(user);
// newString("Welcome");

//* ========== МЕТОД BIND. ==========
// const customer = {
//   username: "Jacob",
//   sayHello(str) {
//     console.log(`${str}, ${this.username}`);
//   },
// };
// const newString = customer.sayHello.bind(customer);
// newString("Hello");

//* ========== МЕТОД BIND ТА КАЛБЕКИ. ==========
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an aplication from ${username}`);
// }
// makeMessage(customer.getFullName.bind(customer));

//* ========== СТВОРЕННЯ ПРОТОТИПУ. ==========
// const child = Object.create(parent);

//* ========== ПЕРЕВІРКА ПРОТОТИПУ. ==========
// const testingProp = parent.isPrototypeOf(child);

//* ========== СТВОРЕННЯ ПРОТОТИПУ. ==========
// const checkProp = dog.hasOwnProperty("legs");

//* ========== ПЕРЕБІР ВЛАСТИВОСТЕЙ ВЛАСНИХ. ==========
// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

//* ========== КЛАС, ЕКЗЕМПЛЯР, КОНСТРУКТОР, МЕТОДИ. ==========
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
//   getEmail() {
//     return this.email;
//   }
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

//* ========== ГЕТТЕРИ, СЕТТЕРИ, ПРИВАТНІ ВЛАСТИВОСТІ. ==========

// class Car {
//   #brand;
//   #model;
//   #price;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }
//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#model = newModel;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

//* ========== СТАТИЧНІ ВЛАСТИВОСТІ, МЕТОДИ. ==========
// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price) {
//     if (Car.#maxPrice < price) {
//       return "Error! Price exceeds the maximum";
//     } else {
//       return "Success! Price is within acceptable limits";
//     }
//   }
//   price;
//   constructor(params) {
//     this.price = params.price;
//   }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price));
// console.log(Car.checkPrice(bmw.price));

//* ========== НАСЛІДУВАННЯ КЛАСІВ. ==========
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }

//* ========== КОНСТРУКТОР ДОЧІРНЬОГО КЛАСУ. ==========
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  constructor(params) {
    super(params.email);
    this.access = params.access;
  }
}
