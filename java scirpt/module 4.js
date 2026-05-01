//* ========== ОБЧИСЛЮВАЛЬНІ ВЛАСТИВОСТІ ==========
// const emailInputName = "email";
// const passwordInputName = "password";
// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

//* ========== СТВОРЕННЯ МАСИВІВ ЦИКЛОМ FOR...IN ==========
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

//* ========== СТВОРЕННЯ МАСИВІВ OBJECT.KEYS(), FOR...OF ==========
// function countProps(object) {
//   const arrayValues = [];
//   const arrayKeys = Object.keys(object);
//   for (const key of arrayKeys) {
//     arrayValues.push(object[key]);
//   }
//   return arrayValues.length;
// }

//* ========== ПЕРЕБІР ОБЄКТА ==========
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

//* ========== МАСИВ ОБЄКТІВ ==========
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

//* ========== ПОШУК ВЛАСТИВОСТІ В МАСИВІ ==========
// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName)
//       return product.price;
//   }
// }

//* ========== ПІДРАХУНОК ВАРТОСТІ ==========
// function calculateTotalPrice(productName) {
//   let total = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     } else {
//       return `Product ${productName} not found!`;
//     }
//   }
// }
