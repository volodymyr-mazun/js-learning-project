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
