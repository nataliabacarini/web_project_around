const popupForm = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");

const nameInput = document.querySelector(".popup__name");
const aboutInput = document.querySelector(".popup__about");

const nameUser = document.querySelector(".profile__name");
const aboutUser = document.querySelector(".profile__about");

const formSubmit = document.querySelector(".popup__form");

console.log("NATALIA");
function changeDisplayToBlock() {
  popupForm.classList.add("popup__opened");
  nameInput.value = nameUser.textContent;
  aboutInput.value = aboutUser.textContent;
}

function changeDisplayToNone() {
  popupForm.classList.remove("popup__opened");
}

editButton.addEventListener("click", changeDisplayToBlock);
closeButton.addEventListener("click", changeDisplayToNone);

function saveNewInputValues(event) {
  event.preventDefault();
  nameUser.textContent = nameInput.value;
  aboutUser.textContent = aboutInput.value;
  changeDisplayToNone();
}

formSubmit.addEventListener("submit", saveNewInputValues);
