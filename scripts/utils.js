import Card from "./Card.js";

const popupForm = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const nameInput = document.querySelector(".popup__name");
const aboutInput = document.querySelector(".popup__about");
const nameUser = document.querySelector(".profile__name");
const aboutUser = document.querySelector(".profile__about");
const formSubmit = document.querySelector(".popup__form");
const popupFormImage = document.querySelector(".popup-image");
const addButtonImage = document.querySelector(".profile__add-picture-button");
const closeButtonImage = document.querySelector(".popup__close-button-image");
const titleImageInput = document.querySelector(".popup__title-image");
const linkImageInput = document.querySelector(".popup__link-image");
const cardsContainer = document.querySelector(".gallery__cards");
const popupFormCard = document.querySelector(".popup__image-form");
const popupViewer = document.querySelector(".popup-viewer");
const closeButtonViewer = document.querySelector(".popup-viewer__close-button");
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

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

function saveNewInputValues(event) {
  event.preventDefault();
  if (nameInput.value != "" && aboutInput.value != "") {
    nameUser.textContent = nameInput.value;
    aboutUser.textContent = aboutInput.value;
  }
  changeDisplayToNone(popupForm, "popup__opened");
}

function resetForm(form) {
  form.reset();
}

function controlCardForm(event) {
  event.preventDefault();
  const cardInfo = {
    name: titleImageInput.value,
    link: linkImageInput.value,
  };
  cardsContainer.prepend(new Card(cardInfo, popupViewer).generate());
  resetForm(popupFormCard);
  changeDisplayToNone(popupFormImage, "popup__image-opened");
}

const validation = {
  formElement: ".popup__form",
  inputElement: ".popup__placeholder",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button-inactive",
  inputErrorClass: ".popup__error",
  errorElement: ".popup__error-active",
};

const validationImage = {
  formElement: ".popup-image__form",
  inputElement: ".popup__placeholder",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button-inactive",
  inputErrorClass: ".popup__error",
  errorElement: ".popup__error-active",
};

export {
  editButton,
  closeButton,
  formSubmit,
  addButtonImage,
  closeButtonImage,
  closeButtonViewer,
  initialCards,
  changeDisplayToBlock,
  changeDisplayToNone,
  saveNewInputValues,
  controlCardForm,
  validation,
  validationImage,
  popupForm,
  popupFormImage,
  popupViewer,
  cardsContainer,
  popupFormCard,
};
