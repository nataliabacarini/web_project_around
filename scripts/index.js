const popupForm = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");

const nameInput = document.querySelector(".popup__name");
const aboutInput = document.querySelector(".popup__about");

const nameUser = document.querySelector(".profile__name");
const aboutUser = document.querySelector(".profile__about");

const formSubmit = document.querySelector(".popup__form");

const popupFormImage = document.querySelector(".popup__image");
const addButtonImage = document.querySelector(".profile__add-picture-button");
const closeButtonImage = document.querySelector(".popup__close-button-image");

const titleImageInput = document.querySelector(".popup__title-image");
const linkImageInput = document.querySelector(".popup__link-image");

const addCard = document.querySelector(".gallery__cards");

function changeDisplayToBlock(popup, popupOpenedClass) {
  popup.classList.add(popupOpenedClass);
  if (popupOpenedClass == "popup__opened") {
    nameInput.value = nameUser.textContent;
    aboutInput.value = aboutUser.textContent;
  }
}

function changeDisplayToNone(popup, popupOpenedClass) {
  popup.classList.remove(popupOpenedClass);
}

editButton.addEventListener("click", () =>
  changeDisplayToBlock(popupForm, "popup__opened")
);
closeButton.addEventListener("click", () =>
  changeDisplayToNone(popupForm, "popup__opened")
);

function saveNewInputValues(event) {
  event.preventDefault();
  if (nameInput.value != "" && aboutInput.value != "") {
    nameUser.textContent = nameInput.value;
    aboutUser.textContent = aboutInput.value;
  }
  changeDisplayToNone();
}

formSubmit.addEventListener("submit", saveNewInputValues);

addButtonImage.addEventListener("click", () =>
  changeDisplayToBlock(popupFormImage, "popup__image-opened")
);
closeButtonImage.addEventListener("click", () =>
  changeDisplayToNone(popupFormImage, "popup__image-opened")
);
