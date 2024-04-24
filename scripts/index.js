const popupForm = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");

function changeDisplaytoBlock() {
  popupForm.classList.add("popup__opened");
}

function changeDisplaytoNone() {
  popupForm.classList.remove("popup__opened");
}

editButton.addEventListener("click", changeDisplaytoBlock);
closeButton.addEventListener("click", changeDisplaytoNone);
