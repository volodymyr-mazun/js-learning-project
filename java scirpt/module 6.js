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

//* ========== МЕТОД BIND ТА КАЛБЕКИ. ==========
