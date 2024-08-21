export default class Card {
  constructor(cardInfo, popupViewer) {
    this._name = cardInfo.name;
    this._link = cardInfo.link;
    this._popupViewer = popupViewer;
  }

  _getTemplate() {
    const template = document
      .querySelector("#template")
      .content.querySelector(".gallery__card")
      .cloneNode(true);
    return template;
  }

  _remove(event) {
    event.target.parentElement.remove();
  }

  _like(event) {
    const likeButton = event.target;
    if (likeButton.getAttribute("src") == "./images/like.svg") {
      return likeButton.setAttribute("src", "./images/like_black.svg");
    }
    return likeButton.setAttribute("src", "./images/like.svg");
  }

  _hadleImageClick(event) {
    const image = event.target;
    this._popupViewer.classList.add("popup-viewer__opened");
    const imageSource = image.getAttribute("src");
    const imageAlt = image.getAttribute("alt");
    const viewerPicture = document.querySelector(".popup-viewer__picture");
    viewerPicture.setAttribute("src", imageSource);
    viewerPicture.setAttribute("alt", imageAlt);
    const imageTitle = document.querySelector(".popup-viewer__title");
    imageTitle.textContent = this._name;
  }

  _setEventListeners() {
    this._card
      .querySelector(".gallery__trash-button")
      .addEventListener("click", (event) => {
        this._remove(event);
      });

    this._card
      .querySelector(".gallery__like-button")
      .addEventListener("click", (event) => {
        this._like(event);
      });

    this._card
      .querySelector(".gallery__image")
      .addEventListener("click", (event) => {
        this._hadleImageClick(event);
      });
  }

  generate() {
    this._card = this._getTemplate();
    this._card.querySelector(".gallery__card-name").textContent = this._name;
    this._card.querySelector(".gallery__image").setAttribute("src", this._link);
    this._card.querySelector(".gallery__image").setAttribute("alt", this._name);
    this._setEventListeners();
    return this._card;
  }
}
