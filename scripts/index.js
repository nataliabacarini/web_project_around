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
  changeDisplayToNone(popupForm, "popup__opened");
}

formSubmit.addEventListener("submit", saveNewInputValues);

addButtonImage.addEventListener("click", () =>
  changeDisplayToBlock(popupFormImage, "popup__image-opened")
);
closeButtonImage.addEventListener("click", () =>
  changeDisplayToNone(popupFormImage, "popup__image-opened")
);
closeButtonViewer.addEventListener("click", () =>
  changeDisplayToNone(popupViewer, "popup-viewer__opened")
);

function createCard(card) {
  const template = document.querySelector("#template");
  const cardItem = template.content
    .querySelector(".gallery__card")
    .cloneNode(true);
  cardItem.querySelector(".gallery__card-name").textContent = card.name;
  cardItem.querySelector(".gallery__image").setAttribute("src", card.link);
  cardItem.querySelector(".gallery__image").setAttribute("alt", card.name);
  cardItem
    .querySelector(".gallery__trash-button")
    .addEventListener("click", function (event) {
      const removeCard = event.target.parentElement;
      removeCard.remove();
    });
  cardItem
    .querySelector(".gallery__like-button")
    .addEventListener("click", function (event) {
      const likeButton = event.target;
      if (likeButton.getAttribute("src") == "./images/like.svg") {
        return likeButton.setAttribute("src", "./images/like_black.svg");
      }
      return likeButton.setAttribute("src", "./images/like.svg");
    });
  cardItem
    .querySelector(".gallery__image")
    .addEventListener("click", function (event) {
      const image = event.target;
      popupViewer.classList.add("popup-viewer__opened");
      const imageSource = image.getAttribute("src");
      const imageAlt = image.getAttribute("alt");
      const viewerPicture = document.querySelector(".popup-viewer__picture");
      viewerPicture.setAttribute("src", imageSource);
      viewerPicture.setAttribute("alt", imageAlt);
      const imageTitle = document.querySelector(".popup-viewer__title");
      imageTitle.textContent = card.name;
    });

  return cardItem;
}

for (const card of initialCards) {
  cardsContainer.prepend(createCard(card));
}

function creatNewcard(event) {
  const newCard = createCard({
    name: titleImageInput.value,
    link: linkImageInput.value,
  });
  cardsContainer.prepend(newCard);
  titleImageInput.value = "";
  linkImageInput.value = "";
  const buttonElement = popupFormImage.querySelector(".popup__save-button");
  buttonElement.classList.add("popup__save-button-inactive");
  buttonElement.disabled = true;
  changeDisplayToNone(popupFormImage, "popup__image-opened");
}

popupFormCard.addEventListener("submit", function (event) {
  event.preventDefault();
  creatNewcard();
});

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__placeholder",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button-inactive",
  inputErrorClass: ".popup__error",
  errorClass: ".popup__error-active",
});

enableValidation({
  formSelector: ".popup-image__form",
  inputSelector: ".popup__placeholder",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button-inactive",
  inputErrorClass: ".popup__error",
  errorClass: ".popup__error-active",
});
