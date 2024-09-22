import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import {
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
  popupFormCard,
} from "./utils.js";

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newcard = new Card(item, popupViewer);
      const cardElement = newcard.generate();
      section.addItem(cardElement);
    },
  },
  ".gallery__cards"
);
section.renderItems();

editButton.addEventListener("click", () =>
  changeDisplayToBlock(popupForm, "popup__opened")
);

closeButton.addEventListener("click", () =>
  changeDisplayToNone(popupForm, "popup__opened")
);

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

popupFormCard.addEventListener("submit", (event) => {
  controlCardForm(event);
});

new FormValidator(validation).enableValidation();

new FormValidator(validationImage).enableValidation();
