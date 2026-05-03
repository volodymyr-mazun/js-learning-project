//* ========== CALLBACK ФУНКЦІЯ ТА ІНЛАЙН-КОЛБЕК ==========
// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

//* ========== МЕТОД FOREACH ==========
// function filterArray(numbers, value) {
//   const newArray = [];
//   numbers.forEach(function (elelement) {
//     if (elelement > value) {
//       newArray.push(elelement);
//     }
//   });
//   return newArray;
// }

//* ========== СТРІЛОЧНА ФУНКЦІЯ ==========
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// };

//* ========== СТРІЛОЧНА ФУНКЦІЯ, МЕТОД MAP ==========
// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };

//* ========== МЕТОД FLATMAP ==========
// const genres = book.flatMap((book) => book.genres);

//* ========== МЕТОД FILTER ==========
// const best = students.filter((student) => student.score >= HIGH_SCORE);
// const worst = students.filter((student) => student.score < LOW_SCORE);

//* ========== МЕТОД FIND ==========
// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };
