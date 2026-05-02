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

//* ========== МЕТОДИ ВИВЕДЕННЯ, ДДОДАВАННЯ ТА ПЕРЕБІР ОБЄКТА ==========
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

//* ========== МЕТОД ПОШУКУ НАЗВИ І ЗМІНИ НАЗВИ ==========
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

//* ========== СТВОРЕННЯ МАСИВУ ==========
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];

//* ========== СТВОРЕННЯ ОБЄКТУ ==========
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
