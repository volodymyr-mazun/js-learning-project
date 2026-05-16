//* ========== ДОСТУП ДО ВЛАСТИВОСТІ ТА ЗМІНА. ==========
// const nameLink = document.querySelector(".link");
// console.log(nameLink.href);
// nameLink.href = "https://neo.goit.global";

//* ========== ВЛАСТИВІСТЬ TEXTCONTENT ТА ЗМІНА. ==========
// const el = document.querySelector(".text");
// console.log(el.textContent);
// el.textContent = "Username: Poly";

//* ========== ВЛАСТИВІСТЬ STYLE. ==========
// const nameButton = document.querySelector(".button");
// nameButton.style.backgroundColor = "green";

//* ========== ВЛАСТИВІСТЬ CLASSLIST. ==========
// const newLink = document.querySelector(".link");
// newLink.classList.contains("link");
// newLink.classList.add("is-open");
// newLink.classList.remove("is-open");
// newLink.classList.toggle("link");
// newLink.classList.replace("link", "firstLink");

//* ========== ДОСТУП ДО АТРИБУТІВ. ==========
// const newImage = document.querySelector(".image");
// newImage.hasAttribute("src");
// newImage.getAttribute("alt");
// newImage.setAttribute("alt", "Amazing nature");
// newImage.removeAttribute("alt");

//* ========== ВЛАСНІ АТРИБУТИ. ==========
// const openBtn = document.querySelector("button[data-action=''open]");
// const closeBtn = document.querySelector("button[data-action='close']");
// openBtn.dataset.action = "newOpen";
// openBtn.dataset.action;

//* ========== СТВОРЕННЯ ЕЛЕМЕНТА. ==========
// const heading = document.createElement("h1");
// heading.textContent = "This is a heading";
// heading.style.fontSize = "24px";
// heading.classList.add("description");
// heading.setAttribute("id", "text");

//* ========== СТВОРЕННЯ ЕЛЕМЕНТА, ДОДАВАННЯ. ==========
// const heading = document.querySelector("h2");
// heading.textContent = "This is a heading";
// heading.style.fontSize = "24px";
// heading.classList.add("title");
// const mainTitle = document.querySelector(".head");
// mainTitle.append(heading);

//* ========== ВИДАЛЕННЯ ЕЛЕМЕНТА. ==========
// const deleteElem = document.querySelector(".text");
// deleteElem.remove();

//* ========== ВЛАСТИВІСТЬ INNERHTML. ==========
// const innerBox = document.querySelector(".box");
// innerBox.innerHTML = `<p class="text" style="color: gray">Insert the text as a sample on the page in the middle of the finished tag.</p>`;

//* ========== ВЛАСТИВІСТЬ INNERHTML. ==========
// const list = document.querySelector(".list");
// const newTechnologies = ["Reach", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");
// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

//* ========== МЕТОД ADDEVENTLISTENER. ==========
// const button = document.querySelector(".my-button");
// const handleClick = () => {
//   console.log("The button was pressed and now the next image will appear");
// };
// button.addEventListener("click", handleClick);

//* ========== МЕТОД REMOVEEVENTLISTENER. ==========
// const newButton = document.querySelector(".button");
// const handleClick = (event) => {
//   console.log(event.currentTarget);
//   newButton.removeEventListener("click", handleClick);
// };
// newButton.addEventListener("click", handleClick);

//* ========== ПОДІЇ КЛАВІАТУРИ. ==========
// document.addEventListener("keydown", (event) => {
//   console.log("Keydown: ", event.key);
// });
// document.addEventListener("keyup", (event) => {
//   console.log("Keyup: ", event.code);
// });

//* ========== ПОДІЇ SUBMIT. ==========
// const registerForm = document.querySelector(".form");
// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;

//   if (login === "" || password === "") {
//     return console.log("Please, fill all the fields");
//   }

//   console.log(`${login} ${password}`);
//   form.reset();
// }
